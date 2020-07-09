import generator from './components/project/projectGenerator';
import Project from './project';
import projHelpers from './components/project/projectHelpers';
import pageGen from './mainFile';
import projectsArray from './components/project/projectsArray';
// // import helpers from './helpers';
// // const projects = JSON.parse(localStorage.getItem('Projects')) || [];


const run = () => {
  const createToDoList = Project.Project('Today', 'LiveSession', 'Today', 'Important');
  if (projectsArray.projectsArray.length === 0) projectsArray.projectsArray.push(createToDoList);


  pageGen.mainPage();
  generator.projectGenerator(projectsArray.projectsArray);
};

export default { run };