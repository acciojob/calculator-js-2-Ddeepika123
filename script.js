//your JS code here. If required.
const display = document.getElementById("display"); 
// Number buttons
for (let i = 0; i <= 9; i++) { 
	document.getElementById(i.toString()).addEventListener("click", function () {
		display.value += i;
	});
} 
// Addition 
document.getElementById("plus").addEventListener("click", function () {
	display.value += "+"; }); 
// Subtraction
document.getElementById("-").addEventListener("click", function () { 
	display.value += "-"; });
// Multiplication 
document.getElementById("*").addEventListener("click", function () { 
	display.value += "*";
});
// Division 
document.getElementById("divi").addEventListener("click", function () { 
	display.value += "/";
});
// Open bracket
document.getElementById("op").addEventListener("click", function () {
	display.value += "(";
});
// Close bracket 
document.getElementById("cl").addEventListener("click", function () { 
	display.value += ")";
});
// Clear All 
document.getElementById("C").addEventListener("click", function () {
	display.value = "";
});
// Backspace
document.getElementById("back").addEventListener("click", function () {
	display.value = display.value.slice(0, -1);
});
// Equals 
document.getElementById("equal").addEventListener("click", function () { 
	try { 
		display.value = eval(display.value);
} catch (error) {
		display.value = "Error"; 
				} 
});