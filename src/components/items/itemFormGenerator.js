import input from '../../common/input';
import btn from '../../common/addBtn';
import projectsArray from '../project/projectsArray';
import validate from '../../common/validations';
import Item from '../../common/item';
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
  form.reset();
  const newItem = Item.Item(...inputValues);
  // itemPopulateTable.populateItemsTable(newItem, index);
  const project = projectsArray.projectsArray[index];
  project.items.push(newItem);

  deleteRow.deleteRow(project.items);
  displayItemForm.displayForm2(e);
};

const populateItemForm = (itemForm) => {
  const itemTitle = input.input('title');
  const itemDescription = input.input('description');
  const itemDueDate = input.dateInput('dueDate');
  const itemPriority = input.input('priority');
  const itemNotes = input.input('notes');
  const itemChecklist = input.input('checkList');


  const submitBtn = btn.addBtn('Create item');
  itemForm.addEventListener('submit', submitItemForm);
  itemForm.innerHTML = itemTitle + itemDescription + itemDueDate + itemPriority
  + itemNotes + itemChecklist;
  itemForm.appendChild(submitBtn);
};
export default { populateItemForm };