В конфигурации используется регион us-west-1 (Калифорния).
### 1. Фронт на основе S3
[S3 Bucket: node-aws-react.s3-website-us-west-1.amazonaws.com](http://node-aws-react.s3-website-us-west-1.amazonaws.com/).

Автоматическое создание S3 Bucket: `serverless-bucket-only.yml`.
Запустить:
```
    npm run s3:setup
    npm run s3-client:build:deploy
```

>UPD. S3-bucket "node-aws-react" удалён, так как по заданию bucket с сайтом в открытом доступе должен быть подчищен. Поэтому, http://node-aws-react.s3-website-us-west-1.amazonaws.com/ открываться теперь не будет. Если же открылся, то в баузере надо обновить страницу Ctrl+F5.

### 2. Фронт на основе CloudFront
[CDN: d1c0lxidfgv32b.cloudfront.net](http://d1c0lxidfgv32b.cloudfront.net).
[S3 Bucket: node-aws-react-front.s3-website-us-west-1.amazonaws.com](http://node-aws-react-front.s3-website-us-west-1.amazonaws.com/)

Автоматическое создание CloudFront: `serverless-front.yml`.
Запустить:
```
    npm run cloudfront:setup
    npm run client:build:deploy
```

