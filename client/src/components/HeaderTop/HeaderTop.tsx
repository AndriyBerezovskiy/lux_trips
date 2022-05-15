import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import logo from '../../images/icon/logo.svg';
import subtract from '../../images/icon/subtract.svg';
import { Decor, HeaderTopMenu } from '../index';
import { isActive } from '../../store/slice/hamburger.slice';
import { RootState } from '../../store';

import './HeaderTop.scss';

const HeaderTop: FC = () => {
    const { hamburger } = useAppSelector((state: RootState) => state.hamburgerReducer);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className='header_top'>

                <div className='burger_btn' onClick={() => dispatch(isActive(!hamburger))}>
                    <span />
                </div>

                <div className='logo'>
                    <a href='/'>
                        <img
                            src={logo}
                            alt='logo'
                        />
                    </a>
                </div>

                <HeaderTopMenu />

                <div className='call'>
                    <a href='tel: 00000'>
                        <Decor
                            name='call_back__top'
                            bg_color='white'
                            width='25px'
                        />
                        <img
                            src={subtract}
                            alt='subtract'
                        />
                        <Decor
                            name='call_back__bottom'
                            bg_color='white'
                            width='25px'
                        />
                        <div className='text'>CALL ME BACK</div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export { HeaderTop };
