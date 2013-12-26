
// Function to Append the digits and display on the screen
function append_show(x)
{
	document.f1.display.value=document.f1.display.value+x;
}

// Function to calculate the result and showing on screen
function result()
{
 /*Using Eval
 var res=eval(document.getElementById("display").value);
 document.getElementById("display").value=res;
 */
 
 
 //without using eval
 var input=document.getElementById("display").value;

var start=0,count=0;
 for (var i=0;i<input.length;i++)
{
	if(count==0)
	{
	var position=i;
     n=input.charAt(i);
	 switch(n)
{
case '+':
   oprator=n;
   operand1=parseInt(input.substring(start,position));
   start=i;
   operand2=parseInt(input.substring(start,input.length));
   var res=operand1+operand2;
   document.getElementById("display").value=res;
   count++;
  break;
case '-':
   oprator=n;
   operand1=parseInt(input.substring(start,position));
   start=i;
   operand2=parseInt(input.substring(start,input.length));
   var res=operand1-operand2;
   document.getElementById("display").value=res;
   count++;
  break;
  case '*':
  oprator=n;
   operand1=parseInt(input.substring(start,position));
   alert(operand1);
   start=i;
   operand2=parseInt(input.substring(start,input.length));
   var res=operand1*operand2;
   document.getElementById("display").value=res;
   count++;
   break;
  case '/':
   ooprator=n;
   operand1=parseInt(input.substring(start,position));
   start=i;
   operand2=parseInt(input.substring(start,input.length));
   var res=operand1/operand2;
   document.getElementById("display").value=res;
   count++;
  break;

}


}
}
}
//Function which clears the screen when user presses the clear button
function clean()
{
	document.getElementById("display").value="";
 
 }
