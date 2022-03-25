const { books, authors, greeting } = require('./data');
const { dateScalar } = require('./types');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Date: dateScalar,
    Query: {
        greeting: () => greeting,
        books: () => books,
        authors: () => authors,
        search: (req, { contains }) => {
            const foundBooks = books.filter(book => book.title.includes(contains));
            if(foundBooks.length > 0 ) {
                return foundBooks;
            } else {
                return authors.filter(author => author.firstName.includes(contains) || author.lastName.includes(contains));
            }
        }
    },
    Mutation: {
        addBook: (req, { book }) => {
            const newAuthorId = Math.max(authors.map(author => author.id));
            const newBookId = Math.max(books.map(book => book.id));

            const newAuthor = {
                id: newAuthorId,
                firstName: book.author.firstName,
                lastName: book.author.lastName,
                DOB: book.author.DOB
            };

            authors.push({newAuthor});
            const newBook = {
                id: newBookId,
                title: book.title,
                author: newAuthor
            }
            books.push(newBook);
            return {
                code: '200',
                success: true,
                message: "Added new book",
                book: newBook
            };
        }
    }
};


module.exports = {
    resolvers
}
