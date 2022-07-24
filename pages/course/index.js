import nor from "../../public/locales/nor/nor";
import en from "../../public/locales/en/en";
import { useRouter } from "next/router";
import Header from "../../components/Header";

//CoursePage contains all the info about the cource we provide

const CoursePage = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";
  return (
    <>
      <Header />
      <h1>{translation.course_page_title}</h1>
    </>
  );
};

export default CoursePage;
