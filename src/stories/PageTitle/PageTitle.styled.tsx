import styled from "styled-components";
import { Theme } from "../../Theme";

export const PageTitleStyle = styled.div`
    background-color: ${Theme.colors.lotionColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12rem;
    width: 100%;
    padding:  3rem 3rem 1.8rem;

    .logindate{
        color: ${Theme.colors.yankeesBlueColor};
        font-family: SegoeUI;
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 1.95rem;

        >span{
            font-size: 1.95rem;
        }
    }

    .nameofpage{
        color: ${Theme.colors.yankeesBlueColor};
        font-family: SegoeUI;
        font-weight: 600;
        font-size: 3rem;
    }

    .childpage{
        color: ${Theme.colors.yankeesBlueColor};
        font-family: SegoeUI;
        font-size: 2.4rem;
    }

    button{
        height: 5rem;
    }
`