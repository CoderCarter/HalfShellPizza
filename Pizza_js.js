function getReceipt() {
		var text1 = "<h3>You Ordered:</h3>";
		var runningTotal = 0;
		var sizeTotal = 0;
		var sizeArray = document.getElementsByClassName("size");
		for (var i = 0; i< sizeArray.length; i++) {
			if (sizeArray[i].checked) {
				var selectedSize = sizeArray[i].value;
				text1 = text1+selectedSize+"<br>";
			}
		}
		if (selectedSize === "Personal Pizza") {
				sizeTotal = 6;
		} else if (selectedSize === "Medium Pizza") {
				sizeTotal = 10;
		} else if (selectedSize === "Large Pizza") {
				sizeTotal = 14;
		} else if (selectedSize === "Extra Large Pizza") {	
				sizeTotal = 16;
		runningTotal = sizeTotal;
		getMeat(runningTotal,text1);
};	

function getMeat(runningTotal, text1) {
		var meatTotal = 0;
		var selectedMeat = [];
		var meatArray = document.getElementsByClassName("meats");
		for (var j = 0; j < meatArray.length; j++) {
				if (meatArray[j].checked) {
						selectedMeat.push(meatArray[j].value);
						text1 = text1+meatArray[j].value+"<br>";
				}
		}
		var meatCount = selectedMeat.length;
		if (meatCount > 1) {
				meatTotal = (meatCount - 1);
		} else {
				meatTotal = 0;
		}
		runningTotal = (runningTotal + meatTotal);
		getVeggie(runningTotal,text1);
};

function getVeggie(runningTotal, text1) {
		var veggieTotal = 0;
		var selectedVeggie = [];
		var veggieArray = document.getElementsByClassName("veggies");
		for (var j = 0; j < veggieArray.length; j++) {
				if veggieArray[j].checked) {
						selectedVeggie.push(veggieArray[j].value);
						text1 = text1+veggieArray[j].value+"<br>";
				}
		}
		var veggieCount = selectedMeat.length;
		if (veggieCount > 1) {
				meatTotal = (veggieCount - 1);
		} else {
				meatTotal = 0;
		}
		runningTotal = (runningTotal + veggieTotal);
		getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
		}
		runningTotal = (runningTotal + cheeseTotal);
		getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text1 = text1 + 0 + "<br>";
	getCrust(runningTotal,text1)
};
		
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text1 = text1 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};
function clearAll() {
	document.getElementById("allMenu").reset();
	document.getElementById("cart").style.opacity=0;
};