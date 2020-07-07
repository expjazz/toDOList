
const input = (item) => {
  const form = document.createElement('form');

  form.classList.add = 'form-group';

  form.id = item;

  return form;
};

export default { input };