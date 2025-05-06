import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FooterContainer = styled.div`
  margin: 16px auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.font.footer};
  }
`;
