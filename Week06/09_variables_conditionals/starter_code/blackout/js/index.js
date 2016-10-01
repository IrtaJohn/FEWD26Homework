
//Light Status
var mylights=1;

jQuery(document).ready(function () {

//On click #light_switch
	jQuery("#light_switch").on("click", function(){
			if(mylights==1){
	//if lights are On
		//turn off 
			//set body background to black css
		jQuery("body").css("background", "black");
		//set mylights 0
		mylights=0;
	
	}else{
	//else
		//turn On
			//set body background to white css
		jQuery("body").css("background", "white");
		//set mylights 1
		mylights=1;
	}

});
})