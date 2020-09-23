var colors =[];
var pickedColor;
var numSquares=6;
//selection
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
//reset game
		resetButton.addEventListener("click",function(){
		reset();
	});
//functions
function init(){
		
	setUpModeButtons();
	setUpSquares();
	reset();

}
function setUpModeButtons(){
	//easy and hard modes button listeners
		for(var i=0;i<modeButtons.length;i++)
		{
			modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy")
			{
				numSquares=3;
			}
			else
			{
				numSquares=6;
			}
			reset();
			});
			
		}

}
function setUpSquares()
{
	//click listeners
	for(var i=0; i<squares.length;i++)
	{
		
		    squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor)//win
			{
				message.textContent="Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?";
			} 
			else //lose
			{
				this.style.backgroundColor=("#232323");
				message.textContent="Try Again";

			}
		});	
	}
}

function changeColors(color){

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color;
}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var colors=[];
	for (var i=0;i<num;i++)
	{
		colors.push(randomColor());
	}

	return colors;

}

 function randomColor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var color = "rgb("+red+", "+green+", "+blue+")";
	return color;
}

function reset()
{
	//generate all new random colors
	colors =generateRandomColors(numSquares);
	//pick random color from array
	pickedColor= pickColor();
	resetButton.textContent="New Colors";
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squraes
	for(var i=0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";	
		}
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
}
 
