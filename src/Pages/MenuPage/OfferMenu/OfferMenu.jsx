import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCards from '../../Shared/MenuCards/MenuCards';
import { useCardDataApi } from '../../../Hooks/CardDataApi/useCardDataApi';

const OfferMenu = () => {
    const datas = useCardDataApi('category')
    return (
        <div>
            <SectionTitle title='todays offer' subTitle="Don't miss"></SectionTitle>
            <MenuCards datas={datas.slice(0,4)} buttonInfo='Order your favourite food' ></MenuCards>
        </div>
    );
};

export default OfferMenu;