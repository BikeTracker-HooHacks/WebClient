const url = 'https://dev.wzhang.me';

export const post = async (endpoint, data) => {
  try {
    const res = await fetch(`${url}/${endpoint}`, {
      method: 'POST',
      // credentials: 'include',
      body: data,
      headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const get = async (endpoint) => {
  try {
    const res = await fetch(`${url}/${endpoint}`, {
      method: 'GET'
      // credentials: 'include'
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};
