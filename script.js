body {
  font-family: Arial, sans-serif;
  background: url('images/background.png') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  margin-top: 100px; /* Lowering the container */
}

h1 {
  display: none; /* Removed the title */
}

.option-button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 15px; /* Increased padding for buttons */
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* Increased font size */
}

.option-button:hover {
  background-color: #2980b9;
}

#result-container {
  margin-top: 20px;
}

#personality-type {
  font-size: 24px;
  font-weight: bold;
}

#personality-color {
  font-size: 20px;
}
