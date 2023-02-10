import * as React from 'react' ;

import { 
    HeaderMain,
    NavItem
} from './styles/Header.styles';

const Header = () => {

    const navList = [
        {
            label : "Home",
            link : "/home"
        },
        {
            label : "My Dashboard",
            link : "/my-dashboard"
        }
    ];

    return (
        <HeaderMain>
            { navList.map((nav, index) => (
                <NavItem key={index}>
                    {nav.label}
                </NavItem>
            ))}
        </HeaderMain>
    )
}

export default Header;