const ele = () => ({
  mainContainer: document.querySelector('.container'),
  appendContent: document.getElementById('appendContent'),
  projectForm: document.getElementById('projectForm'),
  projectUl: document.getElementById('projectList'),
  itemContainer: document.getElementById('itemContainer'),
  itemForm: document.getElementById('itemForm'),
  itemsTable: document.querySelector('.table'),
  itemNote: document.getElementById('itemNote'),
  projectContainer: document.querySelector('.col-5'),
  showFormBtn: document.getElementById('showFormBtn'),
});

export default { ele };