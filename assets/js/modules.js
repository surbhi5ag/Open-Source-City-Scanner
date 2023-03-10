var controller = new ScrollMagic.Controller();
        
        var wipeAnimation = new TimelineMax()
			// animate to second panel
			
			.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
			
			// animate to third panel
			
			.to("#slideContainer", 1,   {x: "-50%"})
			
			// animate to forth panel
			
			.to("#slideContainer", 1,   {x: "-75%"})
			

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#start", triggerHook: 0,  duration: 25 })
            .setTween("#logo", {opacity: "0",})
          //.addIndicators({name: "logo off"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#start", triggerHook: 0,  duration: 150 })
            .setTween("#logo", {top: -200,})
          //.addIndicators({name: "logo off"})
            .addTo(controller);


         new ScrollMagic.Scene({triggerElement: "#links", triggerHook: 1, offset:150,  duration: 100 })
            .setTween("#img1", {opacity: "0"})
  //.addIndicators({name: "links on"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#links", triggerHook: 0.8, offset:300,  duration: 150 })
            .setTween("#links", {opacity: "1"})
  //.addIndicators({name: "links on"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#maps", triggerHook: 0.8, duration: 150 })
            .setTween("#links", {opacity: "0"})
 // .addIndicators({name: "links off"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#maps", triggerHook: 0.8, offset: 100, duration: 150 })
            .setTween("#maps", {opacity: "1"}, )
//.addIndicators({name: "maps on"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#carosel", triggerHook: 0.5, duration: 150 })
            .setTween("#maps", {opacity: "0"})
//.addIndicators({name: "maps off"})
            .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#carosel", triggerHook: 0.8, offset: 300, duration: 150 })
            .setTween("#carosel", {opacity: "1"}, )
//.addIndicators({name: "carosel on"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#footer", triggerHook: 0.8, duration: 150 })
            .setTween("#carosel", {opacity: "0"})
//.addIndicators({name: "carosel off"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#footer", triggerHook: 0.8, offset: 200, duration: 150 })
            .setTween("#footer", {opacity: "1"}, )
  //.addIndicators({name: "footer"})
            .addTo(controller);
        
