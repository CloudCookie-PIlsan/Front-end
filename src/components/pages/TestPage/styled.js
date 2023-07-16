import styled from 'styled-components';

export const StTextConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    height: 100%;

    & > h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    & > div {
        width: 400px;
        height: 300px;
        border: var(--border);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
