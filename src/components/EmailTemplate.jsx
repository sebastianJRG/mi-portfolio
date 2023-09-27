const EmailTemplate = ({name, contact, work}) => {
    return (
        <div>
            <h1>He recibido un contacto desde el Portafolio Web departe de <strong>{name}</strong></h1>
            <p>
                quiere que haga un trabajo de: <strong>{work}</strong>
            </p>
            <p>
                El contacto es: <strong>{contact}</strong>
            </p>
        </div>
    );
}

export default EmailTemplate;
