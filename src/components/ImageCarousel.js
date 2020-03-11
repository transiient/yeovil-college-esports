import React from 'react';
import classnames from 'classnames';

import cn from './ImageCarousel.module.scss';

export default function ImageCarousel(props) {
    return (
        <div className={classnames("imageCarousel", cn.imageCarouselWrapper, props.className)}>
            <div className={classnames(cn.imageCarouselButton, cn.imageCarouselButtonLeft)}><span>&lt;</span></div>
            <div className={cn.imageCarouselImages}>
                {
                    props.images.map((imageData, index) => {
                        return(<img key={index} src={imageData.src} alt={imageData.alt} />)
                    })
                }
            </div>
            <div className={classnames(cn.imageCarouselButton, cn.imageCarouselButtonRight)}><span>&gt;</span></div>
        </div>
    )
}