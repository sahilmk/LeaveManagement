import styled from "styled-components";

export const PageTitleStyle = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    background-color: #fbfbfb;
    height: 12rem;
    width: 100%;
    padding:  3rem 3rem 1.8rem;

    .logindate{
        display: inline-block;
        font-family: SegoeUI;
        color: #173346;
        margin-bottom: 1rem;
        font-size: 1.95rem;
        >span{
            font-size: 1.95rem;
        }
    }

    .nameofpage{
        font-family: SegoeUI;
        color: #173346;
        font-weight: 600;
        font-size: 3rem;
    }

    .childpage{
        font-family: SegoeUI;
        color: #173346;
        font-size: 2.4rem;
    }

    button{
        height: 5rem;
    }
`