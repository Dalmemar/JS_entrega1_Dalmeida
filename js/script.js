let emailLead;


function solicitarEmail () {
    emailLead = prompt ("Ingrese Su Email para continuar");
    
}

function agradecimiento () {
    alert ("Gracias Por Registrarte")
}

do {
    solicitarEmail ()

} while (emailLead == "" || emailLead == null)

do {
    agradecimiento ()

    if (emailLead != "" || emailLead != null) {
        break
    }

} while (emailLead != "" || emailLead != null)


