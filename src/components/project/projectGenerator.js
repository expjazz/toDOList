import list from './projectList';
import elements from '../../elements';
import form from '../../form';
import btn from '../../addBtn';
import projectHelpers from './projectHelpers';
import projectEventListeners from './projectEventListeners';

const projectGenerator = (projects) => {
  console.log(projects);
  const { appendContent } = elements.ele();

  const projectContainer = document.createElement('div');
  projectContainer.classList = 'col-5';
  const ul = document.createElement('ul');
  const title = document.createElement('h1');
  title.innerText = 'Project';

  // ul.addEventListener('click', helpers.showListItem);
  ul.id = 'projectList';

  ul.classList = 'd-flex justify-content-center flex-column';
  ul.innerHTML = list.projectList(projects);

  projectContainer.appendChild(title);
  projectContainer.appendChild(ul);
  projectContainer.appendChild(form.form('projectForm'));
  appendContent.appendChild(projectContainer);


  const showFormBtn = btn.addBtn(null, '<i class="fas fa-plus"></i>');
  showFormBtn.id = 'showFormBtn';
  projectContainer.appendChild(showFormBtn);
  console.log('object');
  console.log(projectEventListeners);
  projectHelpers.projectFormInputs();

  projectEventListeners.addItemGeneratorToProject();
  projectEventListeners.addEventListeners();
};

export default { projectGenerator };