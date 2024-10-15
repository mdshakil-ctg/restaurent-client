import { Helmet } from 'react-helmet-async';

const SetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{"Crave Station > "+title}</title>
        </Helmet>
    );
};

export default SetTitle;