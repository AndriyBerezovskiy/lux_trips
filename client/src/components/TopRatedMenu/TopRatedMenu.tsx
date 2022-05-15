import { FC } from 'react';

import { top_rated__menu } from '../../constans';

import './TopRatedMenu.scss';

const TopRatedMenu:FC = () => (
    <div className='top_rated__menu'>
        {
            top_rated__menu.map((value) => (
                <div key={value}>
                    {value}
                </div>
            ))
        }
    </div>
);

export { TopRatedMenu };
