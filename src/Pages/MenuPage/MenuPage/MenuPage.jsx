import MenuBanner from '../MenuBanner/MenuBanner';
import OfferMenu from '../OfferMenu/OfferMenu';
import MenuGallary from '../MenuGallary/MenuGallary';
import SetTitle from '../../../components/SetTitle';

const MenuPage = () => {
    return (
        <div>
            <SetTitle title={'Menu'}></SetTitle>
            <MenuBanner></MenuBanner>
            <OfferMenu></OfferMenu>
            <MenuGallary></MenuGallary>
            
        </div>
    );
};

export default MenuPage;