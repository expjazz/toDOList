import ui from './projectUiHeading';
import list from './projectList';

const projects = list.projectList();

const projectName = document.createElement('div');
projectName.classList.add('container');

export default { projects };