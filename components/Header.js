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
  Box,
} from "@mui/material";
import { Container } from "@mui/system";

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
        <Box
          sx={{ display: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          marginLeft={2}
          marginRight={2}
        >
          <Typography variant="h1" style={{ fontSize: "1rem" }} position="left">
            {translation.header_title}
          </Typography>
          <Box
            sx={{ display: "flex" }}
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/about">
              <Button
                variant="contained"
                title={translation.header_navbar_about}
              >
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
          </Box>
          <Box
            sx={{ display: "flex" }}
            alignItems="center"
            justifyContent="center"
          >
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
          </Box>
        </Box>
      </AppBar>
    </header>
  );
};

export default Header;
