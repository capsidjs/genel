import buble from 'rollup-plugin-buble'

export default {
  input: 'index.js',
  output: {
    format: 'umd',
    strict: false
  },
  name: 'genel',
  plugins: [ buble() ]
}
