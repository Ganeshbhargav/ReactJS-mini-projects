Here’s a **fully polished `README.md`** you can directly copy into your repo — styled, centered, and portfolio-ready 🚀

---

```md
# 🌟 Welcome App (Subscribe Toggle)

<p align="center">
  <img src="https://assets.ccbp.in/frontend/content/react-js/welcome-app-output.gif" alt="Welcome App Preview" width="450"/>
</p>

<p align="center">
  <b>A simple React app to toggle Subscribe / Subscribed state with dynamic UI updates.</b>
</p>

---

## 🚀 Live Demo
🔗 Coming Soon...

---

## 🎯 Features

✨ Toggle between **Subscribe** and **Subscribed**  
⚛️ Built using React Hooks (`useState`)  
🎨 Dynamic styling based on state  
🖱️ Click event handling  
📱 Clean and responsive UI  

---

## 🛠️ Tech Stack

- ⚛️ React JS
- 🧠 JavaScript (ES6+)
- 🎨 CSS3

---

## 📂 Project Structure

```

Welcome-App/
│── src/
│   ├── Welcome.js
│   ├── welcome.css
│   └── index.js
│── package.json

````

---

## ⚡ How It Works

- Initially, the button displays **"Subscribe"**
- When clicked:
  - State toggles using `useState`
  - Text updates to **"Subscribed"**
  - Button style changes dynamically

---

## 💡 Core Logic

```jsx
import { useState } from 'react'

const [sub, setSub] = useState(false)

const onSubscribe = () => {
  setSub(prev => !prev)
}
````

---

## 🎨 Dynamic Button

```jsx
<button 
  className={`welcome-app-button ${sub ? "clicked" : "unclicked"}`} 
  onClick={onSubscribe}
>
  {sub ? "Subscribed" : "Subscribe"}
</button>
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/welcome-app.git
```

### 2️⃣ Navigate to project folder

```bash
cd welcome-app
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the app

```bash
npm start
```

---

## 🌟 Future Enhancements

* 🔥 Add animations for better UX
* ✅ Show checkmark icon when subscribed
* 🌐 Connect with backend API
* 🎨 Improve UI with modern design

---

## 🙌 Author

**Ganesh Bhargav Arani**
📌 Full Stack Developer