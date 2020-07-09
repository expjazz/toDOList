/* eslint-disable import/prefer-default-export */
const projectsArray = JSON.parse(localStorage.getItem('Projects')) || [];

// const exportProjectsArray = () => projectsArray;

export default { projectsArray };