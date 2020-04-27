import React from 'react';
import PT from 'prop-types';

export default (props) => {
    const propTypes = {
        src: PT.string.isRequired,
        alt: PT.string.isRequired
    };

    return (
        <picture>
            <source srcSet={props.webp} type="image/webp" />
            {props.jpeg &&
                <source srcSet={props.jpeg} type={`image/jpeg`} />
            }
            {props.png &&
                <source srcSet={props.png} type={`image/png`} />
            }
            <img src={props.jpeg || props.png} alt={props.alt} />
        </picture>
    );
};