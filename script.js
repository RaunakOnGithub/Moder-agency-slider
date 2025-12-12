const team = [
    {name: "Ava Sinclicer", role: "Creative Director"},
    {name: "Ema Gredern", role: "Brand Strategist"},
    {name: "Stphia drags", role: "Lead Designer"},
    {name: "Emanda Jorfer", role: "Marketing Specialist"}
];

const cursor = document.querySelector(".cursor");
const cursorIcon = document.querySelector(".cursor i");
const nameElement = document.querySelector(".name");
const roleElement = document.querySelector(".role");

const cursorWidth = cursor.offsetWidth / 2;
const cursorHeight = cursor.offsetHeight / 2;

let currentSlide = 1;
const totalSlide = 4;
let isAnimating = false; // Prevents spam clicking

// 1. Mouse Move & Cursor Logic
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX - cursorWidth,
        y: e.clientY - cursorHeight,
        duration: 0.5, // Made it snappier
        ease: "power2.out"
    });
    
    updateCursorClass(e.clientX);
});

// 2. Logic to change cursor icon based on screen side
const updateCursorClass = (xPosition) => {
    const halfPageWidth = window.innerWidth / 2;
    
    if (xPosition > halfPageWidth) {
        // Right Side
        if (currentSlide < totalSlide) {
            cursorIcon.classList.remove('ri-arrow-left-line');
            cursorIcon.classList.add('ri-arrow-right-line');
            cursor.style.opacity = '1';
        } else {
            cursor.style.opacity = '0.3'; // Dim if no more slides
        }
    } else {
        // Left Side
        if (currentSlide > 1) {
            cursorIcon.classList.remove('ri-arrow-right-line');
            cursorIcon.classList.add('ri-arrow-left-line');
            cursor.style.opacity = '1';
        } else {
            cursor.style.opacity = '0.3';
        }
    }
};

// 3. Click Event to Change Slides
document.addEventListener("click", (e) => {
    if (isAnimating) return; // Wait for animation to finish
    
    const halfPageWidth = window.innerWidth / 2;
    
    if (e.clientX > halfPageWidth) {
        // Next Slide
        if (currentSlide < totalSlide) {
            changeSlide(currentSlide, currentSlide + 1);
            currentSlide++;
        }
    } else {
        // Prev Slide
        if (currentSlide > 1) {
            changeSlide(currentSlide, currentSlide - 1);
            currentSlide--;
        }
    }
});

// 4. The Animation Logic
const changeSlide = (current, next) => {
    isAnimating = true;

    const currentImg = document.querySelector(`#t-${current}`);
    const nextImg = document.querySelector(`#t-${next}`);
    
    const currentMarquee = document.querySelector(`.t${current}`);
    const nextMarquee = document.querySelector(`.t${next}`);

    // Update Text Info
    const nextTeamMember = team[next - 1];
    
    gsap.to([nameElement, roleElement], {
        y: -20,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            nameElement.textContent = nextTeamMember.name;
            roleElement.textContent = nextTeamMember.role;
            gsap.to([nameElement, roleElement], {
                y: 0,
                opacity: 1,
                duration: 0.3
            });
        }
    });

    // Animate Images (Clip Path)
    // Close current image (Bottom to Top)
    gsap.to(currentImg, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.inOut"
    });

    // Open next image (Bottom to Top)
    gsap.set(nextImg, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }); // Reset start pos
    gsap.to(nextImg, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
            isAnimating = false;
        }
    });

    // Animate Background/Marquee
    gsap.to(currentMarquee, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power4.inOut"
    });

    gsap.set(nextMarquee, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
    gsap.to(nextMarquee, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut"
    });
};