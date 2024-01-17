import { connect } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import espol_logo from "assets/img/logo_espol.png"
import { useState } from "react"


function Navbar(){

    const [loading,setLoading] = useState(true)
    return(
        <nav className="w-full bg-white py-4 top-0 fixed">
            <div className="bg-white px-6 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-10 p-2 ">
                <Link to = '/' className="ml-2 mt-2">
                    <img 
                        className="h-14"
                        src = {espol_logo}
                        alt = "logo espol"
                        />
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink to = '/Intercambiar'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-links-hover mx-4">Intercambiar</NavLink>
                <NavLink to = '/Vender'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-links-hover mx-4">Vender</NavLink>
                <NavLink to = '/Comprar'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-links-hover mx-4">Comprar</NavLink>
                <NavLink to = '/Registrarse'className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 ml-10">Registrarse</NavLink>
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-blue-button px-4 py-2.5 text-md font-medium text-white shadow-sm transition hover:duration-300 hover:ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-button focus:ring-offset-2"
                >
                    Iniciar sesion
                </button>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)