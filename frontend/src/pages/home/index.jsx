import Header from "../../components/common/header/index.jsx";
import TabOptions from "../../components/common/tabOptions/index.jsx";
import Footer from "../../components/common/footer/index.jsx";

const Homepage = () => {
    return (
        <div>
            <Header />
            {
                // A function that will decide the route to render
            }
            <TabOptions />
            <Footer />
        </div>
    )
}
export default Homepage
