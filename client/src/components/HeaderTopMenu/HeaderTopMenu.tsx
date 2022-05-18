import { FC } from 'react';
import { Link } from 'react-router-dom';

import { header_top__menu } from '../../constans';

import './HeaderTopMenu.scss';

const HeaderTopMenu:FC = () => (
    <div className='header_top__menu'>
        {
            header_top__menu.map((value) => (
                <div key={value}>
                    <Link to={`${value.replaceAll(' ', '_').toLowerCase()}`}>
                        {value}
                    </Link>
                </div>
            ))
        }
    </div>
);

export { HeaderTopMenu };
