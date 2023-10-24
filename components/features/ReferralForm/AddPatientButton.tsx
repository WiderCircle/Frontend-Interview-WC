import { ValidationSchema } from "@/app/page";
import { Button } from "@mui/material";
import React from "react";
import { UseFieldArrayAppend } from "react-hook-form";

interface AddPatientButtonProps {
  append: UseFieldArrayAppend<ValidationSchema, "patientForm">;
}

const AddPatientButton = ({ append }: AddPatientButtonProps) => {
  return (
    <Button
      variant="text"
      type="button"
      onClick={() => {
        append({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          contactLanguage: "",
          phone: "",
          email: "",
          address: "",
          notes: "",
        });
      }}
      sx={{
        display: "block",
        margin: "0 auto",
      }}
    >
      Add another patient
    </Button>
  );
};

export default AddPatientButton;
