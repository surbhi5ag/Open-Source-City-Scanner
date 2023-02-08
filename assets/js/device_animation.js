var controller = new ScrollMagic.Controller();
             
//    var images3 = [];
//
//for (let i = 0; i < 3; i++) {
//  const path = `./images/part1/clip1-${String(i).padStart(2, "0")}.png`;
//  images3.push(path);
//}
//    
//    
//    var obj2 = {curImg: 0};
//    
//	// create animation tween
//	var runner2 = TweenMax.to(obj2, 0.5,
//		{
//			curImg: images3.length - 1,	// animate propery curImg to number of images
//			roundProps: "curImg",				// only integers so it can be used as an array index
//			repeat: 0,									// repeat 3 times
//			immediateRender: true,			// load first image automatically
//			ease: Linear.easeNone,			// show every image the same ammount of time
//			onUpdate: function () {
//			  $("#img1").attr("src", images3[obj2.curImg]); // set the image source
//			}
//		}
//	);
    
    var images4 = [];

for (let i = 1; i <= 30; i++) {
  const path = `./images/composition/comp-${String(i).padStart(2, "0")}.png`;
  images4.push(path);
}
             
    var obj3 = {curImg: 0};
    
	// create animation tween
	var runner3 = TweenMax.to(obj3, 0.5,
		{
			curImg: images4.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img1").attr("src", images4[obj3.curImg]); // set the image source
			}
		}
	);
             
             
     var images5 = [];

for (let i = 31; i <= 37; i++) {
  const path = `./images/composition/comp-${String(i).padStart(2, "0")}.png`;
  images5.push(path);
}
             
    var obj4 = {curImg: 0};
    
	// create animation tween
	var runner4 = TweenMax.to(obj4, 0.5,
		{
			curImg: images5.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img1").attr("src", images5[obj4.curImg]); // set the image source
			}
		}
	);


 var images6 = [];

for (let i = 38; i <= 47; i++) {
  const path = `./images/composition/comp-${String(i).padStart(2, "0")}.png`;
  images6.push(path);
}
             
    var obj5 = {curImg: 0};
    
	// create animation tween
	var runner5 = TweenMax.to(obj5, 0.5,
		{
			curImg: images6.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img1").attr("src", images6[obj5.curImg]); // set the image source
			}
		}
	);


 var images7 = [];

for (let i = 46; i <= 54; i++) {
  const path = `./images/composition/comp-${String(i).padStart(2, "0")}.png`;
  images7.push(path);
}
             
    var obj6 = {curImg: 0};
    
	// create animation tween
	var runner6 = TweenMax.to(obj6, 0.5,
		{
			curImg: images7.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img1").attr("src", images7[obj6.curImg]); // set the image source
			}
		}
	);


var images8 = [];

for (let i = 53; i <= 61; i++) {
  const path = `./images/composition/comp-${String(i).padStart(2, "0")}.png`;
  images8.push(path);
}
             
    var obj7 = {curImg: 0};
    
	// create animation tween
	var runner7 = TweenMax.to(obj7, 0.5,
		{
			curImg: images8.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#img1").attr("src", images8[obj7.curImg]); // set the image source
			}
		}
	);


new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 0.6, duration: "100%"})
            .setTween(runner3)
//            .addIndicators({name: "UNO"}) // add indicators (requires plugin)
            .addTo(controller);
             
        new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook: 0.8, duration: "50%"})
            .setTween(runner4)
//            .addIndicators({name: "DUE"}) // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 0.8, duration: "50%"})
            .setTween(runner5)
//            .addIndicators({name: "tre"}) // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook: 0.8, duration: "50%"})
            .setTween(runner6)
//            .addIndicators({name: "tre"}) // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger5", triggerHook: 0.8, duration: "50%"})
            .setTween(runner7)
//            .addIndicators({name: "tre"}) // add indicators (requires plugin)
            .addTo(controller);







        // scroll text appears
        new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#text1", "visible") // add class to reveal
        .addTo(controller);

              // scroll text appears
              new ScrollMagic.Scene({
                triggerElement: "#trigger2",
                triggerHook: 0.9, // show, when scrolled 10% into view
                duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 50 // move trigger to center of element
            })
            .setClassToggle("#text2", "visible") // add class to reveal
            .addTo(controller);


                  // scroll text appears
        new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#text3", "visible") // add class to reveal
        .addTo(controller);



              // scroll text appears
              new ScrollMagic.Scene({
                triggerElement: "#trigger4",
                triggerHook: 0.9, // show, when scrolled 10% into view
                duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 50 // move trigger to center of element
            })
            .setClassToggle("#text4", "visible") // add class to reveal
            .addTo(controller);



                  // scroll text appears
        new ScrollMagic.Scene({
            triggerElement: "#trigger5",
            triggerHook: 0.9, // show, when scrolled 10% into view
            duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 50 // move trigger to center of element
        })
        .setClassToggle("#text5", "visible") // add class to reveal
        .addTo(controller);


              // scroll text appears
              new ScrollMagic.Scene({
                triggerElement: "#trigger6",
                triggerHook: 0.9, // show, when scrolled 10% into view
                duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 50 // move trigger to center of element
            })
            .setClassToggle("#text6", "visible") // add class to reveal
            .addTo(controller);







        




//        new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300 })
////            .on('start', function() {
////            document.getElementById("intro").src = "images/Intro_1.svg"
////            console.log('Function is triggered')
////                }) 
//            .setTween(runner2)
//            .addTo(controller);

    
//        new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "100%"})
//            .setTween(runner3)
//            .addIndicators({name: "UNO"}) // add indicators (requires plugin)
//            .addTo(controller);
//             
//        new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "100%"})
//            .setTween(runner4)
//            .addIndicators({name: "DUE"}) // add indicators (requires plugin)
//            .addTo(controller);
    


//        new ScrollMagic.Scene({triggerElement: "#intro2"})
//            .on('start', function() {
//            document.getElementById("intro").src = "images/Intro_2.svg"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller);
//
//        new ScrollMagic.Scene({triggerElement: "#intro3"})
//            .on('start', function() {
//            document.getElementById("intro").src = "images/Intro_3.svg"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller);
//
//        new ScrollMagic.Scene({triggerElement: "#text1"})
//            .setClassToggle("img", "active") 
//            .addTo(controller);
//
//        new ScrollMagic.Scene({triggerElement: "#text1", duration: 300})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1a.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller);
//
//
//        new ScrollMagic.Scene({triggerElement: "#text2", duration: 300})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1b.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller);
//
//
//        new ScrollMagic.Scene({triggerElement: "#text3"})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1j.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller);           
//								
//        new ScrollMagic.Scene({triggerElement: "#text4"})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1d.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller); 
//
//        new ScrollMagic.Scene({triggerElement: "#text5"})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1f.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller); 
//
//        new ScrollMagic.Scene({triggerElement: "#text6"})
//            .on('start', function() {
//            document.getElementById("img").src = "images/1a.png"
//            console.log('Function is triggered')
//                }) 
//            .addTo(controller); 
            
            