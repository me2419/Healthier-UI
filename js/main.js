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
		// $("#panel-title").html("Results");
		// $("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY QI DEFICIENCY</strong></div>');
		giveRecommendation("KIDNEY_QI_DEFICIENCY");
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
		// $("#panel-title").html("Results");
		// $("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY YING DEFICIENCY</strong></div>');
		giveRecommendation("KIDNEY_YING_DEFICIENCY");
	}
	else
	{
		loadQuestion5();
	}
}

function q5listener()
{
	// $("#panel-title").html("Results");
		// $("#zeBody").html('<div class="alert alert-danger">You have <strong>KIDNEY YANG DEFICIENCY</strong></div>');
		giveRecommendation("KIDNEY_YANG_DEFICIENCY");
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
	console.log("")
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

function giveRecommendation(Disseasetype)
{
	$("#myModalLabel").html("Diagnosis Result");
	if(Disseasetype=="KIDNEY_QI_DEFICIENCY") {
		var desease='You have <strong>KIDNEY QI DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Invigorates the kidney';
		var title2='Recommendate Medicine';
		var content2='Wuzi yanzong pills';
		var title3='Herbs';
		var content3='The fruit of Chinese wolfberry, The seed of Chinese dodder, Raspberry, The fruit of Chinese magnoliavine, Semen plantaginis';
		var title4='Acupuncture';
		var content4='Guanyuan (CV4), Qihai (CV6)';
		var title5='Food';
		var content5='Astragalus, Mongholicus';
	}
	else if(Disseasetype=="KIDNEY_YING_DEFICIENCY")	{
		var desease='You have <strong>KIDNEY YING DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Nourishing kidney yin';
		var title2='Recommendate Medicine';
		var content2='Liuwei dihuang pill';
		var title3='Herbs';
		var content3='Radix Rehmanniae Recens, Chinese yam, Arillus Corni, Oriental Waterplantain Rhizome, Poria cocos, the root bark of the peony tree, rhizoma anemarrhenae, tortoise plastron';
		var title4='Acupuncture';
		var content4='Guanyuan (CV4), Ciliao(BL32), Fuliu(KI7), Mingmen(GV4)';
		var title5='Food';
		var content5='Bass, Corn, Sesame';
	}
	else if(Disseasetype=="KIDNEY_YANG_DEFICIENCY")	{
		var desease='You have <strong>KIDNEY YANG DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Warming and recuperating kidney yang';
		var title2='Recommendate Medicine';
		var content2='Chinkuei shin chewan pills';
		var title3='Herbs';
		var content3='Monkshood, Cinnamon, Arillus Corni, Chinese yam, Prepared rehmannia root, Poria cocos, Root bark of the peony tree, Herba Epimedii, Curculigo orchioides Gaertn';
		var title4='Acupuncture';
		var content4='Shenshu (BL23), Dachangshu (BL25), Mingmen(GV4), Yaoyan(EX-B7), Zhishi(BL52)';
		var title5='Food';
		var content5='Chinese chives';
	}
	else {
		alert("healthy");
	}


	$("#myModalBody").html('<div class="alert alert-danger">'+desease+'</div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title1+'</h3></div>'+
		'<div class="panel-body">'+content1+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title2+'</h3></div>'+
		'<div class="panel-body">'+content2+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title3+'</h3></div>'+
		'<div class="panel-body">'+content3+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title4+'</h3></div>'+
		'<div class="panel-body">'+content4+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title5+'</h3></div>'+
		'<div class="panel-body">'+content5+'</div></div>');
}

$("#mq1").click(function()
{
var out1=$("#ms1").val();
var out2=$("#ms2").val();
var out3=$("#ms3").val();
var out4=$("#ms4").val();
var out5=$("#ms5").val();
var out6=$("#ms6").val();
var out7=$("#ms7").val();
var out8=$("#ms8").val();
var out9=$("#ms9").val();
var out10=$("#ms10").val();
var outtotal=out1+" "+out2+" "+out3+" "+out4+" "+out5+" "+out6+" "+out7+" "+out8+" "+out9+" "+out10;
var jarcommand="java -jar D:/JAVA/Healthier-UI/jar/healthier.jar "+outtotal;


ML_test(jarcommand);

});

function ML_test(jarcommand)
{
try{     

//    var strPath="F:/Yuankai/JAVA_workingfolder/Healthier-UI/jar/healthier.jar 1 1 1 1 1 0 0 0 0 0";
   // alert(jarcommand); 
   var objShell=new ActiveXObject("WScript.Shell");
 
	var idx=objShell.run(jarcommand,0,true);  
	// alert(idx);

	if(idx==1){
			// alert("KIDNEY_YANG_DEFICIENCY");
			giveRecommendationML("KIDNEY_YING_DEFICIENCY");
		}else if(idx==2){
			// alert("KIDNEY_YANG_DEFICIENCY");
			giveRecommendationML("KIDNEY_YANG_DEFICIENCY");
		}else if(idx==3){
			// alert("KIDNEY_QI_DEFICIENCY");
			giveRecommendationML("KIDNEY_QI_DEFICIENCY");
		}else{
			// alert("HEALTHY");
			giveRecommendationML("HEALTHY");
		}

		
	}catch(e){
		alert("fail! Please use IE explorer");  
	}   

}

function giveRecommendationML(Disseasetype)
{
	// alert(Disseasetype);
	$("#myMLModalLabel").html("Diagnosis Result");
	if(Disseasetype=="KIDNEY_QI_DEFICIENCY") {
		var desease='You have <strong>KIDNEY QI DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Invigorates the kidney';
		var title2='Recommendate Medicine';
		var content2='Wuzi yanzong pills';
		var title3='Herbs';
		var content3='The fruit of Chinese wolfberry, The seed of Chinese dodder, Raspberry, The fruit of Chinese magnoliavine, Semen plantaginis';
		var title4='Acupuncture';
		var content4='Guanyuan (CV4), Qihai (CV6)';
		var title5='Food';
		var content5='Astragalus, Mongholicus';
	}
	else if(Disseasetype=="KIDNEY_YING_DEFICIENCY")	{
		var desease='You have <strong>KIDNEY YING DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Nourishing kidney yin';
		var title2='Recommendate Medicine';
		var content2='Liuwei dihuang pill';
		var title3='Herbs';
		var content3='Radix Rehmanniae Recens, Chinese yam, Arillus Corni, Oriental Waterplantain Rhizome, Poria cocos, the root bark of the peony tree, rhizoma anemarrhenae, tortoise plastron';
		var title4='Acupuncture';
		var content4='Guanyuan (CV4), Ciliao(BL32), Fuliu(KI7), Mingmen(GV4)';
		var title5='Food';
		var content5='Bass, Corn, Sesame';
	}
	else if(Disseasetype=="KIDNEY_YANG_DEFICIENCY")	{
		var desease='You have <strong>KIDNEY YANG DEFICIENCY</strong>';
		var title1='Treatment';
		var content1='Warming and recuperating kidney yang';
		var title2='Recommendate Medicine';
		var content2='Chinkuei shin chewan pills';
		var title3='Herbs';
		var content3='Monkshood, Cinnamon, Arillus Corni, Chinese yam, Prepared rehmannia root, Poria cocos, Root bark of the peony tree, Herba Epimedii, Curculigo orchioides Gaertn';
		var title4='Acupuncture';
		var content4='Shenshu (BL23), Dachangshu (BL25), Mingmen(GV4), Yaoyan(EX-B7), Zhishi(BL52)';
		var title5='Food';
		var content5='Chinese chives';

	}
	else {
		
		}

	if(Disseasetype=="HEALTHY")
	{
		$("#myMLModalBody").html('<div class="thumbnail">'+
		      '<img src="img/congratulations.jpg" style="width: 300px; height: 200px;">'+
		      '<div class="caption">'+
		       	'<h3>Congratulations! You are healthy!</h3>'+
		      '</div>'+
		    '</div>');
	}else{
	$("#myMLModalBody").html('<div class="alert alert-danger">'+desease+'</div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title1+'</h3></div>'+
		'<div class="panel-body">'+content1+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title2+'</h3></div>'+
		'<div class="panel-body">'+content2+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title3+'</h3></div>'+
		'<div class="panel-body">'+content3+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title4+'</h3></div>'+
		'<div class="panel-body">'+content4+'</div></div>'+
		'<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">'+title5+'</h3></div>'+
		'<div class="panel-body">'+content5+'</div></div>');
	}
}