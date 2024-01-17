import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Intercambiar(){
    return(
        <Layout>
            <Navbar/>
            <div className = "pt-28">
                
                Home
            </div>
                <Footer/>
        </Layout>
    )
}
export default Intercambiar