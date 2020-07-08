/* eslint-disable import/no-cycle */
import elements from './elements';
import projects from './logic';

const updateItem = (item, value, index, note) => {
  console.log(item);
  item[note] = value.target.value;
  const itemNote = document.querySelector(`.${note}`);
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
  notesPopUp.addEventListener('keydown', (e) => {
    updateItem(items, e, index, e.target.classList);
  });
};

const editEventListeners = () => {
  const { itemsTable } = elements.ele();
  const allRows = itemsTable.querySelectorAll('tr');
  allRows.forEach((row, index) => {
    if (index !== 0) {
      const allFields = row.querySelectorAll('td');
      allFields.forEach((field, index) => {
        field.addEventListener('click', itNote);
      });
    }
  });
};

export default { itNote, editEventListeners };