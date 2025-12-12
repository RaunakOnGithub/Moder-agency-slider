# Moder-agency-slider

# 🎭 Creative Team Slider with GSAP

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> A premium, interactive team showcase component built with **Vanilla JavaScript** and **GSAP**. Features smooth clip-path transitions, a direction-aware custom cursor, and dynamic DOM manipulation.

---

## 📸 Preview
Project Screen Shot
[![image.png](https://i.postimg.cc/c45dpbFK/image.png)](https://postimg.cc/crwqYXyZ)

**[🔴 Live Demo](https://your-netlify-link-here.app)** *(Don't forget to add your Netlify link here!)*

---

## ✨ Key Features

* **GSAP Animations:** High-performance animations using `gsap.to()` and `Timeline`.
* **Clip-Path Transitions:** Unique "curtain reveal" effects for image switching.
* **Custom Logic:** Smart navigation logic (click left/right side of screen) without standard buttons.
* **Directional Cursor:** Custom cursor that changes icons based on screen position and available slides.
* **Marquee Background:** Infinite scrolling text for a modern editorial aesthetic.
* **Fully Responsive:** Adapts to different screen sizes.

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GSAP](https://img.shields.io/badge/GSAP-GreenSock-green?style=for-the-badge&logo=greensock&logoColor=white)

---

## 🚀 How to Run

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Raunak-Chaurasiya/creative-team-slider.git](https://github.com/Raunak-Chaurasiya/creative-team-slider.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd creative-team-slider
    ```

3.  **Open `index.html`**
    Simply open the `index.html` file in your browser, or use a Live Server extension in VS Code.

---

## 🧠 Logic Breakdown

Here is a quick look at how the transition logic works:

```javascript
// GSAP Clip-Path Animation
gsap.to(currentImg, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Closes the image
    duration: 1,
    ease: "power4.inOut"
});

gsap.to(nextImg, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Opens the new image
    duration: 1,
    ease: "power4.inOut"
});
