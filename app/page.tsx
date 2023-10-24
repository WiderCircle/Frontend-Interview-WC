"use client";
import ReferralCard from "@/components/features/ReferralForm/ReferralCard";
import TextInput from "@/components/shared/ControlledTextInput";
import Form from "@/components/shared/Form";
import { FormSchemaTypes } from "@/types/Form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Container, Grid } from "@mui/material";
import Image from "next/image";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  patientForm: z.array(
    z.object({
      firstName: FormSchemaTypes.Field(),
      lastName: FormSchemaTypes.Field(),
      dateOfBirth: FormSchemaTypes.Field(),
      contactLanguage: FormSchemaTypes.Field(),
      phone: FormSchemaTypes.Field(),
      email: FormSchemaTypes.Field(),
      address: FormSchemaTypes.Field(),
      notes: FormSchemaTypes.Optional,
    })
  ),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Home() {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container maxWidth="md">
        <FormProvider {...methods}>
          <Form onSubmit={(e) => console.log(e)} onError={console.log}>
            {fields.map((item, index) => (
              <ReferralCard
                header={"New referral"}
                cardIndex={index}
                key={item.id}
              >
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.firstName`}
                      label={"First name"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.lastName`}
                      label={"Last name"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.dateOfBirth`}
                      label={"Date of birth"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.contactLanguage`}
                      label={"Contact lanaguage"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.phone`}
                      label={"Phone"}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      name={`patientForm.${index}.email`}
                      label={"Email address"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      name={`patientForm.${index}.address`}
                      label={"Address"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      name={`patientForm.${index}.notes`}
                      label={"Notes"}
                    />
                  </Grid>
                </Grid>
              </ReferralCard>
            ))}
            {fields.length !== 4 && (
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
            )}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                display: "block",
                margin: "0 auto",
                marginTop: "32px",
              }}
            >
              Send Referrals
            </Button>
          </Form>
        </FormProvider>
      </Container>
    </main>
  );
}
