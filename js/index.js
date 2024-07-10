const sectionTeacher = document.getElementById("section-teacher");
const header = document.querySelector(".header");
const btnMobileNav = document.querySelector(".header__sidebar-btn");
console.log(btnMobileNav);

const initialCoords = sectionTeacher.getBoundingClientRect();

window.addEventListener("scroll", function () {
	// console.log(window.scrollY);
	if (window.scrollY > initialCoords.top) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});

btnMobileNav.addEventListener("click", function (e) {
	console.log(e.target);
	header.classList.toggle("nav-open");
});

header.addEventListener("click", function (e) {
	console.log(e.target);
});
