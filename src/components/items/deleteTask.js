import elements from '../../elements';


const deleteRow = (items) => {
  let count = 0;
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

  </tr>`;
  }).join('')
}
`;
};

const deleteTask = (index, project, count) => {
  const tempList = project.items.filter((item) => item !== project.items[count - 1]);
  project.items = tempList;
  deleteRow(project.items);
};

export default { deleteTask };