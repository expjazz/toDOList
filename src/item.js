const Item = (title, dueDate, description, priority, notes = '', checkList = '') => ({
  title,
  dueDate,
  description,
  priority,
  notes,
  checkList,
});

export default { Item };