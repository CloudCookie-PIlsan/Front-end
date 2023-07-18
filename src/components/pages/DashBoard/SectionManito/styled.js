import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  `;

export const StManitoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  margin-top: 2rem;
`;
export const StManitoBox = styled.p`
  width: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
  padding: 2rem;
  border: var(--border);
  margin-top: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  font-weight: 500;

  & > span {
    font-size: 0.8rem;
  }
`;