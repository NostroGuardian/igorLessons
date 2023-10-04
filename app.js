const taskArray = ['Ivan', 'Arthur', 'Igor', 'Yasha', 'Ilya', 'Voice'];

const actionButton = document.querySelector('.actionButton');
const usersWrapper = document.querySelector('.users');
actionButton.addEventListener('click', showUsers);
function showUsers() {
  taskArray.sort().forEach((el, i) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h1 class='card__name'>${i + 1}. ${el}</h1>
    `;
    usersWrapper.append(card);
  });
}
