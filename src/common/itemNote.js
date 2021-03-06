import elements from './elements';
import projectsArray from '../components/project/projectsArray';

const updateItem = (item, e, value, index, note) => {
  item[note] = value.target.value;
  const itemNote = e.target;
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
  if (e.target.classList.contains('dueDate')) {
    notesPopUp.type = 'datetime-local';
  }
  notesPopUp.id = 'itNote';
  notesPopUp.value = e.target.innerText;
  const event = e;
  notesPopUp.classList = 'textarea';
  mainContainer.parentElement.appendChild(notesPopUp);
  const items = projectsArray.projectsArray[projectIndex].items[index - 1];
  notesPopUp.addEventListener('keydown', (e) => {
    updateItem(items, event, e, index, event.target.classList[0]);
  });
};

const editEventListeners = () => {
  const { itemsTable } = elements.ele();
  const allRows = itemsTable.querySelectorAll('tr');
  allRows.forEach((row, index) => {
    if (index !== 0) {
      const allFields = row.querySelectorAll('td');
      allFields.forEach((field, index) => {
        if (index < allFields.length - 1) { field.addEventListener('click', itNote); }
      });
    }
  });
};

export default { itNote, editEventListeners };