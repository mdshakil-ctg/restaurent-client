import Banner from '../Banner/Banner';
import Category from '../Catagory/Category';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Callus from '../CallUs/Callus';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import SetTitle from '../../../components/SetTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import LoaderCup from '../../../components/LoaderCup/LoaderCup';

const Home = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <LoaderCup></LoaderCup>
    }

    return (
        <div>            
            <SetTitle title={'Home'}></SetTitle>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <Callus></Callus>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;