import elem from './elements';
import input from './input';

const title = (titleContent) => {
  const title = document.createElement('h1');
  title.innerText = titleContent;
  return title;
};

const description = (projectDescription) => {
  const desc = document.createElement('p');
  desc.innerText = projectDescription;
  return desc;
};


const projectFormInputs = () => {
  const { projectForm } = elem.ele();

  const projectTitle = input.input('title');
  const projectDescription = input.input('description');
  const projectDate = input.input('date');

  const addBtn = document.createElement('button');
  addBtn.classList = 'btn btn-dark w-25 py-3';
  addBtn.innerHTML = '<i class="fas fa-plus"></i>';
  addBtn.type = 'submit';

  projectForm.innerHTML = projectTitle + projectDescription + projectDate;
  projectForm.appendChild(addBtn);
};

export default { projectFormInputs, title };
