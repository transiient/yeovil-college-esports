import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from './Image';

import cn from './ImageCarousel.module.scss';

function ImageCarousel(props) {
    useEffect(() => {
        // function removeFillClass() {
        //     const carouselContainer = document.getElementsByClassName(cn.carousel)[0];

        //     carouselContainer.classList.remove(cn.fill);
        // }
        // function addFillClass() {
        //     const carouselContainer = document.getElementsByClassName(cn.carousel)[0];

        //     carouselContainer.classList.add(cn.fill);

        //     carouselContainer.addEventListener('pointerleave', removeFillClass);
        //     window.addEventListener('scroll', removeFillClass);
        // }
        function toImage(index) {
            const querySlide = document.getElementById(`carousel-slide-${index}`);
            const slides = document.getElementsByClassName(cn.slides)[0];

            // addFillClass();

            slides.scrollTo({
                left: querySlide.offsetLeft,
                behavior: 'smooth'
            });
        }

        const navContainer = document.getElementsByClassName(cn.nav)[0];
        Array.from(navContainer.children).forEach((navButton) => {
            navButton.addEventListener('click', () => toImage(navButton.innerHTML.match(/(?!>)(\d{1})(?=<)/)[0]));
        });

        return () => {
            Array.from(navContainer.children).forEach((navButton => {
                navButton.removeEventListener('click', () => { });
            }));
        };
    });

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`${cn.carousel} ${props.classNames || ''}`}>
            <div className={cn.nav}>
                {props.images.map((image, index) =>
                    <a
                        key={index + 1}
                        href={`#carousel-slide-${index + 1}`}
                        onClick={handleClick}>
                        <b>{index + 1}</b>
                    </a>
                )}
            </div>
            <div className={cn.slides}>
                {props.images.map((image, index) =>
                    <div
                        id={`carousel-slide-${index + 1}`}
                        key={index}>
                        <div className={cn.caption}>
                            {image.altText}
                        </div>

                        <Image
                            webp={image.webp}
                            jpeg={image.jpeg || null}
                            png={image.png || null}
                            alt={image.altText} />
                    </div>
                )}
            </div>
        </div>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    classNames: PropTypes.string
};

export default ImageCarousel;