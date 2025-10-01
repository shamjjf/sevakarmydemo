import React from 'react';
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Image from "next/image";

import './style.scss';

const Logo = ({logo, className = '', alt = 'logo'}) => {
    return (
        <Grid className={`${className}`}>
            <Link to="/"><Image src={logo} alt={alt}/></Link>
        </Grid>
    )
};

export default Logo;