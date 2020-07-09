import elements from '../../elements';
import projectsArray from '../project/projectsArray';
import itNote from '../../itemNote';
import itemHelpers from './itemsHelpers';

const populateItemsTable = (item, index) => {
  const { itemsTable } = elements.ele();
  const project = projectsArray.projectsArray[index];
  const count = document.querySelector('tbody').childElementCount + 1;
  project.items.push(item);
  itemsTable.querySelector('tbody').innerHTML += `<tr>
    <th scope="row">${count}</th>
    <td class='title'>${item.title}</td>
    <td class='description'>${item.description}</td>
    <td class='dueDate'>${item.dueDate}</td>
    <td class='priority'>${item.priority}</td>
    <td id="${count}itemNote" class='notes'>${item.notes}</td>
    <td class='checkList'>${item.checkList}</td>
    <td><button class="btn btn-danger" id="${count}-deleteBtn"><i class="fas fa-trash"></i></button></td>
  </tr>`;
  const itemNote = document.getElementById(`${count}itemNote`);
  itemNote.addEventListener('click', itNote.itNote);
  itemsTable.querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    btn.addEventListener('click', () => { itemHelpers.deleteTask(index, project, indexItem); });
  });
  itNote.editEventListeners();
};

export default { populateItemsTable };