import styled from "styled-components";
import { Theme } from "../../Theme";

export const PageTitleStyle = styled.div`
    background-color: ${Theme.colors.lotion};
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    background-color: ${Theme.colors.lotion};
    height: 12rem;
    width: calc(100% - 42rem);
    padding:  3rem 3rem 1.8rem;
    margin-left: 42rem;

    .logindate{
        color: ${Theme.colors.yankeesBlue};
        font-family: SegoeUI;
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 1.95rem;
    }

    .nameofpage{
        color: ${Theme.colors.yankeesBlue};
        font-family: SegoeUI;
        font-weight: 600;
        font-size: 3rem;
    }

    .childpage{
        color: ${Theme.colors.yankeesBlue};
        font-family: SegoeUI;
        font-size: 2.4rem;
    }

    button{
        height: 5rem;
    }
`