import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {HeaderContainer, HeaderHead} from "./Header.styled";

export const Header = () => {
    const getActiveClass = ({isActive}: {isActive: boolean}): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }

    return (
        <HeaderHead>
            <HeaderContainer>
                <NavLink to="/" className={getActiveClass}>Home</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
            </HeaderContainer>
        </HeaderHead>
    )
}