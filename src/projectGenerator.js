import ui from './title';
import list from './projectList';
import elements from './elements';
import titleGenerator from './title';

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

  appendContent.appendChild(projectContainer);
};

export default { projectGenerator };