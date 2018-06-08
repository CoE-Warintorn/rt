import React from 'react';
import { VisibilityFilters, setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';

const VisibilityFilterBar = ({setFilter}) => (
    <div>
        <button onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>ALL</button>
        <button onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>ACTIVE</button>
        <button onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>COMPLETED</button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setFilter: (filter) => dispatch(setVisibilityFilter(filter))
})
export default connect(null, mapDispatchToProps)(VisibilityFilterBar)