import React, { useState } from 'react';
import styles from './FilterBlock.module.css';
import Search from '../Search/Search';
import FilterButton from '../FilterButton/FilterButton';
import FilterPanel from '../FilterPanel/FilterPanel';
import {mainFilterSelector, setMainFilter, clearMainFilter} from '../../features/filter/filterSlice';
const FilterBlock = () => {
    //state
    const [isPanelOpen, setOpen] = useState(true);
    const changePanelVisible = () =>{
        console.log('changePanelVisible', isPanelOpen);
        setOpen(!isPanelOpen);
    };
    const panel = isPanelOpen ? <FilterPanel/> : "";
    return (
        <div className={styles.filterBlock}>
            <div className={styles.mainFilter}>
                <Search editorSelector={mainFilterSelector} onChange={setMainFilter} onCancel={clearMainFilter}/>
                <FilterButton text="Фильтры" onClickHandler={changePanelVisible}/>
            </div>
            {panel}
        </div>
    );
  }
  export default FilterBlock;