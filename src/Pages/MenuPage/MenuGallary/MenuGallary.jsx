import ShowCaseCard from '../../Shared/ShowCaseCard/ShowCaseCard';
import dessert from '../../../assets/menu/dessert-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
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
        <div >
            {/* dessert section */}
            <ShowCaseCard imgUrl={dessert} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DESSERTS"} ></ShowCaseCard>
            <div className='pt-10 px-5  pb-0 md:p-10 md:pb-5  lg:p-20 lg:pb-0 xl:p-24 xl:pb-6'>

            <MenuCards datas={dessertsData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={dessertsData.isLoading}></MenuCards>
            </div>

            {/* pizza section */}
            <ShowCaseCard imgUrl={pizza} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"PIZZA"} ></ShowCaseCard>
            <div className='pt-10 px-5 pb-0 md:p-10 md:pb-5  lg:p-20 lg:pb-0 xl:p-24 xl:pb-6'>
            <MenuCards datas={pizzasData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={pizzasData.isLoading}></MenuCards>
            </div>

            {/* salad section */}
            <ShowCaseCard imgUrl={'https://img.freepik.com/free-photo/high-angle-tasty-fresh-salad-composition_23-2148537199.jpg?uid=R88479733&ga=GA1.1.303088461.1726933426&semt=ais_hybrid'} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SALAD"} ></ShowCaseCard>
            <div className='pt-10 px-5 pb-0 md:p-10 md:pb-5  lg:p-20 lg:pb-0 xl:p-24 xl:pb-6'>
            <MenuCards datas={saladsData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={saladsData.isLoading}></MenuCards>
            </div>

            {/* soup section */}
            <ShowCaseCard imgUrl={soup} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SOUP"} ></ShowCaseCard>
            <div className='pt-10 px-5 pb-0 md:p-10 md:pb-5  lg:p-20 lg:pb-0 xl:p-24 xl:pb-6'>
            <MenuCards datas={soupsData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={soupsData.isLoading}></MenuCards>
            </div>

            {/* drinks section */}
            <ShowCaseCard imgUrl={drinks} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DRINKS"} ></ShowCaseCard>
            <div className='pt-10 px-5 pb-0 md:p-10 md:pb-5  lg:p-20 lg:pb-0 xl:p-24 xl:pb-6'>
            <MenuCards datas={drinksData.filterData.slice(0,6)} buttonInfo='order your favourite food' isLoading={drinksData.isLoading} ></MenuCards>
            </div>
        </div>
    );
};

export default MenuGallary;