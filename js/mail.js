function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "yadavjiii0123@gmail.com",
        Password: "8D092AB3E26909AFE6C62D4BDECD1BA33247",
        To: 'contactsunny07@gmail.com',   
        From: "Portfolio@website.com",
        Subject: "New Email From the Site",
        Body:
            " <br> Name : " + document.getElementById("name").value
            +
            " <br> Email : " + document.getElementById("email").value
            +
            " <br> Phone : " + document.getElementById("phone").value
            +
            " <br> Subject : " + document.getElementById("subject").value

    }).then(
        message => alert(message)
    );
}

