import buble from 'rollup-plugin-buble'

export default {
  input: 'index.js',
  output: {
    name: 'genel',
    format: 'umd',
    strict: false
  },
  plugins: [ buble() ]
}
