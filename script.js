// Questions array with two answer options each
const questions = [
  {
    question: "When at a party, do you:",
    options: ["Talk to everyone you meet", "Stick to people you know well"],
    trait: "EI"
  },
  {
    question: "Do you prefer to focus on:",
    options: ["Facts and details", "Big ideas and possibilities"],
    trait: "SN"
  },
  {
    question: "When making decisions, do you:",
    options: ["Focus on logic and consistency", "Consider people's feelings"],
    trait: "TF"
  },
  {
    question: "How do you plan your day:",
    options: ["Prefer to have things decided", "Stay open to last-minute options"],
    trait: "JP"
  },
  {
    question: "Do you feel more comfortable:",
    options: ["Interacting with groups", "Being in quiet, private spaces"],
    trait: "EI"
  },
  {
    question: "When solving problems, do you prefer:",
    options: ["Step-by-step approaches", "Creative, out-of-the-box thinking"],
    trait: "SN"
  },
  {
    question: "Which do you value more:",
    options: ["Truth and justice", "Harmony and empathy"],
    trait: "TF"
  },
  {
    question: "In daily life, do you:",
    options: ["Follow a set schedule", "Go with the flow"],
    trait: "JP"
  },
  {
    question: "Do you find energy in:",
    options: ["Socializing and external activities", "Introspective and solo activities"],
    trait: "EI"
  },
  {
    question: "When processing information, do you:",
    options: ["Focus on practical applications", "Imagine potential futures and patterns"],
    trait: "SN"
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
  'ENFJ': 'Sunset Pink',  // Changed from Yellow to Sunset Pink
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
  } else {
    showResult();
  }
}

// Function to handle answer selection and progress
function selectAnswer(option) {
  const currentTrait = questions[currentQuestion].trait;

  if (currentTrait === 'EI') {
    traits[option === 1 ? 'E' : 'I']++;
  } else if (currentTrait === 'SN') {
    traits[option === 1 ? 'S' : 'N']++;
  } else if (currentTrait === 'TF') {
    traits[option === 1 ? 'T' : 'F']++;
  } else if (currentTrait === 'JP') {
    traits[option === 1 ? 'J' : 'P']++;
  }

  currentQuestion++;
  showQuestion();
}

// Function to calculate personality type and show result
function showResult() {
  const personalityType =
    (traits.E > traits.I ? 'E' : 'I') +
    (traits.S > traits.N ? 'S' : 'N') +
    (traits.T > traits.F ? 'T' : 'F') +
    (traits.J > traits.P ? 'J' : 'P');

  const personalityColor = personalityColors[personalityType];

  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';

  document.getElementById('personality-type').textContent = personalityType;
  document.getElementById('personality-color').textContent = personalityColor;
  document.getElementById('personality-color').style.color = personalityColor.toLowerCase();
}

// Start the test
showQuestion();
