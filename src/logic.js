/* eslint-disable import/no-cycle */
import Project from './project';
import generator from './projectGenerator';
import pageGen from './mainFile';

const projects = JSON.parse(localStorage.getItem('Projects')) || [];

const run = () => {
  const createToDoList = Project.Project('Today', 'LiveSession', 'Today', 'Important');
  if (projects.length === 0) projects.push(createToDoList);


  // createToDoWebsite.items.push(navbar);

  pageGen.mainPage();
  generator.projectGenerator(projects);
};

export default { run, projects };