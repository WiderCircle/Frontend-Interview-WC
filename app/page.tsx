"use client";
import AddPatientButton from "@/components/features/ReferralForm/AddPatientButton";
import ReferralAlert from "@/components/features/ReferralForm/ReferralAlert";
import ReferralCard from "@/components/features/ReferralForm/ReferralCard";
import ReferralCardContents from "@/components/features/ReferralForm/ReferralCardContents";
import Form from "@/components/shared/Form";
import { FormSchemaTypes } from "@/types/Form.types";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  patientForm: z.array(
    z.object({
      firstName: FormSchemaTypes.Field("First name is required"),
      lastName: FormSchemaTypes.Field("Last name is required"),
      dateOfBirth: FormSchemaTypes.Field("Date of birth is required"),
      contactLanguage: FormSchemaTypes.Field("Language is required"),
      phone: FormSchemaTypes.Field("Phone is required"),
      email: FormSchemaTypes.Field("Email is required", "email"),
      address: FormSchemaTypes.AddressSearch("Address is required"),
      notes: FormSchemaTypes.Optional,
    })
  ),
});

export type ValidationSchema = z.infer<typeof validationSchema>;

export default function Home() {
  // When this number is positive the alert will show. This will be used for the number of messages created after POST
  const [showAlert, setShowAlert] = useState<number>(0);
  const methods = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      patientForm: [
        {
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          contactLanguage: "",
          phone: "",
          email: "",
          address: "",
          notes: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "patientForm",
  });

  const onSubmit = async (data: FieldValues) => {
    const res = await fetch("/api/referrals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { patientForm } = await res.json();

    if (res.status === 200) {
      setShowAlert(patientForm.length);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      {showAlert ? <ReferralAlert numReferrals={showAlert} /> : null}
      <Container maxWidth="md">
        <FormProvider {...methods}>
          <Form onSubmit={onSubmit} onError={console.log}>
            {fields.map((item, index) => (
              <ReferralCard
                header={"New referral"}
                cardIndex={index}
                key={item.id}
                remove={remove}
              >
                <ReferralCardContents index={index} />
              </ReferralCard>
            ))}
            {fields.length !== 5 && <AddPatientButton append={append} />}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                display: "block",
                margin: "0 auto",
                marginTop: "32px",
              }}
              disabled={fields.length === 0}
            >
              Send Referrals
            </Button>
          </Form>
        </FormProvider>
      </Container>
    </main>
  );
}
