import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center my-12 w-1/2 md:w-3/12 mx-auto'>
            <p className='text-[#D99904] mb-3 italic'>--- {subTitle} ---</p>
            <h3 className='uppercase font-semibold p-4 text-xl md:text-3xl border-y-4 opacity-75'>{title}</h3>
        </div>
    );
};

export default SectionTitle;