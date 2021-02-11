let monkeyName = '';
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');

document.querySelector('.btn_hide1').addEventListener('click', () => {
 
  const blockOne = document.querySelector('.block1');
  do {
    monkeyName = prompt('What is name first monkey?', '');
  } while (monkeyName === '');
 
  if (monkeyName === 'Alex') {
    document.querySelector('.first').textContent = 'Меня зовут Саша =)';
  } 
  
  else if (monkeyName === 'Baba') {
    blockOne.style.display = 'none';
  } else {
    img1.setAttribute('src', './image/monkey_mood.png');
    document.querySelector('.first').textContent = 'Меня не так зовут =(';
  }

})

document.querySelector('.btn_hide2').addEventListener('click', () => {
  do {
    monkeyName = prompt('What is name first monkey?', '');
  } while (monkeyName === '');
 
  if (monkeyName === 'Ruslan') {
    document.querySelector('.second').textContent = 'Меня зовут Руслан =)';
  } else {
    img2.setAttribute('src', './image/monkey_mood.png');
    document.querySelector('.second').textContent = 'Меня не так зовут =(';
  }
  
})

document.querySelector('.btn_hide3').addEventListener('click', () => {
  do {
    monkeyName = prompt('What is name first monkey?', '');
  } while (monkeyName === '');
 
  if (monkeyName === 'Viktor') {
    document.querySelector('.third').textContent = 'Меня зовут Виктор =)';
  } else {
    img3.setAttribute('src', './image/monkey_mood.png');
    document.querySelector('.third').textContent = 'Меня не так зовут =(';
  }
  
})
