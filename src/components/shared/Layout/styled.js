import styled from 'styled-components';

export const StWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--background-light);
    background-image: url('../assets/images/img-heart.svg');
    background-size: 67px 85px;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const StContainer = styled.div`
    width: 95%;
    height: calc(100% - 150px);
    border: var(--border-colored);
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    background-color: rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;