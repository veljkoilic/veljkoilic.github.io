window.addEventListener('load', function(){
	//dinamicko ispisivanje kartica
	var karticeSadrzaj = [
		{number: '01', img: 'features-icon-1.png', title: 'Analiziramo Trendove', text: 'Vršimo analizu i detaljno proučavamo tržište kao i sve probleme koje možemo da rešimo za vas', animation: 'enter left move 30px over 0.6s after 0.4s', modal:'Modal1', youtubeLink:'https://www.youtube.com/embed/VLoa4XBFWhg', imgAlt:'Analiza trendova'},
		{number: '02', img: 'features-icon-2.png', title: 'Optimizujemo Rešenja', text: 'Pružamo potpunu optimizaciju vaše aplikacije i staramo se o tome da to tako i ostane. Zauvek.', animation: 'enter bottom move 30px over 0.6s after 0.4s', modal:'Modal2', youtubeLink:'https://www.youtube.com/embed/QF5eWapHM5s', imgAlt:'Optimizacija resenja'},
		{number: '03', img: 'fire.png', title: 'Pravimo Proizvod', text: 'Pažljivo i brzo dolazimo do rešenja koje vas sigurno neće izneveriti. Naši korisnici vam mogu potvrditi isto.', animation: 'enter right move 30px over 0.6s after 0.4s', modal:'Modal3', youtubeLink: 'https://www.youtube.com/embed/dgFlgAxwwoM', imgAlt:'Pravljenje Proizvoda'}


	]
	var cardHolder = document.getElementById('cardHolder');
	for (var i = 0; i < karticeSadrzaj.length; i++){
		cardHolder.innerHTML += `
		
				<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="`+karticeSadrzaj[i].animation +`">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>`+ karticeSadrzaj[i].number+`</h2>
                            <img src="assets/images/`+ karticeSadrzaj[i].img+`" alt="`+ karticeSadrzaj[i].imgAlt +`">
                            <h4>`+ karticeSadrzaj[i].title+`</h4>
                            <p>`+ karticeSadrzaj[i].text+`</p>
                            <button type="button" class="main-button" data-toggle="modal" data-target="#`+ karticeSadrzaj[i].modal +`">
                                Pogledaj Snimak
                            </button>
                        </div>
                    </div>
                </div>
		`
    }
    var modalHolder = document.getElementById('modalHolder');
	for (var i = 0; i < karticeSadrzaj.length; i++){
		modalHolder.innerHTML += `

		<div class="modal fade" id="`+ karticeSadrzaj[i].modal +`" tabindex="-1" role="dialog" aria-labelledby="`+ karticeSadrzaj[i][6] +`Label" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="`+ karticeSadrzaj[i].modal +`Label">`+ karticeSadrzaj[i].title +`</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<iframe width="100%" height="300" src="`+ karticeSadrzaj[i].youtubeLink +`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				
				</iframe>
			</div>
			</div>
		</div>
		</div>
		`
	}


	//dinamicko ucitavanje specifikacija

	var specifikacijeSadrzaj = [
		{icon: 'about-icon-01.png', title: 'Naše aplikacije su brze', text: 'Koristimo najnovije tehnologije i staramo se da svaki aspekt našeg proizvoda radi kao švajcarski sat!', animation: 'enter right move 30px over 0.6s after 0.4s', imgAlt:'Brzo ikonica'},
		{icon: 'about-icon-02.png', title: 'Naše Aplikacije su lepe', text: 'Upotrebom najsavremenijeg dizajna i učešćem našeg UX/UI tima dobijate maksimalnu estetičnost dizajna.', animation: 'enter right move 30px over 0.6s after 0.5s', imgAlt:'Lepo ikonica'},
		{icon: 'about-icon-03.png', title: 'Naše aplikacije rade', text: 'Proizvodi, koje pravi Vector, su pouzdani i retko se kvare. Konstantna podrška i održavanje se kod nas podrazumevaju.', animation: 'enter right move 30px over 0.6s after 0.6s', imgAlt:'Radi ikonica'},

	];
	var specifikacijeHolder = document.getElementById('specifikacijeHolder');
	for (var i = 0; i < specifikacijeSadrzaj.length; i++){

		specifikacijeHolder.innerHTML += `
		
		<li data-scroll-reveal="`+specifikacijeSadrzaj[i].animation +`">
			<img src="assets/images/`+specifikacijeSadrzaj[i].icon +`" alt="`+specifikacijeSadrzaj[i].imgAlt +`">
				<div class="text">
					<h4>`+specifikacijeSadrzaj[i].title +`</h4>
					<p>`+specifikacijeSadrzaj[i].text +`</p>
				</div>
		</li>
		`
	}

    //dinamicko ispisivanje utisaka
	var utisciSadrzaj = [
		{img: 'testimonial-author-1.png', name: 'Marko Petrović', text: 'Moja iskustva sa Vector-om su sjajna! Nisam očekivao da će moja aplikacija biti gotova tako brzo i cela moja firma je zadovoljna našom novom internom aplikacijom. Svima preporučujem saradnju!', companyPosition:'Generalni Direktor OpenDoor'},
		{img: 'testimonial-author-2.png', name: 'Ivan Janković', text: 'Unajmio sam Vector tim da mi naprave aplikaciju kojom bih pratio napredak svoje publike - pokazali su se odlično', companyPosition:'Influenser'},
		{img: 'testimonial-author-3.png', name: 'Ana Simović', text: 'Zaista oduševljena saradnjom! Podrška koja mi je pružena u toku pravljenja moje aplikacije je na drugom nivou! Uvek sam bila obaveštena o svemu što se dešava!', companyPosition:'Managing Director - Clear Solutions'}
	];
	var utisciHolder = document.getElementById('utisciHolder');
	for (var i = 0; i < utisciSadrzaj.length; i++){


		utisciHolder.innerHTML += `

    <div class="item service-item" data-scroll-reveal="enter left move 30px over 0.`+ 6 + i +`s after 0.`+ 4 + i +`s">
		<div class="author">
			<i><img src="assets/images/`+ utisciSadrzaj[i].img +`" alt="Slika `+ utisciSadrzaj[i].name +`"></i>
		</div>
		<div class="testimonial-content">
			<h4>`+ utisciSadrzaj[i].name +`</h4>
			<p>“`+ utisciSadrzaj[i].text +`”</p>
			<span>`+ utisciSadrzaj[i].companyPosition +`</span>
		</div>
	</div>


		`
	}

	//dinamicko ispisivanje usluga unutar 'select' taga

	var uslugeSadrzaj = ['Web Dizajn', 'App Development','SEO Optimizacija', 'UX/UI Design'];

	var uslugeHolder = document.getElementById('service');
	for (var i = 0; i < uslugeSadrzaj.length; i++){


		uslugeHolder.innerHTML += `
		<option value="`+ i +`">`+uslugeSadrzaj[i] +`</option>
		`
	}

});