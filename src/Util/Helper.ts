export const getData = (key: string) => {
    return JSON.parse(window.localStorage.getItem(key));
};
