
const form = (item) => {
  const form = document.createElement('form');
  form.classList = 'form-group d-none inactive';

  form.id = item;

  return form;
};

export default { form };