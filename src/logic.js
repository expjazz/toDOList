import Item from './item';
import Project from './project';


const run = () => {
  const createToDoWebsite = Project.Project('createToDoWebsite', 'project from Microverse', '07/09');
  const navbar = Item.Item('navbar', '07/09', 'create the navbar', 5);

  createToDoWebsite.items.push(navbar);
  console.log(createToDoWebsite);
};

export default { run };