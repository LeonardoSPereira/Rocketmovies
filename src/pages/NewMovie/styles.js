import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 4rem 12.3rem 0;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.pink };
        margin-bottom: 2.4rem;
    }
`;

export const Content = styled.form`
    width: calc(100% - 24.6rem);
    margin: 0 auto;
`;