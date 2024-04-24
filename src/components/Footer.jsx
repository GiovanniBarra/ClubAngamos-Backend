import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div style={{ padding: .6 + "%", backgroundColor: "#106c44" }}>
            <footer style={{ textAlign: 'center' }}>

                <h4 style={{ color: "yellow" }}>Siguenos en
                    <Link to="" style={{ color: 'yellow', marginRight: 10 + "px", marginLeft: 10 + "px" }}><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to="" style={{ marginRight: 10 + "px", color: 'yellow' }}><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to="" style={{ marginRight: 10 + "px", color: 'yellow' }}><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link to="" style={{ marginRight: 10 + "px", color: 'yellow' }}><FontAwesomeIcon icon={faTiktok} /></Link>
                </h4>

                <h6 style={{ color: "yellow" }}>
                    © Unión Angamos 2024 - Derechos Reservados
                </h6>

            </footer>
        </div>
    )
}

export default Footer 