function reverseString()
{
	var str= document.getElementById("myText").value;
	var stringulMeu="";

	if(str!="")
	{
	   for(var i = str.length-1;i>=0;i--)
	   {
		  stringulMeu += str[i];

	   }
	   return stringulMeu;
	}else return stringulMeu="write something in the field";

}

function extractString()
{

	var str1= document.getElementById("myText1").value;
    var pos= document.getElementById("myText2").value;
    

    if(str1==""||str1==null)
    {
    	return "enter a text please";
    }
    else
    {
    	if(+pos)
    	{
    		var res2 = str1.substring(+pos+1,str1.length);
   	    	var res1 = str1.substring(0,+pos);
        	var res = res1 + res2;

        	return res;
    //document.getElementById("demo").innerHTML = res;
    		   
    	}else if(pos==""||pos==null)
    	{
    		return "please enter a number";
    	}else
    	{
    		return "please enter a number"; 
	    }
    }

}

function divisibleMy(x)
{
    if( x == "" || x == null)
    {
         return "give me a number";
    }else
    {
        return (x % 3 == 0 && x % 7 == 0)? "it's divisible with both numb..": 
                x % 3 == 0 ? "it's divisible with 3 equals="+ x/3:
                x % 7 == 0 ? "it's divisible with 7 equals="+ x/7:
                false ;

    }
}


function isNumber(x)
{
     if( x == "" || x == null)
    {
         return "enter something";
    }else
    {
        return isNaN(x) ? "not a number": "it's a number";  
        // isNaN(not a number) returns true if is not a number else true 
    } 
}

//function getSum(total, num) {
  //  return total + num ;
//}
function calculateSum()
{
   
    let numbers = [2,2,2,2,2,2];
  //  return numbers.reduce(getSum);
    let result=0;
    for(let i = 0 ;i < numbers.length; i++)
    {
       result += numbers[i];
    }
    return result;
}

var myObject = {
     red: "red",
     green:"green",
     white:"white",
     all : function() {
        return this.red + " " + this.green + " " + this.white;
     }
};

function checkObject(sample)
{
     if( sample == "" || sample == null)
    {
         return "enter something";
    }else
    {
        return myObject.all().includes(sample)? "Yes! it contains it = " + sample:
                                     " false! we don't have that color = " + sample ;
    }
}

function toRoman(num) { 
  if(num < 1){ return "";}
  if(num >= 1000){ return "M" + toRoman(num - 1000);}
  if(num >= 900){ return "CM" + toRoman(num - 900);}
  if(num >= 500){ return "D" + toRoman(num - 500);}
  if(num >= 400){ return "CD" + toRoman(num - 400);}
  if(num >= 100){ return "C" + toRoman(num - 100);}
  if(num >= 90){ return "XC" + toRoman(num - 90);}
  if(num >= 50){ return "L" + toRoman(num - 50);}
  if(num >= 40){ return "XL" + toRoman(num - 40);}
  if(num >= 10){ return "X" + toRoman(num - 10);}
  if(num >= 9){ return "IX" + toRoman(num - 9);}
  if(num >= 5){ return "V" + toRoman(num - 5);}
  if(num >= 4){ return "IV" + toRoman(num - 4);}
  if(num >= 1){ return "I" + toRoman(num - 1);}  
}



