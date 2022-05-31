import { FC } from 'react';
import {
    CustomersReviews,
    CustomiseTripInfo,
    Hero, LuxuryPackages, Service, TopRated, WhyLuxTrips,
} from '../../components';

import './Home.scss';

const Home: FC = () => (
    <div>
        <Hero />
        <TopRated />
        <LuxuryPackages />
        <Service />
        <WhyLuxTrips />
        <CustomiseTripInfo />
        <CustomersReviews />
    </div>
);

export { Home };
