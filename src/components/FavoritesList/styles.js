import styled from "styled-components";

export const FavoritesListContainer = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    margin-top: 16px;
  }
`;

export const FavoritesContainer = styled.div`
  width: 100%;
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    padding: 8px;
    border-radius: 12px;

    button {
      margin-left: 8px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 16px;
        height: 16px;
        color: ${({ theme }) => theme.colors.button.main};
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
