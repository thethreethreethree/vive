let traits = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0
};

function selectAnswer(option) {
  console.log("Selected Option: ", option); // Debugging line

  // Example logic for answering questions
  if (option === 1) {
    traits.E++;
    traits.S++;
    traits.T++;
    traits.J++;
  } else {
    traits.I++;
    traits.N++;
    traits.F++;
    traits.P++;
  }

  showResult();
}

const personalityColors = {
  'ENFJ': 'I LOVE YOU',
  'ENTJ': 'Red',
  'ESFJ': 'Blue',
  'ESTJ': 'Green',
  'INFJ': 'Purple',
  'INTJ': 'Silver',
  'ISFJ': 'Pink',
  'ISTJ': 'Orange',
  'ENFP': 'Yellow',
  'ENTP': 'Black',
  'ESFP': 'Gold',
  'ESTP': 'White',
  'INFP': 'Light Blue',
  'INTP': 'Turquoise',
  'ISFP': 'Violet',
  'ISTP': 'Brown'
};

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
  
  if (personalityType === 'ENFJ') {
    document.getElementById('personality-color').textContent = personalityColor; // Displays "I LOVE YOU"
    document.getElementById('color-box').style.display = 'none';
  } else {
    document.getElementById('personality-color').textContent = personalityColor;
    document.getElementById('color-box').style.backgroundColor = personalityColor;
    document.getElementById('color-box').style.display = 'block';
  }
}
