import path from 'path';

let input = 'src/packages/components/index.ts'

export default {
    input: 'index.js',
    output: {
        format: 'es',
        file: 'dist/kviewui.es.js'
    },
    external: ['vue', '@kviewui-utils']
}