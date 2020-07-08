/* eslint-disable import/no-cycle */
import list from './projectList';
import elements from './elements';
import titleGenerator from './helperTags';
import form from './form';
import helpers from './helpers';
import btn from './addBtn';


const projectGenerator = (projects) => {
  const { appendContent } = elements.ele();

  const projectContainer = document.createElement('div');
  projectContainer.classList = 'col-5';
  const ul = document.createElement('ul');
  const title = titleGenerator.title('Projects');


  ul.addEventListener('click', helpers.showListItem);

  ul.classList = 'd-flex justify-content-center flex-column';
  ul.innerHTML = list.projectList(projects);
  ul.id = 'projectList';

  projectContainer.appendChild(title);
  projectContainer.appendChild(ul);
  projectContainer.appendChild(form.form('projectForm'));


  appendContent.appendChild(projectContainer);
  const showFormBtn = btn.addBtn(null, '<i class="fas fa-plus"></i>');
  projectContainer.appendChild(showFormBtn);
  titleGenerator.projectFormInputs();
  projectContainer.addEventListener('submit', helpers.createNewProject);
  showFormBtn.addEventListener('click', helpers.displayForm);
  const btns = ul.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', helpers.deleteProject);
  });
};

export default { projectGenerator };