const url = 'http://dev.wzhang.me';

export const post = async (endpoint, ...args) => {
  try {
    const res = await fetch(`${url}/${endpoint}`, {
      method: 'POST',
      ...args
    });
    return res;
  } catch (err) {
    return err;
  }
};


export const get = async (endpoint, ...args) => {
  try {
    const res = await fetch(`${url}/${endpoint}`, {
      method: 'GET',
      ...args
    });
    return res;
  } catch (err) {
    return err;
  }
};
