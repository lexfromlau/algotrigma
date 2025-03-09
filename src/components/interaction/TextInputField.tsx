import React from "react";
import * as Styled from "./TextInputField.style";

interface TextInputFieldProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  id,
  onChange,
  placeholder,
}) => (
  <Styled.TextInput
    id={id}
    type="text"
    onChange={onChange}
    placeholder={placeholder}
  />
);
