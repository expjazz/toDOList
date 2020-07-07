const projectList = (projects) => projects.map((project) => `<li> ${project.title} </li>`).join('');

export default { projectList };