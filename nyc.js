function setup() {
	createCanvas(1000,1000);
	background(255, 255, 255,45);
	colorMode(RGB);
	
	///day time background button
	button = createButton("Day");
  button.mousePressed(changeColorDay);
	button.position(0,100); 
	button.size(100,50);


	///night time background button
	button = createButton("Night");
  button.mousePressed(changeColorNight);
	button.position(900,100); 
	button.size(100,50);
	
	slider = createSlider(0, 360, 60, 40);
  slider.position(900, 900);
  slider.style('width', '80px');
	
 	
}
function draw () {
	var val = slider.value();
	noStroke ();
	fill(210,180,140)
	rect(375, 600, 100, 700,10); /// left 1 
	rect(400, 550, 100, 700,10); /// left 2 
	rect(425, 500, 100, 700,10); /// middle 
	rect (425,600, 100,100,10)
	rect(450, 550, 100, 700,10); ///right 2 
	rect(475, 600, 100, 700,10); ///right 1 
	fill (val,42,42);
	rect (410,600, 50,50,10);
	rect (410,750, 50,50,10);
	rect (410,900, 50,50,10);
	rect (490,600, 50,50,10);
	rect (490,750, 50,50,10);
	rect (490,900, 50,50,10);
	///rect(500, 400, 100, 700,10); ///right 2 
	/// rect(475, 600, 100, 700,10); ///right 1  
	
}

function changeColorNight() {
  bgcolor = background(0, 0, 153);
	for (var i = 0; i < 200; i++)
		fill (255,255,255)
    ellipse(random(0, width), random(0, height), 2);

	noStroke();
	fill(192,192,192)
	ellipse(900,100,500, 500);

	
	}
function changeColorDay() {

  bgcolor = background(255, 204, 153);
	noStroke();
	fill(212,175,55);
	ellipse(100,100,500, 500);
		
}
