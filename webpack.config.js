const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project-name.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss'],
    fallback: { crypto: false }
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: 'css-loader'
            },
        ],
      },
      {
        test: /\.hbs$/,
        use: [
            {
                loader: 'handlebars-loader'
            },
        ],
      },
      {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'sass-loader',
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: ['src/pages/style.scss']
                },
            },
        ],
        exclude: /(node_modules)/
      },
    ]
  }
}; 