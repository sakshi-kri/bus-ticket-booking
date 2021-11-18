function booking_confirm(){  
    var n=document.getElementById("n1").value;  
    var m=document.getElementById("m1").value;  
    var d=document.getElementById("d1").value;  
    
    //Code for password validation  
            var letters = /^[A-Za-z]+$/;  
           // var mob=/^[0-9]+$/;  
           var mob=/[6-9]{1}[0-9]{9}/;
           
   
    if(n==''||m==''||d==''){  
    alert("Enter each details correctly");  
    }  
    else if(!letters.test(n))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  
    else if (!mob.test(m))  
            {  
                alert('Invalid mobile number format please enter valid number\n i.e, first number 6-9 and 10 digit format');  
            } 
    else{  
    alert("Your ticket booked");  
    }  }