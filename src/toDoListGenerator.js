import elements from './elements';
import showItemList from './showItemList';
import addBtn from './addBtn';
import form from './form';

const toDoItem = (items) => {
  const { appendContent, itemContainer } = elements.ele();
  const itemForm = form.form('itemForm');
  helper.populateItemForm(itemForm);
  if (!document.getElementById('itemContainer')) {
    const firstItemContainer = document.createElement('div');

    firstItemContainer.classList = 'col-7';
    firstItemContainer.id = 'itemContainer';
    appendContent.appendChild(firstItemContainer);
    firstItemContainer.innerHTML = showItemList.itemList(items);
    firstItemContainer.appendChild(itemForm);

    const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
    firstItemContainer.append(itemFormBtn);
    itemFormBtn.addEventListener('click', helper.showItemForm);
  } else {
    itemContainer.innerHTML = showItemList.itemList(items);
    itemContainer.append(itemForm);
    itemContainer.append(addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>'));
    const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
    itemContainer.append(itemFormBtn);
    itemFormBtn.addEventListener('click', helper.showItemForm);
  }
};

export default { toDoItem };