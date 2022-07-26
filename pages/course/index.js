import nor from "../../public/locales/nor/nor";
import en from "../../public/locales/en/en";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import computerWoman from "../../public/static/images/computerWoman.jpg";
import Image from "next/image";

//CoursePage contains all the info about the course we provide

const CoursePage = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : nor;
  const language = "language";
  return (
    <>
      <Header />
      <main>
        <Typography variant="h2" align="center">
          {translation.course_page_title}
        </Typography>
        <Grid>
          <Box display="flex" alignContent="space-between" margin="1rem">
            <Card>
              <Box padding=".5rem">
                <Typography variant="h3">
                  {translation.course_page_card_frontend_title}
                </Typography>
                <Typography variant="p" style={{ wordWrap: "break-word" }}>
                  {translation.course_page_card_frontend_main_text}
                </Typography>
                <ul>
                  <li>
                    {translation.course_page_card_frontend_list_item_creative}
                  </li>
                </ul>
              </Box>
            </Card>
            <Image
              src={computerWoman}
              objectFit="cover"
              height="2rem"
              className="rounded-full"
            />
          </Box>
          <Box display="flex" alignContent="space-between" margin="1rem">
            <Card>
              <Box padding=".5rem">
                <Typography variant="h3">
                  {translation.course_page_card_facts_title}
                </Typography>
                <ul>
                  <li>{translation.course_page_card_facts_list_salary}</li>
                  <li>{translation.course_page_card_facts_list_jobs}</li>
                  <li>{translation.course_page_card_facts_list_fun}</li>
                </ul>
              </Box>
            </Card>
          </Box>
        </Grid>
      </main>
    </>
  );
};

export default CoursePage;
