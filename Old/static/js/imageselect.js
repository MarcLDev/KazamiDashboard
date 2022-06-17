var arrayImg = new Array();
arrayImg[0] = "DiscordThinking.png";
arrayImg[1] = "huh2.gif";
arrayImg[2] = "huh3.png";
arrayImg[3] = "huh4.png";
arrayImg[4] = "huh5.gif";

randomNum = Math.floor(Math.random() * arrayImg.length);
selectedImg = arrayImg[randomNum];

document.getElementById('huh').src = `./static/media/${selectedImg}`



var arrayTexts = new Array();
arrayTexts[0] = "Don't click on me!";
arrayTexts[1] = "Don't you dare!";
arrayTexts[2] = "What the dog doin?";
arrayTexts[3] = "Are the devs dumb or what?";

randomNum2 = Math.floor(Math.random() * arrayTexts.length);
selectedText = arrayTexts[randomNum2];

document.getElementById('spanText').innerHTML = selectedText;