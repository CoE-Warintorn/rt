import React, {Component} from 'react';
import { withState, compose, mapProps } from 'recompose';

const starWarsChars = [
    {name: 'Luke', side: 'light'},
    {name: 'Darth Vader', side: 'dark'},
    {name: 'Obi-wan Kenobi', side: 'light'},
    {name: 'Palpaine', side: 'dark'},
]

const DisplayList = ({list, otherSide, stateHandler}) => (
    <div>
        <button onClick={() => stateHandler(otherSide)}>Switch</button>
        {list.map( c => <div key={c.name}>{c.name}</div>)}
    </div>
)

/* const FilterProps = ({list, side}) => {
    const transformedProps = list.filter(c => c.side === side)
    return <DisplayList list={transformedProps}/>
} */

/* const withFilterProps = BaseComponent => ({list, side}) => {
    const transformedProps = list.filter(c => c.side === side)
    return <BaseComponent list={transformedProps}/>
}
const FilteredList = withFilterProps(DisplayList) */

/* // HOC
const withTransformProps = transformFunc => BaseComponent => (baseProps) => {
    const transformedProps = transformFunc(baseProps)
    return <BaseComponent {...transformedProps}/>
}

// HOC
const withSimpleState = defaultState => BaseComponent => {
    return class withSimpleState extends Component {
        state = {value: defaultState}
        updateState = value => this.setState({value})
        render(){
            return <BaseComponent {...this.props}
                stateValue={this.state.value} stateHandler={this.updateState}/>
        }
    }
}

const compose = (...hocs) => BaseComponent => hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent)

const ToggleableFilteredList = compose(
    withSimpleState('dark'),
    withTransformProps(({list, stateValue, stateHandler})=>({
    list: list.filter(c => c.side == stateValue),
    otherSide: stateValue == 'dark' ? 'light' : 'dark',
    stateHandler
}))
)(DisplayList) */


/* const FilteredList = withTransformProps(({list, stateValue, stateHandler})=>({
    list: list.filter(c => c.side == stateValue),
    otherSide: stateValue == 'dark' ? 'light' : 'dark',
    stateHandler
}))(DisplayList)

const ToggleableFilteredList = withSimpleState('dark')(FilteredList) */

const ToggleableFilteredList = compose(
    withState('stateValue', 'stateHandler', 'dark'),
    mapProps(({list, stateValue, stateHandler}) => ({
        list: list.filter(c => c.side == stateValue),
        otherSide: stateValue == 'dark' ? 'light' : 'dark',
        stateHandler
    }))
)(DisplayList)



const StarWarApp = () => (
    <ToggleableFilteredList list={starWarsChars} side='dark'/>
)

export default StarWarApp;