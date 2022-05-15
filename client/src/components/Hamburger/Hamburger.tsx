import { FC } from 'react';
import { Link } from 'react-router-dom';

import { header_top__menu } from '../../constans';
import { HeaderTop } from '../HeaderTop/HeaderTop';
import { RootState } from '../../store';
import { useAppSelector } from '../../hooks';
import vector from '../../images/icon/vector.svg';

import './Hamburger.scss';

const Hamburger: FC = () => {
    const { hamburger } = useAppSelector((state: RootState) => state.hamburgerReducer);

    return (
        <div className={hamburger ? 'hamburger active' : 'hamburger'}>
            <HeaderTop />
            <div className='content'>
                <ul>
                    {
                        header_top__menu.map((value) => (
                            <Link
                                to={`${value.replaceAll(' ', '').toLowerCase()}`}
                                key={value}
                            >
                                {value}
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className='img'>
                <img
                    src={vector}
                    alt='vector'
                />
            </div>
        </div>
    );
};

export { Hamburger };
