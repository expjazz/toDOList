const itemList = (items, number) => {
  let count = 0; return `
<table class="table" data-index='${number}'>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
    <th scope="col">Description</th>
    <th scope="col">DueDate</th>
    <th scope="col">Priority</th>
    <th scope="col">Notes</th>
    <th scope="col">Checklist</th>
  </tr>
</thead>
<tbody>
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

    <td class='checkList'>${item.checkList}</td>
    <td><button class="btn btn-danger" id="${count}-deleteBtn"><i class="fas fa-trash"></i></button></td>

  </tr>`;
  }).join('')
}
</tbody>
</table> `;
};
export default { itemList };