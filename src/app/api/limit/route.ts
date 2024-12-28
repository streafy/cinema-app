import { fetchApiKeyLimits } from '@/lib/api';

export const GET = async () => Response.json(await fetchApiKeyLimits());
