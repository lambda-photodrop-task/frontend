import React, { FC } from 'react';
import OtpInput from 'react-otp-input';
import * as css from './css';

interface CodeInputProps {
  value: string;
  handleChange: (value: string) => void;
}

const CodeInput: FC<CodeInputProps> = ({ value, handleChange }) => (
  <div css={css.input}>
    <OtpInput
      value={value}
      onChange={handleChange}
      numInputs={6}
      containerStyle="code-input-container"
      inputStyle="code-input"
      isInputNum
    />
  </div>
);

export default CodeInput;
