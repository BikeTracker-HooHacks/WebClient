import { post } from '$lib/api';

export const login = async (username, password) => {
  // call some sort of login thing
  return await post("login", {username, password})
};
