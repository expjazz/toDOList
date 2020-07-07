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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA==" crossorigin="anonymous" />
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