import axios from 'axios';

const BookAPI = {
    apiKey: '12a1b2a985f4407e95c46572d0304d36',
    getNames: function () {
        return axios.get(`http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
            .then(response => response.data.results)

        /*return [
            {
                "list_name": "Combined Print and E-Book Fiction",
                "display_name": "Combined Print & E-Book Fiction",
                "list_name_encoded": "combined-print-and-e-book-fiction",
            },
            {
                "list_name": "Combined Print and E-Book Nonfiction",
                "display_name": "Combined Print & E-Book Nonfiction",
                "list_name_encoded": "combined-print-and-e-book-nonfiction",
            }
        ]*/
    },
    getBooks: function (list_name_encoded) {
        return axios.get(`http://api.nytimes.com/svc/books/v3/lists/${list_name_encoded}.json?api-key=${this.apiKey}`)
            .then(response => response.data.results.books)
        /*return [{
                "rank": 1,
                "primary_isbn13": "9781250165619",
                "publisher": "St. Martin's",
                "description": "A former prisoner of war returns from Vietnam and moves his family to Alaska, where they face tough conditions.",
                "title": "THE GREAT ALONE",
                "author": "Kristin Hannah",
                "book_image": "https://s1.nyt.com/du/books/images/9781250165619.jpg",
                "book_image_width": 326,
                "book_image_height": 495,

            },
            {
                "rank": 2,
                "primary_isbn13": "9781616207601",
                "publisher": "Algonquin",
                "description": "A newlywed couple's relationship is tested when the husband is sentenced to 12 years in prison.",
                "title": "AN AMERICAN MARRIAGE",
                "author": "Tayari Jones",
                "book_image": "https://s1.nyt.com/du/books/images/9781616207601.jpg",
                "book_image_width": 330,
                "book_image_height": 495,
            }
        ]*/
    }
}

export default BookAPI;