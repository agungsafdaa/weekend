import React from 'react'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import Container from '@mui/material/Container';



const Header = () => {
    return (
        <div>
            <div className="footer-weekend" >
                <Container  maxWidth="lg">
                  
                        <div className="copyright">
                            <div className="logo">
                             
                                  <div className="logo-name">
                           
                               <h6
                                >
                                 wknd<span className="tipis">@2020</span>
                                </h6>
                             
                            </div>
                            <Button variant="outlined" className="button-white">alpha version 0.1</Button>
                            </div>
                          


                        </div>



                        
                   
                </Container>
            </div>
        </div>
    )
}

export default Header