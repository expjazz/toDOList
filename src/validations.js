const empty = (input) => {
  let whatever = true;
  if (input.value === '') {
    whatever = false;
  }
  return whatever;
};

export default { empty };