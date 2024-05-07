import React from 'react';
import Affair from './affair/Affair';
import { AffairType, FilterType } from '../HW2';
import s from './Affairs.module.css';


type AffairsPropsType = {
    data: AffairType[]; 
    setFilter: (filter: FilterType) => void; 
    deleteAffairCallback: (id: number) => void; 
    filter: FilterType; 
}

const Affairs: React.FC<AffairsPropsType> = (props) => {
    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    const getClassNames = (filterType: FilterType) => {
        return `${s.button} ${s[filterType]} ${props.filter === filterType ? s.active : ''}`;
    }

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} 
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    return (
        <div>
            <div className={s.buttonContainer}>
                <button onClick={setAll} className={getClassNames('all')}>All</button>
                <button onClick={setHigh} className={getClassNames('high')}>High</button>
                <button onClick={setMiddle} className={getClassNames('middle')}>Middle</button>
                <button onClick={setLow} className={getClassNames('low')}>Low</button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    );
}

export default Affairs;
