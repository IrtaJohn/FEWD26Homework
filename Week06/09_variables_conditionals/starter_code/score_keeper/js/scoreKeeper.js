

// Create the variavle to store the score
var score=0;


// On Click of #add5, 
	jQuery("#add5").on("click", function(){
	//add 5 to score
	score = score + 5;
	//update #result
	jQuery("#result").text(score);
		if (score>20){
			alert("you win");
		}
	});


// On Click of #add10, 
	jQuery ("#add10").on("click", function(){
	//add 10 to score
	score=score+10;
	//update #result
	jQuery("#result").text(score);
	});


// On Click of #sub1,
	jQuery("#sub1").on("click", function() {
	// subtract 1 from score
	score = score-1;
	//update #result
	jQuery("#result").text(score);
	});
	
