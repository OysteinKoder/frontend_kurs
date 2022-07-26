import nor from "../../public/locales/nor/nor";
import en from "../../public/locales/en/en";
import { useRouter } from "next/router";
import Header from "../../components/Header";

// AboutPage is the page where you can read about us working for Frontend Kurs and what we are all about.
const AboutPage = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";
  return (
    <>
      <Header />
      <h1>{translation.about_page_title}</h1>
    </>
  );
};

export default AboutPage;
