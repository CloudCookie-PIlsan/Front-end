import styled from 'styled-components';

export const StSubMenu = styled.div`
    width: 200px;
    height: 100%;
    overflow: hidden;
    border-right: var(--border);
    padding-right: 1rem;
    box-sizing: border-box;
    flex-shrink: 0;
`;

export const StSubMenuList = styled.ul`
    padding-top: 15rem;
    & > li {
        font-size: 1.4rem;
        text-align: right;
        padding-bottom: 0.5rem;
        cursor: pointer;
        &:hover {
            color: #ee5253;
        }
    }
`;