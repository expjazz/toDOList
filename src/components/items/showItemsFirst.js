/* eslint-disable no-use-before-define */
import projectsArray from '../project/projectsArray';
import elements from '../../elements';
import form from '../../form';
import itemPopulate from './itemFormGenerator';
import createItemList from '../../showItemList';
import deleteTask from './deleteTask';
import addBtn from '../../addBtn';
import displayForm2 from './displayItemForm';
import edit from '../../itemNote';

const showListItem = (e) => {
  if (e.target.tagName === 'LI') {
    const y = e.target;
    const btn = e.target.querySelector('button');
    y.removeChild(btn);
    const x = projectsArray.projectsArray.find((project) => project.title === y.innerText);
    y.appendChild(btn);
    const index = projectsArray.projectsArray.indexOf(x);
    toDoItem(x.items, index);
    y.classList.toggle('activate');
    y.parentElement.querySelectorAll('li').forEach((li) => {
      if (li !== y) {
        li.classList.remove('activate');
      }
    });
  }
};
const toDoItem = (items, index) => {
  const { appendContent } = elements.ele();
  const itemForm = form.form('itemForm');
  itemPopulate.populateItemForm(itemForm);
  if (document.getElementById('itemContainer')) document.getElementById('itemContainer').parentElement.removeChild(document.getElementById('itemContainer'));
  const firstItemContainer = document.createElement('div');
  firstItemContainer.classList = 'col-7';
  firstItemContainer.id = 'itemContainer';
  appendContent.appendChild(firstItemContainer);
  firstItemContainer.innerHTML = createItemList.itemList(items, index);
  document.querySelector('.table').querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    const project = projectsArray.projectsArray[index];
    btn.addEventListener('click', () => { deleteTask.deleteTask(project, indexItem); });
  });
  firstItemContainer.appendChild(itemForm);

  const itemFormBtn = addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>');
  firstItemContainer.append(itemFormBtn);
  itemFormBtn.addEventListener('click', displayForm2.displayForm2);
  edit.editEventListeners();
};

export default { showListItem };