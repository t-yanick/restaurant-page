const renderMenuPage = (() => {

	const contentContainer = document.querySelector("#content");
	const menu = document.createElement("div");
	menu.setAttribute("id", "menu");
	menu.setAttribute("data-tab-content", "");
	menu.innerHTML = `
<div class="hero">
	<h1>Menu</h1>
	<div class="menu-container">
		<div class="menu-item">
			<img src="./images/eru.jpeg" alt="" />
			<div class="item-content">
				<h4>Eru: <span>2,000XAF</span></h4>
				<p>
					Traditionally made Eru. Can be eaten with white garri, yellow garri or waterfufu
				</p>
			</div>
		</div>
	</div>
</div>
`;

	contentContainer.appendChild(menu);
})();

export { renderMenuPage };