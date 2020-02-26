var div1 = document.createElement("div");
document.body.appendChild(div1);
div1.textContent= "Email ID";
var email=document.createElement("input");
email.tpe="text";
document.body.appendChild(email);
var div2 = document.createElement("div");
document.body.appendChild(div2);
div2.textContent="PASSWORD";
var pass= document.createElement("input");
pass.type="text";
document.body.appendChild(pass);
var button= document.createElement("button");
document.body.appendChild(button);
button.innerHTML="submit";
button.onclick = function() {
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
		{	
	alert("Invalid Email address");
		}
	if(pass.length<8)
	{
		alert("Password must be greater than 8 letter");
}
}