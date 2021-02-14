import { pageLoad } from "./pageLoad";
import { renderHomePage } from "./homePage";
import { renderMenuPage } from "./menuPage";
import { renderContactPage } from "./contactPage"

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

document.querySelector(".order-now").addEventListener("click", () => {
	document.querySelector(`[data-tab-target="#menu"]`).classList.add("red");
});

document.querySelector(`[type="submit"]`).addEventListener("click", () => {
	document.querySelector("form").reset();
});