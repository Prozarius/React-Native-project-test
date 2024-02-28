module.exports = {
    "env":{
        "browser": true,
        "es2021": true
    },
    "extends": {
        "eslint:recommended":any,
        "plugin:react/recommended":any,
        "@react-native-community":any
    },
    "parserOptions":{
        "ecmaVersion": "latest",
        "sourceType":"module"
    },
    "plugins":[
        "react"
    ],
    "rules":{
        semi: ['error', 'never'],
        'comma-dangle': [2, 'never'],
        'react/jsx-filename-extention':[1, {extension: ['.js', '.jsx']}],
        'no-use-before-define':[
            'error',
            {functions: true, classes: true, variables: false}
        ]
    }
}