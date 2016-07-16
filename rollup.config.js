import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';

const includePathOptions = {
  paths: ['src/modules']
};

export default {
  entry: 'src/index.js',
  dest: 'dist/stats.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
    includePaths(includePathOptions)
  ]
}