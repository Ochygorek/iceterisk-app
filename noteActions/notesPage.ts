export const getItemFromLocalStorage = (id: string) => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(id);
    if (storedData) {
      return JSON.parse(storedData);
    }
  }
  return null;
};