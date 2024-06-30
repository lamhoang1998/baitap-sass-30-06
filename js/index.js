const sectionTeacher = document.getElementById("section-teacher");
const header = document.querySelector(".header");

const initialCoords = sectionTeacher.getBoundingClientRect();

window.addEventListener("scroll", function () {
	// console.log(window.scrollY);
	if (window.scrollY > initialCoords.top) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});
