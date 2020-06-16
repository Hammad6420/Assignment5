//////////////////////CHP 2
// // 1
// var username;
// // 2
// let myname='MUHAMMAD HAMMAD';
// // 3
// var message;
// message='Hello World';
// alert(message);
// // 4
// let name='Jhone Doe';
// let age='15 years old';
// let expertise="Created Mobile Application Development";
// alert(name);
// alert(age);
// alert(expertise);
// // 5
// let pizza='PIZZA \n PIZZ \n PIZ \n PI \n P';
// alert(pizza);
// // 6
// let email='hammadriaz28@gmail.com';
// let text='My Email Address is';
// alert(text.concat(email));
// // 7
// let book =  'A smarter way to learn JavaScript';
// alert(book);
// // 8
// document.write('Yah! I can write HTML content through JavaScript');
// // 9
// let design =  '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(design);

////////////////////// CHP 3
// // 1
// age='I am 15 years old';
// alert(age);
// // 2
// let x=14;
// let visit=`You have visited this site ${x} times`;
// alert(visit);
// // 3
// var birthYear='2000'
// document.write("My birth year is "+ birthYear + '\n'+ 'Data type of my declared variable is number');
// // 4
// var name= prompt('ENTER YOUR NAME','XYZ');
// var productTitle = prompt('ENTER PRODUCT TITLE','TOY CAR');
// var quantity = prompt('ENTER QUATITY','3');
// document.write(` ${name} ordered ${quantity} ${productTitle} on XYZ Clothing store`);

///////////////// CHP 4
// // 1
// a='Hammad'; b='Pakistani'; c='student';
// // 2
// // legal
// a='legal'; $b='legal'; c22='legal'; d_1='legal'; eT='legal';
// // illegal
// @a='Illegal'; 2b='Illegal'; -c.s='Illegal'; /d='Illegal'; e>='Illegal';
// // 3
// document.write('Rules for naming JS variables');
// document.write('Variable names can only contain Letter, Number, Dollar Sign and Underscore For example $my_1stVariable ');
// document.write(' Variables must begin with a Letter, Dollar or underscore For example $name, _name or name');
// document.write(' Variable names are case Sensitive');
// document.write('Variable names should not be JS commands');

/////////////////////////CHP 5
// // 1
// a= +prompt('ENTER FIRST NUMBER (ADDITION)');
// b= +prompt('ENTER SECOND NUMBER (ADDITION)');
// c=a+b;
// document.write(`Sum of ${a} and ${b} is ${c}`);

// // 2
// // (SUBTRACTION)
// a= +prompt('ENTER FIRST NUMBER (SUBTRACTION)');
// b= +prompt('ENTER SECOND NUMBER (SUBTRACTION)');
// c=a-b;
// document.write(` SUBTRACTION of ${a} and ${b} is ${c}`);
// // (MULTIPLICATION)
// a= +prompt('ENTER FIRST NUMBER (MULTIPLICATION)');
// b= +prompt('ENTER SECOND NUMBER (MULTIPLICATION)');
// c=a*b;
// document.write(` MULTIPLICATION of ${a} and ${b} is ${c}`);
// // (DIVISION)
// a= +prompt('ENTER FIRST NUMBER (DIVISION)');
// b= +prompt('ENTER SECOND NUMBER (DIVISION)');
// c=a/b;
// document.write(`DIVISION of ${a} and ${b} is ${c}`);
// // (MODULUS)
// a= +prompt('ENTER NUMBER (MODULUS)');
// if (a<0){
// c=a*-1;
// }
// document.write(` MODULUS of ${a} is ${c}`);
// 3
// var x;
// document.write('Value after variable declaration is ' + x +'<br>')
// x=3;
// document.write('initial Value is ' + x+'<br>')
// x=++x;
// document.write('Value after increment is ' + x+'<br>')
// x=7+x;
// document.write('Value after addition is: ' + x+'<br>')
// x=--x;
// document.write('Value after decrement is ' + x+'<br>')
// x=x/3;
// document.write(' remainder after dividing the variable’s value by 3 : ' + x+'<br>')
// 4
// var x=600;
// document.write('Total cost to buy 5 tickets to a movie is : '+ x + 'PKR')
// 5
// var y=4;
// document.write('Table Of 4'+'<br>')
// for (let index = 0; index < 10; index++) {
//     c=y*(index+1);
//     document.write(y+ ' X '+(index+1)+ ' = '+ c + '<br>')
// }
// 6
// var t=25;
// c=(t*9/5)+32;
// document.write(t+'<Sup>' + 0 +'</Sup>'+'C' + ' is '+c+'<Sup>' + 0 +'</Sup>'+'F'+ '<br>')
// var tt=70;
// c=(tt-32)*5/9;
// document.write(t+'<Sup>' + 0 +'</Sup>'+'F' + ' is '+c+'<Sup>' + 0 +'</Sup>'+'C')
// 7
// document.write('<strong>'+'Shopping Cart'+'</strong>'+'<br>'+'<br>'+'<br>')
// var a=650;b=3;c=100;d=7;e=100;
// document.write(' Price of item 1 '+a +'<br>')
// document.write(' Price of item 2 '+b+'<br>')
// document.write(' Ordered quantity of item 1 '+c+'<br>')
// document.write(' Ordered Quantity of item 2 '+d+'<br>')
// document.write(' Shipping charges '+e+'<br>'+'<br>'+'<br>')
// document.write(' total cost of ur order  '+(a+b+c+d+e)+'<br>')
// 11
// document.write('<strong>'+' AGE CALCULATOR'+'</strong>'+'<br>'+'<br>'+'<br>')
// var x=2020;
// var y=1998;
// document.write('Current Year '+x+'<br>')
// document.write('Birth Year '+y+'<br>')
// document.write('Your Age Is '+(x-y)+'<br>')
// 12
// document.write('<strong>'+'THE GEOMETRIZER'+'</strong>'+'<br>'+'<br>'+'<br>')
// var x=20;
// document.write(' Radius of circle : '+(x)+'<br>')
// document.write('Circumference '+(x*2*3.142)+'<br>')
// document.write('The area is '+(3.142*x**2)+'<br>')



////////////////////////// CHP 6-9
// 1
// var x=+prompt('Enter value', '22');
// document.write('Result : ' + '<br>')

// document.write('The Value of a : ' + x + '<br>'+'<br>')

// document.write('...........................'+'<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + ++x + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + x++ + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + --x + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')

// document.write('The Value of ++a is : ' + x-- + '<br>')
// document.write(' NOw The Value of a : ' + x + '<br>'+'<br>'+'<br>')
// 2
// var a=2; b=1;
// var c=--a;
// document.write('a=2; b=1;'+ '<br>'+ ' The Value --a;  is : ' + c + '<br>')
// c=c- --b;
// document.write('The Value --a - --b;' + ' is : ' + c + '<br>')
// c=c + ++b;
// document.write('The Value --a - --b + ++b;   is : ' + c+ '<br>')
// c=c + b--;
// document.write('The Value  --a - --b + ++b + b--;  is : ' + c+ '<br>')
// 3
// var x=prompt('Enter  Name');
// document.write('Good Morning '+x)
// 5
// var x=prompt('Enter Number');
// for (let index = 0; index < 10; index++) {
//     if (x!=''){
//         c=x*(index+1);
//     document.write(x + ' X ' + (index+1) + ' = ' + c + '<br>' )
//     }
//     else{
//         x=5;
//         c=x*(index+1);
//         document.write(x + ' X ' + (index+1) + ' = ' + c + '<br>')
//     }
// }
// 6
// var x=prompt('Enter 1st Subject Name');
// var y=prompt('Enter 2nd Subject Name');
// var z=prompt('Enter 3rd Subject Name');
// var xo=+prompt('Enter 1st Subject marks');
// var yo=+prompt('Enter 2nd Subject marks');
// var zo=+prompt('Enter 3rd Subject marks');
//         document.write('<table>'+
//         '<tr>'+
//         '<th>'+ ' Subject ' +'</th>' +
//         '<th>'+ ' Total Marks' +'</th>'+
//         '<th>'+' Obtained Marks '  +'</th>'+
//         '<th>'+ ' Percentage '  +'</th>'+
//         '</tr>'+

//         '<tr>'+
//         '<td>'+ x +'</td>' +
//         '<td>'+ 100 +'</td>'+
//         '<td>'+ xo +'</td>'+
//         '<td>'+ xo +'%' +'</td>'+
//         '</tr>'+
//     '<tr>'+
//         '<td>'+ y +'</td>' +
//         '<td>'+ 100 +'</td>'+
//         '<td>'+ yo +'</td>'+
//         '<td>'+ yo +'%' +'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>'+ z +'</td>' +
//             '<td>'+ 100 +'</td>'+
//             '<td>'+ zo +'</td>'+
//             '<td>'+ zo +'%' +'</td>'+
//             '</tr>'+
//         '<tr>'+
//             '<td>'+'</td>' +
//             '<td>'+ 300 +'</td>'+
//             '<td>'+ (xo+yo+zo) +'</td>'+
//             '<td>'+ ((xo+yo+zo)/3) +'%' +'</td>'+
//             '</tr>'+
//             '</table>')
////////////////////// CHP 9-11
// 1
// var x=prompt('Enter City Name');
// if (x=='karachi'){
//     document.write('Welcome to the city of Lights');
// }
// else{
//     document.write('Welcome to the Beautiful city');
// }
// 2
// var x=prompt('Enter Ur Gender');
// if (x=='male'){
//     document.write('Good Morning Sir');
// }
// if (x=='female'){
//     document.write('Good Morning Ma\'am');
// }
// 3
// var x=prompt('Enter traffic light colour');
// if (x=='red'){
//     document.write('Must Stop');
// }
// if (x=='yellow'){
//     document.write('Ready to Move');
// }
// if (x=='green'){
//     document.write('Move Now');
// }
// 4
// var x=prompt('Enter Remaining fuel in Car (Litres)','1.5');
// if (x<=0.25){
//     document.write('Please refill the fuel in your car');
// }
// else{
//     document.write('No Need of Fuel At this moment');
// }
// 5
// // a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// // b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// //  d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// //    e 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// //  f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// 6
// var c=[];d=[];
// for (let index = 0; index < 3; index++) {
//      x=+prompt('Enter marks of Subjects out of 100','20')
//      d[index]=x;
//      c[index]=(x/300)*100;

// if (c[index]>=80){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'A-One'+ '<br>' + 'Remarks : ' + 'Excellent' + '<br>'+ '<br>')
// }
// if (c[index]>=70 && c[index]<=80){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'A'+ '<br>' + 'Remarks : ' + 'Good' + '<br>'+ '<br>')
// }if (c[index]>=60 && c[index]<=70 ){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'B'+ '<br>' + 'Remarks : ' + 'You Need To improve'+ '<br>'+ '<br>' )
// }if (c[index]<60){
//     document.write('Total marks : ' + 300 + '<br>'+'Marks Obtained : ' + d[index] + '<br>'+ 'Percentage : ' + c[index] + '%' + '<br>' +  'Grade : ' + 'Fail'+ '<br>' + 'Remarks : ' + 'Sorry' + '<br>'+ '<br>')
// }
// }
// 7
// x=Math.random()*10
// y=prompt('Guess the Number (0-10)','2')
// if (x==y){
// document.write('Bingo! Correct answer')
// }
// else if((y-x)==1){
//     document.write('Close enough to the correct answer')
// }
// else{
//     document.write('You Lose')
// }
// 8
// y=prompt('Enter The Number (Multiple of 3)','2')
// if ((y%3) == 0){
// document.write('The Given Number Is divisible by 3')
// }
// else{
//     document.write('The Given Number Is not divisible by 3')
// }
// 9
// y=prompt('Enter The Number (Odd or eVEN cHECK)','2')
// if ((y%2) == 0){
// document.write('The Given Number Is eVEN')
// }
// else{
//     document.write('The Given Number Is ODD')
// }
// 10
// x=prompt('Enter TEMPERATURE','20')
// if (x>=40 && x<=70 ){
//    document.write('It is too hot outside' )
//     }
//     if (x>=30 && x<=40 ){
//         document.write('The Weather today is Normal' )
//          }
//          if (x>=20 && x<=30 ){
//             document.write('Todays Weather is cool. ' )
//              }
//              if (x>=10 && x<=20 ){
//                 document.write('OMG! Todays weather is so Cool' )
//                  }
// 11
// x=+prompt('Enter 1st digit','20')
// y=+prompt('Enter 2nd digit','20')
// z=prompt('Enter operand (+,-,*,/,%)','-')
// if (z=='+' ){
//    document.write('Sum of '+ x + ' & ' + y + ' is ' +  (x+y)  )
//     }
//     if (z=='-' ){
//         document.write('Subtract of '+ x + ' & ' + y + ' is ' +  (x-y)  )
//          }
//          if (z=='*' ){
//             document.write('Multiply of '+ x + ' & ' + y + ' is ' +  (x*y)  )
//              }
//              if (z=='/' ){
//                 document.write('Divide of '+ x + ' & ' + y + ' is ' +  (x/y)  )
//                  }
//                  if (z=='%' ){
//                     document.write('Remainder of '+ x + ' & ' + y + ' is ' +  (x%y)  )
//                      }

///////////////// CHP 12-13
// 1
// x=prompt('Enter a Character','2')
// if ((x-1)===parseInt(x-1)) {
//     document.write('Its a number');
// }
// else if ('string'===typeof(x)) {
//     if (x.toUpperCase()==x) {
//         document.write('Its a Upper Case Letter')
//     }
//     if (x.toLowerCase()==x) {
//             document.write('Its a Lower Case Letter')
//     }
// }else{
//     document.write('Its a Nothing');
// }
// 2
// x=+prompt('Enter First Integer');
// y=+prompt('Enter Second Integer');
// if (x>y){
//     document.write(x+' Larger');
// }
// else if (y>x){
//     document.write(y+' Larger');
// }
// else{
//     document.write(y+' equal');
// }
// 3
// x=+prompt('Enter Integer');
// if (x>0){
//     document.write(x+' postive');
// }
// else if (x<0){
//     document.write(x+' negative');
// }
// else{
//     document.write(x+' zero');
// }
// 4
// x=prompt('Enter a Character','t')
//     if (x=='a' || x=='e' || x=='i' ||x=='o' ||x=='u' ) {
//         document.write('Its a vowel True ')
//     }
// else{        
//     document.write('Its not a vowel false ')
// }
// 5
// x=prompt('Store Your Password','8678978')
// y=prompt('confirm Your Password','6757565')
// if (x==y) {
//     z=prompt('Enter Your Password','6757565')
//         if (z=='' ) {
//            alert(' Please enter your password')
//         }
//     if (z!='') {        
//      if (z==x) {
//        alert('password is correct')
//      }
//      else{
//     document.write('Its not correct')  
// }

//     }
// }
// else{
// document.write('Its not match')  
// }
// 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) {
//      greeting = "Good day";
//  } else {
//      greeting = "Good evening";
//      } 
//  7
// var time=1900;
// if (time==1900){
//    if (time>=0 && time<12) {
//        document.write('GOOD MORNING')
//    }
// else if (time>=12 && time<17){
//     document.write('GOOD AFTERNOON');
// }
// else if (time>=17 && time<2100){
//     document.write('GOOD EVENING');
// }
// else if (time>=21 && time<23){
//     document.write('GOOD Night');
// }
// else{
//     document.write('None');
// }
// }
//////////////////////CHP 14-16
// 1
// var a;
// a = {
// studentNames:[];
// };
// 2
// var studentNames;
// studentNames = [];
// 3
// var a;
// a=['1','2','3','4'];
// 4
// var a;
// a=[1,2,3,4];
// 5
// var a;
// a=[3>2,1==1,'True'];
// 6
// var b;
// b=[1,'abc',7==67];
// 7
// var qualification;
// qualification=[ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.', 'Phil.', 'PhD'];
// document.write('<strong>'+'QUALIFICATION' +'</strong>'+'<br>'+'<br>');
// for (let index = 0; index < qualification.length; index++) {
// document.write((index+1)+')'+ ' '+qualification[index]+'<br>');
// }
// 8
// var studentNames= ['Hammad','Asad','Faiq'];
// var score = [320,420,400];
// var percentage = ['64%','80%','77%'];
// for (let index = 0; index < studentNames.length; index++) {
//     document.write('Score Of '+studentNames[index]+' is '+score[index]+'.'+' Percentage: '+ percentage[index]+'<br>');
// }
// 9
// var color=['black','blue','red','white','purple'];
// a
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at beginning?');
// for (let index = 0; index < color.length; index++) {
//     if (x===color[index]) {
//        c= color.splice(index,1);
//         color.unshift(c);
//         document.write('<br>'+'Updated COLORS : '+ color);
//         break;
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur color is not present');
//     }
//     }
// b
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at beginning?');
// for (let index = 0; index < color.length; index++) {
//     if (x===color[index]) {
//        c= color.splice(index,1);
//         color.push(c);
//         document.write('<br>'+'Updated COLORS : '+ color);
//         break;
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur color is not present');
//     }
//     }
// c
// var i=0;j=0;c=0;d=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want at first?\nblack,blue,red,white,purple');
// y = prompt('what color do u want at second?\nblack,blue,red,white,purple');
// for (let index = 0; index < color.length; index++) {
//   if (y===color[index]) {
//       c= color.splice(index,1);
//        color.unshift(c);
//    }else{
//        j=j+1
//    }
//    if (j==color.length) {
//        document.write('<br>'+'Ur second color is not present');
//    } 
//     if (x===color[index]) {
//        d = color.splice(index,1);
//         color.unshift(d);
//     }else{
//         i=i+1
//     }
//     if (i==color.length) {
//         document.write('<br>'+'Ur first color is not present');
//     }
//     if (index==color.length) {
//         document.write('<br>'+'Updated COLORS : '+ color);
//     }        
//     }
// d
// document.write('COLORS : '+ color);
//      color.splice(0,1);
//         document.write('<br>'+'Updated COLORS : '+ color);
// e 
// document.write('COLORS : '+ color);
// color.pop();
//    document.write('<br>'+'Updated COLORS : '+ color);
// f
// var i=0;
// document.write('COLORS : '+ color);
// x = prompt('what color do u want to add?','green');
// y = +prompt('what position do u want to add color?','2');
// var b=color;e= (color.length+1);i=color.splice(y,(e-y));
// for (let index = 0; index < (y+2); index++) {
//     if (y!=index) {
//         if (index==(y+1)) {
//             b[index] = i;
//             console.log(b)
//         }else{
//             b[index] = color[index]
//             console.log(b)
//         }
//     }
//     if (y==index) {
//         b[index] = x;
//         console.log(b)
//     }
//     }
//     document.write('<br>'+'Updated COLORS : '+ b);
// g
// document.write('COLORS : '+ color);
// y = +prompt('what position do u want to delete color?','2');
// var b=color;
// b.splice(y,1);
//     document.write('<br>'+'Updated COLORS : '+ b);
// 10
// var scores=[320,230,480,120];
// document.write('Scores of students : '+ scores+'<br>');
// var a = scores.sort();
// document.write('Ordered Scores of students : '+ a);
// 11
// var cities=['karachi','Lahore','Islamabad','Quetta','Peshawar'];
// var selectedCities=['Islamabad','Quetta'];
// document.write('Cities List : '+'<br>'+ cities +'<br>'+'<br>');
// document.write('Selected Cities : '+'<br>'+ selectedCities);
// // 12
// var arr1 = ['This ', ' is ', ' my ', ' cat']; 
// document.write('Array : '+'<br>'+arr1)
// arr1.join('-')
// document.write('<br>'+'<br>'+'String : '+'<br>'+arr1.join(' '));
// 13
// var a = ['keyboard','mouse','printer','monitor'];
// document.write('Devices:'+'<br>'+a+'<br>'+'<br>');
// for (let index = 0; index < a.length; index++) {
//     document.write('<br>'+'Out:'+'<br>'+a[index]);
// }
// 14
// var a = ['keyboard','mouse','printer','monitor'];
// document.write('Devices:'+'<br>'+a+'<br>'+'<br>');
// for (let index = (a.length-1); index > -1; index--) {
//     document.write('<br>'+'Out:'+'<br>'+a[index]);
// }
// 15
// var phoneManu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony & Haier'];
// document.write('<select name="phone" id="phonemanu">'+
// '<option value="Apple">'+'Apple'+'</option>'+
// '<option value="Apple">'+'Samsung'+'</option>'+
// '<option value="Apple">'+'Motorola'+'</option>'+
// '<option value="Apple">'+'Nokia'+'</option>'+
// '<option value="Apple">'+'Sony & Haier'+'</option>'+'</select>');
//////////////////////// CHP 17-20
// 1
// var a;
// a=[[],[]];
// 2
// var b;
// b=[0,1,2,3,1,0,1,2,2,1,0,1];
// var i=0;
// for (let index = 0; index < b.length; index++) { 

//     if (i==4) {
//         document.write('<br>');
//         i=0;
//     }
//     document.write(b[index] + ' ');
//     i=i+1; 
// }
// 3
// for (let index = 0; index < 10; index++) {
//     document.write(index+1 + "<br>");
// }
// 4
// var x=+prompt('ENTER A NUMBER TO SHOW ITS MULTIPLICATIN TABLE');
// var y=+prompt('ENTER LENGTH');
// document.write(`MULTIPLICATION TABLE OF ${x} LENGTH ${y}`+"<br>" +"<br>");
// for (let index = 0; index < y; index++) {
//     var c = (index+1)*x;

// document.write(x + 'X' + (index+1) + '=' + c + "<br>" );
// }
// 5
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (let index = 0; index < fruits.length; index++) {
//     document.write(fruits[index] + "<br>");
// }
// document.write("<br>" + "<br>")
// for (let index = 0; index < fruits.length; index++) {
//     document.write(`ELEMENT AT INDEX ${index} LENGTH ${fruits[index]}` + "<br>");
// }
// 6
// var different = [[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ],[ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ],[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ],['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'] ];
// var qty=['Counting','Reverse Countinbg', 'Even','Odd','Series'];
// for (let index = 0; index < qty.length; index++) {
//         document.write('<strong>' + qty[index] +  '</strong>' +'<br>'+ "<br>" + different[index] + "<br>"+"<br>");
//     }
// 7
// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// b =  prompt('WELCOME TO ABC BAKERY. WHAT DO U WANT TO ORDER?','cake');
// for (let index = 0; index < A.length; index++) {
//     if (A[index] === b){
//         var a=1;
//         var c=index;
//     }     
// }
// if (a==1) {
//     document.write( b + ' is available at index ' + (c+1) + ' in our bakery');
// }
// else{
//     document.write('We are sorry. '+ b +' is not available in our bakery');
// }
// 8
// var A = [24, 53, 78, 91, 12];
//     document.write('Array Items : ' + A );
//     var b= A;
// for (let index = 0; index <b.length; index++) {
//     for (let index1 = 0; index1 < b.length; index1++) {
//         if (A[index]>A[index1]) {      
//             b.splice(index1,1);
//               }  
//               if (b.length > 1) {
//                   index=0;
//               }
//          }
//     }
//     document.write("<br>" +"THE LARGEST NUMBER IS " + b);
// 9
// i=0;
// A = [24, 53, 78, 91, 12];
//     document.write('Array Items : ' + A );
//     var b=A;
// for (let index = 0; index <b.length; index++) {
//     for (let index1 = 0; index1 < b.length; index1++) {
//         if (A[index]<A[index1]) {      
//           b.splice(index1,1);
//             }  
//             if (b.length > 1) {
//                 index=0;
//             }
//         } 

//     }
//     document.write("<br>" +"THE SMALLEST NUMBER IS " + b)
// 10
// var x=0;
// var i =0;
// while (x < 100) {
//     i=i+1;
//     x=5*i;
//     document.write(x +',');
// }
