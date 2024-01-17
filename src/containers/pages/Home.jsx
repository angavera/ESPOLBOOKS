import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import Header from "components/Home/Header"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className = "pt-28">
                <Header/>
                
            </div>
                <Footer/>
        </Layout>
    )
}
export default Home