import elements from './elements';
import showItemList from './showItemList';
import addBtn from './addBtn';

const toDoItem = () => {
  const { appendContent } = elements.ele();

  const itemContainer = document.createElement('div');
  itemContainer.classList = 'col-7';
  appendContent.appendChild(itemContainer);
  itemContainer.innerHTML = showItemList.itemList;
  itemContainer.append(addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>'));
};

export default { toDoItem };