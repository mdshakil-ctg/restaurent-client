import ShopCard from './../components/ShopCard';


const ShopTabData = ({datas}) => {
    return (
        <div  className="grid md:grid-cols-3 gap-6">
        {datas.map(data => <ShopCard key={data._id} data={data}></ShopCard>)}
    </div>
    );
};

export default ShopTabData;

