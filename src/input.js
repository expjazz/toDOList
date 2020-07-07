const input = (item) => {
  const input = document.createElement('input');
  input.classList = 'bg-dark';
  input.id = item;
  return input;
};

export default { input };