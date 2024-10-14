
import SetTitle from "../../components/SetTitle";
// import ShowCaseCard from "../Shared/ShowCaseCard/ShowCaseCard";
import ContactForm from "./ContactForm/ContactForm";
import OurLocation from "./OurLocation/OurLocation";


const ContactUs = () => {

    return (
        <div className="mb-20 pt-16">
            <SetTitle title={'Contact us'}></SetTitle>
            <div className="h-[700px]"><img className="w-full h-full object-cover" src="../../../src/assets/contact/contact-banner.jpg" alt="" /></div>
           <ContactForm></ContactForm>
           <OurLocation></OurLocation>

        </div>
    );
};

export default ContactUs;