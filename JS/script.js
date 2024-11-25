const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// Select the menu button and menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Toggle menu visibility on click
menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Show menu
    } else {
        menu.style.display = 'none'; // Hide menu
    }
});

