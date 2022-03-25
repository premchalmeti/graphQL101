const authors = [{
    "id": 1,
    "firstName": "Premkumar",
    "lastName": "Chalmeti",
    "dob": new Date(1996, 4, 1996),
    "age": 25
}]

const books = [{
    "id": 1,
    'title': "Biography",
    "author": authors.find(a => a.id === 1),
    "price": 200.50,
    "isPublished": false
}];

const greeting = "Hello GraphQL world!";

module.exports = {
    books,
    greeting,
    authors
};
