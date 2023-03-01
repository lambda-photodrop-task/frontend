import React, { FC } from 'react';
import * as css from './css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  additionalText?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange, additionalText }) => (
  <div css={css.container}>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
    {additionalText && <p>{additionalText}</p>}
  </div>
);

export default Checkbox;
