// random ad
let adTexts = [
    "Do you know the likelihood that your colleague has a common hobby with you is 73.6%? Of course, you don't know because we made up this data. But have a try and ask them, maybe you'll find someone...",
    "When you take the time to get to know someone on a personal level, you may be more likely to trust each other's intentions and actions. This can lead to a more supportive and productive work environment.",
    "When people feel comfortable and connected with their colleagues, they may be more engaged and motivated in their work.",
    "Time to expand your professional network! When you get to know people outside of your immediate team, you may learn about new projects, opportunities, or career paths that you wouldn't have otherwise known about."
  ];

function getRandomAdText() {
    var randomIndex = Math.floor(Math.random() * adTexts.length);
    var adText = adTexts[randomIndex];
    
    var textStyles = [
        {
            styleClass: 'cute'
          },
          {
            styleClass: 'elegant'
          },
          {
            styleClass: 'playful'
          },
          {
            styleClass: 'sophisticated'
          },
          {
            styleClass: 'quirky'
          }
    ];
    var randomStyle = textStyles[Math.floor(Math.random() * textStyles.length)];
    
    return '<span class="' + randomStyle.styleClass + '">' + adText + '</span>';
  }
  
  window.onload = function() {
    var adText = getRandomAdText();
    document.getElementById("random_opener").innerHTML = adText;
    animateAd();
  };
  
  function animateAd() {
    var adContainer = document.getElementById('ad-container');
    adContainer.classList.add('animate');
    
  }

//character initial setup
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
  },{
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
    name:'Jose',
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
  },  {
    name:'Jess',
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

// based on the selected character to generate spark
const gridCards = document.querySelectorAll('.grid_card');

  function generateMessage(characterIndex) {
    const character = characters[characterIndex];
  
    return `${character.name} is ${character.gender} and is my ${character.relationship}.
    ${character.name} is interested in ${character.interests}. 
    Normally, ${character.name} hates ${character.hates}. 
    In addition, ${character.name} ${character.other_info}.
    Today I will meet and greet this person ${character.talking_context}. I hope to ${character.goal}. Based on the given information, if you were me, what would you say in ${character.spark_for} to impress the person about ${character.sell_my}, and ${character.next_step} with me? Please use ${character.tone} tone. Please limit your response to less than a hundred words`;
  }
  
  function Loading_spark() {
    const Loading_spark = document.getElementById('response-container');
    Loading_spark.innerHTML = '...';
    const animationInterval = setInterval(() => {
      Loading_spark.innerHTML += '.';
    }, 500);
    return animationInterval;
  }
  
  function getResponse(message) {
    const api_spark = document.getElementById('response-container');
    api_spark.innerHTML = '';
    const animationInterval = Loading_spark();
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.json())
      .then(data => {
        clearInterval(animationInterval);
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('response-context')
        responseDiv.innerHTML = data.message;
        api_spark.innerHTML = '';
        api_spark.appendChild(responseDiv);
      })
      .catch(error => console.error(error));
  }
  
  gridCards.forEach((card, i) => {
    
    card.addEventListener('click', () => {
      const message = generateMessage(i);
      getResponse(message);
    });
  });


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

//jump to login page
const $tologins = document.querySelectorAll('.tologin');
$tologins.forEach($tologin => {
  $tologin.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});

