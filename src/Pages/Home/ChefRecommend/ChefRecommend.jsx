import { useCardDataApi } from "../../../Hooks/CardDataApi/useCardDataApi";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VerticalCard from "../../Shared/VerticalCard/VerticalCard";
import MenuCartSkeleton from "./../../../components/Skeleton/MenuCartSkeleton";

const ChefRecommend = () => {
  const { datas, isLoading } = useCardDataApi("category");
  return (
    <section className="p-6 md:p-10 lg:p-20 xl:p-24 mb-20">
      <SectionTitle
        title={"chef recommends"}
        subTitle={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {isLoading ? (
          <>
            <MenuCartSkeleton></MenuCartSkeleton>
            <MenuCartSkeleton></MenuCartSkeleton>
            <MenuCartSkeleton></MenuCartSkeleton>
          </>
        ) : (
          datas
            .slice(0, 3)
            .map((data) => (
              <VerticalCard key={data._id} data={data}></VerticalCard>
            ))
        )}
      </div>
    </section>
  );
};

export default ChefRecommend;
