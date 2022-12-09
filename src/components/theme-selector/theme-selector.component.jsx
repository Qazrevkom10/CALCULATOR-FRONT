import React from "react";
import { 
    ThemeSelectorTitle, 
    ThemeSelectorSliderButton, 
    ThemeSelectorContainer, 
    ThemeSelectorSliderNumber,
    ThemeSelectorSliderButtonContainer,
    ThemeSelectorSliderNumberContainer
} from "./theme-selector.styles";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, selectTheme } from "../../app/redux/theme.slice";

const ThemeSelector = () => {
    const selectedTheme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return(
        <ThemeSelectorContainer>
            <ThemeSelectorTitle>
                <span>THEME</span>
            </ThemeSelectorTitle>
            <ThemeSelectorSliderNumberContainer>
                <ThemeSelectorSliderNumber>
                    1
                </ThemeSelectorSliderNumber>
                <ThemeSelectorSliderNumber>
                    2
                </ThemeSelectorSliderNumber>
                <ThemeSelectorSliderNumber>
                    3
                </ThemeSelectorSliderNumber>
            </ThemeSelectorSliderNumberContainer>
            <ThemeSelectorSliderButtonContainer>
                <ThemeSelectorSliderButton
                    onClick = {()=>dispatch(changeTheme(1))}
                    isHidden = {selectedTheme === 1 ? false : true}
                />
                <ThemeSelectorSliderButton
                    onClick = {()=>dispatch(changeTheme(2))}
                    isHidden = {selectedTheme === 2 ? false : true}
                />
                <ThemeSelectorSliderButton
                    onClick = {()=>dispatch(changeTheme(3))}
                    isHidden = {selectedTheme === 3 ? false : true}
                />
            </ThemeSelectorSliderButtonContainer>
        </ThemeSelectorContainer>
    )
}

export default ThemeSelector;