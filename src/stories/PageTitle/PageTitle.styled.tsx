import styled from "styled-components";
import { Theme } from "../../Theme";

export const PageTitleStyle = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    background-color: ${Theme.colors.lotion};
    width: calc(100% - 42rem);
    padding:  3rem 3rem 1.8rem;
    margin-left: 42rem;

    .logindate{
        display: inline-block;
        font-family: SegoeUI;
        color: ${Theme.colors.yankeesBlue};
        margin-bottom: 1rem;
        font-size: 1.95rem;
    }

    .nameofpage{
        font-family: SegoeUI;
        color: ${Theme.colors.yankeesBlue};
        font-weight: 600;
        font-size: 3rem;
    }

    .childpage{
        font-family: SegoeUI;
        color: ${Theme.colors.yankeesBlue};
        font-size: 2.4rem;
    }

    button{
        height: 5rem;
    }
`