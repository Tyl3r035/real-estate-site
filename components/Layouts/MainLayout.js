import Header from '../UI/Header/Header';
import TopSection from '../UI/TopSection/TopSection';
import NewEditions from '../UI/NewEditions/NewEditions';
import BusinessSection from '../UI/BusinessSection/BusinessSection';
import Footer from '../UI/Footer/Footer';

const MainLayout = (props)=>{
    return(<div>
    <Header />
    <TopSection />
    <NewEditions />
    <BusinessSection />
    <Footer />
    </div>)
}
export default MainLayout;