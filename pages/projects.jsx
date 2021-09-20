import React, { useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  Zoom,
  Slide,
  Divider,
  fade,
} from '@material-ui/core';
import { colors } from '../theme/colors.theme';

import { myProjects } from '../data/projects';
import HeadComponent from '../components/Head';

const Projects = ({ handleChangePage }) => {
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener');
  };

  useEffect(() => {
    handleChangePage(4);
  }, []); //eslint-disable-line

  return (
    <>
      <HeadComponent title="Projects" />
      <Box>
        <Container maxWidth="md">
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Box>
              <Box textAlign="center">
                <img
                  src="./assets/images/proyectos/tgg-min.png"
                  alt="TorneosGG"
                  style={{ width: '100%' }}
                />
              </Box>
              <Card
                style={{
                  backgroundColor: fade(colors.blueFernando, 0.5),
                  color: colors.white,
                  padding: 10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <CardContent>
                  <Typography variant="body1" style={{ fontWeight: 700 }}>
                    Online tournament platform that provides the best experience to all those
                    players who seek to compete with other players around the world. Winning
                    incredible prizes and every day improving their skills in their favorite game.
                  </Typography>
                </CardContent>
                <Box textAlign="right" mb={2} mr={2}>
                  <Button
                    onClick={() => openNewTab('https://torneos.gg/')}
                    style={{
                      background:
                        'linear-gradient(111.19deg,#aaffec -63.59%,#ff4ecd -20.3%,#0070f3 70.46%)',
                      fontWeight: 800,
                      color: colors.white,
                      outline: 'none',
                      borderRadius: 5,
                    }}
                  >
                    See project
                  </Button>
                </Box>
              </Card>
            </Box>
          </Slide>
          <Box bgcolor={fade(colors.blueFernando, 0.5)} p={3}>
            <Box mt={1} mb={7}>
              <Divider style={{ backgroundColor: colors.white }} />
            </Box>
            <Grid container spacing={1}>
              {myProjects.map((project) => (
                <Grid item xs={12} md={6}>
                  <Zoom timeout={500} in={true} disableStrictModeCompat>
                    <Box height="100%">
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{
                          width: '100%',
                          marginBottom: 10,
                          borderRadius: 10,
                        }}
                      />
                      <Card
                        style={{
                          backgroundColor: 'transparent',
                          color: colors.white,
                          padding: 10,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          boxShadow: '0px 0px 0px',
                        }}
                      >
                        <CardContent>
                          <Typography variant="h6" style={{ fontWeight: 700 }}>
                            {project.name}
                          </Typography>
                          <Typography variant="body1">{project.description}</Typography>
                        </CardContent>
                        <Box textAlign="right" mb={2} mr={2}>
                          {project.url && (
                            <Button
                              onClick={() => openNewTab(project.url)}
                              style={{
                                background:
                                  'linear-gradient(111.19deg,#aaffec -63.59%,#ff4ecd -20.3%,#0070f3 70.46%)',
                                fontWeight: 800,
                                color: colors.white,
                                outline: 'none',
                                borderRadius: 5,
                              }}
                            >
                              See project
                            </Button>
                          )}
                        </Box>
                      </Card>
                    </Box>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
