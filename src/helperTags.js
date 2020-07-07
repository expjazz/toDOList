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

  projectForm.innerHTML = projectTitle + projectDescription + projectDate;
};

export default { projectFormInputs, title };
