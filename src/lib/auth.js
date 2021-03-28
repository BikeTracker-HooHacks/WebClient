import { post } from '$lib/api';

export const login = async (username, password) => {
  // call some sort of login thing
  const form = new FormData()
  form.append("username", username)
  form.append("password", password)
  return await post("user/login", JSON.stringify({username, password}))
};

export const signup = async (name, username, password) => {
  // call some sort of login thing
  const form = new FormData()
  form.append("name", name)
  form.append("username", username)
  form.append("password", password)
  return await post("user/create", JSON.stringify({name, username, password}))
};
