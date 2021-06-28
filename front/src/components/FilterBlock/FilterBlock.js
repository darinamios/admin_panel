import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FilterBlock.module.css';
import Search from '../Search/Search';
import FilterButton from '../FilterButton/FilterButton';
import FilterPanel from '../FilterPanel/FilterPanel';
import {mainFilterSelector, setMainFilter, clearAllFilters} from '../../features/filter/filterSlice';
import {clearFields} from '../../features/add/addSlice';
import ClearFilterButton from '../ClearFilterButton/ClearFilterButton';
import Button from '../Button/Button';
import AddPanel from '../AddPanel/AddPanel';
const FilterBlock = () => {
    //state
    const [isFilterPanelOpen, setFilterOpen] = useState(false);
    const [isAddPanelOpen, setAddOpen] = useState(false);
    const dispatch = useDispatch();
    const changePanelVisible = () =>{
        console.log('changePanelVisible', isFilterPanelOpen);
        setFilterOpen(!isFilterPanelOpen);
    };
    const clearFilters = () =>{
        console.log('clearFilters', isFilterPanelOpen);
        setFilterOpen(false);
        dispatch(clearAllFilters());
    };
    const changeAddPanel = () =>{
        console.log('openAddPanel');
        setAddOpen(!isAddPanelOpen);
    };
    const closeAddPanel = () =>{
        console.log('openAddPanel');
        setAddOpen(false);
        dispatch(clearFields());
    };
    const setSearchHandler = (value) =>{
        dispatch(setMainFilter(value));
    };
    const clearSearchHandler = () =>{
        dispatch(setMainFilter(''));
    };
    const filterPanel = isFilterPanelOpen ? <FilterPanel/> : "";
    const addPanel = isAddPanelOpen ? <AddPanel onClose={closeAddPanel}/> : "";
    return (
        <div className={styles.filterBlock}>
            <div className={styles.mainFilter}>
                <div className={styles.left}>
                    <Search editorSelector={mainFilterSelector} onChange={setSearchHandler} onCancel={clearSearchHandler}/>
                    <FilterButton text="Фильтры" onClickHandler={changePanelVisible}/>
                    <ClearFilterButton text="Очистить фильтры" onClickHandler={clearFilters}/>
                </div>
                <div className={styles.right}>
                    <Button text="Добавить заказ" onClickHandler={changeAddPanel} width = '128px'/>
                    {addPanel}
                </div>
            </div>
            {filterPanel}
        </div>
    );
  }
  export default FilterBlock;