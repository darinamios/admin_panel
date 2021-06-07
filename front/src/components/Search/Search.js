import React, {Component} from 'react';
import styles from './Search.module.css';

class Search extends Component{
    state = {
        isEmpty : true,
        searchText : ''
    }
    render(){
        const {placeholder} = this.props;
        const btnClass = this.state.isEmpty ? styles.cancel  + ' ' +  styles.empty : styles.cancel;
        return (
            <div className={styles.search}>
                <div className={styles.ico}></div>
                <input className={styles.field} placeholder={placeholder} onInput={this.searchHandleInput} value={this.state.searchText}/>
                <input type="button" className={btnClass} onClick={this.cancelHandleClick}/>
            </div>
        );
    }
    searchHandleInput = (event) => {
        console.log('searchHandleInput');
        console.log(event.target.value);
        const inputText = event.target.value;
        this.setState({
            isEmpty : !inputText,
            searchText : inputText
        })
    }
    cancelHandleClick = (event) => {
        console.log('searchHandleInput');
        console.log(event.target.value);
        this.setState({
            isEmpty : true, 
            searchText : ''
        })
    }
}
export default Search;
