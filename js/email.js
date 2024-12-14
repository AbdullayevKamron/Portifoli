function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdullayevkamron282@gmail.com",
        Password : "7C1F7F399F13F217D5D2F9A9600EBFFBC4C5",
        To : 'abdullayevkamron282@gmail.com',
        From : "abdullayevkamron282@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}