const path = require('path')
const paths = require('../config/paths')
const autoprefixer = require('autoprefixer')

module.exports = (storybookBaseConfig, env) => {
  const newPlugins =
    storybookBaseConfig.plugins
      .filter(
        plugin =>
          plugin.constructor.name !== 'UglifyJsPlugin'
      )

  return Object.assign({}, storybookBaseConfig, {
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      alias: Object.assign({}, (storybookBaseConfig.resolve || {}).alias, {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        'smartstream-widgets': path.resolve(__dirname, '../widgets/src/main/javascript'),
        'storybook-dir': path.resolve(__dirname, '../storybook'),
        'styles': path.resolve(__dirname, '../widgets/src/main/resources/styles'),
        'resources': path.resolve(__dirname, '../widgets/src/main/resources')
      })
    }),
    plugins: newPlugins,
    module: {
      rules: [...storybookBaseConfig.module.rules, ...cssLoaders]
    }
  })
}

const cssLoaders = [
  {
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    include: [paths.appSrc, paths.stylesSrc],
    use: [
      require.resolve('style-loader'),
      {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: true,
          importLoaders: 1,
          minimize: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: true }
      }
    ]
  }
]
