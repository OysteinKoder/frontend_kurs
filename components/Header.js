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

//This Header component is being used in all pages for navigation.

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
      <AppBar position="static">
        <Grid align="center">
          <Typography variant="h1" style={{ fontSize: "1rem" }}>
            {translation.header_title}
          </Typography>
          <Link href="/about">
            <Button variant="contained" title={translation.header_navbar_about}>
              {translation.header_navbar_about}
            </Button>
          </Link>
          <Link href="/course">
            <Button
              variant="contained"
              title={translation.header_navbar_course}
            >
              {translation.header_navbar_course}
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
                {translation.header_navbar_selector_locale_en}
              </MenuItem>
              <MenuItem value={"nor"}>
                {translation.header_navbar_selector_locale_nor}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </AppBar>
    </header>
  );
};

export default Header;
