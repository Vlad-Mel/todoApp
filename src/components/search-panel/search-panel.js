import React, { useState } from "react";

import ItemStatusFilter from "../item-status-filter";
import "./search-panel.css";


const SearchPanel = ({filterBy, onFilterInput}) => {
    const [term, setTerm] = useState({
        term: ''
    })

    const onSearchChange = searchPanelEvent => {
        const term = searchPanelEvent.target.value
        setTerm(() => { return {term}});
        onFilterInput(term)
    };

    return (
        <span className="search-panel d-flex">
            <input placeholder="type to search" 
                   className="form-control"  
                   onChange={onSearchChange}/>

            <ItemStatusFilter filterBy={filterBy}/>
        </span>
    )
}

export default SearchPanel;