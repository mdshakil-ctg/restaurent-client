import ShowCaseCard from '../../Shared/ShowCaseCard/ShowCaseCard';
import dessert from '../../../assets/menu/dessert-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import drinks from '../../../assets/menu/drink.jpg'
import MenuCards from '../../Shared/MenuCards/MenuCards';
import { useMenuFilterData } from '../../../Hooks/useMenuFilterData';


const MenuGallary = () => {
    const dessertsData = useMenuFilterData('dessert');
    const pizzasData = useMenuFilterData('pizza');
    const saladsData = useMenuFilterData('salad');
    const soupsData = useMenuFilterData('soup');
    const drinksData = useMenuFilterData('drinks');
    
    
    

    return (
        <div>
            {/* dessert section */}
            <ShowCaseCard imgUrl={dessert} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DESSERTS"} ></ShowCaseCard>
            <MenuCards datas={dessertsData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={dessertsData.isLoading}></MenuCards>

            {/* pizza section */}
            <ShowCaseCard imgUrl={pizza} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"PIZZA"} ></ShowCaseCard>
            <MenuCards datas={pizzasData.filterData.slice(0,9)} buttonInfo='order your favourite food' isLoading={pizzasData.isLoading}></MenuCards>

            {/* salad section */}
            <ShowCaseCard imgUrl={salad} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SALAD"} ></ShowCaseCard>
            <MenuCards datas={saladsData.filterData.slice(0,8)} buttonInfo='order your favourite food' isLoading={saladsData.isLoading}></MenuCards>

            {/* soup section */}
            <ShowCaseCard imgUrl={soup} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SOUP"} ></ShowCaseCard>
            <MenuCards datas={soupsData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={soupsData.isLoading}></MenuCards>

            {/* drinks section */}
            <ShowCaseCard imgUrl={drinks} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DRINKS"} ></ShowCaseCard>
            <MenuCards datas={drinksData.filterData.slice(0,9)} buttonInfo='order your favourite food' isLoading={drinksData.isLoading} ></MenuCards>
        </div>
    );
};

export default MenuGallary;