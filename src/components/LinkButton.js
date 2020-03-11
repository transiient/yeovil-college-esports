import React from 'react';
import classnames from 'classnames';

import cn from './LinkButton.module.scss';

export default function LinkButton(props) {
    let _colourClass;
    switch(props.colour) {
        case "white":
            _colourClass = cn.colourWhite;
            break;
        default:
            _colourClass = cn.colourBlue;
    }

    return (
        <div className={classnames(cn.container, _colourClass, props.className)}>
            <a href={props.href} rel="noopener noreferrer" target={props.newtab ? "_blank" : ""}>
                {props.children}
            </a>
        </div>
    )
}
