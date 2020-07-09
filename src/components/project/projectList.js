const projectList = (projects) => projects.map((project, index) => `<li data-title="${project.title}">${project.title} <button class="btn-danger" data-title="${project.title}" id="${index}-deleteBtn"><i class="fas fa-trash" data-title="${project.title}"></i></button></td>
</li>`).join('');


export default { projectList };