import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';



import Container from '@mui/material/Container';



const Header = () => {
    return (
        <div>
            <AppBar className="header-weekend" position="static">
                <Container  maxWidth="lg">
                    <Toolbar disableGutters>
                        <div className="logo-area">
                            <div className="logo">
                                <img
                                    className="img-fluid"
                                    src="/img/Bitmap.png"
                                    alt="logo"
                                />
                                  <div className="logo-name">
                               <Link to="/">
                               <h6
                                >
                                    Good Morning
                                </h6>
                                <Typography
                                    variant="p"
                                    noWrap
                                   className="fellas"
                                  
                                   
                                >
                                    Fellas
                                </Typography>
                               </Link>
                            </div>
                            </div>
                          


                        </div>



                       

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header