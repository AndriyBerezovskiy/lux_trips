import { FC, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { getAllTour } from '../../store/slice/tour.slice';
import { top_rated__menu } from '../../constans';
import { Rating } from '../index';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './SliderTopHome.scss';

const SliderTopHome: FC = () => {
    const [idWorld, setIdWorld] = useState(0);
    const { tours } = useAppSelector((state: RootState) => state.tourReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllTour());
    }, []);

    let filteredTours = tours;

    if (idWorld !== 0) {
        filteredTours = tours.filter((tour) => tour.country.worldId.toString().includes(idWorld.toString()));
    }

    return (
        <div className='slider_wrap'>
            <div className='top_rated__menu'>
                {
                    top_rated__menu.map((value) => (
                        <button key={value.id} onClick={() => setIdWorld(value.id)}>
                            {value.name}
                        </button>
                    ))
                }
            </div>
            <Swiper
                className='slider'
                modules={[Navigation]}
                spaceBetween={30}
                navigation
                breakpoints={{
                    1400: {
                        slidesPerView: 3.3,
                    },
                    1200: {
                        slidesPerView: 2.8,
                    },
                    992: {
                        slidesPerView: 2.4,
                    },
                    768: {
                        slidesPerView: 2.1,
                    },
                    576: {
                        slidesPerView: 1.8,
                    },
                    400: {
                        slidesPerView: 1.5,
                    },
                    320: {
                        spaceBetween: 15,
                        slidesPerView: 1.3,
                    },

                }}
            >
                {
                    filteredTours.map((tour) => (
                        <SwiperSlide key={tour.id}>

                            <div className='image'>
                                <img src={tour.image}
                                    alt='img_tour'
                                />

                                <div className='img_gradient' />

                                <div className='title_slider__top'>
                                    <span>{tour.country.countryName}</span>
                                    <h1>{tour.tourName}</h1>
                                </div>
                                <div className='price_slider__top'>
                                    <span>From</span>
                                    <h2>
                                        &#8364; &nbsp;
                                        {tour.price}
                                    </h2>
                                </div>

                            </div>

                            <div className='customise'>
                                <h2>customise</h2>
                            </div>
                            <Rating rating={tour.rating} />

                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export { SliderTopHome };
