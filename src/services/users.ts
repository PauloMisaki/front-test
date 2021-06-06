import axios from "axios";

export const createUser = async (user) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, user);
};

export const getUsers = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
};

export const updateUser = async (id, user) => {
  return await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
    user
  );
};
