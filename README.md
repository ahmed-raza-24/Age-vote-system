# 🧮 Age Prompt Demo

A simple JavaScript project that shows how to take user input using the **prompt()** function, validate the input, and display the result on the page.  
This project helps beginners understand **input validation**, **DOM updates**, and **basic error handling** in JavaScript.

---

## 🚀 Features
- 📥 Takes age input using a browser prompt  
- ✔️ Detects if user cancels the prompt  
- ⚠️ Shows error if input is empty or not a number  
- 🔢 Converts input to a number and validates it  
- 🖥️ Displays result on screen with colors (error / success)  
- 💡 Beginner-friendly clean JavaScript code  

---

## 🧠 How It Works
1. User clicks the button **Enter age**  
2. A JavaScript `prompt()` appears  
3. Code checks:
   - ❌ User canceled  
   - ❌ User entered empty value  
   - ❌ User entered invalid number  
   - ✅ Correct number entered  
4. Finally, it shows output below the button.

---

## 📂 Folder Structure
Age-Prompt-Demo/
│
├── index.html # Main HTML file
├── style.css # Styling file
├── script.js # JavaScript logic
└── README.md # Project information


## ⚙️ Usage
1. Download or clone the repository
   ```bash
   git clone https://github.com/<your-username>/Age-Prompt-Demo.git
Open the folder

Open index.html in your browser

Click Enter age

Watch the validation work!

🛠️ Technologies Used
HTML5

CSS3

JavaScript

📌 Example Code (Summary)
Prompt Logic
js
Copy code
let age = prompt("Give age for prompt");
if (age === null) { ... }
if (age.trim() === "") { ... }
age = Number(age);
if (isNaN(age)) { ... }

👨‍💻 Author
Ahmed Raza
Simple, clean, beginner-friendly JavaScript projects.








