

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center my-12 w-1/2 md:w-4/12 mx-auto'>
            <p className='text-[#725d2cbb] mb-3 italic capitalize'>--- {subTitle} ---</p>
            <h3 className='uppercase font-semibold p-4 text-xl md:text-3xl border-y-4 opacity-75 font-poppins'>{title}</h3>
        </div>
    );
};

export default SectionTitle;