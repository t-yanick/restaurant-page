const renderContactPage = (() => {
  const contentContainer = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.setAttribute('data-tab-content', '');
  contact.innerHTML = `
		<div class="hero">
			<h1>Contact Us</h1>
		</div>
		<div class="contact-container">
			<div class="info">
				<div class="address">
					<p>
						<i class="fi-xnsuxl-map-marker-solid"></i>Carrefour Titus Edzoa, apres Carrefour Petites Genies<br />Simbock, Yaounde Cameroon
					</p>
				</div>
				<div class="hours">
					<p>
						<i class="fi-cnsuhl-clock-solid"></i><span>Monday-Friday:</span>11am-7pm<br /><span>Saturday & Sunday:</span>9am-11pm
					</p>
				</div>
				<div class="phone">
					<p><i class="fi-xnsrxl-phone-solid"></i>+237 677 495 016 or +237 696 905 999</p>
				</div>
				<div class="contact-form">
					<form onsubmit="return false">
						<h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
						<div class="input-box">
							<input type="text" required />
							<span>Full Name</span>
						</div>
						<div class="input-box">
							<input type="text" required />
							<span>Email</span>
						</div>
						<div class="input-box">
							<input type="tel" required />
							<span>Phone Number</span>
						</div>
						<div class="input-box">
							<textarea required></textarea><span>Enter your message...</span>
						</div>
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.326856246715!2d11.492465!3d3.792379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc0f7b8b0c083812!2sFedel%20Fashion!5e0!3m2!1sen!2scm!4v1613291691787!5m2!1sen!2scm" 
				width="600" 
				height="450" 
				frameborder="0" 
				style="border:0;" 
				allowfullscreen="" 
				aria-hidden="false" 
				tabindex="0">
			</iframe>
		</div>
	`;

  contentContainer.appendChild(contact);
})();

export { renderContactPage };