import elements from '../../elements';


const deleteRow = (items) => {
  let count = 0;
  const project = 'a';

  const { itemsTable } = elements.ele();
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

  ${document.getElementById(`${count}-deleteBtn`).addEventListener('click', () => { deleteTask(project, count - 1); })}
  














  </tr>`;
  }).join('')
}
`;
};

const deleteTask = (project, count) => {
  console.log(project);
  const tempList = project.items.filter((item) => item !== project.items[count - 1]);
  project.items = tempList;
  deleteRow(project.items);
};

export default { deleteTask, deleteRow };