import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.356);

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    border: 1px solid #4285f4;
    color: white;

    &:hover {
    background-color: #2559ac;
    border: 1px solid #2559ac;
    }
`

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    if(props.inverted){
        return invertedButtonStyles;
    } 

    return buttonStyles;
}

export const CustomButtonContainer = styled.button `
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`