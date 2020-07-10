const input = (title) => `<div class="form-group">
  <label for="${title}">${title}</label>
  <input type="text" class="form-control">
  </div>`;

const dateInput = (type) => `<div class="form-group">
<label for="${type}">${type}</label>
<input type="datetime-local" class="form-control dateTime">
<small class='danger d-none'> The date needs to be in the future </small>
</div>
`;

export default { input, dateInput };