```markdown
# PopX Account Management App

A pixel-perfect mobile-friendly React application for managing user authentication including signup, login, and profile viewing — designed with a clean UI and seamless navigation.

## Features

-  Mobile-first UI (375px width) centered on desktop
-  Signup and Login with validation
-  Profile page with name, email, and editable profile picture
-  Navigation between pages using React Router
-  Fully deployed and accessible on Vercel

---

## Live Demo

🔗 [https://your-vercel-deployment.vercel.app](https://your-vercel-deployment.vercel.app)  
> Replace with your actual Vercel deployment link.

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- LocalStorage for session management
- Deployed on Vercel

---

## 📁 Folder Structure

```

/src
/pages
\- LoginPage.jsx
\- SignupPage.jsx
\- ProfilePage.jsx
/utils
\- auth.js
App.jsx
main.jsx

````

---

## ⚙️ Installation & Local Setup

```bash
git clone https://github.com/AnilYadav8421/popx-app.git
cd popx-app
npm install
npm run dev
````

App runs on: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Auth Logic

* Data is stored in `localStorage` for simplicity.
* `auth.js` handles login, signup, getUser, and logout methods.
* Form validation for all fields using regex and empty checks.

---

## 🧹 Code Standards

* Clean and modular component structure.
* Tailwind CSS for styling.
* Fully responsive and pixel-aligned layout.
* Mobile app interface strictly centered on the webpage.

---

## 📝 License

This project is licensed under the MIT License.

```
