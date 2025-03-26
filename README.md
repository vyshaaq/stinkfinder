# StinkFinder 🚀  
**AI-Powered Toxicity Detection for Malayalam YouTube Comments**  

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

---

## 📌 Overview  
**StinkFinder** is an AI-based toxicity detection system designed to analyze Malayalam YouTube comments, identifying hate speech, offensive language, and rogue comments. It leverages **fine-tuned NLP models** to process comments, providing users with an efficient way to moderate harmful content.  

🔹 **Features:**  
✅ Detects **hate speech, profanity, and toxicity** in Malayalam (including code-mixed text).  
✅ Uses **fine-tuned BERT models** for high accuracy in toxicity detection.  
✅ **Google Sheets-based dataset** for managing labeled comments.  
✅ **Basic HTML frontend** (to be upgraded later).  

---

## ⚙️ Tech Stack  
- **Frontend:** Basic HTML (to be upgraded)  
- **Machine Learning:** Hugging Face Transformers (MuRIL-based fine-tuned model)  
- **Database:** Google Sheets (temporary for dataset management)  
- **Deployment:** Local testing, with future plans for cloud hosting  

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/StinkFinder.git
cd StinkFinder
2️⃣ Set Up a Virtual Environment
bash
Copy
Edit
python -m venv env
source env/bin/activate  # macOS/Linux
env\Scripts\activate     # Windows
3️⃣ Install Dependencies
bash
Copy
Edit
pip install -r requirements.txt
4️⃣ Run the Model
Execute the script to analyze comments:

bash
Copy
Edit
python analyze.py
🎯 Usage
✅ 1. Submit a YouTube Video URL
Users provide a YouTube URL, and comments are extracted.

✅ 2. AI Model Analyzes Comments
The fine-tuned BERT model classifies each comment as toxic or non-toxic.

✅ 3. Display Results
Flagged comments are displayed in a structured format.

🛠 Contributing
We welcome contributions! 🚀

🛠 Steps to Contribute
Fork the repository 🍴

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Added new feature")

Push to your fork (git push origin feature-name)

Create a Pull Request

🌍 Future Roadmap
🔹 Enhance AI Model: Improve accuracy and handle sarcasm better.
🔹 Expand Language Support: Add Tamil, Hindi, and Kannada support.
🔹 Upgrade Frontend: Implement a React-based UI.

📜 License
This project is licensed under the MIT License.

📌 Created by Vysakh Valsaraj
🎯 Let's make online spaces cleaner and safer! 💡

Copy
Edit






You said:
incorporate everything into single md file


ChatGPT said:
md
Copy
Edit
# StinkFinder 🚀  
**AI-Powered Toxicity Detection for Malayalam YouTube Comments**  

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

---

## 📌 Overview  
**StinkFinder** is an AI-based toxicity detection system designed to analyze Malayalam YouTube comments, identifying hate speech, offensive language, and rogue comments. It leverages **fine-tuned NLP models** to process comments, providing users with an efficient way to moderate harmful content.  

🔹 **Features:**  
✅ Detects **hate speech, profanity, and toxicity** in Malayalam (including code-mixed text).  
✅ Uses **fine-tuned BERT models** for high accuracy in toxicity detection.  
✅ **Google Sheets-based dataset** for managing labeled comments.  
✅ **Basic HTML frontend** (to be upgraded later).  

---

## ⚙️ Tech Stack  
- **Frontend:** Basic HTML (to be upgraded)  
- **Machine Learning:** Hugging Face Transformers (MuRIL-based fine-tuned model)  
- **Dataset Management:** Google Sheets (temporary)  
- **Deployment:** Local testing, with future plans for cloud hosting  

---

## 📂 Project Structure  
StinkFinder/ │── dataset/ # Google Sheets data (exported for local use) │── models/ # Fine-tuned BERT model for toxicity classification │── frontend/ # Basic HTML frontend │── scripts/ │ ├── preprocess.py # Data preprocessing scripts │ ├── train.py # Model training script │ ├── analyze.py # Toxicity detection script │── requirements.txt # Dependencies │── README.md # Project documentation └── LICENSE # License file

yaml
Copy
Edit

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/StinkFinder.git
cd StinkFinder
2️⃣ Set Up a Virtual Environment
bash
Copy
Edit
python -m venv env
source env/bin/activate  # macOS/Linux
env\Scripts\activate     # Windows
3️⃣ Install Dependencies
bash
Copy
Edit
pip install -r requirements.txt
4️⃣ Run the Model
Execute the script to analyze comments:

bash
Copy
Edit
python analyze.py
🎯 Usage
✅ 1. Submit a YouTube Video URL
Users provide a YouTube URL, and comments are extracted.

✅ 2. AI Model Analyzes Comments
The fine-tuned BERT model classifies each comment as toxic or non-toxic.

✅ 3. Display Results
Flagged comments are displayed in a structured format.

📊 Dataset
The dataset is curated from real-world YouTube comments, manually labeled into the following categories:

Positive (Neutral/Constructive)

Negative (Hate Speech/Toxicity)

Mixed (Code-Switched Language)

A Google Sheets-based approach is used for annotation and dataset management.

🔥 Model Training
The model is fine-tuned on a Malayalam-specific dataset using MuRIL (Multilingual Representations for Indian Languages) from Hugging Face. Training involves:

Text Preprocessing: Tokenization, stop-word removal, and normalization.

Label Encoding: Assigning toxicity scores.

Fine-Tuning: Training on a balanced dataset.

🛠 Contributing
We welcome contributions! 🚀

🛠 Steps to Contribute
Fork the repository 🍴

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Added new feature")

Push to your fork (git push origin feature-name)

Create a Pull Request

🌍 Future Roadmap
🔹 Enhance AI Model: Improve accuracy and handle sarcasm better.
🔹 Expand Language Support: Add Tamil, Hindi, and Kannada support.
🔹 Upgrade Frontend: Implement a React-based UI.

📜 License
This project is licensed under the MIT License.

📌 Created by Vysakh Valsaraj
🎯 Let's make online spaces cleaner and safer! 💡
