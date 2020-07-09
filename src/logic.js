import generator from './components/project/projectGenerator';
import Project from './project';
import pageGen from './mainFile';
import projectsArray from './components/project/projectsArray';

const run = () => {
  const createToDoList = Project.Project('Today', 'LiveSession', 'Today', 'Important');
  if (projectsArray.projectsArray.length === 0) projectsArray.projectsArray.push(createToDoList);


  pageGen.mainPage();
  generator.projectGenerator(projectsArray.projectsArray);
};

export default { run };