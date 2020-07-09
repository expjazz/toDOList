import list from './projectList';
import elements from '../../elements';
import form from '../../form';
import btn from '../../addBtn';
import projectHelpers from './projectHelpers';

const projectGenerator = (projects) => {
  console.log(projects.projectsArray);
  const { appendContent } = elements.ele();

  const projectContainer = document.createElement('div');
  projectContainer.classList = 'col-5';
  const ul = document.createElement('ul');
  const title = document.createElement('h1');
  title.innerText = 'Project';

  // ul.addEventListener('click', helpers.showListItem);

  ul.classList = 'd-flex justify-content-center flex-column';
  ul.innerHTML = list.projectList(projects);
  ul.id = 'projectList';

  projectContainer.appendChild(title);
  projectContainer.appendChild(ul);
  projectContainer.appendChild(form.form('projectForm'));
  appendContent.appendChild(projectContainer);


  const showFormBtn = btn.addBtn(null, '<i class="fas fa-plus"></i>');
  showFormBtn.id = 'showFormBtn';
  projectContainer.appendChild(showFormBtn);
  projectHelpers.projectFormInputs();
  // projectContainer.addEventListener('submit', helpers.createNewProject);
  // showFormBtn.addEventListener('click', helpers.displayForm);
  // const btns = ul.querySelectorAll('button');
  // btns.forEach((btn) => {
  //   btn.addEventListener('click', helpers.deleteProject);
  // });
  console.log('project generator');
};

export default { projectGenerator };