
import SetTitle from "../../components/SetTitle";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ShowCaseCard from "../Shared/ShowCaseCard/ShowCaseCard";
import ContactForm from "./ContactForm/ContactForm";

import OurLocation from "./OurLocation/OurLocation";


const ContactUs = () => {

    return (
        <div className="mb-20 ">
            <SetTitle title={'Contact us'}></SetTitle>
            <ShowCaseCard details={'Would you like to try a dish'} imgUrl={'../../../src/assets/contact/banner.jpg'} name={'CONTACT US'}></ShowCaseCard>
            <SectionTitle title={'your openion'} subTitle={'give us'}></SectionTitle>
           <ContactForm></ContactForm>
            <SectionTitle title={'our location'} subTitle={'visit us'}></SectionTitle>
           <OurLocation></OurLocation>

        </div>
    );
};

export default ContactUs;