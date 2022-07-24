import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import nor from "../public/locales/nor/nor";
import en from "../public/locales/en/en";
import styles from "../styles/Home.module.css";
import {
  AppBar,
  Button,
  Grid,
  Link,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="homepage for frontend course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Typography variant="h1" align="center">
          {translation.landing_page_header}
        </Typography>
        <AppBar position="static">
          <Grid align="center" textAlign="center">
            <Link href="/about">
              <Button
                variant="contained"
                title={translation.landing_page_navbar_about}
              >
                {translation.landing_page_navbar_about}
              </Button>
            </Link>
            <Link href="/course">
              <Button
                variant="contained"
                title={translation.landing_page_navbar_frontend_course}
              >
                {translation.landing_page_navbar_frontend_course}
              </Button>
            </Link>
            <FormControl>
              <InputLabel>{locale}</InputLabel>
              <Select
                labelId="language selector"
                id="language selector"
                value={language}
                label="Age"
              >
                <MenuItem value={10}>
                  {translation.landing_page_navbar_selector_locale_en}
                </MenuItem>
                <MenuItem value={20}>
                  {translation.landing_page_navbar_selector_locale_nor}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </AppBar>
      </header>
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
