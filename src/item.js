const Item = (title, dueDate, description, priority, notes = '', checkList = '', id = null) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
  checkList,
  id,
});

export default { Item };