import React from "react";
import ThemeSelector from "../theme-selector/theme-selector.component";
import { HeaderContainer, HeaderTitle } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>calc</HeaderTitle>
            <ThemeSelector></ThemeSelector>
        </HeaderContainer>
    )
}

export default Header;