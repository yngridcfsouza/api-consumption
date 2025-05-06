import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 110px;
  top: 0;
  position: sticky;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;

  img {
    transform: scale(0.8);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    padding: 8px;

    img {
      transform: scale(0.6);
    }
  }
`;

export const SearchContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 8px;
    flex-direction: column;
    width: 100%;
    padding: 8px 0;
  }
`;

