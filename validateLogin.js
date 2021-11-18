   function validateform(){  
    var name=document.getElementById("name1").value;  
    var pass=document.getElementById("pass1").value; 
    var letters = /^[A-Za-z]+$/;  
    
            if (name==null || name==""){  
              alert("Name can't be blank");  
              return false;  
            }else if(!letters.test(name))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  else if(pass.length<6){  
              alert("Password must be at least 6 characters long.");  
              return false;  
              } 
              else{  
                alert("Login successful.....\n Redirecting to available route chart");  
               window.location="journeyList.html";
            }  }
       