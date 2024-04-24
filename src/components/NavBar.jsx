import React from 'react'
import { Link } from 'react-router-dom'
import logonavbar from "../img/logoangamos.png"

const dropdownobject = [
    {
        name: "programación día sabado",
        redirect: "/programacion-sabado"
    },
    {
        name: "programación día domingo",
        redirect: "/programacion-domingo"
    },
    {
        name: "programación femenina",
        redirect: "/programacion-femenina"
    },
]

const NavBarOptions = (props) => {

    if (props.acces) {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={props.redirect}>{props.option}</Link>
            </li>
        )
    }

}

const NavBarDropDown = (props) => {
    if (props.acces) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.name}
                </a>
                <ul class="dropdown-menu border-warning" style={{ backgroundColor: "#106c44" }}>
                    {props.options.map(option => <li><Link className="dropdown-item" to={option.redirect}>{option.name}</Link></li>)}
                </ul>
            </li>
        )
    }

}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark border border-warning border-2"
            style={{ backgroundColor: "#106c44", padding: 1 + "%" }} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img
                    src={logonavbar}
                    class="fixed-top"
                    style={{ height: 120 + "px", marginTop: 8 + "px", marginLeft: 20 + "px" }}
                />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto" style={{ marginLeft: 6 + "%" }}>

                        <NavBarOptions redirect="/carga-de-noticias" option="Cargar noticia" acces={true} />

                        <NavBarOptions redirect="/tabla-captacion" option="Captación" acces={true} />

                        <NavBarOptions redirect="/ingreso-egreso" option="Tesorería" acces={true} />

                        <NavBarOptions redirect="#" option="Noticias" />

                        <NavBarOptions redirect="#" option="Nuestros Dirigentes" />

                        <NavBarOptions redirect="#" option="Unete a Nosotros" />

                        <NavBarDropDown name="programación" options={dropdownobject} acces={true} />

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar