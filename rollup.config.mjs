import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const bundle = (...configs) => {
  const build = ({ ext, minified, ...config }) => ({
    ...config,
    input: 'src/index.ts',
    external: (id) => !/^[./]/.test(id),
    output: {
      ...config.output,
      file: `${config.output.file}.${minified ? `min.${ext}` : `${ext}`}`,
      exports: 'named',
      // sourcemap: true,
    },
    plugins: config.plugins,
  });

  return [
    ...configs.map((config) => ({
      ...build(config),
    })),
  ];
};

export default async function () {
  return [
    ...bundle(
      // {
      //   output: { file: 'lib/index', format: 'cjs' },
      //   plugins: [esbuild()],
      //   ext: 'js',
      // },
      {
        output: { file: 'lib/index', format: 'cjs' },
        plugins: [esbuild({ minify: true })],
        minified: true,
        ext: 'js',
      },
      {
        output: { file: 'lib/index', format: 'cjs' },
        plugins: [dts()],
        ext: 'd.ts',
      },
      // {
      //   output: { file: 'dist/shochu', format: 'umd', name: 'shochu' },
      //   plugins: [esbuild()],
      //   ext: 'js',
      // },
      {
        output: { file: 'dist/shochu', format: 'umd', name: 'shochu' },
        plugins: [esbuild({ minify: true })],
        minified: true,
        ext: 'js',
      }
    ),
  ];
}
