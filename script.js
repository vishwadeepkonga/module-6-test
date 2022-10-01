function resetFields () {
	document.getElementById('registration-form').reset()
    document.getElementById('firstname-valid').style.display = 'none'
	document.getElementById('lastname-valid').style.display = 'none'
	document.getElementById('email-valid').style.display = 'none'
	document.getElementById('tNC-valid').style.display = 'none'



}

function validate() {

	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password-id').value
    let confirmpassword = document.getElementById('confirmpassword-id').value

	let tnC = document.getElementById('t-and-c').checked

	let error = false

	if(firstName.length < 3) {
        error=true
		document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('firstname-valid').style.display = 'none'

	}
    else{

        document.getElementById('first-name-invalid').style.display = 'none'
        document.getElementById('firstname-valid').style.display = 'block'


    }
	

	if(lastName.length <3) {
        error=true
		document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('lastname-valid').style.display = 'none'


	} 
    else{
        document.getElementById('last-name-invalid').style.display = 'none'
        document.getElementById('lastname-valid').style.display = 'block'
  }

	

	/* 
		-  include '@'
		-  include '.'
		- At least one character before '@'
		- At least two characters after last '.'
	*/

	if (
		email.includes("@") && 
		email.includes(".") && 
		email.indexOf("@") > 0 &&
		email.substr(email.lastIndexOf('.') + 1).length >= 2
	) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }

	if (
        (password.length >= 8)
        && (password.includes('$')||password.includes('#')||password.includes('@')) &&
        password.includes(0)||password.includes(1)||password.includes(2)||password.includes(3)||password.includes(4)) {
    document.getElementById("password-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("password-invalid").style.display = "block";
  }
if(password!=confirmpassword)
{
    error=true
    document.getElementById("confirmpassword-invalid").style.display = "block";

}
else{
    document.getElementById("confirmpassword-invalid").style.display = "none";

}

	if(tnC) {
		document.getElementById("tNC-invalid").style.display = "none"
	} else {
		error = true
		document.getElementById("tNC-invalid").style.display = "block"
	}

	if(error ===  false) { // also can be checked this way: !error
        alert('Your details have been saved successfully!')

		resetFields()
	}
}
