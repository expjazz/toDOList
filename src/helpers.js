import projectsArray from './components/project/projectsArray';
import elements from './elements';
import Project from './project';
import itNote from './itemNote';

const displayForm = () => {
  const form = document.getElementById('projectForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
};


// this creates a project object
const addNewProject = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;

  form.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
  });
  const newProject = Project.Project(...inputValues);
  populateProjectList(newProject);
  form.reset();
  displayForm();
};


// const populateItemsTable = (item, index) => {
//   const { itemsTable } = elements.ele();
//   const project = projectsArray.projectsArray[index];
//   const count = document.querySelector('tbody').childElementCount + 1;
//   project.items.push(item);
//   itemsTable.querySelector('tbody').innerHTML += `<tr>
//     <th scope="row">${count}</th>
//     <td class='title'>${item.title}</td>
//     <td class='description'>${item.description}</td>
//     <td class='dueDate'>${item.dueDate}</td>
//     <td class='priority'>${item.priority}</td>
//     <td id="${count}itemNote" class='notes'>${item.notes}</td>
//     <td class='checkList'>${item.checkList}</td>
//     <td><button class="btn btn-danger" id="${count}-deleteBtn"><i class="fas fa-trash"></i></button></td>
//   </tr>`;
//   const itemNote = document.getElementById(`${count}itemNote`);
//   itemNote.addEventListener('click', itNote.itNote);
//   itemsTable.querySelectorAll('button').forEach((btn) => {
//     const { id } = btn;
//     const indexItem = id.split('-')[0];
//     btn.addEventListener('click', () => { deleteTask(index, project, indexItem); });
//   });
//   itNote.editEventListeners();
// };


export default {
  displayForm,
  addNewProject,
};
