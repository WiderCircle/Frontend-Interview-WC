"use client";
import ReferralCard from "@/components/features/ReferralForm/ReferralCard";
import TextInput from "@/components/shared/ControlledTextInput";
import Form from "@/components/shared/Form";
import { Button, Card, Container, Grid } from "@mui/material";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const methods = useForm();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container maxWidth="md">
        <FormProvider {...methods}>
          <Form onSubmit={(e) => console.log(e)} onError={console.log}>
            <ReferralCard header={"New referral"} cardIndex={0}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={12} md={6}>
                  <TextInput name="firstName" label={"First name"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput name="lastName" label={"Last name"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput name="dateOfBirth" label={"Date of birth"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput
                    name="contactLanguage"
                    label={"Contact lanaguage"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput name="phone" label={"Phone"} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInput name="email" label={"Email address"} />
                </Grid>
                <Grid item xs={12}>
                  <TextInput name="address" label={"Address"} />
                </Grid>
                <Grid item xs={12}>
                  <TextInput name="notes" label={"Notes"} />
                </Grid>
              </Grid>
            </ReferralCard>
            <Button
              variant="text"
              type="submit"
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                margin: "0 auto",
              }}
            >
              Add another patient
            </Button>
          </Form>
        </FormProvider>
      </Container>
    </main>
  );
}
