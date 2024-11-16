module.exports = {
    mode: 'jit',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
    content: [
        './src/Client/**/*.razor',
        './src/Client/**/*.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}