import styled from "styled-components";
import { Theme } from '../../Theme'

type StatusLabelsProps = {
    inputtype: string,
    padding: string,
    width: string
};

export const InputStyled = styled.input <StatusLabelsProps>`
    
        background-color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.yankeesBlueColor : Theme.colors.lotionColor};
        border: ${(prop) => prop.inputtype === 'authinput' ? `0.2rem solid ${Theme.colors.darkslategrayColor};` : `solid 0.2rem ${Theme.colors.brightGrayColor}`};
        border-radius: ${(prop) => prop.inputtype === 'authinput' ? '3rem' : '0rem'};
        padding: ${(prop) => prop.padding};
        color: ${(prop) => prop.inputtype === 'authinput' ? Theme.colors.darkslategrayColor : Theme.colors.yankeesBlueColor};
        font-size: ${(prop) => prop.inputtype === 'authinput' ? '2.6rem' : '2rem'};
        height: ${(prop) => prop.inputtype === 'authinput' ? '6rem' : '5rem'};
        width: ${(prop) => prop.width};
`

