module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ['standard', 'eslint-config-standard-with-typescript', 'prettier'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                ".prettierrc.json"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
        'prettier'
    ],
    "rules": {
        'prettier/prettier': 'error'
    }
}
