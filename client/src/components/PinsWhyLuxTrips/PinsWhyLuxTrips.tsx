import { FC } from 'react';

import pins1 from '../../images/picture/pin_1.png';
import pins2 from '../../images/picture/pin_2.png';
import pins3 from '../../images/picture/pin_3.png';
import pins4 from '../../images/picture/pin_4.png';

import './PinsWhyLuxTrips.scss';

const PinsWhyLuxTrips:FC = () => (
    <div className='pins_why__wrap'>
        <div className='pins_why__1'>
            <div className='pins_img__1'>
                <img src={pins1}
					 alt='img'
                />
            </div>
        </div>
        <div className='pins_why__2'>
            <div className='pins_img__2'>
                <img src={pins2}
					 alt='img'
                />
            </div>
        </div>
        <div className='pins_why__3'>
            <div className='pins_img__3'>
                <img src={pins3}
					 alt='img'
                />
            </div>
        </div>
        <div className='pins_why__4'>
            <div className='pins_img__4'>
                <img src={pins4}
                    alt='img'
                />
            </div>
        </div>
    </div>
);

export { PinsWhyLuxTrips };
