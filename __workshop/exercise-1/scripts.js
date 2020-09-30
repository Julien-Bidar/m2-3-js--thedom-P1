let main = document.querySelector('main');

//link css
let link = document.createElement("link");
link.rel = 'stylesheet'
link.href = "styles.css"
main.appendChild(link)

// h1
let title = document.createElement("h1");
let text = document.createTextNode("The best How I Met Your Mother episode (according to fans)")
title.appendChild(text);
main.appendChild(title);

// p
let parag = document.createElement("p");
let textp = document.createTextNode("As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…");
parag.appendChild(textp);
main.appendChild(textp);

//h2
let titleh2 = document.createElement("h2");
let texth2 = document.createTextNode("The Slap Bet (Season 2, Episode 9)")
titleh2.appendChild(texth2);
main.appendChild(titleh2);

//2ndp
let secondP = document.createElement("p");
let textSecP = document.createTextNode("IMDB Rating: 9.5")
secondP.appendChild(textSecP);
main.appendChild(secondP);

//img
let img = document.createElement("img");
img.src = 'images/robin-sparkles.jpg';
img.alt = 'Robin Sparkles'
main.appendChild(img);

//thirdP
let thirdP = document.createElement("p");
let textThirdP = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.")
thirdP.appendChild(textThirdP);
main.appendChild(thirdP);

//fourthP
let fourthP = document.createElement("p");
let textFourthP = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.")
fourthP.appendChild(textFourthP);
main.appendChild(fourthP);

// a tag
let a = document.createElement("a");
a.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
let textA = document.createTextNode("Source");
a.appendChild(textA);
main.appendChild(a);
