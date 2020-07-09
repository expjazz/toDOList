import elements from './elements';
import showItemList from './showItemList';
import addBtn from './addBtn';
import form from './form';
import edit from './itemNote';
import projectsArray from './components/project/projectsArray';
import itemHelpers from './components/items/itemsHelpers';
import itemPopulate from './components/items/itemFormGenerator';


const toDoItem = (items, index) => {
  const { appendContent } = elements.ele();
  const itemForm = form.form('itemForm');
  itemPopulate.populateItemForm(itemForm);
  if (document.getElementById('itemContainer')) document.getElementById('itemContainer').parentElement.removeChild(document.getElementById('itemContainer'));
  const firstItemContainer = document.createElement('div');
  firstItemContainer.classList = 'col-7';
  firstItemContainer.id = 'itemContainer';
  appendContent.appendChild(firstItemContainer);
  firstItemContainer.innerHTML = showItemList.itemList(items, index);
  document.querySelector('.table').querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    const project = projectsArray.projectsArray[index];
    btn.addEventListener('click', () => { itemHelpers.deleteTask(index, project, indexItem); });
  });
  firstItemContainer.appendChild(itemForm);

  const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
  firstItemContainer.append(itemFormBtn);
  itemFormBtn.addEventListener('click', itemHelpers.displayForm2);
  edit.editEventListeners();
};

export default { toDoItem };