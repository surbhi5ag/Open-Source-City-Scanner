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
//			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

        
         new ScrollMagic.Scene({triggerElement: "#links", triggerHook: 0.8, offset:300,  duration: 150 })
            .setTween("#links", {opacity: "1"})
//            .addIndicators({name: "links on"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#maps", triggerHook: 0.8, duration: 150 })
            .setTween("#links", {opacity: "0"})
//            .addIndicators({name: "links off"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#maps", triggerHook: 0.8, offset: 300, duration: 150 })
            .setTween("#maps", {opacity: "1"}, )
//            .addIndicators({name: "maps on"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#footer", triggerHook: 0.8, duration: 150 })
            .setTween("#maps", {opacity: "0"})
//            .addIndicators({name: "maps off"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#footer", triggerHook: 0.8, offset: 300, duration: 150 })
            .setTween("#footer", {opacity: "1"}, )
//            .addIndicators({name: "footer"})
            .addTo(controller);
        
