function showMainButtons() {
	var list = document.querySelectorAll("#login-section section > *");
	for(let i=0;i<list.length; i++){
		list[i].style.display="none";
	}
	
	var buttonsId = document.getElementById("mainButtons");
	buttonsId.style.display="flex";
}
function HideMainButtons() {
	var buttonsId = document.getElementById("mainButtons");
	buttonsId.style.display="none";
}

function ShowScreen() {
	HideMainButtons();
	if(arguments.length==2)
	{document.getElementById(arguments[1]).style.visibility="hidden";}
	document.getElementById(arguments[0]).style.display="block";
}

function ShowReportGameConfirmation(flag) {
	if(flag=='1')
		{document.getElementById("reportInfoStatus").style.visibility="visible";}
	setTimeout(function(){
				document.getElementById("mainButtons").style.display="flex";
		document.getElementById("reportGameScreen").style.display="none";

	},1000);

}
function ShowSaveGameConfirmation(flag) {
	if(flag=='1')
		{document.getElementById("saveInfoStatus").style.visibility="visible";}
	setTimeout(function(){
				document.getElementById("mainButtons").style.display="flex";
		document.getElementById("saveGameScreen").style.display="none";

	},1000);
}

function showLoading(flag) {
	if(flag=="0")
	{HideMainButtons();}
	else{
	document.getElementById("myGamesScreen").style.display="none";
	}
	document.getElementsByClassName("ball-loader")[0].style.display="block";
	document.getElementsByClassName("ball-loader")[0].style.visibility="visible";
}

