import Item from './item';
import Project from './project';
import projectList from './projectList';
import generator from './projectGenerator';
import pageGen from './mainFile';

const projects = [];

const run = () => {
  const createToDoWebsite = Project.Project('createToDoWebsite', 'project from Microverse', '07/09');
  const createToDoWebsite2 = Project.Project('jazzTrio', 'LiveSession', '08/09');
  // const navbar = Item.Item('navbar', '07/09', 'create the navbar', 5);
  // const mainContainer = document.querySelector('.container');
  projects.push(createToDoWebsite);
  projects.push(createToDoWebsite2);

  // createToDoWebsite.items.push(navbar);
  // console.log(createToDoWebsite);
  pageGen.mainPage();
  generator.projectGenerator(projects);
};

export default { run, projects };