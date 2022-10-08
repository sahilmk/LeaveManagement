export const getData = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const removeData = (key: string) => {
  return window.localStorage.removeItem(key);
};
