import { useRouter } from "next/router";
import nor from "../public/locales/nor/nor";
import en from "../public/locales/en/en";
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

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";

  const changeLanguage = (e) => {
    locale = e.target.value;
    router.push("/", "/", { locale });
  };
  return (
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
            <InputLabel style={{ color: "white", padding: "0.5em" }}>
              {locale}
            </InputLabel>
            <Select
              labelId="language selector"
              id="language selector"
              value={language}
              label="Age"
              onChange={changeLanguage}
            >
              <MenuItem value={"en"}>
                {translation.landing_page_navbar_selector_locale_en}
              </MenuItem>
              <MenuItem value={"nor"}>
                {translation.landing_page_navbar_selector_locale_nor}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </AppBar>
    </header>
  );
};

export default Header;
