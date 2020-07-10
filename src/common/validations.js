const empty = (input) => {
  let valid = true;
  if (input.type === 'datetime-local') {
    const now = new Date();
    const date = new Date(input.value);
    if (now.getTime() > date.getTime()) {
      valid = false;
      input.nextElementSibling.classList.remove('d-none');
      input.nextElementSibling.classList.add('text-danger');
    } else {
      input.nextElementSibling.classList.add('d-none');
    }
  }
  if (input.value === '') {
    valid = false;
  }
  return valid;
};

export default { empty };