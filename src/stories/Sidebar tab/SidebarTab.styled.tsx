import styled from "styled-components";

type TabStyleProp = {
    leave: boolean
}

export const TabStyle = styled.a<TabStyleProp>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 420px;
    background-color: #fbfbfb;

    img{
        height: 23px;
        width: 19px;
        color: #777;
    }

    span{
        font-family: 'SegoeUI';
        padding-left: 35px;
        font-size: 26.5px;
        color: #777;
    }

    .Layer-1{
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 47px;
    }

    .ic_remove_black_48dp-1{
        padding-right: 30px;
        height: 16px;
        width: 16px;
    }
` 