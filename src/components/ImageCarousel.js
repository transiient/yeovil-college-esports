import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.override.scss';
import cn from './ImageCarousel.module.scss';

function ImageCarousel(props) {
    const settings = {
        showArrows: true,
        infiniteLoop: true,
        showThumbs: false,
        autoPlay: true,
        interval: 2400,
        transitionTime: 400,
        emulateTouch: true,
        dynamicHeight: true,
        statusFormatter: (c, t) => { return `Image ${c} of ${t}`; }
    };

    return (
        <div className={classnames(props.cssClass || '')}>
            <div className={classnames(cn.imageCarouselContainer, 'imageCarouselOverride')}>
                <Carousel {...settings}>
                    {props.images.map((image) => (
                        <div key={image.altText}>
                            <img src={image.source} alt={image.altText} />
                            <p>{image.altText}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    cssClass: PropTypes.string
};

export default ImageCarousel;