import React, { useState, useEffect } from 'react';
import { Box, Fade, fade, Grid, Typography } from '@material-ui/core';
import ReactTextTransition, { presets } from 'react-text-transition';

import { colors } from '../theme/colors.theme';
import ParticlesComponent from '../components/Particles';

const texts = ['Software Engineer', 'Frontend Developer'];

const Home = ({ desktop }) => {
  const images = [
    {
      character: '/assets/images/parallax/ryze-min.png',
      background: '/assets/images/parallax/background.jpg',
    },
    {
      character: '/assets/images/parallax/batman-min.png',
      background: '/assets/images/parallax/background.jpg',
    },
    {
      character: '/assets/images/parallax/deadpool-min.png',
      background: '/assets/images/parallax/background.jpg',
    },
    {
      character: '/assets/images/parallax/spider-min.png',
      background: '/assets/images/parallax/background.jpg',
    },
  ];

  const image = images[Math.floor(Math.random() * images.length)];

  const [textFastIndex, setTextFastIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTextFastIndex((textFastIndex) => textFastIndex + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      {/* <ParticlesComponent zIndex={-1} /> */}
      {desktop ? (
        <>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={10}
          >
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box position="relative" textAlign="center" mr={5}>
                    <Box
                      style={{
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        right: 0,
                        bottom: 0,
                        width: 310,
                        height: 310,
                        borderRadius: 360,
                        background:
                          'linear-gradient(111.19deg,#aaffec -63.59%,#ff4ecd -20.3%,#0070f3 70.46%)',
                        transition: 'all 0.25s ease',
                      }}
                    />
                    <img
                      style={{
                        width: 300,
                        height: 300,
                        borderRadius: 360,
                        zIndex: 10,
                        position: 'relative',
                        border: '7px solid black',
                      }}
                      src="https://i.imgur.com/rGcqnef.png"
                      alt="Fernando Briceño"
                    />
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box>
                    <Typography variant={desktop ? 'h3' : 'h6'} component="h1">
                      I'm Fernando
                    </Typography>
                    <Typography variant="h5" style={{ fontWeight: 800, color: colors.blue }}>
                      <ReactTextTransition
                        text={texts[textFastIndex % texts.length]}
                        springConfig={presets.gentle}
                        inline
                        overflow
                      />
                    </Typography>

                    <Box mb={1} mt={3}>
                      <Typography component="p" variant="body2" style={{ fontWeight: 600 }}>
                        A Software Engineer from <span className="about-bold">Costa Rica</span>, who
                        loves and is passionate about technology and video games. Trained to solve
                        problems with different solutions using programming skills.
                      </Typography>
                    </Box>
                    <Typography component="p" variant="body2" style={{ fontWeight: 600 }}>
                      I have experience in <span className="about-bold">frontend</span> and{' '}
                      <span className="about-bold">backend</span> technologies.
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <Box
            style={{
              backgroundImage: `url(./assets/images/parallax/background.jpg)`,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="94vh"
            p={2}
            width="100%"
          >
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} md={3}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box position="relative" textAlign="center">
                    <Box
                      style={{
                        position: 'absolute',
                        top: -5,
                        left: 0,
                        margin: '0px auto',
                        right: 0,
                        bottom: 0,
                        width: 310,
                        height: 310,
                        borderRadius: 360,
                        background:
                          'linear-gradient(111.19deg,#aaffec -63.59%,#ff4ecd -20.3%,#0070f3 70.46%)',
                        transition: 'all 0.25s ease',
                      }}
                    />
                    <img
                      style={{
                        width: 300,
                        height: 300,
                        borderRadius: 360,
                        zIndex: 10,
                        position: 'relative',
                        border: '7px solid black',
                      }}
                      src="https://i.imgur.com/rGcqnef.png"
                      alt="Fernando Briceño"
                    />
                  </Box>
                </Fade>
              </Grid>
              <Grid item xs={12} md={9}>
                <Fade timeout={500} in={true} disableStrictModeCompat>
                  <Box mt={2} textAlign="center">
                    <Typography variant={desktop ? 'h3' : 'h6'} component="h1">
                      I'm Fernando
                    </Typography>
                    <Typography variant="h5" style={{ fontWeight: 800, color: colors.blue }}>
                      <ReactTextTransition
                        text={texts[textFastIndex % texts.length]}
                        springConfig={presets.gentle}
                        inline
                        overflow
                      />
                    </Typography>

                    <Box mb={1} mt={3} marginX={5}>
                      <Typography component="p" variant="body2" style={{ fontWeight: 600 }}>
                        A Software Engineer from <span className="about-bold">Costa Rica</span>, who
                        loves and is passionate about technology and video games. Trained to solve
                        problems with different solutions using programming skills.
                      </Typography>
                    <Typography component="p" variant="body2" style={{ fontWeight: 600 }}>
                      I have experience in <span className="about-bold">frontend</span> and{' '}
                      <span className="about-bold">backend</span> technologies.
                    </Typography>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
