import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCards from '../../Shared/MenuCards/MenuCards';
import { useCardDataApi } from '../../../Hooks/CardDataApi/useCardDataApi';

const OfferMenu = () => {
    const {datas, isLoading} = useCardDataApi('category')
    return (
        <div className='px-6 md:px-10 lg:px-20 xl:px-24 md:pb-10'>
            <SectionTitle title='todays offer' subTitle="Don't miss"></SectionTitle>
            <MenuCards datas={datas.slice(0,4)} buttonInfo='Order your favourite food' isLoading={isLoading} ></MenuCards>
        </div>
    );
};

export default OfferMenu;