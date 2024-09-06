import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { UseCardDataApi } from '../../../Hooks/CardDataApi/UseCardDataApi';
import VerticalCard from '../../Shared/VerticalCard/VerticalCard';

const ChefRecommend = () => {
    const datas = UseCardDataApi('category');
    return (
        <section className='mb-20'>
            <SectionTitle title={'chef recommends'} subTitle={'Should Try'}></SectionTitle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    datas.slice(0,3).map(data => <VerticalCard key={data._id} data = {data}></VerticalCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;