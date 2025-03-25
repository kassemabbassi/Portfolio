// Assure-toi que tu remplaces les placeholders par les valeurs réelles.
emailjs.init('W1d68hDX4W65aItqe'); // Remplace 'YOUR_USER_ID' par ton propre USER ID

// Fonction pour envoyer l'email
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut
    
    // Récupérer les valeurs des champs du formulaire
    const email = document.getElementById('from-email').value;
    const message = document.getElementById('message').value;
    
    // Paramètres pour le modèle EmailJS
    const templateParams = {
        from_email: email, // L'email de l'expéditeur
        message: message,  // Le message envoyé
        to_name: 'Kassem Abbassi', // Ton nom (celui qui reçoit l'email)
        from_name: email // Nom de l'expéditeur
    };
    
    // Envoi de l'email via EmailJS
    emailjs.send('service_uz1yx2d', 'template_o2vnx0q', templateParams)
    .then(function(response) {
        console.log('Email envoyé avec succès!', response);
        alert("Votre message a été envoyé avec succès!");
    }, function(error) {
        console.error('Erreur d\'envoi d\'email:', error);
        alert("Une erreur est survenue, veuillez réessayer.");
    });
});



















// Initialiser EmailJS avec ton user_id
emailjs.init('W1d68hDX4W65aItqe'); // Remplace par ton user_id

// Ajouter un événement de soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    const templateParams = {
    from_email: document.getElementById("from_email").value,
    message: document.getElementById("message").value,
    to_name: "Mohamed kassem Abbassi", 
  };
    // Envoi du formulaire via EmailJS
    emailjs.sendForm('service_uz1yx2d', 'template_o2vnx0q', this)
        .then(function(response) {
            console.log('Success!', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('Failed...', error);
            alert('Failed to send the message. Please try again!');
        });
});


