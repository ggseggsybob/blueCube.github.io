const box = document.getElementById("box");
const moveAmount = 8; // Adjust the move amount for smoother movement
let x = 0;
let y = 0;
let dx = 0;
let dy = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                dy = -moveAmount;
                break;
            case "ArrowDown":
                dy = moveAmount;
                break;
            case "ArrowRight":
                dx = moveAmount;
                break;
            case "ArrowLeft":
                dx = -moveAmount;
                break;
        }
    }
});

document.addEventListener("keyup", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
            case "ArrowDown":
                dy = 0;
                break;
            case "ArrowRight":
            case "ArrowLeft":
                dx = 0;
                break;
        }
    }
});

function updatePosition() {
    x += dx;
    y += dy;
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
    requestAnimationFrame(updatePosition);
}

requestAnimationFrame(updatePosition);