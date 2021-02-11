const renderHomePage = (() => {

    const contentContainer = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `
    <div id="home" class="active" data-tab-content>
        <div class="hero">
            <h1>Visit Fedel's Restaurant for 100% Delicious Cameroonian Cuisines</h1>
            <p>Very Tasty and Quite Affordable</p>
            <div class="btn-container">
                <a data-tab-target="#menu" class="order-now">Order Now</a>
            </div>
        </div>
        <div class="info">
            <div class="address">

            </div>
        </div>
    </div>`;

    contentContainer.appendChild(home);
})();

export { renderHomePage };