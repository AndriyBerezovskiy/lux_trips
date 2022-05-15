import { FC } from 'react';

import {
    Hamburger, HeaderTop, HomeSearch, Pins,
} from '../index';

import './Hero.scss';

const Hero:FC = () => (
    <div className='hero'>
        <div className='bg_top'>

            <Hamburger />
            <HeaderTop />

            <div className='header_title__text1'>extra ordinary</div>
            <div className='header_subtext'>the world’s most</div>

            <div className='bg_1' />

            <div className='bg_2'>
                <Pins />
                <div className='header_title__text2'>places</div>

                <div className='bg_3'>
                    <div className='bg_4' />

                    <div className='bg_mask'>
                        <div className='gradient'>
                            <HomeSearch />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export { Hero };
