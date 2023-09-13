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
        }
    
        > .movies {
            width: 100%;
            max-height: 40rem;
            margin: 0 auto;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.4rem;
            overflow-y: auto;
        }
    }
    
`;
