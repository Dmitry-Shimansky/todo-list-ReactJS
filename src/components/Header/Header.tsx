import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {HeaderButton, HeaderButtonContainer, HeaderContainer, HeaderHead} from "./Header.styled";
import {useDispatch} from "react-redux";
import {toggleThemeAction} from "../../feature/themeList";

export const Header = () => {
    const dispatch = useDispatch();

    const getActiveClass = ({isActive}: {isActive: boolean}): string => {
        return isActive ? `${classes.active} ${classes.link}` : classes.link
    }

    return (
        <HeaderHead>
            <HeaderContainer>
                <NavLink to="/" className={getActiveClass}>Home</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
                <HeaderButtonContainer>
                    <HeaderButton onClick={() => dispatch(toggleThemeAction())}>toggle</HeaderButton>
                </HeaderButtonContainer>
            </HeaderContainer>
        </HeaderHead>
    )
}