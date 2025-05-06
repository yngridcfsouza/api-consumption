import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.button.main};
  border: 2px solid ${({ theme }) => theme.colors.button.border};
  color: ${({ theme }) => theme.colors.font.body};
  font-weight: bold;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s, transform 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
    border-color: ${({ theme }) => theme.colors.button.hover};
    transform: scale(1.05);
  }
`;
