# 🕌 Prayer Time Web App

Prayer Time is a modern and responsive web application that displays accurate Islamic prayer times based on the city selected by the user. The app fetches live data from an external API and presents it with a clean UI optimized for both desktop and mobile.

## 📦 What is npm?

`npm` (Node Package Manager) is used to install and manage external libraries such as:

- **Axios** → sending API calls  
- **Bootstrap** → responsive UI framework
- ✨ Features

🌙 Displays accurate prayer times

⚡ Real-time updates using an external API

📱 Fully responsive (mobile + desktop)

🎨 Clean Islamic-inspired design

🌍 Supports multiple cities

🔧 Easy to modify and customize

🛠️ Technologies Used

HTML5

CSS3

JavaScript

Axios

Bootstrap

📘 API Configuration

You can adjust API requests inside: script/PrayerAPI.js

👨‍💻 Developer

Made with ❤️ by Soheib — a legendary Algerian développeur, cyber security engineer, and bodybuilding enjoyer.

The project does NOT include the `node_modules` folder. Instead, npm automatically installs the needed libraries using:

```bash
npm install

🚀 How to Run This Project

1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/prayer-time.git

2️⃣ Enter the project folder
cd prayer-time

3️⃣ Install all dependencies (Axios, Bootstrap...)
npm install
4️⃣ Run the project
Since this is a front-end project, you have 2 options:

✔️ Option A — Open index.html manually
Just double-click this file: Style/index.html

✔️ Option B — Use a local development server (recommended)
Start a local server:

npx live-server
This gives you auto-refresh and better development experience.

🗂️ Project Structure
prayer-time/
├── assets/
│   ├── framework/
│   │    ├── axios/
│   │    │   ├── package.json
│   │    │   └── package-lock.json
│   │    └── boostrape/
│   │        ├── package.json
│   │        └── package-lock.json
│   └── img
├── script/
│   ├── city.js
│   ├── cityenfrancais.js
│   └─ fetchAPI.js
   
├── style/
│   ├── index.html
│   ├── style.css
│   
│  
└── README.md
