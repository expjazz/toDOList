// import projectList from './projectUiHeading';
import elements from './elements';

const mainPage = () => {
  const { mainContainer } = elements.ele();
  mainContainer.innerHTML = `
  
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>To Do list</title>
    </head>
    <body class="bg-primary">
      <div class="container">
        <p class="display-4 text-center font-weight-bold my-5">ToDo List</p>
        <div class="row" id="appendContent">

        </div>
      </div>
    </body>
  </html>
  
  `;
};

export default { mainPage };