"use client";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import React, { ReactNode } from "react";

interface FormProps<TFields extends FieldValues> {
  onSubmit: (d: FieldValues) => void;
  onError?: (e: FieldErrors) => void;
  children: ReactNode;
}

const Form = <TFields extends {}>({
  onSubmit,
  onError,
  children,
}: FormProps<TFields>) => {
  const { handleSubmit } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit(
        (d: FieldValues) => {
          console.log("you are here 2");
          onSubmit(d);
        },
        (e: FieldErrors) => {
          console.error(e);
          onError && onError(e);
        }
      )}
    >
      {children}
    </form>
  );
};

export default Form;
