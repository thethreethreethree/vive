// Questions array with four answer options each
const questions = [
  {
    question: "In a group project, you prefer to:",
    options: [
      "Take the lead and organize the group.", // E
      "Contribute ideas but let someone else lead.", // E/I
      "Support others in their roles.", // I
      "Work independently and submit your part." // I
    ],
    trait: "EI"
  },
  {
    question: "When making plans, you typically:",
    options: [
      "Like to stick to a detailed schedule.", // J
      "Prefer to have a rough outline but keep it flexible.", // P
      "Don’t mind a little spontaneity.", // P
      "Avoid making plans and go with the flow." // P
    ],
    trait: "JP"
  },
  {
    question: "You enjoy discussing:",
    options: [
      "Concrete facts and data.", // S
      "Theoretical concepts and possibilities.", // N
      "People's feelings and experiences.", // F
      "Strategies and logical approaches." // T
    ],
    trait: "SN"
  },
  {
    question: "In a heated debate, you tend to:",
    options: [
      "Focus on the logical aspects.", // T
      "Consider the emotional impact on others.", // F
      "Seek common ground.", // F
      "Stand firmly by your position." // T
    ],
    trait: "TF"
  },
  {
    question: "When approaching a new task, you prefer:",
    options: [
      "Having a clear plan before starting.", // J
      "Diving in and figuring it out as you go.", // P
      "Asking for guidance from others first.", // E/I
      "Doing research before taking action." // N/S
    ],
    trait: "JP"
  },
  {
    question: "During discussions, you:",
    options: [
      "Express your ideas freely.", // E
      "Listen more than you speak.", // I
      "Weigh the pros and cons.", // T
      "Consider how others feel about the topic." // F
    ],
    trait: "EI"
  },
  {
    question: "When faced with a decision, you:",
    options: [
      "Gather all the facts and details.", // S
      "Look at the bigger picture.", // N
      "Think logically about the consequences.", // T
      "Trust your gut feeling." // F
    ],
    trait: "SN"
  },
  {
    question: "In your daily routine, you prefer:",
    options: [
      "Having a structured schedule.", // J
      "Keeping things open to change.", // P
      "Following a routine but allowing for spontaneity.", // P
      "Not planning at all." // P
    ],
    trait: "JP"
  },
  {
    question: "In social settings, you feel:",
    options: [
      "Energized by talking to new people.", // E
      "Comfortable with familiar faces.", // I
      "Overwhelmed and prefer to observe.", // I
      "Enjoying both socializing and solitude." // E/I
    ],
    trait: "EI"
  },
  {
    question: "When solving a problem, you prefer:",
    options: [
      "Using tried-and-true methods.", // S
      "Thinking outside the box.", // N
      "Analyzing all available data.", // T
      "Considering how it affects others." // F
    ],
    trait: "SN"
  },
  {
    question: "Your friends would describe you as:",
    options: [
      "Outgoing and adventurous.", // E
      "Thoughtful and introspective.", // I
      "Logical and straightforward.", // T
      "Compassionate and supportive." // F
    ],
    trait: "EI"
  },
  {
    question: "You prefer to work:",
    options: [
      "In a team with open communication.", // E
      "Independently with minimal interruptions.", // I
      "With clear guidance from a leader.", // J
      "With flexibility and creativity." // P
    ],
    trait: "EI"
  },
  {
    question: "When confronted with a challenge, you:",
    options: [
      "Take it head-on with enthusiasm.", // E
      "Carefully evaluate all possible outcomes.", // T
      "Consider the emotional impact on yourself and others.", // F
      "Think about how to handle it later." // P
    ],
    trait: "EI"
  },
  {
    question: "During group activities, you:",
    options: [
      "Naturally take the lead.", // E
      "Prefer to support the leader.", // I
      "Think critically about the task.", // T
      "Help everyone get along." // F
    ],
    trait: "EI"
  },
  {
    question: "You usually approach change by:",
    options: [
      "Planning everything beforehand.", // J
      "Being excited about new possibilities.", // N
      "Taking it step by step.", // P
      "Going with the flow." // P
    ],
    trait: "JP"
  }
];

// Color mapping based on personality type
const personalityColors = {
  'INTJ': 'Purple',
  'INTP': 'Blue',
  'ENTJ': 'Red',
  'ENTP': 'Orange',
  'INFJ': 'Green',
  'INFP': 'Light Blue',
  'ENFJ': 'Sunset Pink',
  'ENFP': 'Light Green',
  'ISTJ': 'Dark Blue',
  'ISFJ': 'Teal',
  'ESTJ': 'Maroon',
  'ESFJ': 'Pink',
  'ISTP': 'Navy Blue',
  'ISFP': 'Turquoise',
  'ESTP': 'Bright Red',
  'ESFP': 'Peach'
};

// Traits tracker
let traits = {
  'E': 0, 'I': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0
};

let currentQuestion = 0;

// Function to display the next question
function showQuestion() {
  if (currentQuestion < questions.length) {
    const questionObj = questions[currentQuestion];
    document.getElementById('question-text').textContent = questionObj.question;
    document.getElementById('option1').textContent = questionObj.options[0];
    document.getElementById('option2').textContent = questionObj.options[1];
    document.getElementById('option3').textContent = questionObj.options[2];
    document.getElementById('option4').textContent = questionObj.options[3];
  } else {
    displayResult();
  }
}

// Function to handle answer selection
function selectAnswer(option) {
  const question = questions[currentQuestion];
  // Update traits based on selected answer
  if (question.trait === "EI") {
    if (option === 1) traits['E']++;
    else if (option === 2) traits['I']++;
  } else if (question.trait === "SN") {
    if (option === 1) traits['S']++;
    else if (option === 2) traits['N']++;
  } else if (question.trait === "TF") {
    if (option === 1) traits['T']++;
    else if (option === 2) traits['F']++;
  } else if (question.trait === "JP") {
    if (option === 1) traits['J']++;
    else if (option === 2) traits['P']++;
  }
  currentQuestion++;
  showQuestion();
}

// Function to display the result
function displayResult() {
  const personalityType = getPersonalityType();
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('personality-type').textContent = personalityType;
  document.getElementById('personality-color').textContent = personalityColors[personalityType];
}

// Function to determine personality type
function getPersonalityType() {
  const personality = 
    (traits['E'] > traits['I'] ? 'E' : 'I') + 
    (traits['S'] > traits['N'] ? 'S' : 'N') + 
    (traits['T'] > traits['F'] ? 'T' : 'F') + 
    (traits['J'] > traits['P'] ? 'J' : 'P');
  return personality;
}

// Start the quiz
showQuestion();
