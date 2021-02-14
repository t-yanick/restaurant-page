const renderHomePage = (() => {

    const contentContainer = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `
    <div id="home" class="active" data-tab-content>
        <div class="hero">
            <h1>Visit Fedel's Restaurant for 100% Delicious Traditional Cuisines</h1>
            <p>Very Tasty and Quite Affordable</p>
            <div class="btn-container">
                <a data-tab-target="#menu" class="order-now">Order Now</a>
            </div>
        </div>
        <div class="info">
            <div class="address">
                <span><i class="fi-xnsuxl-map-marker-solid"></i></span>
                <p>Carrefour Titus Edzoa, apres Carrefour Petites Genies<br />Simbock, Yaounde Cameroon</p>
               
            </div>
            <div class="hours">
                <span><i class="fi-cnsuhl-clock-solid"></i></span>
                <p>
                    <span>Monday-Friday:</span>11am-7pm<br /><span>Saturday & Sunday:</span>9am-11pm
                </p>
            </div>
        </div>
    </div>`;

    contentContainer.appendChild(home);
})();

export { renderHomePage };