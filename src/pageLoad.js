const pageLoad = (() => {
  const contentContainer = document.querySelector('#content');

  const header = document.createElement('header');
  header.innerHTML = `
		<nav>
			<h2>Fedel's Bar and Restaurant</h2>
			<a href="#" class="eru">
				<span class="line line1"></span>
				<span class="line line2"></span>
				<span class="line line3"></span>
			</a>
			<ul class="links">
				<li data-tab-target="#home" class="tab red">Home</li>
				<li data-tab-target="#menu" class="tab">Menu</li>
				<li data-tab-target="#contact" class="tab">Contact Us</li>
			</ul>
		</nav>`;

  contentContainer.appendChild(header);
})();

export { pageLoad };