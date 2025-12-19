import axios from '@/lib/https/axios';
import { Example } from '@/types/example';

export const getExample = async () => {
  const {data} = await axios.get<Example[]>('/codingresources/codingResources');
  return data;
}
