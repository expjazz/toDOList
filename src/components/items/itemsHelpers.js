import projectsArray from '../project/projectsArray';
import showList from '../../toDoListGenerator';
import validate from '../../validations';
import Item from '../../item';
// import itemPopulateTable from './itemPopulateTable';
import displayItemForm from './displayItemForm';
import deleteRow from './deleteTask';


// show list item on the right
const showListItem = (e) => {
  if (e.target.tagName === 'LI') {
    const y = e.target;
    const btn = e.target.querySelector('button');
    y.removeChild(btn);
    const x = projectsArray.projectsArray.find((project) => project.title === y.innerText);
    y.appendChild(btn);
    const index = projectsArray.projectsArray.indexOf(x);
    showList.toDoItem(x.items, index);
    y.classList.toggle('activate');
    y.parentElement.querySelectorAll('li').forEach((li) => {
      if (li !== y) {
        li.classList.remove('activate');
      }
    });
  }
};

const submitItemForm = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;
  let validateFlag = true;
  form.querySelectorAll('input').forEach((input) => {
    // validation method
    validateFlag = validate.empty(input);
    if (validateFlag === false) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    } else {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    }
    inputValues.push(input.value);
  });

  if (validateFlag === false) {
    return;
  }
  const { index } = form.parentElement.children[0].dataset;

  const newItem = Item.Item(...inputValues);
  // itemPopulateTable.populateItemsTable(newItem, index);
  const project = projectsArray.projectsArray[index];
  project.items.push(newItem);
  deleteRow.deleteRow(project.items);
  displayItemForm.displayForm2(e);
};


export default {
  showListItem, submitItemForm,
};