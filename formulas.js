
//Alert message for super size selected
function choiceSS(selected)
    {
        if(selected.options[selected.selectedIndex].value === "SS")
        {
          alert("Mr. Burrito warns: this quantity could be dangerous for you healthy!");
     
        }
    }
//validating coupon
function validate(coupon) {
    var myRe = "TexMaxGood";
    var coupon = myRe.trim();
    var input = document.getElementById('in').value;
    if(input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById('message').innerHTML="You got 10% of discount!";
        document.getElementById('err').innerHTML="";
        return true;
    } else {
        document.getElementById('err').innerHTML="Invalid coupon";
        document.getElementById('message').innerHTML="";
        return false;
    }
}
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 9) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
//Calculation
function allnumeric( )
		{
			var numbers = /^[0-9]+$/;
			if(burrits.value.match(numbers))
				{
				
				var tot_price=0;
			    if  (bsize.value=="LA") {
				tot_price = 7 * burrits.value
				}
				if  (bsize.value=="XL") {
				tot_price = 9 * burrits.value
				}
				if  (bsize.value=="SS") {
				tot_price = 17.50 * burrits.value;
				
				}
                var divobj = document.getElementById('tot_amount');
                divobj.value = tot_price;
				alert('Mr. Burrito says: Your quantity has been accepted....');
				
				return true;
			}
			else
				{
				alert('Mr. Burrito says: input numeric characters only');
				return false;
				}
		}
		
		
		function calculateTotal() {
			var tot_price=0;
			    if  (bsize=="LA") {
				tot_price = 7 * burrits
				}
				if  (bsize=="XL") {
				tot_price = 9 * burrits
				}
				if  (bsize=="SS") {
				tot_price = 17 * burrits;
				}
                var divobj = document.getElementById('tot_amount');
                divobj.value = tot_price;
}

function resetForm(){
	document.getElementById("burritoOrder").reset();
}


