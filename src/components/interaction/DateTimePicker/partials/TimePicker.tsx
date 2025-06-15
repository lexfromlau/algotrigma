import React from "react";
import * as Styled from "./TimePicker.style";

interface TimePickerProps {
  onChange?: (newVal: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  const [hour, setHour] = React.useState("");
  const [minute, setMinute] = React.useState("");

  const getHourOptions = () =>
    Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));

  const getMinuteOptions = () =>
    Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  const handleChange = (newHour: string, newMinute: string) => {
    setHour(newHour);
    setMinute(newMinute);

    if (onChange && newHour !== "" && newMinute !== "") {
      onChange(`${newHour}:${newMinute}`);
    }
  };

  return (
    <Styled.Container>
      <Styled.Select
        value={hour}
        onChange={(e) => handleChange(e.target.value, minute)}
      >
        <option value="">HH</option>
        {getHourOptions().map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </Styled.Select>

      <Styled.Seperator>:</Styled.Seperator>

      <Styled.Select
        value={minute}
        onChange={(e) => handleChange(hour, e.target.value)}
      >
        <option value="">MM</option>
        {getMinuteOptions().map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
};
