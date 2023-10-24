"use client";
import ControlledAddressSearch from "@/components/shared/ControlledAddressSearch";
import TextInput from "@/components/shared/ControlledTextInput";
import {
  AccountCircle,
  Cake,
  Mail,
  Phone,
  Translate,
} from "@material-ui/icons";
import { Grid } from "@mui/material";
import React from "react";

interface ReferralCardContentsProps {
  index: number;
}

const ReferralCardContents = ({ index }: ReferralCardContentsProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.firstName`}
          label={"First name*"}
          startAdornmentIcon={<AccountCircle fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.lastName`}
          label={"Last name*"}
          startAdornmentIcon={<AccountCircle fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.dateOfBirth`}
          label={"Date of birth*"}
          startAdornmentIcon={<Cake fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.contactLanguage`}
          label={"Contact lanaguage*"}
          startAdornmentIcon={<Translate fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.phone`}
          label={"Phone*"}
          startAdornmentIcon={<Phone fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          name={`patientForm.${index}.email`}
          label={"Email address*"}
          startAdornmentIcon={<Mail fontSize="small" />}
        />
      </Grid>
      <Grid item xs={12}>
        <ControlledAddressSearch
          name={`patientForm.${index}.address`}
          label={"Address*"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput name={`patientForm.${index}.notes`} label={"Notes"} />
      </Grid>
    </Grid>
  );
};

export default ReferralCardContents;
