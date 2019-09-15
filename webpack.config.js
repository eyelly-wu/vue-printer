const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env) => {
  let target = ''
  switch (env) {
    case 'dist':
      target = 'var'
      break
    case 'lib':
      target = 'commonjs2'
      break
  }
  return {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      path: resolve(__dirname, env),
      filename: 'index.js',
      library: 'Printer',
      libraryTarget: target
    },
    resolve: {
      extensions: ['vue', '.ts', '.js']
    },
    externals: {
      vue: {
        umd: 'Vue',
        commonjs: 'Vue',
        commonjs2: 'Vue',
        root: 'Vue'
      }
    },
    module: {
      rules: [
        {
          test: /.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  'targets': {
                    'esmodules': false
                  },
                  'modules': 'umd'
                }],
              '@babel/preset-typescript'
            ],
            plugins: ["add-module-exports"]
          }
        },
        {
          test: /.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}
