const input = (title) => `<div class="form-group">
  <label for="${title}">${title}</label>
  <input type="text" class="form-control" id="${title}" aria-describedby="emailHelp">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>`;


export default { input };