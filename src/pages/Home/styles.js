import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;


    .wrapper {
        padding: 0 12.3rem;

        > .content {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 4.8rem 0 3.8rem;
    
            h2 {
                font-size: 3.2rem;
                font-weight: normal;
                color: #fff;
            }

            a {
                height: 4.8rem;
                display:flex;
                padding: 1.6rem;
                align-items: center;
                gap: 0.8rem;
                border-radius: 0.8rem;
                background-color: ${ ({theme}) => theme.colors.pink };
                color: ${ ({theme}) => theme.colors.background_800 };
                font-size: 1.6rem;

            }
        }
    
        > .movies {
            width: 100%;
            max-height: 45rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.4rem;
            overflow-y: auto;
            padding-right: 0.8rem;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                width: 0.8rem;
                height: 9.6rem;
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${ ({theme}) => theme.colors.pink };
                border-radius: 0.8rem;
            }

            scrollbar-width: thin;
            scrollbar-color: ${({ theme }) => theme.colors.pink} transparent;
            
        }
    }
    
`;
