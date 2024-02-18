# Cognitoユーザープールのアクセストークンカスタマイズ機能がリリースされたので試してみる

## はじめに
[Cognitoユーザープールのアクセストークンカスタマイズ機能がリリースされたので試してみる記事内](https://zenn.dev/souhub/articles/8206715fe713c4)で使用したサンプルコードです。
## 構成
- `cognito-client`: Cognitoユーザープールのクライアントアプリケーション
- `pre-token-generation-trigger`: CognitoユーザープールのPre Token Generation Triggerを実装したLambda関数

## セットアップ
### 1. Cognitoユーザープールの作成
Cognitoユーザープールを作成する。
App Clientの設定で`Public client`を選択し、作成しておく。

### 2. クライアントアプリケーションの設定と起動
`cognito-client`ディレクトリに移動し、以下のコマンドを実行。
```bash
$ cd cognito-client

$ amplify init # デフォルトの設定で進める

$ amplify import auth 
# Cognito User Pool onlyを選択
# 1で作成したCognitoユーザープールを選択

$ npm install

$ npm run start
```

### 3. Lambda関数のデプロイ
`pre-token-generation-trigger`ディレクトリに移動し、以下のコマンドを実行。
```bash
sam build && sam deploy --guided
```

### 5. 記事内の手順に従ってデモを行ってみる

