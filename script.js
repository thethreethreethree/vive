// Color mapping based on personality type
const personalityColors = {
  'INTJ': 'Purple',
  'INTP': 'Blue',
  'ENTJ': 'Red',
  'ENTP': 'Orange',
  'INFJ': 'Green',
  'INFP': 'Light Blue',
  'ENFJ': 'I LOVE YOU', // ENFJ will show "I LOVE YOU" instead of a color
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

// Function to show result
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
    document.getElementById('personality-color').textContent = personalityColor;
    document.getElementById('color-box').style.display = 'none'; // Hide the color box for ENFJ
  } else {
    document.getElementById('personality-color').textContent = personalityColor;
    document.getElementById('color-box').style.backgroundColor = personalityColor; // Show color block for other types
  }
}
