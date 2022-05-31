import { FC } from 'react';

import { customiseTripInfo } from '../../constans/CustomiseTripInfo';
import { Decor } from '../Decor/Decor';

import vector from '../../images/icon/vector_three.svg';
import line from '../../images/icon/line.svg';
import bg from '../../images/picture/bg_strat_trip.png';
import cloud_1 from '../../images/picture/cloud_2.png';
import cloud_3 from '../../images/picture/cloud_3.png';
import cloud_2 from '../../images/picture/cloud_1.png';

import './CustomiseTripInfo.scss';

const CustomiseTripInfo:FC = () => (
    <div className='customise_info__wrap'>
        <div className='customise_info__container'>
            <h2>Customise your trip with us</h2>
            <div className='customise_info__content'>
                {
                    customiseTripInfo.map((info) => (
                        <div key={info.id} className='info_wrap'>
                            <div className='info_img'>
                                <img src={vector}
                                    alt='img'
                                />
                                <img className='line'
                                    src={line}
                                    alt='img'
                                />
                                <p>{info.id}</p>
                            </div>
                            <div className='info_text'>
                                <h3>{info.title}</h3>
                                <p>{info.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='customise_info__btn'>
                <Decor name='customise_decor__first' bg_color='black' width='80px' />
                <Decor name='customise_decor__second' bg_color='black' width='40px' />
                <div className='customise_svg'>
                    <svg width='486' height='61' viewBox='0 0 486 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M201.082 -0.000488281H30.5C13.6553 -0.000488281 0 13.6548 0 30.4995C0 47.3442 13.6553 60.9995 30.5 60.9995H201.082V59.9995H30.5C14.2076 59.9995 1 46.7919 1 30.4995C1 14.2071 14.2076 0.999512 30.5 0.999512H201.082V-0.000488281ZM286.531 59.9995H455.5C471.792 59.9995 485 46.7919 485 30.4995C485 14.2071 471.792 0.999512 455.5 0.999512H286.531V-0.000488281H455.5C472.345 -0.000488281 486 13.6548 486 30.4995C486 47.3442 472.345 60.9995 455.5 60.9995H286.531V59.9995Z' fill='#0C0B10' />
                    </svg>
                </div>
                <div className='customise_btn'>
                    <button>Start a trip request</button>
                </div>
            </div>
            <p className='subtext'>It’s Free! - no credit card required</p>
        </div>
        <div className='bg'>
            <img src={bg}
                alt='img'
            />

        </div>
        <div className='cloud_1'>
            <img src={cloud_1}
                alt='img_cloud'
            />
        </div>
        <div className='cloud_2'>
            <img src={cloud_2}
                alt='img_cloud'
            />
        </div>
        <div className='cloud_3'>
            <img src={cloud_3}
                alt='img_cloud'
            />
        </div>
    </div>
);

export { CustomiseTripInfo };
