
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

const Landing = () => {
    SwiperCore.use([Autoplay]);
    const [loading, setLoading] = useState(false)
    const [testimonial, setTestimonial] = useState([])
    const [tips, setTips] = useState([])
    const getTestimonial = async () => {
        setLoading(true)
        try {
            let url = "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
            const response = await axios.get(url);
            if (response.status === 200) {

                setTestimonial(response.data)

                setLoading(false)
            }
        } catch (error) {
            throw error;
        }
    }
    const getTips = async () => {
        setLoading(true)
        try {
            let url = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
            const response = await axios.get(url);
            if (response.status === 200) {

                setTips(response.data)

                setLoading(false)
            }
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        getTestimonial()
        getTips()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Header />
            <div className="hero-area">
                <div className="welcome-text">
                    <h3>WEEKEND FROM HOME</h3>
                    <Typography>
                        Stay active with a little workout.
                    </Typography>
                </div>
                <div className="cta-area">
                    <Button className="button-weekend" variant="outlined">let's go</Button>
                </div>
            </div>
            <div className="introduce">

                <Container maxWidth="sm">
                    <div className="text">
                        <Typography>
                            <span className="first-text">   Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                        </Typography>
                        <div className="quote">
                            <Typography>-weekend team</Typography>
                        </div>
                    </div>

                </Container>

                <Container maxWidth="lg">
                    <div className="circle-area">
                        <div className="dot">
                        </div>
                    </div>
                </Container>


            </div>
            <div className="black-area">
                <div className="testimonial-area">
                    <div className="heading">
                       <Container maxWidth="md">
                        <h3>testimonial </h3>
                        </Container>
                    </div>
                    <div className="people-testi">
                        <Container maxWidth="md">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                autoplay={{ delay: 3000 }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {loading === true ? <CircularProgress /> : testimonial.length >= 1 ?
                                    testimonial.map((item) =>
                                    (

                                        <SwiperSlide key={item.id}>
                                            <Card className="card-testi">
                                                <CardContent>

                                                    <h5>
                                                        {item.by}
                                                    </h5>

                                                    <Typography variant="body2">
                                                        {item.testimony}
                                                    </Typography>
                                                </CardContent>

                                            </Card>
                                        </SwiperSlide>
                                    )) : <h3 className="text-center">Belum ada </h3>}
                            </Swiper>
                        </Container>
                    </div>
                </div>

                <div className="pov">
                    <Container maxWidth="sm">
                        <div className="heading">
                            <h3>POV</h3>
                        </div>
                        <div className="text">
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Typography>
                        </div>
                    </Container>
                </div>


                <div className="pov">
                    <Container maxWidth="sm">
                        <div className="heading">
                            <h3>Resource</h3>
                        </div>
                        <div className="text">
                            <Typography>
                                These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                            </Typography>
                        </div>
                    </Container>
                </div>

                <div className="pov">
                   <div className="pattern">
                   <Container maxWidth="lg">
                        <div className="heading">
                            <h3>Help 	&amp; Tips</h3>
                        </div>
                        <div className="grid">
                            {loading === true ? <CircularProgress /> : testimonial.length >= 1 ?
                                tips.map((item) =>
                                (
                                    <Card className="card-media-weekend" style={{background:`url(${item.image})`}}>
                                      
                                        <CardContent className="title-area">
                                            <h5>
                                                {item.title}
                                            </h5>
                                            <div className="circle">
                                                <ArrowForwardIcon/>
                                            </div>
                                        </CardContent>

                                    </Card>
                                )) : <h3 className="text-center">Belum ada </h3>}
                        </div>
                    </Container>
                   </div>
                </div>
                <div className="pov pov-bottom">
                   <div className="pattern-bottom">
                   <Container maxWidth="sm">
                        <div className="heading">
                            <h3>You’re all set.</h3>
                        </div>
                        <div className="text">
                            <Typography>
                            The wise man therefore always holds in these matters to this principle of selection.
                            </Typography>
                        </div>
                    </Container>
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing