export const persistValueInLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const removeKeyInLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
