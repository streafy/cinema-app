'use client';
import { ArrowPathIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react';

import styles from './api-limit.module.css';

const API_LIMIT_ENDPOINT = '/api/limit';
const ONE_MINUTE_IN_MILLIS = 60 * 1000;
const FIVE_MINUTES_IN_MILLIS = 5 * 60 * 1000;

const formatter = Intl.NumberFormat('ru', {
  style: 'unit',
  unit: 'minute',
  unitDisplay: 'long',
});

const formatUpdatedTime = (minutes: number) => {
  if (minutes === 1) return 'Обновлено 1 минуту назад';
  if (minutes > 1) return `Обновлено ${formatter.format(minutes)} назад`;
  return 'Обновлено меньше минуты назад';
};

const ApiLimit = () => {
  const [apiLimitData, setApiLimitData] = useState<{
    used: number;
    value: number;
  } | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [lastUpdatedMinutes, setLastUpdatedMinutes] = useState(0);

  useEffect(() => {
    let ignore = false;
    fetchApiLimit().then((result) => {
      if (!ignore) {
        setApiLimitData(result.dailyQuota);
        setLastUpdatedMinutes(0);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdatedMinutes((prev) => prev + 1);
    }, ONE_MINUTE_IN_MILLIS);
    return () => clearInterval(interval);
  }, [apiLimitData]);

  useEffect(() => {
    let ignore = false;
    const interval = setInterval(() => {
      fetchApiLimit().then((result) => {
        if (!ignore) {
          setApiLimitData(result.dailyQuota);
          setLastUpdatedMinutes(0);
        }
      });
    }, FIVE_MINUTES_IN_MILLIS);
    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [apiLimitData]);

  const fetchApiLimit = async () => {
    setIsActive(true);

    const response = await fetch(API_LIMIT_ENDPOINT);
    const responseData = await response.json();

    setIsActive(false);

    return responseData;
  };

  const content = apiLimitData ? (
    <div>Доступно запросов к API: {apiLimitData.value - apiLimitData.used}</div>
  ) : (
    <div>Нет данных о количестве доступных запросов к API</div>
  );

  const updated = formatUpdatedTime(lastUpdatedMinutes);

  return (
    <div className={styles.container}>
      {content}
      {apiLimitData !== null && <div className={styles.updated}>{updated}</div>}
      <button
        className={`${styles.icon} ${isActive ? styles.active : ''}`}
        onClick={() => fetchApiLimit()}
      >
        <ArrowPathIcon />
      </button>
    </div>
  );
};

export default ApiLimit;
