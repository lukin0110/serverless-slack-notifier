# Development

## Upload to npm registry
```
$ npm publish
```

## what if the _meta folder is gone?

The `_meta` folders is added to the `.gitignore` file. This folder contains your custom configuration and might 
disappear. Execute the following command:

```
$ serverless project init
```

And re