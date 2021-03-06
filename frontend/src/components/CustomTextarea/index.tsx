import { Textarea, FormControl, FormErrorMessage, FormLabel, FormHelperText } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  type: 'email' | 'password' | 'text';
  name: string;
  placeholder: string;
  ref?: any;
  errorMessage?: string;
  helperText?: string;
  size?: string;
  resize: 'horizontal' | 'vertical' | 'none';
  rows?: number;
};

const CustomTextarea = ({
  type,
  name,
  placeholder,
  rows = 6,
  size = 'md',
  resize = 'none',
  ref,
  errorMessage,
  helperText,
  ...other
}: Props) => {
  return (
    <FormControl isInvalid={!!errorMessage} errortext={errorMessage}>
      <FormLabel htmlFor={name}>{placeholder}</FormLabel>
      <Textarea
        size={size}
        rows={rows}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        resize={resize}
        {...other}
      />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export { CustomTextarea };
