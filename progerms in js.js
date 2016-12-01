// var a,b;
// var firstNum=prompt("enter the value");
// firstNum=parseInt(firstNum);
// var output="";
// var lastnum=1;
// var secondLast=1;
// var total;
// for(a=1;a<=firstNum;a++){
// 	if(a==1||a==2){
// 		output=output+1;
// 		if(firstNum==1){
// 			output=output+"";
// 		}
// 		else if(a!=1){
// 			output=output+"";
// 		}
// 		else{
// 			output=output+",";
// 		}
// 	}
	

// else{
// 	total=secondLast+lastnum
	
	
// if(a<1){
// output=output+",";
// }
// else{
	
// 	output=output+",";
// }
// output=output+total;



// lastnum=secondLast
// secondLast=total
// }
// }
// console.log(output);

// var firstNum=prompt("enter the value");
// var secondNum=prompt("enter the second value");
// firstNum=parseInt(firstNum);
// secondNum=parseInt(secondNum);
// var max=(firstNum>secondNum) ? firstNum : secondNum;
// alert(max);

// var a=prompt("enter the value");
// var b=prompt("enter the value");
// var c=prompt("enter the thirdNum");
// a=parseInt(a);
// b=parseInt(b);
// c=parseInt(c);
// var max=(a>b && a>c) ? a : b>c ? b:c;
// alert(max);  
// var number=prompt("enter the value");
// number=parseInt(number);
// var max=(number%2==0) ? "the number is even": "the number is odd"; 
// alert(max);
 
 // var year=prompt("enter the value");
 // year=parseInt(year);
 // var max=(year>365) ? "the year is not a leap year" : "this is a leap year";
 
 // alert(max);
 // var alphabet=prompt("enter the value");
 // var max=(alphabet>='a'&&alphabet<='z'||alphabet>="A"&&alphabet<="Z") ? "it is a alphabet":"this is not a alphabet";
 // alert(max);

 // var firstNum=prompt("enter the value");
 // var secondNum=prompt("enter the second value");
 // firstNum=parseInt(firstNum);
 // secondNum=parseInt(secondNum);
 // if(firstNum>secondNum){
 // 	alert(firstNum)
 // }
 // else{
 // 	alert(secondNum);
 // }
 //  var firstNum=prompt("enter the value");
 // var secondNum=prompt("enter the second value");
 // var thirdNum=prompt("enter the third num");
 // firstNum=parseInt(firstNum);
 // secondNum=parseInt(secondNum);
 // thirdNum=parseInt(thirdNum);
 // if(firstNum>secondNum||firstNum>thirdNum){
 // 	alert(firstNum);
 // }
 // else if(secondNum>firstNum||secondNum>thirdNum){
 // 	alert(secondNum);
 // }
 // else{
 // 	alert(thirdNum);
 // }
 // var number=prompt("enter the value");
 // number=parseInt(number);
 // if(number%2==0){
 // 	alert("the numbe is even");
 // }
 // else{
 // 	alert("the num is odd")
 // }
 // var number=prompt("enter the value");
 // number=parseInt(number);
 // if(number>0){
 // 	alert("this number is positive");
 // }
 // else if(number<0){
 // 	alert("this number is negative");
 // }
 // else{
 // 	alert("the number is zero");
 // }
// var number = prompt( "enter the value" );
// number = parseInt( number ) ;
// if( number%5 == 0 && number%11 == 0 ){
// 	alert( 'this number is divisible' );
// }
// else{
// 	alert( "this is not divisible" )
// }
// var amount = prompt( "enter the total amount" );
// var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;

// var total = "";
// amount = parseInt( amount );
// if( amount>=1000){
// 	a =	amount/1000;
// 	amount=amount%1000;

// 	a=Math.floor(a);
// }

// if(amount>=500){
// 		b=amount/500;
// 		amount=amount%500;
// 		b=Math.floor(b);
// 		alert(b);
// }
// if(amount>=100){
// 	c=amount/100;
// 	amount=amount%100;
// 	c=Math.floor(c);
// }
// if(amount>=50){
// 	d=amount/50;
// 	amount=amount%50;
// 	d=Math.floor(d);
// }
// if(amount>=20){
// 	e=amount/20;
// 	amount=amount%20;
// 	e=Math.floor(e);
// }
// if(amount>=10){
// 	f=amount/10;
// 	amount=amount%10;
// 	f=Math.floor(f);
// }


// total="1000 = "+a+"\n 500 = "+b+"\n 100 = "+c+"\n 50 = "+d+"\n 20 = "+e+"\n 10 = "+f ;

// console.log(total);
// var number = prompt("enter the value");
// if(number>=0 || number>=100){
// 	alert( "the number is a digits" );
// }
// else if( number >= 'a'|| number <= 'z' || number>='A' | |number <= 'Z' ){
// 	alert( "this num is a alphabet" );
// }

// else {
// 	alert( "nothing" )
// }
// var alphabet=prompt("enter the alphabet");
// if(alphabet == "a" ||alphabet == "i" || alphabet == "o" || alphabet == "u" || alphabet == "e"){
// 	alert( "this is vovels" );
// }
// else if(alphabet >= "a" || alphabet >= "z"){
// 	alert( "this is alphabets" );
// }
// else {
// 	alert( "this is not a alphabet" );
// }
// var alphabet=prompt("enter the value");

// if(alphabet>="a"||alphabet>="z"){
// 	alert("this is lowercase");
// }
// else if(alphabet>="A"||alphabet>="Z"){
// 	alert("this is a uppercase")
// }
// else {
// 	alert("this is nothing");
// }
// var firstSide=prompt("enter the value");
// var secondSide=prompt("enter the second value");
// var thirdSide=prompt("enter the third side");
// firstSide=parseInt(firstSide);
// secondSide=parseInt(secondSide);
// thirdSide=parseInt(thirdSide);
// if(firstSide+secondSide+thirdSide==180){
// 	alert("the traingel is valid");
// }
// else {
// 	alert("the traingel is not valid")
// }
// var firstSide=prompt("enter the value");
// var secondSide=prompt("enter the second value");
// var thirdSide=prompt("enter the third side");
// firstSide=parseInt(firstSide);
// secondSide=parseInt(secondSide);
// thirdSide=parseInt(thirdSide);
// if(firstSide>secondSide+thirdSide||secondSide>firstSide+thirdSide||thirdSide>firstSide+secondSide){
// 	alert("the traingel is valid");
// }
// else{
// 	alert("the traingel is not valid");
// }
// var firstSide=prompt("enter the first side");
// var secondSide=prompt("enter the second side");
// var thirdSide=prompt("enter the third Side");
// firstSide=parseInt(firstSide);
// secondSide=parseInt(secondSide);
// thirdSide=parseInt(thirdSide);
// if(firstSide == secondSide && secondSide == thirdSide){
// 	alert("the traingle is equilateral");
// }
// else if(firstSide==thirdSide||secondSide==thirdSide||firstSide==secondSide){
// 	alert("the traingle is isoscalel");
// }
// else{
// 	alert("the traingel is scarel");
// }
// var physics=prompt("enter the value");
// var chemistry=prompt("enter the value");
// var mathaMatics=prompt("enter the value");
// var english=prompt("enter the value");
// var punjabi=prompt("enter the value");
// physics=parseInt(physics);
// chemistry=parseInt(chemistry);
// mathaMatics=parseInt(mathaMatics);
// english=parseInt(english);
// punjabi=parseInt(punjabi);
// var total=physics+chemistry+mathaMatics+punjabi+english;
// var a=500/100;
// var b=total/a;
// alert(b);
// if(b>90){
// 	alert("A");
// }
// else if(b>80){
// 	alert("B");
// }
// else if(b>70){
// 	alert("C");
// }
// else if(b>60){
// 	alert("d");
// }
// else if(b>50){
// 	alert("E");
// }
// else if(b<40){
// 	alert("F");
// }
// else {
// 	alert("nothing");
// }
// var a;
// var output="";
// var number=prompt("enter the number");
// for(a=1;a<=number;a++){

// if(number<1){
// output=output+","
// }
// else{
// 	output=output+"";
// }
// output=output+a+=;
// }
// console.log(output);
// var a;
// var output="";
// var oddNum=prompt("enter the value");
// for(a=1;a<=oddNum;a++){

// 	if(a%3==0){

// 		output=output+a;
// 		if(a==99){
// 			output=output+"";
// 		}
// 		else{
// 			output=output+","
// 		}
// 	}
// 	else{
// 		output=output+"";
// 	}

// }
// console.log(output);
// var a;
// var output="";
// var evenNum=prompt("enter the number");
// var total=0;
// for(a=1;a<=evenNum;a++){
// 	if(a%2==0){
// 		total=total+a;
		
// 	}
// 	else{
// 		output=output+"";
// 	}
// }
// console.log(total);
// var a;
// var output="";
// var oddNum=prompt("enter the number");
// var total=0
// for(a=1;a<=oddNum;a++){
// 	if(a%3==0){
// 		total=total+a;
// 	}
// }
// console.log(total);
// var a;
// var output="";
// var table=prompt("enetr the number wich num table u want");
// table=parseInt(table);
// var total;
// for(a=1;a<=10;a++){
// 	total=table*a;
// 	output=output+table+"*"+a+"="+total+"\n";
// }
// console.log(output);
// var a;
// var output="";
// var number=prompt("enter the number wich u want");
// var total=0;
// for(a=1;a<=number;a++){
// 	total=total+a
// }
// console.log(total);
// var number=prompt("enter the num u want");
// var digits=number%10;
// alert(digits);
// var first=number;
// while(first>=10){
// 	first/=10
// }
// first=Math.floor(first);
// alert(first);
// var number=prompt("enter the num u want");
// var digits=number%10;
// alert(digits);
// var first=number;
// while(first>=10){
// 	first/=10
// }
// first=Math.floor(first);
// alert(first);
// alert(first+digits);
// var a;
// var number=prompt("enter the value");
// var digits= number.length;
// digits=digits-1
// var pow;
// var firstNum;
// var number;

// for(a=digits;a>=1;a--){
// 	pow=Math.pow(10,a)
	
// firstNum=	number/pow;
// firstNum=Math.floor(firstNum);
// alert(firstNum);
// 	number=number%pow;
// 	alert(number);
// }

// var a;
// var output="";
// var number=prompt("enter the value");
// number=parseInt(number);
// for(a=number;a>=1;a--){
// console.log(a);
// }
	
// var a;
// var output="";
// var number=prompt("enter the value");
// var digits= number.length;
// digits=digits-1;
// var pow;
// var firstNum;
// var number;

// for(a=digits;a>=0;a--){
// 	pow=Math.pow(10,a)
	
// firstNum=	number/pow;
// firstNum=Math.floor(firstNum);
// alert(firstNum);
// 	number=number%pow;
// 	if(firstNum==1){
// 		output=output+" one";
// 	}
// 	if(firstNum==2){
// 		output=output+" two";
// 	}
// 	if(firstNum==3){
// 		output=output+" three";
// 	}
// 	if(firstNum==4){
// 		output=output+" four";
// 	}
// 	if(firstNum==5){
// 		output=output+" five";
// 	}
// 	if(firstNum==6){
// 		output=output+" six";
// 	}
// 	if(firstNum==7){
// 		output=output+" seven";
// 	}
// 	if(firstNum==8){
// 		output=output+" eigh";
// 	}
// 	if(firstNum==9){
// 		output=output+" Nine"
// }
// }
// console.log(output);

// var a;
// var output="";
// var number=prompt("enter the value");
// number=parseInt(number);
// for(a=1;a<=number;a++){
// 	if(number%a==0){
// 		output=output+a;
	
// 	if(a==number){
// 		output=output+"";
// 	}
// 	else{
// 		output=output+",";
// 	}
// 	}
// 	else{
// 		ouput=output+"";
// 	}
// }
// console.log(output);
// var a;
// var output="";
// var number=prompt("enter the value");
// number=parseInt(number);
// var total=1;
// for(a=1;a<=number;a++){
// 	total=total*a;
// }
// console.log(total);
// var a;
// var output="";
// var primeNum=prompt("enter the value here");
// primeNum=parseInt(primeNum);
// var flag;
// for(a=2;a<=primeNum;a++){
// flag=0;
// 	for(b=2;b<a;b++){
// 		if(a%b==0){
// 		flag=1
// 		}
		
// 	}
// 	if(flag==0){
// 			output=output+a;
// 		}
// }
// console.log(output);
// var a;
// var output="";
// var primeNum=prompt("enter the value here");
// primeNum=parseInt(primeNum);
// var total=0
// var flag;
// for(a=2;a<=primeNum;a++){
// flag=0;
// 	for(b=2;b<a;b++){
// 		if(a%b==0){
// 		flag=1
// 		}
		
// 	}
// 	if(flag==0){
// 		total=total+a
// 			output=output+total;
// 		}
// }
// console.log(total);
// var a;
// var output="";
// var primeNum=prompt("enter the value here");
// primeNum=parseInt(primeNum);
// var total=0
// var flag;
// for(a=2;a<=primeNum;a++){
// flag=0;
// 	for(b=2;b<a;b++){
// 		if(a%b==0){
// 		flag=1

// 		}
// 		if(a*b==primeNum){
// 			output=output+a+","+b;
// 		}
		
// 	}
// 	if(flag==0){
// 		total=total+a
		
// 		}
// }
// console.log(output);

// var number=prompt("enter the number");
// var cube = function(number){
// 	console.log(number*number*number);
// }
// cube(number);

// var radius=prompt("enter the value")
// var circule = function(radius){
// 	console.log(2*radius );
// 	console.log(Math.PI*Math.pow(radius,2) );
// 	console.log(2*Math.PI*radius );

// }
// circule(radius);

// var num1=prompt("enter the value");
// var num2=prompt("enter the value");
// var max=function(num1,num2){
// 	if(num1>num2){
// 		alert("num1 is maximum");
// 	}
// 	else{
// 		alert("num2  is maximum");
// 	}
// }
// // max(num1,num2);
// var number=prompt("enter the value ");
// number=parseInt(number);
// var check=function(number){
// 	if(number%2==0){
// 		alert("the nuber is even");
// 	}
// 	else{
// 		alert("the number is odd")
// 	}

// var a=["apple","is",1,"of","good fruite"];
// a.push(5);
// alert(a);

// var a=["apple","is",1,"of","good fruite"];
// a.unshift(5);
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a.pop();
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a.shift();
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a.sort();
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a=a.join("*");
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a=a.concat("mango");
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a.splice(2,0,"orange");
// alert(a);
// var a=["apple","is",1,"of","good fruite"];
// a=a.slice(2);
// alert(a);
// var a=["mango","apple","orange"];
// var b=["graps","guvava"];
// var c= a.concat(b);
// alert(c);
// var reversing=["apple","mango","graps","orange"];
// reversing.reverse();
// alert(reversing);

// var car={type:"fiat", speed:60, model:2003,color:"red"};
// alert("the car name is " +car.type+" and its model is " + car.model + " its color is " + car.color);

// var persone={
// 	firstName : "jasvir",
// 	lastName : "saini",
// 	age : 18,
// 	fullName : function(){
// 		return this.firstName+ " "+ this.lastName;
// 	}
// }
// 	alert(" i m "+ persone.age +" year old my name is " + persone.fullName() );

// var car=["valvo","bmw","audi"];
// alert(car);

var i=0;
var sum=0;
var arr=prompt("enter the value");
var n=0

 for(i=0; i<n; i++)
    {
        sum += arr[i];
    }
 
console.log(sum);