/* eslint-disable import/no-cycle */
import elements from './elements';
import projects from './logic';

const updateItem = (item, value) => {
  item.note = value;
  console.log(item);
};

const itNote = (e) => {
  e.stopPropagation();
  const index = e.target.parentElement.children[0].innerText;
  const projectIndex = e.target.parentElement.parentElement.parentElement.dataset.index;
  const { mainContainer } = elements.ele();
  mainContainer.classList.add('blur-container');
  const notesPopUp = document.createElement('input');
  notesPopUp.id = 'itNote';
  notesPopUp.value = e.target.innerText;
  // const item =
  notesPopUp.classList = 'textarea';
  mainContainer.parentElement.appendChild(notesPopUp);
  const items = projects.projects[projectIndex].items[index - 1];
  notesPopUp.addEventListener('keydown', (e) => { updateItem(items, e.target.value); });
};

export default { itNote };