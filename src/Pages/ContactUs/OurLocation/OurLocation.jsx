
import imgbg from '../../../assets/contact/contact-demo.png'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const OurLocation = () => {
    return (
        <div className="max-w-screen-md  mx-auto mb-10">
        <SectionTitle title="our location" subTitle="visit us"></SectionTitle>     
        <img src={imgbg} alt="contact image" />
    </div>
    );
};

export default OurLocation;