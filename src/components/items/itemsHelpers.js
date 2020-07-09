import projectsArray from '../project/projectsArray';
import validate from '../../validations';
import Item from '../../item';
import displayItemForm from './displayItemForm';
import deleteRow from './deleteTask';


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
  submitItemForm,
};