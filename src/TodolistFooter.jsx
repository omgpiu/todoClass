import React from "react";

export class TodolistFooter extends React.Component {
    render() {
        const classForAll = this.props.filterValue === 'All' ? 'filter-active' : ''
        const classForActive = this.props.filterValue === 'Active' ? 'filter-active' : ''
        const classForComplete = this.props.filterValue === 'Complete' ? 'filter-active' : ''


        return (
            <div>
                <button className={classForAll}>All</button>
                <button className={classForActive}>Active</button>
                <button className={classForComplete}>Complete</button>


            </div>
        )
    }
}