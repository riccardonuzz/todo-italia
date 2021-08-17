import PropTypes from 'prop-types';
import { useState } from 'react';

import { Header } from "../components/Header";

const MainLayout = (props) => {
    const [isGoToDashboardVisible, setIsGoToDashboardVisible] = useState(true);

    return <>
        <Header {...props} isGoToDashboardVisible={isGoToDashboardVisible} />
        {props.render({ ...props, setIsGoToDashboardVisible })}
    </>
};

MainLayout.propTypes = {
    render: PropTypes.func.isRequired,
}

export default MainLayout;
