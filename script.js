// MARCH
const marchSayings = {
	8: "6) They don't keep score.",
	9: "7) He will open doors for you. Make you always go first, even when ascending or descending stairs. He always got your back.",
	10: "8) You both allow yourselves to be vulnerable.",
	11: "9) You meet halfway. It takes two to tickle. :) ",
	12: "10) You complement each other, make up for each others' flaws.",
	13: "11) You don't just plan the relationship, you plan your future.",
	14: "12) They go out of their comfort zone.",
	15: "13) They want the best for you and for the both of you going forward.",
	16: "14) They can collaborate and more imporantly, compromise.",
	17: "15) They make you feel safe and at home.",
	18: "16) They have boundaries and limitations, they respect you.",
	19: "17) They're tormented when your sad, blissful when you're happy.",
	20: "18) They do little things for you.",
	21: "19) They listen and pay attention to every detail.",
	22: "20) They fit into your life in ways you never expected.",
	23: "21) They make you feel good about yourself. You inpsire each other in a lot of ways.",
	24: "22) You can transition from being serious to being fun. You are able to laugh your heart out whenever you're together.",
	25: "23) He finds excuses to touch you, such as keeping you safe when crossing the street.",
	26: "24) He will stand up for you and will always be on your side, but he will also know when to say you're at the wrong.",
	27: "25) He says you're like his mom, like your food preferences for example.",
	28: "26) He will be overly protective of you, even for small things like a chihuahua growling at things and people from a distance.",
	29: "27) He will dress up nicer for you. Maybe wear a special cologne or wear his favorite/lucky shirt when with you.",
	30: "28) They pass the bar test.",
	// 31: "29) They are happy when they see you improve and become a better person.",
};

// ARPIL
const aprilSaying = {
	1: "30) Your other relationships with family and friends become even better and more stable.",
	2: "31) He sings to you everytime.",
	3: "32) He tries to make you laugh all the time.",
	4: "33) He takes note of the things you like.",
	5: "34) He is a positive force in your life.",
	6: "35) You feel comfortable planning things six months—or a year—into the future.",
	7: "36) He always compliments you and tells you you look pretty.",
	8: "37) He is endlessly curious about you.",
	9: "38) He is honest and does not feel a need to pretend around you.",
	10: "39) He works hard at his job, but you're his priority.",
	11: "40) He is your go-to person whenever you have a story to share, about work, about friends, about anything.",
	12: "41) He gets so worried when you get a small boo-boo.",
	13: "42) He is dedicated to his personal growth while also supporting yours.",
	14: "44) He is not jealous of your exes. Well maybe just a tad bit. LOL.",
	15: "43) He not only accepts your quirks, he cherishes them, loves them, and loves you more as a person because of them.",
	16: "45) He sure is worth a lot of work to keep around.",
	17: "46) You can picture sitting on a porch with him.",
	18: "47) He is usually an alpha, one that makes his own decisions, but is a yes-man when it comes to you.",
	19: "48) He is a hundred percent committed to you, the relationship, and everything that comes with. ",
	20: "49) He has a positive outlook in life, always looking for the silver linings.",
	21: "50) He has exciting things of his own for things you can do together.",
	22: "51) He makes sacrifices for you—and you're happy to do the same for him.",
	23: "52) He does not have an expiration date for sure.",
	24: "53) He tries his best to come on time.",
	25: "54) He likes most of the same things you do, or tries to start liking them.",
	26: "55) He is up for learning new things or trying new things with you.",
	27: "56) He takes great importance to the people and things important to you.",
	28: "57) He sparks light in times of darkness for you.",
	29: "58) You feel every moment with him are precious and he does too.",
	30: "59) You can picture waking up next to him.",
	31: "60) They are happy when they see you improve and become a better person."
}

const sayings = {
	1: "61) You can argue with him and still get along, get even closer than ever.",
	2: "62) You can argue with him and still get along, get even closer than ever.",
	3: "63) He would rather be honest with you and risk upsetting you than lie to you.",
	4: "64) When he buys you peanut M&Ms. Get it? hehe",
	5: "65) He is willing to grow and change with you.",
	6: "66) He is genuinely patient.",
	7: "66) He is genuinely patient.",
	8: "",
	9: "",
	10: "69) He thinks you are the best thing that has ever happened to him. And he truly believes in that. ",
	11: "70) He can get competitive with you, bringing in healthy competition in the relationship.",
	12: "71) He will cook for you and tries his best to impress you with food.",
	13: "72) Making you laugh the hardest is one of his everyday goals.",
	14: "73) He wants you to try all the experiences he considers gold, like the movies he considers as must-watch, and even all the must-try food he likes.",
	15: "74) He is genuinely patient.",
	16: "75) He goes to Mass with you, and is God-fearing.",
	17: "76) He is thankful everyday for your existence.",
	18: "77) He loves that you are a kid at heart and tries to be one as well.",
	19: "78) He will do all kinds of chores for you.",
	20: "79) He supports your ideas and beliefs but does not completely neglect his own.",
	21: "80) He mirrors your body language, sometimes speech too!",
	22: "81) ",
	23: "82)",
	24: "83)",
	25: "84)",
	26: "85)",
	27: "86)",
	28: "87)",
	29: "88)",
	30: "89)",
	31: "90)",
}

const juneSayings = {
	1: "91) ",
	2: "92)",
	3: "93) ",
	4: "94) ",
	5: "95) ",
	6: "96) ",
	7: "97) ",
	8: "98) ",
	9: "99) ",
	10: " 100) He makes a list of a hundred signs so you will be sure he is good for you."
}


var today = new Date().getDate();
console.log(today);
console.log("hello");

document.getElementById("today").innerHTML = sayings[today];

// Set the date we're counting down to
var countDownDate = new Date("March 2, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("hours").innerHTML = hours + "h";
	document.getElementById("minutes").innerHTML = minutes + "m";
	document.getElementById("seconds").innerHTML = seconds + "s";
	// + minutes + "m " + seconds + "s "
	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);
