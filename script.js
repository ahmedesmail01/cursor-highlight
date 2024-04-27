const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
	let cursorHalfWidth = cursor.offsetWidth / 2;
	cursor.style.left = e.pageX - cursorHalfWidth + "px";
	cursor.style.top = e.pageY - cursorHalfWidth + "px";
});

/* const cursor = document.querySelector(".cursor");
const topBackground = document.querySelector(".top");

topBackground.addEventListener("mouseenter", () => {
	cursor.style.backgroundImage = "url('./assets/back.jpg')"; // Replace 'bottom-image.jpg' with your bottom image URL
});

topBackground.addEventListener("mouseleave", () => {
	cursor.style.backgroundImage = "none";
});

document.addEventListener("mousemove", (event) => {
	cursor.style.left = event.clientX + "px";
	cursor.style.top = event.clientY + "px";
});
 */
