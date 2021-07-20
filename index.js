// Write your code in this file!
const currentUser = 'Grace Hopper';

function welcomeMessage() {
  console.log ('Welcome to Flatbook, ' + currentUser);
}
welcomeMessage();

function excitedWelcomeMessage () {
  console.log ('WELCOME TO FLATBOOK, ' + currentUser.toLocaleUpperCase() + '!');
}
excitedWelcomeMessage();

const firstInitial = currentUser[0]
function shortGreeting () {
  console.log ('Welcome, ' + `${firstInitial} ${currentUser.slice(6)}!`);
}
shortGreeting();