const input = (title) => `<div class="form-group">
  <label for="${title}">${title}</label>
  <input type="text" class="form-control" id="${title}" aria-describedby="emailHelp">
  </div>`;


export default { input };