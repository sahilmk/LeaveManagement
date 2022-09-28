import styled from "styled-components";

export const SidebarStyle = styled.div`
    height: calc(100vh - 70px);
    width: 420px;
    margin-top: 70px;
    background-color: #fff;
    position: relative;

    .profile{
        display: flex;
        align-items: center;
        background: url('./assets/images/profileCover.jpg') no-repeat center center/cover ;
        height: 120px;
        width: 100%;
    }

    .profiledescription{
        display: flex;
        flex-direction: column;
        font-family: SegoeUI;
        font-size: 26px;
        font-weight: 600;
        color: #fff;

        .userposition{
            font-family: SegoeUI;
            font-size: 20px;
            font-weight: 300;
            color: #fff;
        }
    }

    img{
        height: 80px;
        width: 80px;
        margin: 0px 25px 0px 45px;
    }

    button{
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: calc(100% -  40px);
    }
`