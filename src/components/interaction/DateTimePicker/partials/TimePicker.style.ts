import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Segoe UI", Roboto, sans-serif;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  transition: border-color 0.2s ease-in-out;
  appearance: none;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }

  &:focus {
  outline: none;
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2);
}
`;

export const Seperator = styled.div`
  font-size: 16px;
  font-weight: bold;
`;