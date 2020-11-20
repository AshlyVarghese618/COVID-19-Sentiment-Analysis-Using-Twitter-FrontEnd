import React from 'react';
import { Emoji } from 'emoji-mart';

const EmojiContainer = ({ x, y, symbol, label }) => {
    return (
        <foreignObject height={30} width={30} x={x - 12} y={y}>
            <Emoji emoji={{ id: symbol, skin: 3 }} size={28} />
        </foreignObject>
    );

    return (
        <foreignObject height={50} width={50} x={x - 10} y={y}>
            <span
                style={{ height: '50px', width: '50px', objectFit: 'cover' }}
                className="emoji"
                role="img"
                aria-label={label ? label : ""}
                aria-hidden={label ? "false" : "true"}
            >
                {symbol}
            </span>
        </foreignObject>
    );

    return (
        <svg x={x - 12} y={y + 4} width={24} height={24} viewBox="0 0 1024 1024" fill="#666">
            <g id="color">
                <circle cx="36" cy="36" r="23" fill="#fcea2b" />
                <path fill="#fff" d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z" />
                <path fill="#ea5a47" d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z" />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
                <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0" />
                <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0" />
            </g>
        </svg>
    );
}

// (
//     <span
//         className="emoji"
//         role="img"
//         aria-label={props.label ? props.label : ""}
//         aria-hidden={props.label ? "false" : "true"}
//     >
//         {props.symbol}
//     </span>
// );
export default EmojiContainer;
