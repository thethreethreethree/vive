// Questions array with four answer options each
const questions = [
    {
        question: "When at a party, do you:",
        options: ["Talk to everyone you meet", "Stick to people you know well", "Observe quietly", "Engage in deep conversations"],
        trait: "EI"
    },
    {
        question: "Do you prefer to focus on:",
        options: ["Facts and details", "Big ideas and possibilities", "Practical applications", "Creative concepts"],
        trait: "SN"
    },
    {
        question: "When making decisions, do you:",
        options: ["Focus on logic and consistency", "Consider people's feelings", "Weigh pros and cons", "Follow your gut instinct"],
        trait: "TF"
    },
    {
        question: "How do you plan your day:",
        options: ["Prefer to have things decided", "Stay open to last-minute options", "Have a flexible structure", "Follow a routine"],
        trait: "JP"
    },
    {
        question: "Do you feel more comfortable:",
        options: ["Interacting with groups", "Being in quiet, private spaces", "In familiar surroundings", "In new environments"],
        trait: "EI"
    },
    {
        question: "When solving problems, do you prefer:",
        options: ["Step-by-step approaches", "Creative, out-of-the-box thinking", "Logical reasoning", "Trial and error"],
        trait: "SN"
    },
    {
        question: "Which do you value more:",
        options: ["Truth and justice", "Harmony and empathy", "Efficiency and effectiveness", "Innovation and creativity"],
        trait: "TF"
    },
    {
        question: "In daily life, do you:",
        options: ["Follow a set schedule", "Go with the flow", "Have a mix of both", "Plan for contingencies"],
        trait: "JP"
    },
    {
        question: "Do you find energy in:",
        options: ["Socializing and external activities", "Introspective and solo activities", "Group activities", "Quiet reflection"],
        trait: "EI"
    },
    {
        question: "When processing information, do you:",
        options: ["Focus on practical applications", "Imagine potential futures and patterns", "Analyze data", "Look for connections"],
        trait: "SN"
    },
    {
        question: "How do you handle conflict:",
        options: ["Directly address the issue", "Avoid confrontation", "Seek a compromise", "Express your feelings"],
        trait: "TF"
    },
    {
        question: "When working on a project, do you:",
        options: ["Stick to a clear plan", "Explore different ideas", "Manage the timeline", "Adjust as you go"],
        trait: "JP"
    },
    {
        question: "Do you prefer:",
        options: ["Routine and consistency", "Variety and change", "A balance of both", "Predictability with some surprises"],
        trait: "EI"
    },
    {
        question: "In group projects, you tend to:",
        options: ["Take charge", "Support others", "Coordinate efforts", "Provide creative ideas"],
        trait: "SN"
    },
    {
        question: "When learning something new, do you:",
        options: ["Prefer structured lessons", "Enjoy hands-on experience", "Use resources to explore", "Follow your curiosity"],
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
        showResult();
    }
}

// Function to handle answer selection and progress
function selectAnswer(option) {
    const currentTrait = questions[currentQuestion].trait;

    if (currentTrait === 'EI') {
        if (option === 1 || option === 3) {
            traits['E']++;
        } else {
            traits['I']++;
        }
    } else if (currentTrait === 'SN') {
        if (option === 1 || option === 3) {
            traits['S']++;
        } else {
            traits['N']++;
        }
    } else if (currentTrait === 'TF') {
        if (option === 1 || option === 3) {
            traits['T']++;
        } else {
            traits['F']++;
        }
    } else if (currentTrait === 'JP') {
        if (option === 1 || option === 3) {
            traits['J']++;
        } else {
            traits['P']++;
        }
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
