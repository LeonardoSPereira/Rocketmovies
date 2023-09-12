import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6.8rem;
    display: flex;
    gap: 6.4rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 12.3rem;
    border: 1px solid red;

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${ ({theme}) => theme.colors.pink };
    }

    .profile {

        display: flex;
        align-items: center;

        > img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
            margin-left: 0.9rem;
        }
    }
`;