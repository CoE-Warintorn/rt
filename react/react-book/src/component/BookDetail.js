import React, { Component } from 'react';
import { Modal, ModalBackground, ModalClose, ModalContent } from 'bloomer';
import { Card, CardHeader, CardHeaderTitle, CardContent, Image, Media, MediaContent, MediaLeft, Title, Subtitle, Content} from 'bloomer';
import BookAPI from '../api';
import _ from 'lodash';

class BookDetail extends Component {
    
    constructor(props) {
        super(props)
        this.state = {book: null}
    }
    
    componentDidMount() {
        (async () => {
            let books = await BookAPI.getBooks(this.props.list_name_encoded)
            let primary_isbn13 = this.props.match.params.primary_isbn13
            this.setState({book: _.find(books, ['primary_isbn13', primary_isbn13])})
        })()
    }
    
    handleModalClose = () => {
        this.props.history.goBack()
    }

    render() {
        let book = this.state.book
        if (!book)
            return (<div></div>);

        return (
            <Modal isActive={true}>
                <ModalBackground onClick={this.handleModalClose} />
                <ModalContent>
                    <Card>
                        <CardHeader>
                            <CardHeaderTitle>
                                {book.title}
                            </CardHeaderTitle>
                        </CardHeader>
                        <CardContent>
                            <Media>
                                <MediaLeft>
                                    <Image src={book.book_image} />  
                                </MediaLeft>
                                <MediaContent>
                                    <Title isSize={4}>{book.title}</Title>
                                    <Subtitle isSize={6}>{book.author}</Subtitle>
                                </MediaContent>
                            </Media>
                            <Content>
                                {book.description}
                                <br/>
                                <small>{book.publisher}</small>
                            </Content>
                        </CardContent>
                    </Card>
                </ModalContent>
                <ModalClose onClick={this.handleModalClose} />
            </Modal>
        );
    }
}

export default BookDetail;
