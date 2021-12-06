import User from "../model/UserModel.mjs";

export const findUsers = async () => User.findAll({ raw: true });

export const findUser = async (id) => User.findByPk(id);

export const createUser = async (userInfo) => User.create(userInfo);

export const userUpdate = async (id, name, email) => {
  const data = await User.findByPk(id);
  if (data) {
    data.name = name;
    data.email = email;
    await data.save();
    return data;
  } else {
    return "user not found";
  }
};

export const userDelete = async (id) => User.destroy({ where: { id: id } });
