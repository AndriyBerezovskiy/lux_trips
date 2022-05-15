import { FC } from 'react';

import './Rating.scss';

interface IProps{
    rating: number
}

const Rating:FC<IProps> = ({ rating }) => (
    <div className='rating'
        data-total-value={rating}
    >
        <span className='rating_value'>{rating}</span>

        <div className='rating_item'
            data-item-value='1'
        >
            <svg width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g filter='url(#filter0_b_589_5748)'>
                    <path d='M2.94678 13.2564L2.94762 13.2579L5.00177 16.9704L7.07263 13.2579L7.07346 13.2564L9.42829 9.00049L4.99973 1.02907C4.62835 1.69653 4.27806 2.32556 3.9378 2.9366C2.83612 4.91498 1.8395 6.7047 0.571872 8.99883L2.94678 13.2564Z'
                        stroke='white'
                    />
                </g>
                <defs>
                    <filter id='filter0_b_589_5748'
                        x='-10'
                        y='-10'
                        width='30'
                        height='38'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                    >
                        <feFlood floodOpacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur in='BackgroundImage'
                            stdDeviation='5'
                        />
                        <feComposite in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_589_5748'
                        />
                        <feBlend mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_589_5748'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
        </div>

        <div className='rating_item'
            data-item-value='2'
        >
            <svg width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g filter='url(#filter0_b_589_5748)'>
                    <path d='M2.94678 13.2564L2.94762 13.2579L5.00177 16.9704L7.07263 13.2579L7.07346 13.2564L9.42829 9.00049L4.99973 1.02907C4.62835 1.69653 4.27806 2.32556 3.9378 2.9366C2.83612 4.91498 1.8395 6.7047 0.571872 8.99883L2.94678 13.2564Z'
                        stroke='white'
                    />
                </g>
                <defs>
                    <filter id='filter0_b_589_5748'
                        x='-10'
                        y='-10'
                        width='30'
                        height='38'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                    >
                        <feFlood floodOpacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur in='BackgroundImage'
                            stdDeviation='5'
                        />
                        <feComposite in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_589_5748'
                        />
                        <feBlend mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_589_5748'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
        </div>

        <div className='rating_item'
            data-item-value='3'
        >
            <svg width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g filter='url(#filter0_b_589_5748)'>
                    <path d='M2.94678 13.2564L2.94762 13.2579L5.00177 16.9704L7.07263 13.2579L7.07346 13.2564L9.42829 9.00049L4.99973 1.02907C4.62835 1.69653 4.27806 2.32556 3.9378 2.9366C2.83612 4.91498 1.8395 6.7047 0.571872 8.99883L2.94678 13.2564Z'
                        stroke='white'
                    />
                </g>
                <defs>
                    <filter id='filter0_b_589_5748'
                        x='-10'
                        y='-10'
                        width='30'
                        height='38'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                    >
                        <feFlood floodOpacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur in='BackgroundImage'
                            stdDeviation='5'
                        />
                        <feComposite in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_589_5748'
                        />
                        <feBlend mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_589_5748'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>

        </div>

        <div className='rating_item'
            data-item-value='4'
        >
            <svg width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g filter='url(#filter0_b_589_5748)'>
                    <path d='M2.94678 13.2564L2.94762 13.2579L5.00177 16.9704L7.07263 13.2579L7.07346 13.2564L9.42829 9.00049L4.99973 1.02907C4.62835 1.69653 4.27806 2.32556 3.9378 2.9366C2.83612 4.91498 1.8395 6.7047 0.571872 8.99883L2.94678 13.2564Z'
                        stroke='white'
                    />
                </g>
                <defs>
                    <filter id='filter0_b_589_5748'
                        x='-10'
                        y='-10'
                        width='30'
                        height='38'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                    >
                        <feFlood floodOpacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur in='BackgroundImage'
                            stdDeviation='5'
                        />
                        <feComposite in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_589_5748'
                        />
                        <feBlend mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_589_5748'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
        </div>

        <div className='rating_item'
            data-item-value='5'
        >
            <svg width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g filter='url(#filter0_b_589_5748)'>
                    <path d='M2.94678 13.2564L2.94762 13.2579L5.00177 16.9704L7.07263 13.2579L7.07346 13.2564L9.42829 9.00049L4.99973 1.02907C4.62835 1.69653 4.27806 2.32556 3.9378 2.9366C2.83612 4.91498 1.8395 6.7047 0.571872 8.99883L2.94678 13.2564Z'
                        stroke='white'
                    />
                </g>
                <defs>
                    <filter id='filter0_b_589_5748'
                        x='-10'
                        y='-10'
                        width='30'
                        height='38'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                    >
                        <feFlood floodOpacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur in='BackgroundImage'
                            stdDeviation='5'
                        />
                        <feComposite in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_589_5748'
                        />
                        <feBlend mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_589_5748'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
        </div>

    </div>
);

export { Rating };
