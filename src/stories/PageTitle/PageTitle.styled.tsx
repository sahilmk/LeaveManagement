import styled from "styled-components";

export const PageTitleStyle = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    background-color: #fbfbfb;
    width: calc(100% - 420px);
    padding:  30px 30px 18px;
    margin-left: 420px;

    .logindate{
        display: inline-block;
        font-family: SegoeUI;
        color: #173346;
        margin-bottom: 10px;
        font-size: 19.5px;
    }

    .nameofpage{
        font-family: SegoeUI;
        color: #173346;
        font-weight: 600;
        font-size: 30px;
    }

    .childpage{
        font-family: SegoeUI;
        color: #173346;
        font-size: 24px;
    }

    button{
        height: 50px;
    }
`