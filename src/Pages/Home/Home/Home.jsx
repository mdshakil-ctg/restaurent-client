import Banner from '../Banner/Banner';
import Category from '../Catagory/Category';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Callus from '../CallUs/Callus';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import SetTitle from '../../../components/SetTitle';
// import ModalTest from '../../Shared/Modal/ModalTest';
import Modal from '../../Shared/Modal/Modal';
import { useContext } from 'react';
import { ModalContext } from '../../../Providers/ModalProvider';

const Home = () => {

    const { isModalOpen, closeModal } = useContext(ModalContext);
    return (
        <div>
            <SetTitle title={'Home'}></SetTitle>
            <Modal className="z-50" isOpen={isModalOpen} onClose={closeModal}></Modal>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <Callus></Callus>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
            {/* <ModalTest></ModalTest> */}
        </div>
    );
};

export default Home;