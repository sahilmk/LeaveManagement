import styled from "styled-components";
import { Theme } from '../../Theme'

type StatusLabelsProps = {
    inputtype: string,
    padding: string,
    width: string
};

export const InputStyled = styled.input <StatusLabelsProps>`
    
        background-color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.yankeesBlueColor : Theme.colors.lotionColor};
        border: ${(prop) => prop.inputtype === 'authinput' ? `2px solid ${Theme.colors.darkslategrayColor};` : `solid 2px ${Theme.colors.brightGrayColor}`};
        border-radius: ${(prop) => prop.inputtype === 'authinput' ? '30px' : '0px'};
        padding: ${(prop) => prop.padding};
        color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.darkslategrayColor : Theme.colors.yankeesBlueColor};
        font-size: ${(prop) => prop.inputtype === 'authinput' ? '26px' : '20px'};
        height: ${(prop) => prop.inputtype === 'authinput' ? '60px' : '50px'};
        width: ${(prop) => prop.width};
`

