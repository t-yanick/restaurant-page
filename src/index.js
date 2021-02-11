import { pageLoad } from "./pageLoad";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const fufuEru = document.querySelector(".eru");

fufuEru.addEventListener("click", () => {
	document.querySelector("ul").classList.toggle("active");
	fufuEru.classList.toggle("toggle");
});

tabs.forEach((tab) =>
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active");
		});
		tabs.forEach((tab) => {
			tab.classList.remove("red");
		});
		tab.classList.add("red");
		target.classList.add("active");
	})
);