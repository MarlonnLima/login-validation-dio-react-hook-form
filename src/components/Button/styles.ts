import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;

    button {
        width: 100%;
        height: 40px;
        border-radius: 22px;
        border: 1px solid #83249D;
        background-color: #83249D;
        color: #FFF;
        outline: none;
        margin-bottom: 25px;
        transition: 0.5s all;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`