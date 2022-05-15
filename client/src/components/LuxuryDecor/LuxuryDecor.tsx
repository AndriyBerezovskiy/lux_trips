import { FC } from 'react';

import './LuxuryDecor.scss';

interface IProps{
    numberOfPlaces: number,
}

const LuxuryDecor:FC<IProps> = ({ numberOfPlaces }) => (
    <div className='Luxury_decor1'>
        <svg width="135"
            height="296"
            viewBox="0 0 135 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M34.341 74.6429L34.3417 74.6415L67.5019 1.83122L100.932 74.6415L100.932 74.6429L134.45 148.239L67.4998 294.649C60.4135 279.167 53.9453 265.055 47.7244 251.483C32.3547 217.951 18.4943 187.711 0.549715 148.241L34.341 74.6429Z"
                stroke="#79655E"
            />
        </svg>
        <div className='Luxury_decor2'>
            <div className='Luxury_decor3' />
            <div className='numbers'>
                {numberOfPlaces} places
                <span>&rarr;</span>
            </div>
        </div>
    </div>
);

export { LuxuryDecor };
