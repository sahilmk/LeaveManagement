import styled from "styled-components";

export const SidebarStyle = styled.div`
    position: fixed;
    background-color: #fff;
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
        flex-direction: column;
        display: flex;
        font-family: SegoeUI;
        color: #fff;

        .username{
            font-size: 2.6rem;
            font-weight: 600;
        }

        .userposition{
            font-family: SegoeUI;
            color: #fff;
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
        font-size: 2.15rem;
        width: calc(42rem -  4rem);
    }

    .innerTabs{
        a{
            background-color: #fbfbfb;
            /* &:focus{
                background-color: #f4f4f4;
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