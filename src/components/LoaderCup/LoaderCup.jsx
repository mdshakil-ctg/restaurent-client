import './LoaderCup.css';

const LoaderCup = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='cup'>
                <div className='handle'></div>
                <div className='smoke-container'>
                    <div className='smoke'></div>
                    <div className='smoke'></div>
                    <div className='smoke'></div>
                    <div className='smoke'></div>
                </div>
            </div>
        </div>
    );
};

export default LoaderCup;
