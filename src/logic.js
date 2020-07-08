import Item from './item';
import Project from './project';
import projectList from './projectList';
import generator from './projectGenerator';
import pageGen from './mainFile';

const projects = JSON.parse(localStorage.getItem('Projects')) || [];

const run = () => {
  pageGen.mainPage();
  generator.projectGenerator(projects);
};

export default { run, projects };