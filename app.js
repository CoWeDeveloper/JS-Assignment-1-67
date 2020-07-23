// ## assignent 38-42##

// assign 1
// function first(a,b){ 
//      var c=a**b
//  document.write(c)
// }
//  first(2,3)
 
//assign 2
// var year=prompt("Enter the year");
// if (year%4===0){document.write("it is leap year "+ year)}
// else {document.write("it is not a leap year "+ year)}

// //assign 3
// function first(a,b,c){ 
//      var d=(a+b+c)/2
//      var area=d*((d-a)*(d-b)*(d-c))
//  document.write("the S of triangle "+ d +"<br>")
//  document.write("the area of triangle "+area)
// }
//  first(2,5,5)



// //assign 4

// function average(){
//     var one   = parseInt(prompt("Enter the 1st subject marks :"))
//     var two   = parseInt(prompt("Enter the 2nd subject marks :"))
//     var three = parseInt(prompt("Enter the 2nd subject marks :"))
//     var average = (one + two + three) / 3;
//     return average;
// }    
// function percent(){
//     var percentage = ((one + two + three) / 300) * 100
//     return percentage
// }
// function result(){
//     document.write("Average = " + average() + "<br>")
//     document.write("Percentage = " + percent() + "%")
// }
// result()

//assign 5
// skip

//assign 6
// function removeVowels(string) {
//     var array = ["a", "i", "e", "o", "u"]

//     i = 0
//     while (i < string.length) {
//         if (string[i] = array) {
//             remove = string.replace(/[aeiou]/g, '_');

//         }
//         i++
//     }
//     alert(remove)
// }
// removeVowels("all vowels will be removed")
//assign 7
// skip
//assign 8
// var city1 =parseFloat(prompt("enter the distance of 1st city in Km")) 
// var city2 =parseFloat("enter the distance of 2st city in Km") 
// var diff = city1-city2

//  function meter(){
//     value = (diff/1000)    
//      document.write("In meter the distance is " + value + "<br>")
// }
// meter() 
// function feet(){
//   value = (diff/3280);
//   document.write("In feet the distance is " + value + "<br>")
// }
// feet()
// function inches(){
//     value = diff/39370
//     document.write("In inches the distance is " + value + "<br>")
// }
// inches()
// function centi(){
//    value = diff/100000
//    document.write("in centimeter the ditance is " + value + "<br>")
// }
// centi()
//assign 9
// var hour=45
// function overpay(){
//     if (hour >= 40){
//     pay = (hour-40)*12
//     document.write( "overpay for hours" + " " + (hour-40)+ " is " +  pay)
//     }else(document.write("Overpay is not applicable to those who spend less than 40 hours"))
// }
// overpay()
// assign 10

// var amount = prompt("Enter amount ?")

// function currencyNotes(amount) {
//     if (amount > 991) {
//         alert("Please enter a 3 digit number? ")
//     } else {
//         var hundred = amount.slice(0, 1);
//         var mainSlice = amount.slice(1, 2);
//         if (mainSlice >= 5) {
//             var ten = "1 fifty Note";
//         } else if (mainSlice < 5) {
//             var ten = "0 fifty notes";
//         }
//         if (mainSlice >= 1 && mainSlice < 5) {
//             var unit = mainSlice;
//             var unitA = unit + " Ten Notes";
//         } else if (mainSlice >= 6 && mainSlice <= 9) {
//             var unit = mainSlice - 5;
//             var unitA = unit + " Ten Notess"
//         } else if (mainSlice == 5) {
//             var unitA = "0 Ten Notes";
//         }
//         alert("You will have " + hundred + " Hundred Notes " + unitA + " and " + ten)
//     }
// }
// currencyNotes(amount)


// ## assignent 43-48##
//assign 1
// function warn(){
//     alert("you are about to move to next page")
// }

//assign 2
// function buy(){
//  alert("Thank you for purching the phone ^-^")
// } 

// //assign 3
// function cut1(){
//     var obj= document.getElementById("row1");
//     obj.innerHTML=" "
// }
// function cut2(){
//     var obj= document.getElementById("row2");
//     obj.innerHTML=" "
// }
// function cut3(){
//     var obj= document.getElementById("row3");
//     obj.innerHTML=" "
// }
// function cut4() {
//     var obj= document.getElementById("row4");
//     obj.innerHTML =" "
// }


// // ## assignent 38-42##
// function showimage(e){
//  var image=document.getElementById("showimag")
//      image.style.width="400px"
//      image.style.height="300px"
//     image.src =e.src 
// }

// //assign 4
// function change1(){
//     var im=document.getElementById("pic")
//     im.src="images/laptop 2.jpg"
// }
// function change2(){
//     var im=document.getElementById("pic")
//     im.src="images/laptop 1.jpg"
// }

// assign 5
//  var counter= 0 ; 
//  function add() {
//      counter++
//  var screen = document.getElementById("num");
//      screen.innerHTML=counter   
// }
//  function sub() {
//     counter--
//    var screen = document.getElementById("num");
//     screen.innerHTML=counter    
// }
// function add1(){
//       counter++
//       var screen =document.getElementById("in")
//       screen.value =counter
// }

// function sub1() {
//     counter--
//    var screen = document.getElementById("in");
//     screen.value=counter    
// }
// ## assignent 49-52##
//assign 1
    
// function Fname() {
//     var fname = document.getElementById('Fname')
//     console.log(fname.value)
// }

// function Lname() {
//     var lname = document.getElementById('Lname');
//     console.log(lname.value)
// }

// function email() {
//     var emailID = document.getElementById("email");
//     console.log(emailID.value)
// }

// function password() {
//     var Password1 = document.getElementById('password');
//     console.log(Password1.value)
// }
//assign 2
// function readMore(){
//     var text = " We have created this handy-dandy guide so you will know the ins and outs of your prospective system before you make the decision to hit the buy button. From advice on choosing screen size, to selecting between an SSD and HDD to insider scoops on where to find the best prices on laptops, here are some essential tips for finding the right system for you"
//     var paragraph =document.getElementById("para") 
//     paragraph.innerHTML = text
// }

//assign 3

// function Fname() {
//     var fname = document.getElementById('Fname')
//     console.log(fname.value)
// }

// function Lname() {
//     var lname = document.getElementById('Lname');
//     console.log(lname.value)
// }

// function email() {
//     var emailID = document.getElementById("email");
//     console.log(emailID.value)
// }

// function password() {
//     var Password1 = document.getElementById('password');
//     console.log(Password1.value)
// }

// var date=new Date(prompt("enter the date of brith","Dec 26, 1991"));
// var datemilli=date.getTime();
// var today=new Date();
// var todaymili= today.getTime();
// var diff =todaymili-datemilli
// var diffyear= (diff/(1000*60*60*12*24*30));
// var accuage=Math.floor(diffyear);

// document.write(accuage);

// Assign 58-67.1


// var parent = document.getElementById('mainContent')
// console.log(parent.childNodes)

// var render = document.getElementsByClassName("render");

// for (var a = 0; a < render.length; a++) {
//     console.log(render[a].innerHTML)
// }

// function InputValues() {
//     document.getElementById('first-name').value = 'Muhammad';
//     document.getElementById('last-name').value = 'Ahmed';
//     document.getElementById('email').value = 'this@this.com';

// }

// Assig 58-67.2

// var a = document.getElementById('form-content').nodeType;
// console.log(a)

// var x = document.getElementById('lastName').nodeType;
// var y = document.getElementById('lastName').childNodes
// var z = document.getElementById('lastName').childNodes.nodeValue = 'Updated'
// console.log(x)
// console.log(y)
// console.log(z)

// var z = document.getElementById('main-content')
// var a = z.firstChild
// var b = z.lastChild
// console.log(a)
// console.log(b)

// var n = document.getElementById('lastName');
// var a = n.nextSibling
// var b = n.previousSibling;
// console.log(b)

// var j = document.getElementById('email');
// var a = j.nodeType
// var b = j.parentNode
// console.log(a)
// console.log(b)