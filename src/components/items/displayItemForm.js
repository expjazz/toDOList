const displayForm2 = (e) => {
  const form = e.target.parentElement.querySelector('form') || document.getElementById('itemForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
};

export default { displayForm2 };