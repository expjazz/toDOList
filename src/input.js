const input = (title) => `<div class="form-group">
  <label for="${title}">${title}</label>
  <input type="text" class="form-control">
  </div>`;

const dateInput = (type) => `<div class="form-group">
<label for="${type}">${type}</label>
<input type="datetime-local" class="form-control dateTime">
</div>
`;

export default { input, dateInput };