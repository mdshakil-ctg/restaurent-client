

const MenuCartSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 space-y-2 border rounded-lg">
      <div className="skeleton h-56 w-full mb-3"></div>
      <div className="skeleton h-5 w-4/5"></div>
      <div className="skeleton h-3 w-full"></div>
      <div className="skeleton h-3 w-full"></div>
      <div className="skeleton h-3 w-full"></div>
      <div className="skeleton h-6 w-2/5 ml-auto"></div>
    </div>
  );
};

export default MenuCartSkeleton;
