module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@csstools/postcss-sass'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
};
