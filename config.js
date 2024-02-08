const config = {
    /**
     * START OF CONFIGURATION SECTION (EDIT THIS)
     **/
    title: 'Book Collection Web Title',
    workingDir: '.',
    baseURL: 'https://example.com/books', // REQUIRED for RSS feeds
    languageCode: 'en',
    books: [
        {
            id: 'unique-book-id',    // REQUIRED
            workingDir: './books/a', // REQUIRED
            title: "Book Title",
            languageCode: 'en',
            tags: ["Science Fiction", "Fantasy", "Action", "Adventure"],
            description: 'One or two sentences describing the book.',
            //coverRelPath: 'cover.webp',
            blurbRelPath: 'index.md',
            status: 'Completed',
        },
        {
            id: 'unique-book-id-2',  // REQUIRED
            workingDir: './books/b', // REQUIRED
            title: "Book Title 2",
            languageCode: 'en',
            tags: ["Literary", "Contemporary", "Classics"],
            description: 'One or two sentences describing the book.',
            //coverRelPath: 'cover.webp',
            blurbRelPath: 'index.md',
            status: 'On Hiatus',
        },
        {
            id: 'unique-book-id-3',  // REQUIRED
            workingDir: './books/c', // REQUIRED
            title: "Book Title 2",
            languageCode: 'en',
            tags: ["Literary", "Contemporary", "Classics"],
            description: 'One or two sentences describing the book.',
            //coverRelPath: 'cover.webp',
            blurbRelPath: 'index.md',
            status: 'On Hiatus',
        },
    ],
    /**
     * END OF CONFIGURATION SECTION
     **/
};

module.exports = config;
