import { Card, Typography } from '@mui/material'
import React from 'react'
import SecondCard from './SecondCard'
import { Grid } from '@material-ui/core';
import Tthirdcard from './Thirdcard';
import Bottom from './Bottom';
// import sidePic from '../../public/1665576984-original-21@2x.png'

function Secondp() {
    return (
        <Grid container alignItems='stretch' spacing={3} >

            <Grid item xs={12} sm={6} >
                <SecondCard />
                <Tthirdcard />
                <Bottom />
            </Grid>

        </Grid>

    )
}

export default Secondp