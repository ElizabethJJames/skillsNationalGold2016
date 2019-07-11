function formValidation(Event) { /* Event, such as keyup or click is registered and hangled */
var formfield = Event.target;

/*target property returns the element that triggered the event*/

var success=true;
//var error_msg="Please enter all required fields<br>";
if(document.getElementById("first").value < 2){ 
success=false; 
document.getElementById('f_err').innerHTML = 'First name is required';
//error_msg += "First name is required!<br>";
}
else {document.getElementById('f_err').innerHTML = '';}

if(document.getElementById("last").value ==""){ 
success=false; 
document.getElementById('l_err').innerHTML = 'Last name is required';
//error_msg += "Last name is required!<br>";
}
else {document.getElementById('l_err').innerHTML = '';}

if(document.getElementById("email").value.indexOf('@')==-1 || document.getElementById("email").value.indexOf('.')==-1){ 
success=false;
document.getElementById('e_err').innerHTML = 'Email is invalid';
//error_msg += "Valid email is required!<br>";
}
else {document.getElementById('e_err').innerHTML = '';}

if(document.getElementById("subject").selectedIndex==0 ){ 
success=false;
document.getElementById('s_err').innerHTML = 'Select a subject';
//error_msg += "Select one option<br> ";
}
else {document.getElementById('s_err').innerHTML = '';}
if(document.getElementById('message').value < 3){
	 success=false;
	 document.getElementById('m_err').innerHTML = 'Leave your message';
	 
	 //error_msg += "Please leave your message <br>";
}
else {document.getElementById('m_err').innerHTML = '';}


//document.getElementById('all_errors').innerHTML = error_msg;

//alert(success + error_msg);

if(success){ /*** buttons are shown and submit is enabled ****/
	document.getElementById("sub").disabled = false; 
	document.getElementById("sub").style.visibility='visible'; 
	document.getElementById("res").style.visibility='visible'; 
	//document.getElementById('all_errors').innerHTML = "Thank you for contacting us!";
	}
else{  /**** if success is false hide buttons and disable submit ****/
	document.getElementById("sub").disabled = true; 
	document.getElementById("sub").style.visibility='hidden'; 
	document.getElementById("res").style.visibility='hidden';
	 
	}
} 


window.onload = blog;
function blog () {
	lastupdated();
	validform();
}

	

function validform() { 
/**** when the page is fully loaded, set the variables for all form fields *****/
var first = document.getElementById("first"); 
var last = document.getElementById("last"); 
var email = document.getElementById("email"); 
var subject=document.getElementById("subject");
var message=document.getElementById("message");

var success=false; /**** keeps button invisible when there are invalid fields *****/
document.getElementById("sub").disabled = true;
document.getElementById("sub").style.visibility = 'hidden';
document.getElementById("res").style.visibility = 'hidden';

first.onkeyup = formValidation;  /**** call function on event. the event is handled by formValidation functions ****/
last.onkeyup= formValidation; 
email.onkeyup = formValidation; 
subject.onclick = formValidation; 
message.onkeyup = formValidation;

}
function lastupdated(){
	var updates = new Date(document.lastModified);
	var u_month = updates.getMonth() +1;
	var u_date = updates.getDate();
	var u_year = updates.getFullYear();
	document.getElementById('lastmod').innerHTML = "Blog was last updated on " +u_month+ "/" +u_date+ "/" +u_year;
	
}