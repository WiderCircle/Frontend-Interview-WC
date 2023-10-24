"use client";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
  name: string;
  label: string;
}

const TextInput = ({ name, label }: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          label={label}
          fullWidth
          variant="standard"
          error={!!error}
          helperText={error?.message || " "}
        />
      )}
    />
  );
};

export default TextInput;
