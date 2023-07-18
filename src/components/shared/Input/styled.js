import styled from 'styled-components';

export const StInput = styled.input`
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;

    &:focus {
        border-color: #ff6b6b;
        box-shadow: 0 0 8px 0 #ff6b6b;
    }
`;