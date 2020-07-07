import addBtn from './addBtn';

const itemList = `
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
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>
${addBtn.addBtn('Add Todo Items', '<i class="fas fa-plus"></i>')}`;