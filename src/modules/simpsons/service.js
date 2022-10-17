import { serviceName } from '~/config';
import { axiosInstance as api } from '~/utils/axiosInstance';
/**
 * API get simpsons service
 * @returns {Promise<unknown>}
 */
export const getSimpsonsService = async () => {
  const response = await api.get(serviceName.simpsons);
  return response;
};
