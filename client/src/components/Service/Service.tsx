import { FC } from 'react';

import { ServiceItem } from '../../constans/ServiceItem';

import './Service.scss';

const Service:FC = () => (
    <div className='service'>
        <div className='service_content'>
            <div className='service_text'>
                <h2>Book With Us</h2>
            </div>

            <ul>
                {
                    ServiceItem.map((item) => (
                        <li key={item.name}>
                            <div className='img_service'>
                                <img className={item.name.toLowerCase().replaceAll(' ', '_')}
                                    src={item.img}
                                    alt={item.name}
                                />
                            </div>
                            <h3>{item.name}</h3>

                            <svg width='141' height='75' viewBox='0 0 141 75' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M35.4855 55.7331L35.4841 55.7323L1.06471 37.4982L35.4841 19.1159L35.4855 19.1151L70.4995 0.566077L139.936 37.5002C132.679 41.3638 126.051 44.8979 119.672 48.299C103.696 56.8167 89.2851 64.5 70.5012 74.4338L35.4855 55.7331Z' stroke='#79655E' />
                            </svg>

                            <div className='service_decor1'>
                                <div className='service_decor2' />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
);

export { Service };
