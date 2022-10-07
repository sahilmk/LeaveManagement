import styled from "styled-components";
import { Theme } from '../../Theme'

type StatusLabelsProps = {
    inputtype: string,
    padding: string,
    width: string
};

export const InputStyled = styled.input <StatusLabelsProps>`
    
        background-color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.yankeesBlue : Theme.colors.lotion};
        border: ${(prop) => prop.inputtype === 'authinput' ? `2px solid ${Theme.colors.darkslategray};` : `solid 2px ${Theme.colors.brightGray}`};
        border-radius: ${(prop) => prop.inputtype === 'authinput' ? '30px' : '0px'};
        padding: ${(prop) => prop.padding};
        color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.darkslategray : Theme.colors.yankeesBlue};
        font-size: ${(prop) => prop.inputtype === 'authinput' ? '26px' : '20px'};
        height: ${(prop) => prop.inputtype === 'authinput' ? '60px' : '50px'};
        width: ${(prop) => prop.width};
`

