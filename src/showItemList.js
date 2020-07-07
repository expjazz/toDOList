import addBtn from './addBtn';
import form from './form';

const itemList = (items) => {
  let count = 0; return `
<table class="table">
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
    <td>${item.title}</td>
    <td>${item.description}</td>
    <td>${item.dueDate}</td>
    <td>${item.prioriry}</td>
    <td>${item.notes}</td>
    <td>${item.checklist}</td>
  </tr>`;
  }).join('')
}

</tbody>
</table> `;
};
export default { itemList };