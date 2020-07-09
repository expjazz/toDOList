const addBtn = (content = null, fontAwesome = null) => {
  const btn = document.createElement('button');
  if (content) btn.innerText = content;
  btn.classList = 'btn btn-dark w-25 py-3';
  if (fontAwesome) btn.innerHTML = '<i class="fas fa-plus"></i>';
  btn.type = 'submit';

  return btn;
};


export default { addBtn };