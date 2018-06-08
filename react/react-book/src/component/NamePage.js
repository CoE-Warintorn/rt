import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookAPI from '../api';
import _ from 'lodash';
import { Panel, PanelHeading, PanelBlock, PanelIcon, Control, Input, Icon  } from 'bloomer';

const NameItem = ({ list_name, list_name_encoded, match }) => (
    <div>
        <PanelBlock isActive>
            <PanelIcon className="fa fa-book" />
                <Link to={`${match.url}/${list_name_encoded}`}>{list_name}</Link>
        </PanelBlock>
    </div>
)

class NamePage extends Component {
    constructor(props) {
        super(props)
        this.state = { names: [] , searchText: ''}
    }

    componentDidMount() {
        (async ()=>{
            let names = await BookAPI.getNames()
            this.allNames = names
            this.setState({ names })
            let params = new URLSearchParams(this.props.history.location.search)
            this.handleSearchTextChanged(params.get('searchText') || '')
        })()

    }

    handleSearchInputChanged = (event) => {
        let text = event.target.value
        this.props.history.replace(`${this.props.history.location.pathname}?searchText=${text}`)
        this.handleSearchTextChanged(text)
    }

    handleSearchTextChanged = (text) => {
        let names = this.state.names
        names = _.filter(this.allNames, n => n.list_name.search(new RegExp(text, "i")) >= 0)
        this.setState({searchText: text, names})
    }

    render() {
        return (
            <div>
                <Panel>
                    <PanelHeading>Repositories</PanelHeading>
                    <PanelBlock>
                        <Control hasIcons='left'>
                            <Input type="text" placeholder='Search' value={this.state.searchText} onChange={this.handleSearchInputChanged}/>
                            <Icon isSize='small' isAlign='left'>
                                <span className='fa fa-search' aria-hidden='true' />
                            </Icon>
                        </Control>
                    </PanelBlock>
                    {
                        this.state.names.map(n => <NameItem {...n} match={this.props.match} key={n.list_name_encoded} />)
                    }
                </Panel>
            </div>
        );
    }
}

export default NamePage;
