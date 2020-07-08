const projectList = (projects) => projects.map((project, index) => `<li data-title="${project.title}"> ${project.title} <button class="btn btn-danger" id="${index}-deleteBtn"><i class="fas fa-trash"></i></button></td>
</li>`).join('');


export default { projectList };