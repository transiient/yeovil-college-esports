import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.scss';

function ImageCarousel(props) {
    const settings = {
        showArrows: true,
        showStatus: false,
        infiniteLoop: true,
        showThumbs: false,
        autoPlay: true,
        interval: 3000,
        transitionTime: 400,
        emulateTouch: true,
        dynamicHeight: false,
        statusFormatter: (c, t) => { return `Image ${c} of ${t}`; }
    };

    return (
        <div className={classnames(props.classNames || '')}>
            <Carousel className="carousel" {...settings}>
                {props.images.map((image) => (
                    <div key={image.altText}>
                        <img src={image.source} alt={image.altText} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    classNames: PropTypes.string
};

export default ImageCarousel;