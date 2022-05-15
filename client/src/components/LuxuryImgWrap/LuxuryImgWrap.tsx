import { FC } from 'react';

import { RootState } from '../../store';
import { LuxuryDecor } from '../LuxuryDecor/LuxuryDecor';
import { useAppSelector } from '../../hooks';

import './LuxuryImgWrap.scss';

const LuxuryImgWrap:FC = () => {
    const { places } = useAppSelector((state: RootState) => state.placesReducer);

    return (
        <div className='img_wrap__no-slider'>
            {
                places.map((place) => (
                    <div key={place.id} className='img_wrap'>
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
                    </div>
                ))
            }
        </div>
    );
};

export { LuxuryImgWrap };
