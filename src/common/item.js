const Item = (title, description, dueDate, priority, notes = '', checkList = '', id = null) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
  checkList,
  id,
});

export default { Item };