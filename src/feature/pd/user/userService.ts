import { UserGetListBody } from './userController';

export const getList = async (body: UserGetListBody): Promise<object> => {
  try {
    return body;
  } catch (e) {
    console.log(e);
    return { error: 'catch' };
  }
};
