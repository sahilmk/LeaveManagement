import styled from "styled-components";

export const TabStyle = styled.a`
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    display: flex;
    background-color: #fff;
    color: #777;
    height: 70px;

    /* &:focus{
        color: #173346;
    } */

    i{
        height: 23px;
        width: 19px;
        font-size: 25px;
    }

    span{
        font-family: 'SegoeUI';
        padding-left: 35px;
        font-size: 26.5px;
    }

    .Layer-1{
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        padding-left: 47px;
    }

    .ic_remove_black_48dp-1{
        padding-right: 30px;
        font-size: 25px;
    }
` 