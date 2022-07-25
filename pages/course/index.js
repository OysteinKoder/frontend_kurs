import nor from "../../public/locales/nor/nor";
import en from "../../public/locales/en/en";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import computerWoman from "../../public/static/images/computerWoman.jpg";
import Image from "next/image";

//CoursePage contains all the info about the cource we provide

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
                <Typography variant="h3">Frontend?</Typography>
                <Typography variant="p" style={{ wordWrap: "break-word" }}>
                  As a frontend developer you make websites using your awsome
                  skills! In the frontend we make everything the user sees and
                  interacts with.
                </Typography>
                <ul>
                  <li>Creative and artsy people often do well!</li>
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
                <Typography variant="h3">Some Facts</Typography>
                <ul>
                  <li>Average developer salary in Norway is 720 000 NOK</li>
                  <li>There are more job openings than developers</li>
                  <li>Frontend development is fun!</li>
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
