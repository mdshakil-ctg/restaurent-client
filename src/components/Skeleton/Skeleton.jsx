

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 p-10 border mb-10 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="skeleton h-28 w-32  rounded-full rounded-tl-none"></div>
        <div className="flex flex-col gap-6 w-full">
          <div className="skeleton h-4 w-3/5"></div>
          <div className="skeleton h-3 "></div>
          <div className="skeleton h-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;