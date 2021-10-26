import React from 'react'
import Header from '../../components/Header';

const HomeLayout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default HomeLayout;