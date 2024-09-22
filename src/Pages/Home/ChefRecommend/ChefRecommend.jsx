import { useCardDataApi } from '../../../Hooks/CardDataApi/useCardDataApi';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import VerticalCard from '../../Shared/VerticalCard/VerticalCard';

const ChefRecommend = () => {
    const datas = useCardDataApi('category');
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