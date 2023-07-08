const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('input-field');
const questionForm = document.getElementById('question_form');
const $intro_bot = document.getElementById('intro_bot')
const $intro_user = document.getElementById('intro_user')

const characters = [{
  name: 'Jane',
  gender: 'female',
  relationship: 'colleague',
  interests: ['hiking', 'cats'],
  hates: 'politics',
  talking_context: 'at coffee break',
  spark_for: 'casual chat starter',
  sell_my: 'joke about job',
  next_step: 'spend relaxed lunchtime',
  other_info: 'has a daughter in primary school',
  my_goal: 'get more information on how other people are performing',
  tone: 'casual'
}, {
  name: 'John',
  gender: 'male',
  relationship: 'people with the same passion as me',
  interests: ['footabll', 'dogs'],
  hates: 'social',
  talking_context: 'in washroom',
  spark_for: 'personal greeting',
  sell_my: 'my passion and knowledge about sports',
  next_step: 'join my project team',
  other_info: 'have a lot of knowledge on debugging',
  my_goal: 'work with him and learn from his expereience',
  tone: 'relaxed and considerate'
},
{
  name: 'Jose',
  gender: 'neutral',
  relationship: 'mentor',
  interests: ['investment', 'cars'],
  hates: 'travel',
  talking_context: 'meeting',
  spark_for: 'opening remark for team presentation',
  sell_my: 'the quality and high aim of our team work',
  next_step: 'give positive comments',
  other_info: 'forgets things easily unless reminded repeatedly',
  my_goal: 'get higher marks in performance evaluation',
  tone: 'confident and ambitious'
}, {
  name: 'Jess',
  gender: 'female',
  relationship: 'LinkedIn contact',
  interests: ['coding', 'start-ups'],
  hates: 'gossip',
  talking_context: 'online',
  spark_for: 'LinkedIn message',
  sell_my: 'my euthusiasm on work',
  next_step: 'have a coffee chat',
  other_info: 'likes to keep distance until she finds common interest with others',
  my_goal: 'gather some information about her department and business, and know if they may have head count for hiring next quarter',
  tone: 'respectful and passionate'
}
]

//add new char
// Load characters from localStorage and append to characters array
var new_characters = [];
// Retrieve new_characters array from localStorage
var newCharacters = JSON.parse(localStorage.getItem('new_characters'));

// Check if newCharacters is not null or undefined
if (newCharacters !== null && newCharacters !== undefined) {
  // Append newCharacters array to characters array
  new_characters = new_characters.concat(newCharacters);

  // Loop through newCharacters array and append grid cards to grid container
  for (var i = 0; i < newCharacters.length; i++) {
    var new_character = newCharacters[i];
    var gridCard = document.createElement('div');
    gridCard.className = 'grid_card';

    var avatarSrc = new_character.gender === 'Male' ? 'image/avatar9.png' : 'image/avatar8.png';
    gridCard.innerHTML = `
      <img src="${avatarSrc}" alt="${new_character.name}" class="avatar">
      <div class="infowrapper">
        <p class="char_name">${new_character.name}</p>
        <button class="delete_button" data-index="${i}">X</button>
      </div>
    `;

    var gridContainer = document.querySelector('.grid_container');
    var lastGridCard = gridContainer.lastElementChild;
    gridContainer.insertBefore(gridCard, lastGridCard);

    // Add click event listener to delete button
    var deleteButton = gridCard.querySelector('.delete_button');
    deleteButton.addEventListener('click', function (event) {
      var index = event.target.dataset.index;
      // Remove grid card from grid container
      event.target.parentElement.parentElement.remove();
      // Remove corresponding character from characters array
      new_characters.splice(index, 1);
      // Update characters array in local storage
      localStorage.setItem('new_characters', JSON.stringify(new_characters));
      // Log the updated characters array for testing
      console.log(new_characters);
    });
  }
}
// Log the characters array for testing
console.log(characters);

// Function to generate a message using character information
function generateMessage(character) {
  if (character.talking_context) {
    const personal_data = `${character.name} is ${character.gender} and is my ${character.relationship}. ${character.name} is interested in ${character.interests.join(', ')}. Normally, ${character.name} hates ${character.hates}. In addition, ${character.name} ${character.other_info}. Today I will meet and greet this person at ${character.talking_context}. Based on the given information, if you were me, what would you say in this circumstance? `
    return personal_data
  } else {
    // const personal_data = character.name  + 'is a ' + character.gender + ' gender ' + ' and is my ' + character.relationship + '.' + character.name + ' is interested in ' + character.interests.join(', ') + '.' + '  However, ' + character.name + ' hates ' + character.hates + '. ' + "In addition, " + character.name + ' does ' + character.other_info + '.' + 'One day I meet this guy at ' + '' + ' based on the given information, '
    const personal_data = `${character.name} is ${character.gender} and is my ${character.relationship}. ${character.name} is interested in ${character.interests.join(', ')}. Normally, ${character.name} hates ${character.hates}. In addition, ${character.name} ${character.other_info}. Today I will meet and greet this person. Based on the given information, if you were me, what would you say in this circumstance? `
    return personal_data
  }
}

document.querySelector('.grid_container').addEventListener('click', function (event) {
  var target = event.target;

  // Check if the clicked element has the class "grid_card"
  if (target.classList.contains('grid_card')) {
    // Remove bold class from all grid cards
    var gridCards = document.querySelectorAll('.grid_card');
    gridCards.forEach(function (card) {
      card.classList.remove('bold');
    });

    // Add bold class to the clicked grid card
    target.classList.add('bold');

    // Get the name of the clicked character from either the "characters" or "new_characters" array
    var name;
    if (characters.some(function (character) {
      return character.name === target.querySelector('.char_name').textContent;
    })) {
      name = target.querySelector('.char_name').textContent;
    } else if (new_characters.some(function (character) {
      return character.name === target.querySelector('.char_name').textContent;
    })) {
      name = target.querySelector('.char_name').textContent;
    }

    // Generate a message using the retrieved character's information
    if (name) {
      var character = characters.find(function (character) {
        return character.name === name;
      }) || new_characters.find(function (character) {
        return character.name === name;
      });
      personal_data = generateMessage(character); // Assign the returned message to the global variable
      console.log(personal_data);

      // Remove the existing record from local storage
      localStorage.removeItem('personaldata');

      // Get the existing "personaldata" record from local storage and parse it as an array
      var existingPersonalData = localStorage.getItem('personaldata');
      var personalDataArray = existingPersonalData ? JSON.parse(existingPersonalData) : [];

      // Push the new record into the personal data array
      personalDataArray = personalDataArray.concat(personal_data);

      // Convert the personal data array back to a string and store it in local storage
      localStorage.setItem('personaldata', JSON.stringify(personalDataArray));
    }
  }
});

//function to assemble quetion to send GPT and retrieve response
function delete_intro() {
  if ($intro_bot && $intro_user) {
  }
  $intro_bot.remove()
  $intro_user.remove()
}

questionForm.addEventListener('submit', async (event) => {

  event.preventDefault();
  delete_intro()

  const existingPersonalData = localStorage.getItem('personaldata') || '';


  const message = existingPersonalData + ' ' + inputField.value;


  const input = inputField.value
  inputField.value = '';
  console.log(message);


  displayMessage('user', input);


  const messageElem = document.createElement('div');
  messageElem.classList.add('message', 'bot');
  messageElem.textContent = 'Reply to be displayed...'
  chatBox.appendChild(messageElem);



  const response = await sendMessage(message)

  displayMessage('bot', response.message);
  localStorage.removeItem('personaldata');
});

async function sendMessage(message) {

  const response = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  return data;
}

function displayMessage(role, content) {
  const messageElem_block = document.createElement('div')

  // bot msg
  const bot_logo_image = document.createElement('img')
  bot_logo_image.setAttribute('class', 'logo_image')
  bot_logo_image.setAttribute('src', 'image/Introvert copilot Logo smaller.png')
  bot_logo_image.setAttribute('alt', 'Introvert Copilot')
  const $save_button = document.createElement('button')
  $save_button.classList.add('save_spark')
  $save_button.type = 'button'
  $save_button.textContent = 'Save'


  //user msg
  const user_logo_image = document.createElement('img')
  user_logo_image.setAttribute('class', 'logo_image')
  user_logo_image.setAttribute('src', 'image/user.png')
  user_logo_image.setAttribute('alt', "'user's avatar'")

  const messageElem = document.createElement('div');
  messageElem.classList.add('message', role);


  chatBox.appendChild(messageElem_block);

  // If role is "bot", update message with actual content when response is received
  if (role === 'bot') {
    sendMessage(content)
      .then(response => {
        const botMessages = document.querySelectorAll(".message.bot");
        const secondToLastBotMessage = botMessages[botMessages.length - 2];
        secondToLastBotMessage.remove()
        messageElem.textContent = response.message;
        // console.log(response.message);
      })
      .catch(error => {
        console.log('Error fetching response:', error);
      });

    messageElem_block.append(bot_logo_image)
    messageElem_block.append(messageElem)
    messageElem_block.append($save_button)
    messageElem_block.classList.add('aspark')



  }
  //role = 'user'
  else {
    messageElem.textContent = content;
    messageElem_block.append(user_logo_image)
    messageElem_block.append(messageElem)
    messageElem_block.classList.add('afollowup')
  }
}

//dark mode
const darkModeButton = document.getElementById('mymode');
const htmlRoot = document.querySelector('html');


darkModeButton.addEventListener('click', () => {
  if (htmlRoot.getAttribute('data-bs-theme') === 'dark') {
    htmlRoot.removeAttribute('data-bs-theme');
    darkModeButton.textContent = 'Dark mode'
  } else {
    htmlRoot.setAttribute('data-bs-theme', 'dark');
    darkModeButton.textContent = 'Light mode'
  }
});

//store saved msg into localstorage
document.getElementById('chat-box').addEventListener('click', function (event) {
  if (event.target.classList.contains('save_spark')) {
    const botDiv = event.target.previousElementSibling;
    const botText = botDiv.textContent.trim();
    let savedMsgs = JSON.parse(localStorage.getItem('savedMsgs')) || [];
    savedMsgs.push(botText);
    localStorage.setItem('savedMsgs', JSON.stringify(savedMsgs));
  }
});



