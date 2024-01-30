function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var Gmail = document.getElementById('Gmail').value;

	var messageBody = "Name : " + userName +
	"<br/> Phone : " + phone +
	"<br/> Email : " + Gmail;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "diwangkara903@gmail.com",
    Password : "65C062BCEC002ED03482615E3E833255115C",
    To : 'satriagamer100iq@gmail.com',
    From : "diwangkara903@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "Terima Kasih Sudah DiKirim", "success");
  	}
  	else{
  		swal("Error", "Maaf Ada yang Masalah", "error");
  	}
  }
);
}

document.getElementById("btn").addEventListener("click", function() {
	// Ganti URL di bawah dengan URL tujuan Anda
	window.location.href = "file:///C:/Users/TES/Documents/buatansendiri/GameForm.html";
  });