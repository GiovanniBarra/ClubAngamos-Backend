import React from 'react'
import { Link } from 'react-router-dom'
import imagen1 from '../../img/imagen1.jpeg'
import imagen2 from '../../img/imagen2.jpeg'
import imagen3 from '../../img/imagen3.jpeg'
import imagen4 from '../../img/imagen4.jpeg'
import imagen5 from '../../img/logoangamos.png'
//import { findAllByPlaceholderText } from '@testing-library/react'


{/* Aqui comienza el css*/}
const imgCarousel = {
    height: "400px",
    width: "600px",
    objectFit: "contain"
}

const styleTituloDirigentes = {
    marginTop: "6%",
    marginLeft: "5%",
    color: 'white'
}

const styleDivCaptacion = { 
    margin: "2%", 
    backgroundColor: "#106c44", 
    textAlign: 'center' 
}

const styleTituloCaptacion = { 
    margin: "2%", 
    color: "#fded00" 
}

const styleButonCaptacion = { 
    marginBottom: "2%",
    color: "#106c44" }

const styleImagenPrincipal = { 
    width: "100%", 
    opacity: .2 
}

const styleDivContainerProgramacion = { 
    marginTop: "6%" 
}

const styleCardProgramacion = {
    backgroundColor: "#106c44" 
    }

const StyleTitulosProgramacion = { 
    color: "#fded00", 
    textAlign: 'center' 
}

const styleHorarioSerie = { 
    backgroundColor: "#106c44", 
    color: "#fded00" 
}

const styleTituloNuestrasSeries = { 
    textAlign: 'center', 
    marginTop: "6%", 
    marginBottom: "2%", 
    color: 'white' 
}

const styleTituloNoticias = { 
    marginTop: "6%",
    marginBottom: "2%", 
    marginLeft: "5%", 
    color: 'white' 
}

const styleDivContainerNoticias = { 
    marginBottom: "20px" 
}

const styleCardNoticia = { 
    width: "400px", 
    backgroundColor: "#106c44", 
    marginBottom: "20px" 
}

const styleImagenCard = { 
    width: "100%" 
}

const styleTitulocard = { 
    color: 'white' 
}

const styleContextoCard = { 
    color: 'white' 
}

const styleButonCard = { 
    backgroundColor: "#fded00", 
    color: "#106c44" 
}
{/* Aqui termina el css*/}



const HomeComponents = () => {
    return (

        <>
            {/* Aqui inicia la imagen principal*/}
            <div>
                <img src={imagen4}
                    style={styleImagenPrincipal} />
            </div>
            {/* Aqui termina la imagen principal */}

            <div className="border border-2 border-warning" style={styleDivCaptacion}>
                <strong><h3 style={styleTituloCaptacion}>SI QUIERES SER PARTE DE ESTA GRAN INSTITUCION DEJANOS TUS DATOS Y TE CONTACTAREMOS</h3></strong>
                <button type="button" class="btn btn-warning" style={styleButonCaptacion}>Ir al formulario</button>
            </div>


            <h2 style={styleTituloDirigentes}>Nuestros Dirigentes</h2>


            {/* Aqui comienza el container de la directiva y los logos*/}
            <div className='container-fluid'>
                <div className="row justify-content-around">

                    {/* Aqui comienza el carrusel de la directiva (carrusel 1) */}
                    <div id="carrusel1" className="carousel slide col-lg-8" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imagen1} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={imagen2} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={imagen3} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carrusel1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Aqui termina el carrusel de la directiva (carrusel 1) */}

                    {/* Aqui comienza el carrusel de los logos (carrusel 2)*/}
                    <div id="carrusel2" className="carousel slide col-lg-4" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={imagen5} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={imagen2} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={imagen3} className="d-block w-100" style={imgCarousel} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className='text-white'>
                                        DESCRIPCION DE LA FOTOGRAFIA
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carrusel2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Aqui termina el carrusel de los logos (carrusel 2)*/}

                </div>
            </div>
            {/* Aqui termina el container de la directiva y los logos*/}



            {/* Aqui comienza el container de las programaciones */}
            <div className='container-fluid' style={styleDivContainerProgramacion}>
                <div className="row justify-content-around" >
                    {/* Aqui comienza la programacion del dia sabado */}
                    <div className='rounded col-lg-4'>
                    <ul class="list-group list-group-flush rounded">
                            <li class="list-group-item border border-warning" style={styleCardProgramacion}>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>13 de abril 2024</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Rival: Carrera</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Cancha: Mario Osben</strong></p>
                            </li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Segunda Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Primera Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Juveniles<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Super Senior<p>13:00 hrs.</p></li>
                        </ul>
                    </div>
                    {/* Aqui termina la programacion del dia sabado */}

                    {/* Aqui comienza la programacion del dia domingo */}
                    <div className='rounded col-lg-4'>
                    <ul class="list-group list-group-flush rounded">
                            <li class="list-group-item border border-warning" style={styleCardProgramacion}>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>13 de abril 2024</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Rival: Carrera</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Cancha: Mario Osben</strong></p>
                            </li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Segunda Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Primera Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Juveniles<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Super Senior<p>13:00 hrs.</p></li>
                        </ul>
                    </div>
                    {/* Aqui termina la programacion del dia domingo */}

                    {/* Aqui empieza la programacion de la rama femenina */}
                    <div className='col-lg-4'>
                        <ul class="list-group list-group-flush rounded">
                            <li class="list-group-item border border-warning" style={styleCardProgramacion}>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>PROGRAMACIÓN DÍA DOMINGO</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>13 de abril 2024</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Rival: Carrera</strong></p>
                                <p className='border border-warning' style={StyleTitulosProgramacion}><strong>Cancha: Mario Osben</strong></p>
                            </li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Segunda Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Primera Infantil<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Juveniles<p>13:00 hrs.</p></li>
                            <li class="list-group-item border border-warning" style={styleHorarioSerie}>Super Senior<p>13:00 hrs.</p></li>
                        </ul>
                    </div>
                    {/* Aqui termina la programacion de la rama femenina */}

                </div>
            </div>
            {/* Aqui termina el container de las programaciones */}


            
            <h2 style={styleTituloNuestrasSeries}>Nuestras Series</h2>
            

            {/* Aqui comienza el carrusel de las fotos de cada serie (carrusel 3)*/}
            <div id="carrusel3" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carrusel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100" style={imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-white'>
                                DESCRIPCION DE LA FOTOGRAFIA
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" style={imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-white'>
                                DESCRIPCION DE LA FOTOGRAFIA
                            </h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100" style={imgCarousel} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-white'>
                                DESCRIPCION DE LA FOTOGRAFIA
                            </h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carrusel3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carrusel3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Aqui termina el carrusel de las fotos de cada serie (carrusel 3)*/}



            <h2 style={styleTituloNoticias}>Noticias</h2>

            {/* Aqui comienza el container de las noticias */}
            <div className='container-fluid' style={styleDivContainerNoticias}>
                <div className="row justify-content-around">

                    {/* Aqui comienzan las card */}
                    <div className="card col-lg-3 col-sm-6 border border-warning" style={styleCardNoticia}>
                        <img className="card-img mt-3" src={imagen1} style={styleImagenCard} />
                        <div className="card-body">
                            <h4 className="card-title" style={styleTitulocard}>John Doe</h4>
                            <p className="card-text" style={styleContextoCard}>Some example text some example text. John Doe is an architect and engineer</p>
                            <Link to="#" className="btn" style={styleButonCard}>See Profile</Link>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-sm-6 border border-warning" style={styleCardNoticia}>
                        <img className="card-img mt-3" src={imagen3} style={styleImagenCard} />
                        <div className="card-body">
                            <h4 className="card-title" style={styleTitulocard}>John Doe</h4>
                            <p className="card-text" style={styleContextoCard}>Some example text some example text. John Doe is an architect and engineer</p>
                            <Link to="#" className="btn" style={styleButonCard}>See Profile</Link>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-sm-6 border border-warning" style={styleCardNoticia}>
                        <img className="card-img mt-3" src={imagen1} style={styleImagenCard} />
                        <div className="card-body">
                            <h4 className="card-title" style={styleTitulocard}>John Doe</h4>
                            <p className="card-text" style={styleContextoCard}>Some example text some example text. John Doe is an architect and engineer</p>
                            <Link to="#" className="btn" style={styleButonCard}>See Profile</Link>
                        </div>
                    </div>
                    {/* Aqui terminan las card */}

                </div>
            </div>
            {/* Aqui termina el container de las noticias */}



        </>
    )
}

export default HomeComponents