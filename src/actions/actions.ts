'use server';

import { redirect } from 'next/navigation';

export const search = async (formData: FormData) => {
  const params = await createParams(formData);
  redirect(`/movies?${params}`);
};

const createParams = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (!key.startsWith('$ACTION_') && value) {
      params.set(key, value.toString());
    }
  });

  return params.toString();
};
