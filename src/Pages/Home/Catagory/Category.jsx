import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import OnlineMenu from './OnlineMenu';

const Category = () => {
    return (
        <section className='p-6 md:p-10 lg:p-20 xl:p-24 !pb-0'>
            <SectionTitle title='order online' subTitle='From 11.00am to 10.00pm'></SectionTitle>
            <OnlineMenu></OnlineMenu>
        </section>
    );
};

export default Category;