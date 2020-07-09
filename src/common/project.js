const Project = (title, description, dueDate, checkList = '') => ({
  title,
  description,
  dueDate,
  items: [],
  checkList,
});

export default { Project };