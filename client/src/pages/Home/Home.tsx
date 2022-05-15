import { FC } from 'react';
import {
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
    </div>
);

export { Home };
