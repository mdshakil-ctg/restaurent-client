const TestimonialSkeleton = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 px-6 py-10 bg-gradient-to-r from-[#d3a4524b]  to-[#fcb438] rounded-md w-4/5  mx-auto">
        {/* Quote icon */}
        <div className="skeleton h-12 w-12 bg-gray-300 rounded-full"></div>
  
        {/* Star rating skeleton */}
        <div className="flex space-x-2">
          <div className="skeleton  w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="skeleton w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="skeleton w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="skeleton w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="skeleton w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
  
        {/* Testimonial text skeleton */}
        <div className="space-y-2 w-full">
          <div className="skeleton h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="skeleton h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
          <div className="skeleton h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        </div>
  
        {/* Author name */}
        <div className="skeleton h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>
      </div>
    );
  };
  
  export default TestimonialSkeleton;
  