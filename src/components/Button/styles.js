import styled from "styled-components";

export const Container = styled.button`
    display: inline-flex;
    height: 4.8rem;
    padding: 3.2rem;
    align-items: center;
    gap: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${ ({theme}) => theme.colors.pink };
    color: ${ ({theme}) => theme.colors.background_800 };
    font-size: 1.6rem;
    border: none;

`;