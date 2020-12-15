window.addEventListener('load', function(){
	//dinamicko ispisivanje kartica
	var karticeSadrzaj = [
		['01', 'features-icon-1.png', 'Analiziramo Trendove', 'Vršimo analizu i detaljno proučavamo tržište kao i sve probleme koje možemo da rešimo za vas', '#testimonials', 'enter left move 30px over 0.6s after 0.4s', 'Modal1','https://www.youtube.com/embed/VLoa4XBFWhg','Analiza trendova'],
		['02', 'features-icon-2.png', 'Optimizujemo Rešenja', 'Pružamo potpunu optimizaciju vaše aplikacije i staramo se o tome da to tako i ostane. Zauvek.', '#testimonials', 'enter bottom move 30px over 0.6s after 0.4s', 'Modal2','https://www.youtube.com/embed/QF5eWapHM5s','Optimizacija resenja'],
		['03', 'fire.png', 'Pravimo Proizvod', 'Pažljivo i brzo dolazimo do rešenja koje vas sigurno neće izneveriti. Naši korisnici vam mogu potvrditi isto.', '#testimonials', 'enter right move 30px over 0.6s after 0.4s', 'Modal3','https://www.youtube.com/embed/dgFlgAxwwoM','Pravljenje Proizvoda']

	];
	var cardHolder = document.getElementById('cardHolder');
	for (var i = 0; i < karticeSadrzaj.length; i++){
		cardHolder.innerHTML += `
		
				<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="`+karticeSadrzaj[i][5] +`">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>`+ karticeSadrzaj[i][0]+`</h2>
                            <img src="assets/images/`+ karticeSadrzaj[i][1]+`" alt="`+ karticeSadrzaj[i][8] +`">
                            <h4>`+ karticeSadrzaj[i][2]+`</h4>
                            <p>`+ karticeSadrzaj[i][3]+`</p>
                            <button type="button" class="main-button" data-toggle="modal" data-target="#`+ karticeSadrzaj[i][6] +`">
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

		<div class="modal fade" id="`+ karticeSadrzaj[i][6] +`" tabindex="-1" role="dialog" aria-labelledby="`+ karticeSadrzaj[i][6] +`Label" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="`+ karticeSadrzaj[i][6] +`Label">`+ karticeSadrzaj[i][2] +`</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<iframe width="100%" height="300" src="`+ karticeSadrzaj[i][7] +`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				
				</iframe>
			</div>
			</div>
		</div>
		</div>
		`
	}


	//dinamicko ucitavanje specifikacija
	var specifikacijeSadrzaj = [
		['about-icon-01.png','Naše aplikacije su brze','Koristimo najnovije tehnologije i staramo se da svaki aspekt našeg proizvoda radi kao švajcarski sat!','enter right move 30px over 0.6s after 0.4s','Brzo ikonica'],
		['about-icon-02.png','Naše Aplikacije su lepe','Upotrebom najsavremenijeg dizajna i učešćem našeg UX/UI tima dobijate maksimalnu estetičnost dizajna.','enter right move 30px over 0.6s after 0.5s','Lepo ikonica'],
		['about-icon-03.png','Naše aplikacije rade','Proizvodi, koje pravi Vector, su pouzdani i retko se kvare. Konstantna podrška i održavanje se kod nas podrazumevaju.','enter right move 30px over 0.6s after 0.6s','Radi ikonica']
	];

	var specifikacijeHolder = document.getElementById('specifikacijeHolder');
	for (var i = 0; i < specifikacijeSadrzaj.length; i++){

		specifikacijeHolder.innerHTML += `
		
		<li data-scroll-reveal="`+specifikacijeSadrzaj[i][3] +`">
			<img src="assets/images/`+specifikacijeSadrzaj[i][0] +`" alt="`+specifikacijeSadrzaj[i][4] +`">
				<div class="text">
					<h4>`+specifikacijeSadrzaj[i][1] +`</h4>
					<p>`+specifikacijeSadrzaj[i][2] +`</p>
				</div>
		</li>
		`
	}

    //dinamicko ispisivanje utisaka
	var utisciSadrzaj = [
		['testimonial-author-1.png', 5, 'Marko Petrović', 'Moja iskustva sa Vector-om su sjajna! Nisam očekivao da će moja aplikacija biti gotova tako brzo i cela moja firma je zadovoljna našom novom internom aplikacijom. Svima preporučujem saradnju!', 'Generalni Direktor OpenDoor'],
		['testimonial-author-2.png', 3, 'Ivan Janković', 'Unajmio sam Vector tim da mi naprave aplikaciju kojom bih pratio napredak svoje publike - pokazali su se odlično', 'Influenser'],
		['testimonial-author-3.png', 2, 'Ana Simović', 'Zaista oduševljena saradnjom! Podrška koja mi je pružena u toku pravljenja moje aplikacije je na drugom nivou! Uvek sam bila obaveštena o svemu što se dešava!', 'Managing Director - Clear Solutions'],

	];

	var utisciHolder = document.getElementById('utisciHolder');
	for (var i = 0; i < utisciSadrzaj.length; i++){


		utisciHolder.innerHTML += `

    <div class="item service-item" data-scroll-reveal="enter left move 30px over 0.`+ 6 + i +`s after 0.`+ 4 + i +`s">
		<div class="author">
			<i><img src="assets/images/`+ utisciSadrzaj[i][0] +`" alt="Slika `+ utisciSadrzaj[i][2] +`"></i>
		</div>
		<div class="testimonial-content">
			<h4>`+ utisciSadrzaj[i][2] +`</h4>
			<p>“`+ utisciSadrzaj[i][3] +`”</p>
			<span>`+ utisciSadrzaj[i][4] +`</span>
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