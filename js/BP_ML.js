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