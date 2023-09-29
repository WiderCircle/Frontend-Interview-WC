import { Container, Grid, Typography, createTheme } from "@mui/material";
import ReferralForm from "./referral-form";
import Button from "@mui/material/Button";


export default function ReferralPage() {

    // const theme = createTheme();

    // theme.typography.fontFamily = "Montserrat";
    // 
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ backgroundColor: "#fff" }}>
                <Container style={{ textAlign: "center" }}>
                    <header>
                        <Typography variant="h1">Patient Referral Form</Typography>
                        <Typography variant="h2">Hayes Valley Health San Francisco</Typography>
                    </header>
                </Container>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Container maxWidth="md" style={{ textAlign: "center" }}>
                    <main>
                        <Typography variant="h3">Referral Patients</Typography>
                        <Typography variant="subtitle1">You can add up to five patients at a time</Typography>
                        <ReferralForm />
                        <Button variant="text">+ Add another patient</Button>
                        <Button variant="contained" style={{ display: "block", width: "100%" }}>Send Referrals</Button>
                    </main>
                </Container>
            </Grid>
        </Grid>
    )


    // return <>Referral page!</>
}