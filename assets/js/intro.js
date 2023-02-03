var controller = new ScrollMagic.Controller();
        
        
var images2 = [];

for (let i = 0; i < 50; i++) {
const path = `./images/cover-${String(i).padStart(2, "0")}.jpg`;
images2.push(path);
}
    

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create animation tween
var runner = TweenMax.to(obj, 0.5,
{
curImg: images2.length - 1,	// animate propery curImg to number of images
roundProps: "curImg",				// only integers so it can be used as an array index
repeat: 0,									// repeat 3 times
immediateRender: true,			// load first image automatically
ease: Linear.easeNone,			// show every image the same ammount of time
onUpdate: function () {
  $("#myimg").attr("src", images2[obj.curImg]); // set the image source
}
}
);


    
    
    var disappear = TweenMax.to("#myimg", 1, {className: "+=fish"});
    var whitedisappear = TweenMax.to("#white", 1, {className: "+=fish"});
    





    // container pin
    var startpin = new ScrollMagic.Scene({
            duration: 500
        })
        .setPin("div#start")
        .addTo(controller);
    
    //COVER ANIMATION
    new ScrollMagic.Scene({ duration: 300})
        .setTween(runner)
//					.addIndicators({name: "animation"}) // add indicators (requires plugin)
        .addTo(controller);
    
    //COVER DISAPPEAR
    new ScrollMagic.Scene({ duration: 100, offset: 350})
        .setTween(disappear)
//					.addIndicators({name: "disappear"}) // add indicators (requires plugin)
        .addTo(controller);               


    //COVER DISAPPEAR
    new ScrollMagic.Scene({ duration: 100, offset: 350})
        .setTween(whitedisappear)
//					.addIndicators({name: "disappear"}) // add indicators (requires plugin)
        .addTo(controller);  

