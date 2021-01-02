import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
    ],
    plugins: [peerDepsExternal(), typescript()],
};
