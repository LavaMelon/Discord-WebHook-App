var nick;
var tresc;
var linkacz;
var wazping ="";
var skladnia ="";
var tresc2 ="";
var linkdobota ="";
var cooldown=true;

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    enter();
  }
});

function f1()
{
//pobierz
	nick = document.getElementById("Nick").value;
	tresc = document.getElementById("Tresc").value;
	linkacz = document.getElementById("Linkk").value;
	tts = document.getElementById("tts").value;
	avatarurl = document.getElementById("ava").value;
	
	if (tts.toLowerCase() == "tak")
	{tts = true;}
	else
	{tts = false;}

	enter();
}
//enter
function enter()
{	
	
	if (cooldown)
	{
		
		cooldown = false;
	document.getElementById("sendz").innerHTML="<input class=\"send\" style=\"cursor:auto;\" id=\"click\" type=\"submit\" value=\"Poczekaj, aby uniknąć spamu\" style=\"float:left;\"/>";
	
	setTimeout(function(){document.getElementById("sendz").innerHTML="<input class=\"send\" id=\"click\" type=\"submit\" value=\"Wyślij\" onclick=\"f1()\" style=\"float:left;\"/>";}, 1000);
	setTimeout(function(){cooldown = true;}, 1000);
	
	if(tresc && linkacz.includes("https://discord.com/api/webhooks"))
	{
		if(tresc.length<=500 && nick.length<=32){
	const whurl = linkacz
	const msg = {}
	msg.tts = tts
	msg.content = tresc
	msg.username = nick
	msg.avatar_url = avatarurl

	
	fetch(whurl + "?wait=true", 
	{"method":"POST", 
	"headers": {"content-type": "application/json"},
	"body": JSON.stringify(msg)})
	.then(a=>a.json()).then(console.log)
	
	tresc = "";
	tresc2 = "";
	
	document.getElementById("cmd").innerHTML = "Jeżeli link do bota jest poprawny, to wszystko działa!";
	document.getElementById("cmd2").innerHTML = "<img src=\"v.gif\">";
	
		} else {
		/*<img src=\"v.gif\">*/
		/*<img src=\"x.gif\">*/
		document.getElementById("cmd").innerHTML = "Wykryto błąd, link albo treść nie są poprawne!";
		document.getElementById("cmd2").innerHTML = "<img src=\"x.gif\">";
	}
	} else {
		/*<img src=\"v.gif\">*/
		/*<img src=\"x.gif\">*/
		document.getElementById("cmd").innerHTML = "Wykryto błąd, link albo treść nie są poprawne!";
		document.getElementById("cmd2").innerHTML = "<img src=\"x.gif\">";
	}
	}
}