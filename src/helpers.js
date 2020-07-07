
const createNewProject = (e) => {
  e.preventDefault();
  console.log(e.target.querySelector('input').value);
};

export default { createNewProject };