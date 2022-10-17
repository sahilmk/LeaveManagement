import styled from "styled-components";
import { Theme } from "../../Theme";

export const TabStyle = styled.a`
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    display: flex;
    background-color: ${Theme.colors.whiteColor};
    color: ${Theme.colors.sonicSilverColor};
    height: 7rem;

    /* &:focus{
        color: ${Theme.colors.yankeesBlueColor};
    } */

    i{
        height: 2.3rem;
        width: 1.9rem;
        font-size: 2.5rem;
    }

    span{
        padding-left: 3.5rem;
        font-size: 2.65rem;
    }

    .Layer-1{
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        padding-left: 4.7rem;
    }

    .ic_remove_black_48dp-1{
        padding-right: 3rem;
        font-size: 2.5rem;
    }
` 