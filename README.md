<!-- README.md -->

<!-- 🌸 Banner -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fec8d8,fcd5ce&height=100&section=header&text=To-Do%20Soft%20🌸&fontSize=38&fontColor=ffffff" />
</p>

<p align="center"><strong>A gentle task companion built for cozy, focused productivity.</strong></p>

<br />

## 💡 Overview

**To-Do Soft** is a pastel-themed task manager with streak tracking, confetti, and an animated bunny mascot. It was built to explore how frontend code can feel *encouraging, accessible, and emotionally soft* — while still staying clean, modular, and standards-compliant.

This project reflects what I’ve learned about building web apps that feel good to use.

---

## 🔧 Tech & Tools

| Frontend               | UX Features             | Progressive Web App      |
|------------------------|-------------------------|---------------------------|
| Semantic HTML5         | 🐇 Animated mascot      | Offline support via `manifest.json` |
| CSS Modules (BEM)      | ✨ Confetti on completion | Add to home screen       |
| Custom properties (theming) | 🌓 Dark mode toggle        | Theme-color meta tag     |
| JavaScript (modular IIFE) | ✅ Streak tracking         | Mobile-friendly layout   |
| Web Animations API     | 📅 Task timestamps       |                           |

---

## 🌱 What I Learned

This project taught me how to:
- Design interfaces that feel soft and supportive without sacrificing structure
- Implement accessible features (skip links, ARIA, motion settings)
- Use `localStorage` to persist tasks and streak logic
- Create reusable UI components with JavaScript
- Structure CSS using BEM with custom properties for light/dark theming
- Build installable web apps with PWA standards

---

## 📷 Preview

<table>
<tr>
<td>🌞 Light Mode</td>
<td>🌙 Dark Mode</td>
</tr>
<tr>
<td><img src="assets/screenshots/home-light.png" width="240"/></td>
<td><img src="assets/screenshots/home-dark.png" width="240"/></td>
</tr>
</table>

---

## 🧁 Features That Make It Soft

- Cheerful mascot with floating animation
- Gentle onboarding message
- Color-coded tasks with soft borders
- Confetti sparkles when you complete a task
- Empty state that feels like encouragement, not guilt
- Typing a task feels instant and responsive
- Works on all screen sizes

---

## 🚀 Try It Live

👉 [**Launch To-Do Soft**](https://shreyapuff.github.io/todosoft/)  
*(Best on Chrome or mobile — can be installed as a web app!)*

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/shreyapuff/todosoft.git
cd todosoft
open index.html
