import elements from './elements';


const createNewProject = (e) => {
  e.preventDefault();
  console.log(e.target.querySelector('input').value);
};

const displayForm = (e) => {
  console.log(e.target);
  const form = e.target.parentElement.children[2];
  form.classList.toggle('d-none');

  setTimeout(() => form.classList.toggle('inactive'), 150);
};
export default { createNewProject, displayForm };
