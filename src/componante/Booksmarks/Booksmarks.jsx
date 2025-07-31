


import PropTypes from 'prop-types';
import Book from './booksmark/Bookmark';
import propTypes from 'prop-types';

const Booksmarks = ({Booksmark}) => {
    console.log(Booksmark)
    return (
        <div className="md:w-1/2 bg-gray-300 ">
            <h1 className='text-3xl font-bold text-center my-4'>BooksMarks: {Booksmark.length}</h1>
           {
            Booksmark.map(book => <Book book={book}></Book>)
           }
        </div>
    );
};


Booksmarks.propTypes = {
    bookmarks: propTypes.array.isRequired,
};

export default Booksmarks;