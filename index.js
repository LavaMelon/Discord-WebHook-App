var nick;
var tresc;
var linkacz;
var wazping ="";
var skladnia ="";
var tresc2 ="";
var linkdobota ="";
var cooldown=true;
var X = '<svg id="x" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="100" height="100" id="bg1" fill="rgba(0,0,0,0.6)"/>\n<rect id="rec3" x="8" y="22.1421" width="20" height="100" rx="10" transform="rotate(-45 8 22.1421)" fill="#FF0000"/>\n<rect id="rec4" x="22.1421" y="92.8528" width="20" height="100" rx="10" transform="rotate(-135 22.1421 92.8528)" fill="#FF0000"/>\n</svg>'
var V = '<svg id="v" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="100" height="100" id="bg2" fill="rgba(0,0,0,0.6)"/>\n<rect id="rec1" x="50.1421" y="97.7956" width="20" height="50" rx="10" transform="rotate(-135 50.1421 97.7956)" fill="#00FF00"/>\n<rect id="rec2" x="10" y="13" width="20" height="90" rx="10" transform="rotate(-22.5 10 13.6537)" fill="#00FF00"/>\n</svg>'
var vau=true;
setTimeout(() => {
	document.getElementById("cmd2").innerHTML = V;
}, 250);


document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    f1();
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
	if (!vau) document.getElementById("cmd2").innerHTML = V;
	vau = true;
	
	} else {
		/*<img src=\"v.gif\">*/
		/*<img src=\"x.gif\">*/
		document.getElementById("cmd").innerHTML = "Wykryto błąd, link albo treść nie są poprawne!";
		if (vau) document.getElementById("cmd2").innerHTML = X;
		vau = false;
	}
	} else {
		/*<img src=\"x.gif\">*/
		/*<img src=\"x.gif\">*/
		document.getElementById("cmd").innerHTML = "Wykryto błąd, link albo treść nie są poprawne!";
		if (vau) document.getElementById("cmd2").innerHTML = X;
		vau = false;
	}
	}
}