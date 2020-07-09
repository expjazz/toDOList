import helpers from '../../helpers';
import elements from '../../elements';
import projectHelpers from './projectHelpers';

const addItemGeneratorToProject = () => {
  console.log('itemgem');
  const { projectUl } = elements.ele();
  projectUl.addEventListener('click', helpers.showListItem);
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