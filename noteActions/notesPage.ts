export const getItemFromLocalStorage = (id: string) => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(id);
    if (storedData) {
      return JSON.parse(storedData);
    }
  }
  return null;
};

export const getNameFromLocalStorage = (id: string) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('localStorageArray');
    if (data) {
      const storedData =  JSON.parse(data) as { name: string, id: string, image: string }[];
      const foundItem = storedData.find(item => item.id === id);
      if (foundItem) {
        return foundItem.name;
      } else {
        return null;
      }
    }
  }
  return null;
}