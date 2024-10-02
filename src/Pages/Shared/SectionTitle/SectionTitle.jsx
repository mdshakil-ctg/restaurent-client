

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className=' max-w-screen-lg my-12 mx-auto'>
            {/* <p className='text-[#725d2cbb] mb-3 italic capitalize'>--- {subTitle} ---</p> */}
            <span className="opacity-50 text-xs font-satisfy block">{subTitle} </span>
            <h3 className='uppercase font-semibold pb-1 text-xl text-left md:text-2xl opacity-75 font-  border-b-2 border-b-slate-400 inline '>{title} </h3>
        </div>
    );
};

export default SectionTitle;