const Item = (title, dueDate, description, priority, notes = '', checkList = '') => ({
  title,
  description,
  dueDate,
  priority,
  notes,
  checkList,
});

export default { Item };