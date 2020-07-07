import ui from './title';
import list from './projectList';
import elements from './elements';
import titleGenerator from './title';
import input from './form';
import helpers from './helpers';


const projectGenerator = (projects) => {
  const { appendContent } = elements.ele();

  const projectContainer = document.createElement('div');
  projectContainer.classList = 'col-5';
  const ul = document.createElement('ul');
  const title = titleGenerator.title('Projects');

  ul.classList = 'd-flex justify-content-center flex-column';
  ul.innerHTML = list.projectList(projects);

  projectContainer.appendChild(title);
  projectContainer.appendChild(ul);
  projectContainer.appendChild(input.input('projectForm'));


  projectContainer.addEventListener('submit', helpers.createNewProject);
  appendContent.appendChild(projectContainer);
  titleGenerator.projectFormInputs();
};

export default { projectGenerator };