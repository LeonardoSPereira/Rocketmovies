import { styled } from "styled-components";

export const Container = styled.div`
    
    display: flex;
    height: 56px;

    align-items: center;
    justify-content: center;
    background-color: ${ ({theme, $isnew}) => $isnew ? "transparent" : theme.colors.background_800 };
    color: ${ ({theme}) => theme.colors.white_900 };
    border: ${ ({theme, $isnew}) => $isnew ? `2px dashed ${theme.colors.background_600    }` : "none" };
    /* margin-bottom: 8px; */
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;

        svg {
            font-size: 2.4rem;
        }
    }

    .button-delete, .button-add {
        color: ${ ({theme}) => theme.colors.pink };
        width: 2.4rem;
        height: 2.4rem;
    }

    > input {
        width: 15rem;
        padding: 12px;
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.colors.white_900 };
        background: transparent;
        border: none;

        &::placeholder {
            color: ${ ({theme}) => theme.colors.background_600 };

        }

        &:focus {
            outline: none;
        }

    }

`;