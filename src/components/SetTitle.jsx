import { Helmet } from 'react-helmet-async';

const SetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{"Bistro Boss > "+title}</title>
        </Helmet>
    );
};

export default SetTitle;