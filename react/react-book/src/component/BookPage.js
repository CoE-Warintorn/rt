import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import BookAPI from '../api';
import BookDetail from './BookDetail';
import { Panel, PanelHeading, PanelBlock, PanelIcon, Control, Input, Icon  } from 'bloomer';


const BookItem = ({ title, primary_isbn13, match }) => (
    <div>
        <PanelBlock isActive>
            <PanelIcon className="fa fa-book" />
            <Link to={`${match.url}/${primary_isbn13}`}>{title}</Link>
        </PanelBlock>
    </div>
)

class BookPage extends Component {

    constructor(props) {
        super(props)
        this.state = { books: [] }
    }

    renderBookDetail = (props) => {
        return (<BookDetail {...props} list_name_encoded={this.props.match.params.list_name_encoded}/>)
    }

    componentDidMount() {
        (async () => {
            let books = await BookAPI.getBooks(this.props.match.params.list_name_encoded)
            this.setState({ books })
        })()
    }

    render() {
        return (
            <Panel>
                <PanelHeading>BookPage from {this.props.match.params.list_name_encoded}</PanelHeading>
                {
                    this.state.books.map(b => <BookItem {...b} match={this.props.match} key={b.primary_isbn13} />)
                }
                <Route path={`${this.props.match.url}/:primary_isbn13`}
                    render={this.renderBookDetail}/>
            </Panel>
        );
    }
}

export default BookPage;
