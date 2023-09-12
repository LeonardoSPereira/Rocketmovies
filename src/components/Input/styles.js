import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: none;
    background: ${ ({theme}) => theme.colors.background_800 };
    color: ${ ({theme}) => theme.colors.background_600 };

    
    input {
        width: 100%;
        height: 5.6rem;
        padding: 1.9rem 2.4rem;

        border: none;
        background: ${ ({theme}) => theme.colors.background_800 };
        color: ${ ({theme}) => theme.colors.white_900 };
        
        &:focus {
            outline: none;
            
        }

        &:placeholder {
            font-size: 1.4rem;
            color: ${ ({theme}) => theme.colors.background_600 };
        }

    }

    svg {
        margin-left: 1.6rem;
    }
    
`;