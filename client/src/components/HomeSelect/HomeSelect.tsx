import { FC, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import DatePicker from 'react-datepicker';

import { options_destination, options_travel_type, options_travellers } from '../../constans';

import 'react-datepicker/dist/react-datepicker.css';
import './HomeSelect.scss';

export interface IOptions{
    value: string;
    label: string;
}

const HomeSelect:FC = () => {
    const [tour, setTour] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [travellers, setTravellers] = useState<string>('');
    const [startDate, setStartDate] = useState<Date>(new Date());

    const onChangeTour = (newValue: SingleValue<string | IOptions>) => {
        setTour((newValue as IOptions).value);
    };
    const onChangeType = (newValue: SingleValue<string | IOptions>) => {
        setType((newValue as IOptions).value);
    };
    const onChangeTravellers = (newValue: SingleValue<string | IOptions>) => {
        setTravellers((newValue as IOptions).value);
    };

    const getValueTour = () => (tour ? options_destination.find((val) => val.value === tour) : '');
    const getValueType = () => (type ? options_travel_type.find((val) => val.value === type) : '');
    const getValueTravellers = () => (travellers ? options_travellers.find((val) => val.value === travellers) : '');

    return (
        <div className='home_select'>
            <div className='destination'>
                <h5>Destination</h5>
                <Select
                    classNamePrefix='custom_select'
                    onChange={onChangeTour}
                    value={getValueTour()}
                    options={options_destination}
                    placeholder='Where are you going?'
                />
            </div>

            <div className='travel_type'>
                <h5>Travel type</h5>
                <Select
                    classNamePrefix='custom_select'
                    onChange={onChangeType}
                    value={getValueType()}
                    options={options_travel_type}
                    placeholder='Chose type ...'
                />
            </div>

            <div className='calendar'>
                <h5>When</h5>
                <DatePicker
                    selected={startDate}
                    onChange={(date:Date) => setStartDate(date)}
                    dateFormat='d MMMM yyyy'
                />
            </div>

            <div className='travellers'>
                <h5>Travellers</h5>
                <Select
                    classNamePrefix='custom_select'
                    onChange={onChangeTravellers}
                    value={getValueTravellers()}
                    options={options_travellers}
                    placeholder='How much ...'
                />
            </div>

            <div className='search_button'>
                <button>
                    <span>FIND</span>
                </button>
            </div>
        </div>
    );
};

export { HomeSelect };
