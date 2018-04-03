module.exports = {
    plugins: [
        require('autoprefixer'),
        require('precss'),
        require('cssnano')({
            preset: 'default',
        }),
    ]
};