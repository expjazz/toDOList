!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}({0:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);n(0);var r=t=>t.map((t,e)=>`<li data-title="${t.title}">${t.title} <button class="btn-danger" data-title="${t.title}" id="${e}-deleteBtn"><i class="fas fa-trash" data-title="${t.title}"></i></button></td>\n</li>`).join("");var o=()=>({mainContainer:document.querySelector(".container"),appendContent:document.getElementById("appendContent"),projectForm:document.getElementById("projectForm"),projectUl:document.getElementById("projectList"),itemContainer:document.getElementById("itemContainer"),itemForm:document.getElementById("itemForm"),itemsTable:document.querySelector(".table"),itemNote:document.getElementById("itemNote"),projectContainer:document.querySelector(".col-5"),showFormBtn:document.getElementById("showFormBtn")});var s=t=>{const e=document.createElement("form");return e.classList="form-group d-none inactive",e.id=t,e};var i=(t=null,e=null)=>{const n=document.createElement("button");return t&&(n.innerText=t),n.classList="btn btn-dark w-25 py-3",e&&(n.innerHTML='<i class="fas fa-plus"></i>'),n.type="submit",n};var a=t=>`<div class="form-group">\n  <label for="${t}">${t}</label>\n  <input type="text" class="form-control">\n  </div>`,l=t=>`<div class="form-group">\n<label for="${t}">${t}</label>\n<input type="datetime-local" class="form-control dateTime">\n<small class='danger d-none'> The date needs to be in the future </small>\n</div>\n`;var c={projectsArray:JSON.parse(localStorage.getItem("Projects"))||[]};const d=(t=null)=>{const{projectUl:e}=o();null!==t&&c.projectsArray.push(t),e.innerHTML=r(c.projectsArray),e.querySelectorAll("button").forEach(t=>{t.addEventListener("click",p)}),localStorage.setItem("Projects",JSON.stringify(c.projectsArray))},p=t=>{const e=t.target.dataset.title,n=c.projectsArray.filter(t=>t.title!==e);c.projectsArray=n,d()};var u={createNewProject:t=>{t.preventDefault()},deleteProject:p,populateProjectList:d,projectFormInputs:()=>{const{projectForm:t}=o(),e=a("title"),n=a("description"),r=l("date"),s=i("Create Project");t.innerHTML=e+n+r,t.appendChild(s)}};var m=t=>{let e=!0;if("datetime-local"===t.type){const n=new Date,r=new Date(t.value);n.getTime()>r.getTime()?(e=!1,t.nextElementSibling.classList.remove("d-none"),t.nextElementSibling.classList.add("text-danger")):t.nextElementSibling.classList.add("d-none")}return""===t.value&&(e=!1),e};var y=(t,e,n,r,o="",s="",i=null)=>({title:t,description:e,dueDate:n,priority:r,notes:o,checkList:s,id:i});var v=t=>{const e=t.target.parentElement.querySelector("form")||document.getElementById("itemForm");e.classList.toggle("d-none"),setTimeout(()=>e.classList.toggle("inactive"),150)};const h=t=>{t.stopPropagation();const e=t.target.parentElement.children[0].innerText,n=t.target.parentElement.parentElement.parentElement.dataset.index,{mainContainer:r}=o();r.classList.add("blur-container");const s=document.createElement("input");t.target.classList.contains("dueDate")&&(s.type="datetime-local"),s.id="itNote",s.value=t.target.innerText;const i=t;s.classList="textarea",r.parentElement.appendChild(s);const a=c.projectsArray[n].items[e-1];s.addEventListener("keydown",t=>{((t,e,n,r,s)=>{t[s]=n.target.value;const i=e.target,{mainContainer:a}=o();if("Enter"===n.key){i.innerText=n.target.value,a.classList.remove("blur-container");const t=document.querySelector("#itNote");t.parentNode.removeChild(t)}})(a,i,t,0,i.target.classList[0])})};var f=()=>{const{itemsTable:t}=o();t.querySelectorAll("tr").forEach((t,e)=>{if(0!==e){const e=t.querySelectorAll("td");e.forEach((t,n)=>{n<e.length-1&&t.addEventListener("click",h)})}})};const g=t=>{let e=0;const{itemsTable:n}=o(),r=n.dataset.index;n.querySelector("tbody").innerHTML=`\n  ${t.map(t=>(e+=1,`<tr>\n    <th scope="row">${e}</th>\n    <td class='title'>${t.title}</td>\n    <td class='description'>${t.description}</td>\n    <td class='dueDate'>${t.dueDate}</td>\n    <td class='priority'>${t.priority}</td>\n    <td id="${e}itemNote" class='notes'>${t.notes}</td>\n    <td class='checkList'>${t.checkList}</td>\n    <td><button class="btn btn-danger" id="${e}-deleteBtn"><i class="fas fa-trash"></i></button></td>\n  </tr>`)).join("")}\n`,n.querySelectorAll("button").forEach(t=>{const{id:e}=t,n=e.split("-")[0],o=c.projectsArray[r];t.addEventListener("click",()=>{L(o,n)})}),f(),localStorage.setItem("Projects",JSON.stringify(c.projectsArray))},L=(t,e)=>{const n=t.items.filter(n=>n!==t.items[e-1]);t.items=n,g(t.items)};var b={deleteTask:L,deleteRow:g};const E=t=>{t.preventDefault();const e=[],n=t.target;let r=!0;if(n.querySelectorAll("input").forEach(t=>{r=m(t),!1===r?(t.classList.add("is-invalid"),t.classList.remove("is-valid")):(t.classList.add("is-valid"),t.classList.remove("is-invalid")),e.push(t.value)}),r=Array.from(n.querySelectorAll("input")).every(t=>t.classList.contains("is-valid")),!1===r)return;n.querySelectorAll("input").forEach(t=>t.classList.remove("is-valid"));const{index:o}=n.parentElement.children[0].dataset;n.reset();const s=y(...e),i=c.projectsArray[o];i.items.push(s),b.deleteRow(i.items),v(t)};var j=t=>{const e=a("title"),n=a("description"),r=l("dueDate"),o=a("priority"),s=a("notes"),c=a("checkList"),d=i("Create item");t.addEventListener("submit",E),t.innerHTML=e+n+r+o+s+c,t.appendChild(d)};var C=(t,e)=>{let n=0;return`\n<table class="table" data-index='${e}'>\n<thead>\n  <tr>\n    <th scope="col">#</th>\n    <th scope="col">Title</th>\n    <th scope="col">Description</th>\n    <th scope="col">DueDate</th>\n    <th scope="col">Priority</th>\n    <th scope="col">Notes</th>\n    <th scope="col">Checklist</th>\n  </tr>\n</thead>\n<tbody>\n  ${t.map(t=>(n+=1,`<tr>\n    <th scope="row">${n}</th>\n    <td class='title'>${t.title}</td>\n    <td class='description'>${t.description}</td>\n    <td class='dueDate'>${t.dueDate}</td>\n    <td class='priority'>${t.priority}</td>\n    <td id="${n}itemNote" class='notes'>${t.notes}</td>\n    <td class='checkList'>${t.checkList}</td>\n    <td><button class="btn btn-danger" id="${n}-deleteBtn"><i class="fas fa-trash"></i></button></td>\n\n  </tr>`)).join("")}\n</tbody>\n</table> `};const S=(t,e)=>{const{appendContent:n}=o(),r=s("itemForm");j(r),document.getElementById("itemContainer")&&document.getElementById("itemContainer").parentElement.removeChild(document.getElementById("itemContainer"));const a=document.createElement("div");a.classList="col-7",a.id="itemContainer",n.appendChild(a),a.innerHTML=C(t,e),document.querySelector(".table").querySelectorAll("button").forEach(t=>{const{id:n}=t,r=n.split("-")[0],o=c.projectsArray[e];t.addEventListener("click",()=>{b.deleteTask(o,r)})}),a.appendChild(r);const l=i("Add Todo Items",'<i class="fas fa-plus"></i>');a.append(l),l.addEventListener("click",v),f()};var T=t=>{if("LI"===t.target.tagName){const e=t.target,n=t.target.querySelector("button");e.removeChild(n);const r=c.projectsArray.find(t=>t.title===e.innerText);e.appendChild(n);const o=c.projectsArray.indexOf(r);S(r.items,o),e.classList.toggle("activate"),e.parentElement.querySelectorAll("li").forEach(t=>{t!==e&&t.classList.remove("activate")})}};var A=()=>{const t=document.getElementById("projectForm");t.classList.toggle("d-none"),setTimeout(()=>t.classList.toggle("inactive"),150)};var $=(t,e,n,r="")=>({title:t,description:e,dueDate:n,items:[],checkList:r});var x=t=>{t.preventDefault();const e=[],n=t.target;let r=!0;if(n.querySelectorAll("input").forEach(t=>{r=m(t),!1===r?(t.classList.add("is-invalid"),t.classList.remove("is-valid")):(t.classList.add("is-valid"),t.classList.remove("is-invalid")),e.push(t.value)}),r=Array.from(n.querySelectorAll("input")).every(t=>t.classList.contains("is-valid")),!1===r)return;n.querySelectorAll("input").forEach(t=>t.classList.remove("is-valid"));const o=$(...e);u.populateProjectList(o),n.reset(),A()};var k=()=>{const{projectUl:t}=o();t.addEventListener("click",T)},q=()=>{const{projectContainer:t,showFormBtn:e,projectUl:n}=o();t.addEventListener("submit",x),e.addEventListener("click",A);n.querySelectorAll("button").forEach(t=>{t.addEventListener("click",u.deleteProject)})};var w=t=>{const{appendContent:e}=o(),n=document.createElement("div");n.classList="col-5";const a=document.createElement("ul"),l=document.createElement("h1");l.innerText="Project",a.id="projectList",a.classList="d-flex justify-content-center flex-column",a.innerHTML=r(t),n.appendChild(l),n.appendChild(a),n.appendChild(s("projectForm")),e.appendChild(n);const c=i(null,'<i class="fas fa-plus"></i>');c.id="showFormBtn",n.appendChild(c),u.projectFormInputs(),k(),q()};var D=()=>{const{mainContainer:t}=o();t.innerHTML='\n  \n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA==" crossorigin="anonymous" />\n      <title>To Do list</title>\n    </head>\n    <body class="bg-primary">\n    <div class="container">\n        <p class="display-4 text-center font-weight-bold my-5">ToDo List</p>\n        <div class="row" id="appendContent">\n        \n        </div>\n        </div>\n      \n        </body>\n  </html>\n  \n  '};(()=>{const t=$("Today","LiveSession","Today","Important");0===c.projectsArray.length&&c.projectsArray.push(t),D(),w(c.projectsArray)})()}});