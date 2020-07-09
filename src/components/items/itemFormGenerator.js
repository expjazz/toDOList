import input from '../../input';
import btn from '../../addBtn';
import submitItemForm from './itemsHelpers';


const populateItemForm = (itemForm) => {
  const itemTitle = input.input('title');
  const itemDescription = input.input('description');
  const itemDueDate = input.dateInput('dueDate');
  const itemPriority = input.input('priority');
  const itemNotes = input.input('notes');
  const itemChecklist = input.input('checkList');


  const submitBtn = btn.addBtn('Create item');
  itemForm.addEventListener('submit', submitItemForm.submitItemForm);
  itemForm.innerHTML = itemTitle + itemDescription + itemDueDate + itemPriority
  + itemNotes + itemChecklist;
  itemForm.appendChild(submitBtn);
};

export default { populateItemForm };