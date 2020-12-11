(function ($) {

	//O AUTORU

		//autor krugovi dinamicki ispis
		var krugoviSadrzaj = [
			['#HTML', 0.98],
			['#CSS', 0.95],
			['#JS', 0.85],
			['#PHP', 0.55],
			['#PS', 0.95],
			['#UXUI', 0.95]

		];

            $("#HTML").circleProgress({
                value: 1,
                size: 200,
                fill: {
                    gradient: ["red", "orange"]
                }
            });
            
            $("#CSS").circleProgress({
                value: 0.97,
                size: 200,
                fill: {
                    gradient: ["red", "orange"]
                }
            });
            
            $("#JS").circleProgress({
                value: 0.80,
                size: 200,
                fill: {
                    gradient: ["red", "orange"]
                }
            });
        

          $('.col').css('margin-left', '30px');
        //   $('#vestineNaslov').css('margin', '-50px 0 100px 0');


})(window.jQuery);





