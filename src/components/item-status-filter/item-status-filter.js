import React, { useState } from "react";

const ItemStatusFilter = ({onFilterButton}) => {

    const [filterButtons, setFilterButtons] = useState([
        {value: 'All', isPrimary: true, id: 1},
        {value: 'Active', isPrimary: false, id: 2},
        {value: 'Done', isPrimary: false, id: 3}
    ]);

    const changePrimaryButton = id => setFilterButtons((prev) => prev.map(filterButton => { 
        return {...filterButton, isPrimary: (filterButton.id === id) };
    }));
    
    const buttons = filterButtons.map(button => {
        const {value, isPrimary, id} = button;
        let style;

        if (isPrimary) {
            style = 'btn-primary';
        } else 
            style = 'btn-outline-secondary';

        return (
            <button type="button"
                    key={id}
                    className={`btn ${style}`}
                    onClick={() => {
                        changePrimaryButton(id);
                        onFilterButton(button);
                    }}
                    >
                    {value}
            </button>
        );
    })    

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
};

export default ItemStatusFilter;