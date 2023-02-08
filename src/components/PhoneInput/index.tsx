import React, { FC } from 'react';
import { Country, PhoneInput } from 'baseui/phone-input';
import * as css from './css';

interface PhoneInputProps {
  country: Country;
  onCountryChange: (country: Country) => void;
  phoneNumber: string;
  onPhoneNumberChange: (phoneNumber: string) => void;
}

const PhoneNumberInput: FC<PhoneInputProps> = ({ country, phoneNumber, onCountryChange, onPhoneNumberChange }) => (
  <div css={css.input}>
    <PhoneInput
      country={country}
      onCountryChange={({ option }) => onCountryChange(option as Country)}
      text={phoneNumber}
      onTextChange={(e) => {
        const newValue = e.target.value;
        if (newValue.length <= 10) onPhoneNumberChange(newValue.replace(/[^0-9]/gi, ''));
      }}
      placeholder="(555) 555-5555"
      maxDropdownHeight="300px"
    />
  </div>
);

export default PhoneNumberInput;
