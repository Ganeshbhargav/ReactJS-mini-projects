# 🌗 Light Dark Mode Toggle

<p align="center">
  A sleek, modern React application that enables users to switch between <b>Light</b> and <b>Dark</b> themes instantly.<br/>
  Built with performance, simplicity, and clean UI in mind.
</p>

---
## 📸 Preview

<p align="center">
  <img src="https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-output.gif" alt="Light Dark Mode Preview" width="600"/>
</p>



---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

---



## ✨ Features

* 🌙 One-click Light/Dark mode toggle
* ⚡ Instant UI updates using React Hooks
* 🎯 Clean, centered card layout
* 📱 Fully responsive design
* 🧩 Reusable component architecture
* 🎨 Dynamic styling with conditional classes

---

## 📂 Project Structure

```plaintext
light-dark-mode/
│── src/
│   ├── components/
│   │   └── LightDarkMode/
│   │       ├── LightDarkMode.jsx
│   │       └── lightDarkMode.css
│   ├── App.jsx
│   ├── main.jsx
│
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/light-dark-mode.git

# Navigate into the project
cd light-dark-mode

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 💻 Usage

```jsx
import LightDarkMode from './components/LightDarkMode'

function App() {
  return <LightDarkMode />
}

export default App
```

---

## ⚙️ How It Works

* Uses **React `useState` hook** to track the current theme
* Clicking the button toggles between `light` and `dark`
* Conditional class names dynamically update UI styles

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to Vercel
3. Import your repository
4. Click **Deploy**

### Deploy on Netlify

1. Run:

```bash
npm run build
```

2. Upload the `dist/` folder to Netlify

---

## 🔮 Future Enhancements

* 💾 Persist theme using `localStorage`
* 🔘 Toggle switch UI (instead of button)
* 🎨 Multiple theme options

---

## 👨‍💻 Author

**Ganesh Bhargav**


