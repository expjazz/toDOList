!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}({0:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);n(0);var r=t=>t.map((t,e)=>`<li data-title="${t.title}">${t.title} <button class="btn-danger" data-title="${t.title}" id="${e}-deleteBtn"><i class="fas fa-trash" data-title="${t.title}"></i></button></td>\n</li>`).join("");var o=()=>({mainContainer:document.querySelector(".container"),appendContent:document.getElementById("appendContent"),projectForm:document.getElementById("projectForm"),projectUl:document.getElementById("projectList"),itemContainer:document.getElementById("itemContainer"),itemForm:document.getElementById("itemForm"),itemsTable:document.querySelector(".table"),itemNote:document.getElementById("itemNote"),projectContainer:document.querySelector(".col-5"),showFormBtn:document.getElementById("showFormBtn")});var i=t=>{const e=document.createElement("form");return e.classList="form-group d-none inactive",e.id=t,e};var a=(t=null,e=null)=>{const n=document.createElement("button");return t&&(n.innerText=t),n.classList="btn btn-dark w-25 py-3",e&&(n.innerHTML='<i class="fas fa-plus"></i>'),n.type="submit",n};var s=t=>`<div class="form-group">\n  <label for="${t}">${t}</label>\n  <input type="text" class="form-control">\n  </div>`,c=t=>`<div class="form-group">\n<label for="${t}">${t}</label>\n<input type="datetime-local" class="form-control dateTime">\n</div>\n`;var l={projectsArray:JSON.parse(localStorage.getItem("Projects"))||[]};const d=(t=null)=>{const{projectUl:e}=o();null!==t&&l.projectsArray.push(t),e.innerHTML=r(l.projectsArray),e.querySelectorAll("button").forEach(t=>{t.addEventListener("click",p)}),localStorage.setItem("Projects",JSON.stringify(l.projectsArray))},p=t=>{const e=t.target.dataset.title,n=l.projectsArray.filter(t=>t.title!==e);l.projectsArray=n,d()};var u={createNewProject:t=>{t.preventDefault()},deleteProject:p,populateProjectList:d,projectFormInputs:()=>{const{projectForm:t}=o(),e=s("title"),n=s("description"),r=c("date"),i=a("Create Project");t.innerHTML=e+n+r,t.appendChild(i)}};var m=t=>{let e=!0;return""===t.value&&(e=!1),e};var y=(t,e,n,r,o="",i="",a=null)=>({title:t,description:e,dueDate:n,priority:r,notes:o,checkList:i,id:a});var h=t=>{const e=t.target.parentElement.querySelector("form")||document.getElementById("itemForm");e.classList.toggle("d-none"),setTimeout(()=>e.classList.toggle("inactive"),150)};const v=t=>{t.stopPropagation();const e=t.target.parentElement.children[0].innerText,n=t.target.parentElement.parentElement.parentElement.dataset.index,{mainContainer:r}=o();r.classList.add("blur-container");const i=document.createElement("input");i.id="itNote",i.value=t.target.innerText;const a=t;i.classList="textarea",r.parentElement.appendChild(i);const s=l.projectsArray[n].items[e-1];i.addEventListener("keydown",t=>{((t,e,n,r,i)=>{t[i]=n.target.value;const a=e.target,{mainContainer:s}=o();if("Enter"===n.key){a.innerText=n.target.value,s.classList.remove("blur-container");const t=document.querySelector("#itNote");t.parentNode.removeChild(t)}})(s,a,t,0,a.target.classList[0])})};var f=()=>{const{itemsTable:t}=o();t.querySelectorAll("tr").forEach((t,e)=>{if(0!==e){const e=t.querySelectorAll("td");e.forEach((t,n)=>{n<e.length-1&&t.addEventListener("click",v)})}})};const g=t=>{let e=0;const{itemsTable:n}=o(),r=n.dataset.index;n.querySelector("tbody").innerHTML=`\n  ${t.map(t=>(e+=1,`<tr>\n    <th scope="row">${e}</th>\n    <td class='title'>${t.title}</td>\n    <td class='description'>${t.description}</td>\n    <td class='dueDate'>${t.dueDate}</td>\n    <td class='priority'>${t.priority}</td>\n    <td id="${e}itemNote" class='notes'>${t.notes}</td>\n    <td class='checkList'>${t.checkList}</td>\n    <td><button class="btn btn-danger" id="${e}-deleteBtn"><i class="fas fa-trash"></i></button></td>\n  </tr>`)).join("")}\n`,n.querySelectorAll("button").forEach(t=>{const{id:e}=t,n=e.split("-")[0],o=l.projectsArray[r];t.addEventListener("click",()=>{b(o,n)})}),f(),localStorage.setItem("Projects",JSON.stringify(l.projectsArray))},b=(t,e)=>{const n=t.items.filter(n=>n!==t.items[e-1]);t.items=n,g(t.items)};var j={deleteTask:b,deleteRow:g};const L=t=>{t.preventDefault();const e=[],n=t.target;let r=!0;if(n.querySelectorAll("input").forEach(t=>{r=m(t),!1===r?(t.classList.add("is-invalid"),t.classList.remove("is-valid")):(t.classList.add("is-valid"),t.classList.remove("is-invalid")),e.push(t.value)}),!1===r)return;const{index:o}=n.parentElement.children[0].dataset,i=y(...e),a=l.projectsArray[o];a.items.push(i),j.deleteRow(a.items),h(t)};var E=t=>{const e=s("title"),n=s("description"),r=c("dueDate"),o=s("priority"),i=s("notes"),l=s("checkList"),d=a("Create item");t.addEventListener("submit",L),t.innerHTML=e+n+r+o+i+l,t.appendChild(d)};var C=(t,e)=>{let n=0;return`\n<table class="table" data-index='${e}'>\n<thead>\n  <tr>\n    <th scope="col">#</th>\n    <th scope="col">Title</th>\n    <th scope="col">Description</th>\n    <th scope="col">DueDate</th>\n    <th scope="col">Priority</th>\n    <th scope="col">Notes</th>\n    <th scope="col">Checklist</th>\n  </tr>\n</thead>\n<tbody>\n  ${t.map(t=>(n+=1,`<tr>\n    <th scope="row">${n}</th>\n    <td class='title'>${t.title}</td>\n    <td class='description'>${t.description}</td>\n    <td class='dueDate'>${t.dueDate}</td>\n    <td class='priority'>${t.priority}</td>\n    <td id="${n}itemNote" class='notes'>${t.notes}</td>\n    <td class='checkList'>${t.checkList}</td>\n    <td><button class="btn btn-danger" id="${n}-deleteBtn"><i class="fas fa-trash"></i></button></td>\n\n  </tr>`)).join("")}\n</tbody>\n</table> `};const T=(t,e)=>{const{appendContent:n}=o(),r=i("itemForm");E(r),document.getElementById("itemContainer")&&document.getElementById("itemContainer").parentElement.removeChild(document.getElementById("itemContainer"));const s=document.createElement("div");s.classList="col-7",s.id="itemContainer",n.appendChild(s),s.innerHTML=C(t,e),document.querySelector(".table").querySelectorAll("button").forEach(t=>{const{id:n}=t,r=n.split("-")[0],o=l.projectsArray[e];t.addEventListener("click",()=>{j.deleteTask(o,r)})}),s.appendChild(r);const c=a("Add Todo Items",'<i class="fas fa-plus"></i>');s.append(c),c.addEventListener("click",h),f()};var S=t=>{if("LI"===t.target.tagName){const e=t.target,n=t.target.querySelector("button");e.removeChild(n);const r=l.projectsArray.find(t=>t.title===e.innerText);e.appendChild(n);const o=l.projectsArray.indexOf(r);T(r.items,o),e.classList.toggle("activate"),e.parentElement.querySelectorAll("li").forEach(t=>{t!==e&&t.classList.remove("activate")})}};var $=()=>{const t=document.getElementById("projectForm");t.classList.toggle("d-none"),setTimeout(()=>t.classList.toggle("inactive"),150)};var A=(t,e,n,r="")=>({title:t,description:e,dueDate:n,items:[],checkList:r});var x=t=>{t.preventDefault();const e=[],n=t.target;n.querySelectorAll("input").forEach(t=>{e.push(t.value)});const r=A(...e);u.populateProjectList(r),n.reset(),$()};var k=()=>{const{projectUl:t}=o();t.addEventListener("click",S)},B=()=>{const{projectContainer:t,showFormBtn:e,projectUl:n}=o();t.addEventListener("submit",x),e.addEventListener("click",$);n.querySelectorAll("button").forEach(t=>{t.addEventListener("click",u.deleteProject)})};var I=t=>{const{appendContent:e}=o(),n=document.createElement("div");n.classList="col-5";const s=document.createElement("ul"),c=document.createElement("h1");c.innerText="Project",s.id="projectList",s.classList="d-flex justify-content-center flex-column",s.innerHTML=r(t),n.appendChild(c),n.appendChild(s),n.appendChild(i("projectForm")),e.appendChild(n);const l=a(null,'<i class="fas fa-plus"></i>');l.id="showFormBtn",n.appendChild(l),u.projectFormInputs(),k(),B()};var q=()=>{const{mainContainer:t}=o();t.innerHTML='\n  \n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA==" crossorigin="anonymous" />\n      <title>To Do list</title>\n    </head>\n    <body class="bg-primary">\n    <div class="container">\n        <p class="display-4 text-center font-weight-bold my-5">ToDo List</p>\n        <div class="row" id="appendContent">\n        \n        </div>\n        </div>\n      \n        </body>\n  </html>\n  \n  '};(()=>{const t=A("Today","LiveSession","Today","Important");0===l.projectsArray.length&&l.projectsArray.push(t),q(),I(l.projectsArray)})()}});