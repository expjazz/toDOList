/* eslint-disable no-use-before-define */
import elements from '../../common/elements';
import projectsArray from '../project/projectsArray';
import editEventListeners from '../../common/itemNote';

const deleteRow = (items) => {
  let count = 0;
  const { itemsTable } = elements.ele();
  const projIndex = itemsTable.dataset.index;
  itemsTable.querySelector('tbody').innerHTML = `
  ${items.map((item) => {
    count += 1;
    return `<tr>
    <th scope="row">${count}</th>
    <td class='title'>${item.title}</td>
    <td class='description'>${item.description}</td>
    <td class='dueDate'>${item.dueDate}</td>
    <td class='priority'>${item.priority}</td>
    <td id="${count}itemNote" class='notes'>${item.notes}</td>
    <td class='checkList'>${item.checkList}</td>
    <td><button class="btn btn-danger" id="${count}-deleteBtn"><i class="fas fa-trash"></i></button></td>
  </tr>`;
  }).join('')
}
`;
  itemsTable.querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    const project = projectsArray.projectsArray[projIndex];
    btn.addEventListener('click', () => { deleteTask(project, indexItem); });
  });
  editEventListeners.editEventListeners();
  localStorage.setItem('Projects', JSON.stringify(projectsArray.projectsArray));
};

const deleteTask = (project, count) => {
  const tempList = project.items.filter((item) => item !== project.items[count - 1]);
  project.items = tempList;
  deleteRow(project.items);
};

export default { deleteTask, deleteRow };