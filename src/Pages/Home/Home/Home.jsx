import Banner from '../Banner/Banner';
import Category from '../Catagory/Category';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Callus from '../CallUs/Callus';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
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