import User from "../model/UserModel.mjs";
import {findUsers,findUser,createUser,userUpdate,userDelete} from '../repository/UserRepository.mjs';
export const getUsers = async () => {
  const data = await findUsers();
  return data;
};

export const getUser = async (id) => {
  const data = await findUser(id);
  if (data) {
    return data;
  } else {
    return "user not found";
  }};

export const addUser = async (userInfo) => {
  await createUser(userInfo);
  return "user has been added";
};

export const updateUser = async (id,name,email) =>  userUpdate(id,name,email);

export const deleteUser = async (id) => {
  const data = await userDelete(id)
  if (data) {
    return "user has been deleted";
  } else {
    return "user not found";
  }
};
