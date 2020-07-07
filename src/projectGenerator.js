import ui from './helperTags';
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

  ul.classList = 'd-flex justify-content-center flex-column';
  ul.innerHTML = list.projectList(projects);

  projectContainer.appendChild(title);
  projectContainer.appendChild(ul);
  projectContainer.appendChild(form.form('projectForm'));


  appendContent.appendChild(projectContainer);
  projectContainer.appendChild(btn.addBtn);
  titleGenerator.projectFormInputs();
  projectContainer.addEventListener('submit', helpers.createNewProject);
  btn.addBtn.addEventListener('click', helpers.displayForm);
};

export default { projectGenerator };