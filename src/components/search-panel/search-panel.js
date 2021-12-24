import React from "react";

import ItemStatusFilter from "../item-status-filter";
import "./search-panel.css";


const SearchPanel = ({onFilterButton, onFilterInput}) => {

    const onSearchChange = searchPanelEvent => {
        const term = searchPanelEvent.target.value
        onFilterInput(term)
    };

    return (
        <span className="search-panel d-flex">
            <input placeholder="type to search" 
                   className="form-control"  
                   onChange={onSearchChange}/>

            <ItemStatusFilter onFilterButton={onFilterButton}/>
        </span>
    )
}

export default SearchPanel;