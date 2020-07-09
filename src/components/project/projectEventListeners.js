import elements from '../../elements';
import projectHelpers from './projectHelpers';
import showItemsFirst from '../items/showItemsFirst';
import displayProjectForm from './displayProjectForm';
import addNewProject from './addNewProject';

const addItemGeneratorToProject = () => {
  const { projectUl } = elements.ele();
  projectUl.addEventListener('click', showItemsFirst.showListItem);
};

const addEventListeners = () => {
  const { projectContainer, showFormBtn, projectUl } = elements.ele();
  projectContainer.addEventListener('submit', addNewProject.addNewProject);
  showFormBtn.addEventListener('click', displayProjectForm.displayForm);
  const btns = projectUl.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', projectHelpers.deleteProject);
  });
};

export default { addItemGeneratorToProject, addEventListeners };