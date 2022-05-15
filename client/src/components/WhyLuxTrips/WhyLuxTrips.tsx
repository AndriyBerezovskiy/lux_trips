import { FC } from 'react';

import why_bg from '../../images/picture/bg_whyluxtrip.png';
import { PinsWhyLuxTrips } from '../PinsWhyLuxTrips/PinsWhyLuxTrips';

import './WhyLuxTrips.scss';

const WhyLuxTrips:FC = () => (
    <div className='why_wrap'>
        <div className='why_bg'>
            <img src={why_bg}
                alt='bg'
            />
        </div>

        <PinsWhyLuxTrips />

        <div className='why_content'>
            <h2><span>Why</span> Lux Trips</h2>
            <h3 className='sub_title1'>Exclusive knowledge to provide the best of the best to clients</h3>
            <p className='first_text'>As Travel Designer, we know the ins and outs of travel from who to work with, where to go,
                    when to book, and which restaurant provides the most authentic cuisine.
            </p>
            <p className='second_text'>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings,
                    private yacht and jet charters, to exclusive tours and personalized journey planning.
            </p>
            <h3 className='sub_title2'>We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.</h3>
            <button>help me plan a trip</button>
        </div>
    </div>
);

export { WhyLuxTrips };
