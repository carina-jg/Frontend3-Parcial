import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #e8c8c8;
    }
`

export const Header = styled.header`
    background-color: #ffeae8;
    padding: 20px 40px;
    
    h1 {
        margin-bottom: 10px;
    }

    span {
        background-color: rgb(166, 131, 158);
        color: white;
        padding: 3px 5px;
        border-radius: 5px;
    }
`

export const Container = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    gap: 30px;
`

export const Product = styled.div`
    color: #573f53;
    border: 0.5px solid #ddd;
    padding: 20px;
    width: 33%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    h5 {
        text-align: center;
    }
`

export const ProductSpan = styled.span`
    color: rgb(250, 250, 250);
    background-color: rgb(166, 131, 158);
    padding: 3px;
    font-weight: lighter;
    border-radius: 3px;
`

export const Button = styled.button`
    color: rgb(128, 85, 128);
    background-color: #ffeae8;
    border: none;
    border-radius: 8px;
    padding: 5px;
    text-transform: uppercase;
`
