import elements from './elements';

const itNote = (e) => {
  const { mainContainer } = elements.ele();
  mainContainer.classList.add('blur-container');
  const notesPopUp = document.createElement('input');
  notesPopUp.classList = 'textarea';
  mainContainer.parentElement.appendChild(notesPopUp);
};

export default { itNote };