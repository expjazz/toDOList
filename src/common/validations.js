const empty = (input) => {
  let valid = true;
  if (input.value === '') {
    valid = false;
  }
  return valid;
};

export default { empty };