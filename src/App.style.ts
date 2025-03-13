import styled from "@emotion/styled";

export const AppContainer = styled.div`
  padding: 13px;
`;

export const FetchDataBtn = styled.div`
  cursor: pointer;
`;

export const Card = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 12px 12px 20px;
  width: 280px;
  height: 100%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  :hover,
  :focus {
    border: 1px solid #f60;
  }
`;

export const CardList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CardHeading = styled.span`
  text-align: center;
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

interface SeperatorProps {
  color?: string;
}

export const Seperator = styled.div<SeperatorProps>`
  border-bottom: 1px solid ${({ color }) => (color ? color : "#f60")};
  width: 100%;
  margin: 8px 0 20px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface TextProps {
  isTextBold?: boolean;
  color?: string;
}

export const Text = styled.span<TextProps>`
  display: inline-block;
  font-size: 14px;
  font-weight: ${({ isTextBold }) => (isTextBold ? "bold" : "regular")};
  color: ${({ color }) => (color ? color : "black")};
`;
