export const deleteAllNotes = () => {
  localStorage.clear()

  window.location.href = '/settings';
}

export const resetNumbers = () => {
  let countArray = JSON.parse(localStorage.getItem('count') || '[]');

  countArray = []

  localStorage.setItem('count', JSON.stringify(countArray))

  window.location.href = '/settings';
}