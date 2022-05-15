import { FC } from 'react';

import { Decor, HomeSelect } from '../index';
import subtract from '../../images/icon/subtract.svg';

import './HomeSearch.scss';

const HomeSearch:FC = () => (
    <div>
        <div className='home_search'>
            <HomeSelect />

            <div className='decor1'>
                <span className='title_search'>find your journey</span>
                <div className='img'>
                    <Decor name='top' bg_color='white' width='40px' />
                    <img
                        src={subtract}
                        alt='subtract'
                    />
                </div>
            </div>

        </div>
    </div>
);

export { HomeSearch };
