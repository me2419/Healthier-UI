$("#q1").click(function(){
	var t = $("#q1yes").is(":checked");
	
	if($("#q1yes").is(":checked")) {
	
		loadQuestion2();
	}
	else{
		loadQuestion3();
	}
});

function loadQuestion2(){
	
	$("#panel-title").html("Do you sleep well at night?");
	$("#zeBody").html('<form action=""> <input id="q1yes" type="radio" name="ans" value="yes">&nbsp;Yes<br>'+
                 '<input id="q1no" type="radio" name="ans" value="no">&nbsp;No'+
                  '</form>'+
                  '<button id="q2" style="float:right;" type="button" class="btn btn-primary">Answer</button>');

	$("#q2").click(q2listener);
}

function q2listener(){
	alert("profit");
}