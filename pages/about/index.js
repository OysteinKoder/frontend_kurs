import nor from "../../public/locales/nor/nor";
import en from "../../public/locales/en/en";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";
  return <h1>{translation.landing_page_navbar_about}</h1>;
};

export default AboutPage;
