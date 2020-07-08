/* eslint-disable import/no-cycle */
import elements from './elements';
import showItemList from './showItemList';
import addBtn from './addBtn';
import form from './form';
import helper from './helpers';
import projects from './logic';

const toDoItem = (items, index) => {
  const { appendContent } = elements.ele();
  const itemForm = form.form('itemForm');
  helper.populateItemForm(itemForm);
  if (document.getElementById('itemContainer')) document.getElementById('itemContainer').parentElement.removeChild(document.getElementById('itemContainer'));
  const firstItemContainer = document.createElement('div');
  firstItemContainer.classList = 'col-7';
  firstItemContainer.id = 'itemContainer';
  appendContent.appendChild(firstItemContainer);
  firstItemContainer.innerHTML = showItemList.itemList(items, index);
  document.querySelector('.table').querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    const project = projects.projects[index];
    btn.addEventListener('click', () => { helper.deleteTask(index, project, indexItem); });
  });
  firstItemContainer.appendChild(itemForm);

  const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
  firstItemContainer.append(itemFormBtn);
  itemFormBtn.addEventListener('click', helper.displayForm);
  // } else {
  //   itemContainer.innerHTML = showItemList.itemList(items, index);
  //   itemContainer.append(itemForm);
  //   const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
  //   itemContainer.append(itemFormBtn);
  //   itemFormBtn.addEventListener('click', helper.showItemForm);
  // }
};

export default { toDoItem };