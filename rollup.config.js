import buble from 'rollup-plugin-buble'

export default {
  input: 'index.js',
  output: {
    format: 'umd'
  },
  name: 'genel',
  plugins: [ buble() ]
}
