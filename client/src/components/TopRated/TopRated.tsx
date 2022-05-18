import { FC } from 'react';

import vector from '../../images/icon/vector_two.svg';
import { SliderTopHome } from '../index';

import './TopRated.scss';

const TopRated: FC = () => (
    <div className='top_rated'>
        <div className='title'>
			Top Rated Experiences
        </div>
        <div className='img'>
            <img
                src={vector}
                alt='vector'
            />
        </div>
        <SliderTopHome />
    </div>
);

export { TopRated };
