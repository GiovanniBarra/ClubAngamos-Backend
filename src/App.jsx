
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/NavBar";
import Footer from './components/Footer';
import HomeComponents from './components/home/HomeComponents';


const App = () => {
    return (
        <div className='bg-dark'>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<HomeComponents/>} />
                    {/* <Route element={<RutasProtegidas canActivate={true} />}>
                        <Route path='/carga-de-noticias' element={<FormNoticias />} />
                    </Route>

                    <Route path='/programacion-sabado' element={<FormProgramacionSabado />} />
                    <Route path='/programacion-domingo' element={<FormProgramacionDomingo />} />
                    <Route path='/programacion-femenina' element={<FormProgramacionFemenina />} /> */}
                    {/* <Route path='/form-captacion-jugadores' element={<FormCaptacionJugadores />} /> */}
                    {/* <Route path='/noticia-completa' element={<NoticiaCompleta />} /> */}
                    {/* <Route path='/tabla-captacion' element={<TablaCaptacion />} /> */}
                    {/* <Route path='/ingreso-egreso' element={<IngresosEgresos />} />
                    <Route path='/form-ingreso-egreso' element={<FormIngresoEgreso />} />
                    <Route path='/form-inicio-sesion' element={<FormInicioSesion />} /> */}
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App;