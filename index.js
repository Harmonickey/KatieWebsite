//this is the javascript file

window.onload = function ()
{
	var divider = document.getElementById("katiedivider");
	divider.innerHTML = "this is my divider";

	var yellows = document.getElementsByClass("yellow");

	yellows[0].style.color = "yellow";

	yellows[1].style.color = "yellow";
}