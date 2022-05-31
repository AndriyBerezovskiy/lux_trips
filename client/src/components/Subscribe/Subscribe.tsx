import { FC } from 'react';

import { Decor } from '../Decor/Decor';
import subscribe_bg from '../../images/picture/subscribe_bg.png';

import './Subscribe.scss';

const Subscribe:FC = () => (
    <div className='subscribe_wrap'>
        <div className='subscribe'>
            <div className='subscribe_bg'>
                <img src={subscribe_bg}
                    alt='subscribe_bg'
                />
            </div>
            <div className='subscribe_content'>
                <h2>Get weekly inspiration and expert advice</h2>
                <p>Sign up for our Weekly Newsletter</p>
            </div>
            <div className='form_subscribe'>
                <form>
                    <input type='text' placeholder='Email address' />
                    <div className='subscribe_btn'>
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='subscribe_svg'>
            <svg width='1070' height='601' viewBox='0 0 1070 601' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M501 0H10C4.47715 0 0 4.47715 0 10V591C0 596.523 4.47713 601 9.99997 601H1060C1065.52 601 1070 596.523 1070 591V10C1070 4.47715 1065.52 0 1060 0H570V1H1060C1064.97 1 1069 5.02943 1069 10V591C1069 595.971 1064.97 600 1060 600H9.99997C5.02941 600 1 595.971 1 591V10C1 5.02944 5.02944 1 10 1H501V0Z' fill='white' />
            </svg>

            <Decor name='subscribe_decor' bg_color='white' width='50px' />
        </div>
    </div>
);

export { Subscribe };
