/* eslint-disable import/no-cycle */
import elements from './elements';
import projects from './logic';

const updateItem = (item, value, index) => {
  item.note = value.target.value;
  const itemNote = document.getElementById(`${index}itemNote`);
  const { mainContainer } = elements.ele();
  if (value.key === 'Enter') {
    itemNote.innerText = value.target.value;
    mainContainer.classList.remove('blur-container');
    const elem = document.querySelector('#itNote');
    elem.parentNode.removeChild(elem);
  }
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
  notesPopUp.classList = 'textarea';
  mainContainer.parentElement.appendChild(notesPopUp);
  const items = projects.projects[projectIndex].items[index - 1];
  notesPopUp.addEventListener('keydown', (e) => { updateItem(items, e, index); });
};

export default { itNote };