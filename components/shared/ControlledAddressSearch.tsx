"use client";
import { ArrowBack } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { ReactElement, cloneElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import AddressSearch from "./AddressSearch";

interface ControlledAddressSearchProps {
  name: string;
  label: string;
  startAdornmentIcon?: ReactElement;
}

const ControlledAddressSearch = ({
  name,
  label,
}: ControlledAddressSearchProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <AddressSearch
          value={value}
          onChange={onChange}
          label={label}
          error={!!error}
          helperText={error?.message || " "}
        />
      )}
    />
  );
};

export default ControlledAddressSearch;
