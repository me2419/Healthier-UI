$("#q1").click(function()
{
	if($("#q1yes").is(":checked"))
	{
		loadQuestion2();
	}
	else
	{
		loadQuestion3();
	}
});

function q2listener()
{
	if($("#q2yes").is(":checked"))
	{
		loadQuestion4();
	}
	else{
		//Qi
		$("#panel-title").html("Reuslts");
		$("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY QI DEFICIENCY</strong></div>');
	}
}

function q3listener()
{
	loadQuestion5();
}

function q4listener()
{
	if($("#q4yes").is(":checked"))
	{
		$("#panel-title").html("Reuslts");
		$("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY YING DEFICIENCY</strong></div>');
	}
	else
	{
		loadQuestion5();
	}
}

function q5listener()
{
	$("#panel-title").html("Reuslts");
		$("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY YANG DEFICIENCY</strong></div>');
}

function loadQuestion2()
{ //Sleep
	$("#panel-title").html("Do you sleep well at night?");
	$("#zeBody").html('<form action=""> <input id="q2yes" type="radio" name="ans" value="yes">&nbsp;Yes<br>'+
                 '<input id="q2maybe" type="radio" name="ans" value="maybe">&nbsp;Sometimes<br>'+
                 '<input id="q2no" type="radio" name="ans" value="no">&nbsp;No'+
                  '</form>'+
                  '<button id="q2" style="float:right;" type="button" class="btn btn-primary">Answer</button>');

	$("#q2").click(q2listener);
}

function loadQuestion3()
{ //Shitting
	$("#panel-title").html("How loose would you call your stool on a scale of 1-10?");
	$("#zeBody").html('<form action="demo_form.asp" method="get">' +
	'Scale: 0<input id="q3range" type="range" name="points" min="1" max="10">10' +
	'</form>'+
    '<button id="q3" style="float:right;" type="button" class="btn btn-primary">Answer</button>');

	$("#q3").click(q3listener);
}

function loadQuestion4()
{ //fever
	$("#panel-title").html("Do you sweat at night or get tidal fevers?");
	$("#zeBody").html('<form action=""> <input id="q4yes" type="radio" name="ans" value="yes">&nbsp;Yes<br>'+
                 '<input id="q4no" type="radio" name="ans" value="no">&nbsp;No'+
                  '</form>'+
                  '<button id="q4" style="float:right;" type="button" class="btn btn-primary">Answer</button>');

	$("#q4").click(q4listener);
}

function loadQuestion5()
{ // dry mouth
	$("#panel-title").html("Is your mouth or throat dry?");
	$("#zeBody").html('<form action=""> <input id="q5yes" type="radio" name="ans" value="yes">&nbsp;Yes<br>'+
                 '<input id="q5no" type="radio" name="ans" value="no">&nbsp;No'+
                  '</form>'+
                  '<button id="q5" style="float:right;" type="button" class="btn btn-primary">Answer</button>');

	$("#q5").click(q5listener);
}


function reload(){
	alert("called");
	$("#zeBody").html('<form action=""><input id="q1yes" type="radio" name="ans" value="yes">&nbsp;Yes<br><input id="q1no" type="radio" name="ans" value="no">&nbsp;No</form><button id="q1" style="float:right;" type="button" class="btn btn-primary">Answer</button>');
	$("#panel-title").html("Do you experience dizziniess often?");
}