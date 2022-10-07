import styled from "styled-components";
import { Theme } from "../../Theme";

export const SidebarStyle = styled.div`
    background-color: ${Theme.colors.whiteColor};
    position: fixed;
    height: calc(100vh - 7rem);
    width: 42rem;
    top: 7rem;
    left: 0rem;

    .profile{
        background: url('./assets/images/profileCover.jpg') no-repeat center center/cover ;
        align-items: center;
        display: flex;
        height: 12rem;
        width: 100%;
    }

    .profiledescription{
        color: ${Theme.colors.whiteColor};
        font-family: SegoeUI;
        flex-direction: column;
        display: flex;

        .username{
            font-size: 2.6rem;
            font-weight: 600;
        }

        .userposition{
            color: ${Theme.colors.whiteColor};
            font-family: SegoeUI;
            font-size: 2rem;
            font-weight: 300;
        }
    }

    img{
        height: 8rem;
        width: 8rem;
        margin: 0rem 2.5rem 0rem 4.5rem;
    }

    button{
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        width: calc(42rem -  4rem);
    }

    .innerTabs{
        a{
            background-color: ${Theme.colors.lotionColor};
            /* &:focus{
                background-color: ${Theme.colors.culturedColor};
                margin: 1rem;
            } */
        }
    }

    ul{
        list-style: none;
    }

    >ul{
        overflow-x: hidden;
        overflow-y: auto;
        height: calc(100vh - 27rem);
    }
`