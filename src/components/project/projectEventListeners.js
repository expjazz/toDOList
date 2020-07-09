import helpers from '../../helpers';
import elements from '../../elements';
import projectHelpers from './projectHelpers';
import showItemsFirst from '../items/showItemsFirst';

const addItemGeneratorToProject = () => {
  const { projectUl } = elements.ele();
  projectUl.addEventListener('click', showItemsFirst.showListItem);
};

const addEventListeners = () => {
  const { projectContainer, showFormBtn, projectUl } = elements.ele();
  projectContainer.addEventListener('submit', projectHelpers.createNewProject);
  showFormBtn.addEventListener('click', helpers.displayForm);
  const btns = projectUl.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.addEventListener('click', projectHelpers.deleteProject);
  });
};

export default { addItemGeneratorToProject, addEventListeners };