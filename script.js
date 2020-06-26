function validateUser() {
	var fUser = document.getElementById("usuario").value;
	var rel = /^[a-zA-Z]{8}$/;

	if (rel.test(fUser)) { // si es válido
		document.getElementById("usuarioPrompt").style.color = "green";
		document.getElementById("usuarioPrompt").innerHTML = "<strong>Valid<strong>";
	}else {  // no valido
		document.getElementById("usuarioPrompt").style.color = "red";
		document.getElementById("usuarioPrompt").innerHTML = "<strong>Enter 8 caracteres<strong>";
	}
}

function validatePass() {
	var fPass = document.getElementById("password").value;
	var rel = /^[a-zA-Z]{5}$/;

	if (rel.test(fPass)) { // si es válido
		document.getElementById("passwordPrompt").style.color = "green";
		document.getElementById("passwordPrompt").innerHTML = "<strong>Valid<strong>";
	}else {  // no valido
		document.getElementById("passwordPrompt").style.color = "red";
		document.getElementById("passwordPrompt").innerHTML = "<strong>Enter 5 caracteres<strong>";
	}
}

function guardar() {
	alert("Thank you very much for submitting the form");
}