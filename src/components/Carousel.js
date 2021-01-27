import { Box, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import Restaurant from './Restaurant';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

export default function Carousel(props) {

    let restaurants = props.restaurants;
    let length = restaurants.length;
    const carousel = useState(null);
    const [index, setIndex] = useState(0);

    const getNext = () => {
        const cards = carousel.current.children.length;
        setIndex(index === length - cards ? 0 : index + 1)
    }

    const getPrevious = () => {
        const cards = carousel.current.children.length;
        setIndex(index === 0 ? length - cards : index - 1)
    }

    return (
        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
            <h1 style={{justifyContent: 'center', fontFamily: 'sans-serif'}}>{props.title} ({length})</h1>
            <Box display="flex" justifyContent="center" >
                <IconButton direction="left" onClick={getPrevious} >
                    <ArrowBackIos/>
                </IconButton>
                <div ref={carousel}>
                    <Restaurant content={restaurants[index]} />
                    <Restaurant content={restaurants[index + 1]} />
                    <Restaurant content={restaurants[index + 2]} />
                </div>
                <IconButton direction="right" onClick={getNext}>
                    <ArrowForwardIos/>
                </IconButton>
            </Box>
        </div>
    );
}


