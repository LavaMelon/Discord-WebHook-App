var dane = {
	"nick":"",
	"tresc":"",
	"link":"",
	"tts":false,
	"avatar":""
}
var cooldown=true;
var X = `<svg id="x" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" id="bg1" fill="rgba(0,0,0,0.6)"/>
<rect id="rec3" x="8" y="22.1421" width="20" height="100" rx="10" transform="rotate(-45 8 22.1421)" fill="#FF0000"/>
<rect id="rec4" x="22.1421" y="92.8528" width="20" height="100" rx="10" transform="rotate(-135 22.1421 92.8528)" fill="#FF0000"/>
</svg>`
var V = `<svg id="v" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect id="bg2" width="100" height="100" fill="black"/>
<rect id="rec1" width="20" height="50" rx="10" transform="matrix(-0.707107 0.707107 0.707107 0.707107 24.1421 48.2981)" fill="#00FF00"/>
<rect id="rec2" width="20" height="90" rx="10" transform="matrix(0.858464 0.512874 0.512874 -0.858464 33 87.2618)" fill="#00FF00"/>
</svg>`
var I = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" id="bg3" fill="black"/>
<rect x="10" y="40" id="rec5" width="80" height="20" rx="10" fill="#FFFF00"/>
</svg>`;
var pob=true;
var vau=1;
setTimeout(() => {
	document.getElementById("Tts").style="background-color: rgba(255,0,0,0.4);";
	document.getElementById("cmd2").innerHTML = V;
}, 250);



document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    f1();
  }
});

function f4()
{
	f2();
	f2();
	console.log("Dane wczytane...")
	document.getElementById("Nick").value=dane.nick;
	document.getElementById("Tresc").value=dane.tresc;
	document.getElementById("Link").value=dane.link;
	document.getElementById("Avatar").value=dane.avatar;
}

function f3()
{
	pob=false;
	f1();
	document.getElementById("cmd4").value=`dane={"nick":"${dane.nick}","tresc":"${dane.tresc}","link":"${dane.link}","tts":${dane.tts},"avatar":"${dane.avatar}"};f4();`;
	document.getElementById("cmd4").select();
	document.getElementById("cmd4").setSelectionRange(0, 99999);
	document.execCommand("copy");
}

function f2()
{
	if (dane.tts)
	{
		document.getElementById("Tts").style="background-color: rgba(255,0,0,0.4);";
		
		dane.tts = false;
	}else{
		document.getElementById("Tts").style="background-color: rgba(0,255,0,0.4);";
		
		dane.tts = true;
	}
}

function f1()
{
//pobierz
	dane.nick = document.getElementById("Nick").value;
	dane.tresc = document.getElementById("Tresc").value;
	dane.link = document.getElementById("Link").value;
	dane.avatar = document.getElementById("Avatar").value;
	if(pob)
	{
		enter();
	}else{pob=true}
}
//enter
function enter()
{	
	if (cooldown)
	{
		
		cooldown = false;
		document.getElementById("sendz").innerHTML="<input class=\"send\" style=\"cursor:auto;\" id=\"click\" type=\"submit\" value=\"Poczekaj, aby unikn???? spamu\" style=\"float:left;\"/>";
		
		setTimeout(function(){document.getElementById("sendz").innerHTML="<input class=\"send\" id=\"click\" type=\"submit\" value=\"Wy??lij\" onclick=\"f1()\" style=\"float:left;\"/>";}, 1000);
		setTimeout(function(){cooldown = true;}, 1000);
		
		if(dane.tresc && dane.link.includes("https://discord.com/api/webhooks"))
			{
				if(dane.tresc.length<=500 && dane.nick.length<=32){

				const whurl = dane.link
				const msg = {}
				msg.tts = dane.tts;
				msg.content = dane.tresc;
				msg.username = dane.nick;
				msg.avatar_url = dane.avatar;

			
				fetch(whurl + "?wait=true", 
				{"method":"POST", 
				"headers": {"content-type": "application/json"},
				"body": JSON.stringify(msg)})
				.then(a=>a.json()).then(console.log)
			
				if (dane.avatar)
					{
						if (dane.avatar.startsWith("https://cdn.discordapp.com/avatars/"))
							{
								document.getElementById("cmd").innerHTML = "Je??eli link do bota jest poprawny, to wszystko dzia??a!";
								if (vau==3||vau==2) document.getElementById("cmd2").innerHTML = V;
								vau = 1;
							}
						else
							{
								document.getElementById("cmd").innerHTML = "Link do Avatara niekoniecznie jest poprawny.";
								if (vau==3||vau==1) document.getElementById("cmd2").innerHTML = I;
								vau = 2;
							}
					}
				else
					{
						document.getElementById("cmd").innerHTML = "Je??eli link do bota jest poprawny, to wszystko dzia??a!";
						if (vau==3||vau==2) document.getElementById("cmd2").innerHTML = V;
						vau = 1;
					}

			} else {
				/*<img src=\"v.gif\">*/
				/*<img src=\"x.gif\">*/
				document.getElementById("cmd").innerHTML = "Wykryto b????d, link albo tre???? nie s?? poprawne!";
				if (vau==2||vau==1) document.getElementById("cmd2").innerHTML = X;
				vau = 3;
			}
			} else {
				/*<img src=\"x.gif\">*/
				/*<img src=\"x.gif\">*/
				document.getElementById("cmd").innerHTML = "Wykryto b????d, link albo tre???? nie s?? poprawne!";
				if (vau==1||vau==2) document.getElementById("cmd2").innerHTML = X;
				vau = 3;
			}
	}
}