import { FC, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { getAllPlaces } from '../../store/slice/places.slice';
import { LuxuryImgWrap } from '../LuxuryImgWrap/LuxuryImgWrap';
import { LuxuryDecor } from '../LuxuryDecor/LuxuryDecor';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './LuxuryPackages.scss';

const LuxuryPackages:FC = () => {
    const { places } = useAppSelector((state: RootState) => state.placesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPlaces());
    }, []);

    return (
        <div className='luxury_packages'>
            <div className='bg_image' />

            <div className='luxury_wrap'>
                <div className='luxury_title'>
                    <h2>Luxury Packages</h2>
                </div>

                <div className='luxury_btn'>
                    <button>view all</button>
                </div>

                <div className='luxury_content'>
                    <LuxuryImgWrap />

                    <Swiper className='luxury_slider'
                        modules={[Navigation]}
                        spaceBetween={30}
                        navigation
                        breakpoints={{
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
                            places.map((place) => (
                                <SwiperSlide key={place.id} className='img_wrap'>
                                    <div className='title'>
                                        <h2>{place.namePlaces}</h2>
                                    </div>
                                    <div className='luxury_img'>
                                        <img src={place.image}
                                            alt='img_place'
                                        />
                                    </div>
                                    <div className='luxury_gradient' />

                                    <LuxuryDecor numberOfPlaces={place.tours.length} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export { LuxuryPackages };
