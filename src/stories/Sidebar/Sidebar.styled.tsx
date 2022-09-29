import styled from "styled-components";

export const SidebarStyle = styled.div`
    position: fixed;
    background-color: #fff;
    height: calc(100vh - 70px);
    width: 420px;
    top: 70px;
    left: 0px;

    .profile{
        background: url('./assets/images/profileCover.jpg') no-repeat center center/cover ;
        align-items: center;
        display: flex;
        height: 120px;
        width: 100%;
    }

    .profiledescription{
        flex-direction: column;
        display: flex;
        font-family: SegoeUI;
        color: #fff;
        font-size: 26px;
        font-weight: 600;

        .userposition{
            font-family: SegoeUI;
            color: #fff;
            font-size: 20px;
            font-weight: 300;
        }
    }

    img{
        height: 80px;
        width: 80px;
        margin: 0px 25px 0px 45px;
    }

    button{
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: calc(420px -  40px);
    }

    .innerTabs{
        a{
            background-color: #fbfbfb;
            /* &:focus{
                background-color: #f4f4f4;
                margin: 10px;
            } */
        }
    }

    ul{
        list-style: none;
    }

    >ul{
        overflow-x: hidden;
        overflow-y: auto;
        height: calc(100vh - 270px);
    }
`