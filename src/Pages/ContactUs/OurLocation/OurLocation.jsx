
import imgbg from '../../../assets/contact/contact-demo.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ShowCaseCard from '../../Shared/ShowCaseCard/ShowCaseCard';

const OurLocation = () => {
    return (
        <div className="max-w-screen-md  mx-auto ">
        <div className='ml-5 md:ml-0'>
        <SectionTitle title="our location" subTitle="visit us"></SectionTitle>
        </div>
        <ShowCaseCard name={'Our office'} details={'4143 Urkirchar, Raozan Chittagong'} imgUrl={imgbg}/>
    </div>
    );
};

export default OurLocation;