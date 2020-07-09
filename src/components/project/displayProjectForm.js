const displayForm = () => {
  const form = document.getElementById('projectForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
};

export default { displayForm };