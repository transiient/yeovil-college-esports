import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import Image from './Image';

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
                        <Image
                            webp={image.webp}
                            jpeg={image.jpeg || null}
                            png={image.png || null}
                            alt={image.altText} />
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