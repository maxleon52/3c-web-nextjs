import React, { InputHTMLAttributes, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Wrapper, Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  isFilledValue: boolean;
  error: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type,
      placeholder,
      isFilledValue,
      error,
      icon: Icon,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
      setIsFocused(true);
    }
    function handleInputBlur() {
      // console.log("isFilled é :", isFilledValue);
      if (!isFilledValue) {
        setIsFocused(false);
      }
      setIsFilled(isFilledValue);
    }

    return (
      <Wrapper>
        {!!error && <p>{error}</p>}
        <Container isFocused={isFocused} isFilled={isFilled} isError={!!error}>
          {Icon && <Icon size={20} />}
          <input
            ref={ref}
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
        </Container>
      </Wrapper>
    );
  },
);
