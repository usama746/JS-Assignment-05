// QUESTION 01 & 02

document.write("<p>Question 01 & 02</p>");

var a = 3;
var b = 5;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;


document.write(c + "<br>");


document.write(d + "<br>");


document.write(e + "<br>");


document.write(f + "<br>" + "<br>");


// QUESTION 03

document.write("<p>Question 03</p>");

var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num = ++num;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num = --num;
document.write("Value after decrement is: " + num + "<br>");


num = num % 3;
document.write("The remainder is: " + num + "<br>" + "<br>" + "<br>");




// QUESTION 04

document.write("<p>Question 04</p>");

var cost_of_ticket = 600
var no_of_tickets = 5
var total_cost = cost_of_ticket * no_of_tickets + "PKR";
document.write("Total cost to buy " + no_of_tickets + " tickets to a movie is " + total_cost + "<br>" + "<br>" + "<br>");




// QUESTION 05





// QUESTION 06

document.write("<p>Question 06</p>");

var temp_in_C = 25;
var temp_in_F = (temp_in_C * 9 / 5) + 32

document.write(temp_in_C + "\u00B0 C is " + temp_in_F + "\u00B0 F" + "<br>");


var tem_in_F = 70;
var tem_in_C = (tem_in_F - 32) * 5 / 9

document.write(tem_in_F + "\u00B0 C is " + tem_in_C + "\u00B0 F" + "<br>" + "<br>" + "<br>");



// QUESTION 07

document.write("<p>Question 07</p>");

var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total_cost1 = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("Shopping Cart:" + "<br>" + "<br>");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges are " + shipping + "<br>" + "<br>");
document.write("Total cost of your order is " + total_cost1 + "<br>" + "<br>" + "<br>");



// QUESTION 08

document.write("<p>Question 08</p>");

var total = 980;
var obtained = 804;
var perc = (obtained / total) * 100;

document.write("Marks Sheet:" + "<br>" + "<br>");
document.write("Total Marks: " + total + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + perc + "%" + "<br>" + "<br>" + "<br>");




// QUESTION 09

document.write("<p>Question 09</p>");

var USD = 104.8;
var SAR = 28;
var total = 10 * USD + 25 * SAR;

document.write("Total Currency in PKR is: " + total + "<br>" + "<br>" + "<br>");




// QUESTION 12

document.write("<p>Question 12</p>");

var radius = 20;
var pie = 3.142;
var circumference = 2 * pie * radius;

document.write("Radius of a circle: " + radius + "<br>");
document.write("Circumference of a circle: " + circumference + "<br>");

var area = pie * (radius * radius);
document.write("Area of a circle: " + area + "<br>" + "<br>" + "<br>");