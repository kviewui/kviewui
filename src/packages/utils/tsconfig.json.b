{
    "compilerOptions": {
        "baseUrl": ".",
        "rootDir": ".",
        "jsx": "preserve",
        "strict": false,
        "target": "ESNext",
        "module": "ESNext",
        "skipLibCheck": true,
        "esModuleInterop": true,
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "sourceMap": false,
        "declaration": false,
        "removeComments": true,
        "experimentalDecorators": true,// 启动装饰器
        "lib": [
            "esnext",
            "dom"
        ],
        "rootDirs": [
            "./src",
            "./src/packages/components"
        ],
        "paths": {
            "@": [
                "src/"
            ],
            "@/*": [
                "."
            ]
        },
        "types": [
            "unplugin-vue-define-options/macros-global", 
            "vite/client",
            "@dcloudio/types",
            "@types/node"
        ]
    },
    "include": [
        "./**/*.ts",
        "./**/*.d.ts"
    ]
}