import styled from "styled-components";

type StatusLabelsProps = {
    inputtype: string,
    padding: string,
    width: number
};

export const InputStyled = styled.input <StatusLabelsProps>`
    
        background-color: ${(prop) => prop.inputtype === 'authinput' ? '#173346' : '#fafafa'};
        border: ${(prop) => prop.inputtype === 'authinput' ? '2px solid #284960;' : 'solid 2px #ebebeb'};
        border-radius: ${(prop) => prop.inputtype === 'authinput' ? '30px' : '0px'};
        padding: ${(prop) => prop.padding};
        color: ${(prop) => prop.inputtype === 'authinput' ? '#284960' : '#173346'};
        font-size: ${(prop) => prop.inputtype === 'authinput' ? '26px' : '20px'};
        height: ${(prop) => prop.inputtype === 'authinput' ? '60px' : '50px'};
        width: ${(prop) => prop.width}px;
`

