## Create-React-App-Lambda

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg?utm_source=github&utm_medium=swyx-CRAL&utm_campaign=devex)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda&utm_source=github&utm_medium=swyx-CRAL&utm_campaign=devex)

## チュートリアル

1. GitHubからこのリポジトリをクローン
2. クローンしたディレクトリ内で下記のコマンドを実行する

```
npm install
```

3. コマンド実行で必要な前提プログラムがインストールされるため
　 再度、本ディレクトリで下記のコマンドを実行する

```
npm start
```

4. ターミナルに下記のコマンドが表示されれば、成功
```
Compiled successfully!

You can now view create-react-app-lambda in the browser.

  http://localhost:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

## ファイル構成

```shell
.
├── README.md //説明ファイル
├── built-lambda //サイトビルド後にlambdaのプログラム格納をするディレクトリ
│   ├── async-dadjoke.js // サンプルプログラムA
│   └── hello.js // // サンプルプログラムB
├── netlify.toml //netlify  デプロイ時の校正用ファイル
├── package-lock.json // npmのpackge-lockファイル
├── package.json  // npmのpackgeファイル
├── public //　アセットフォルダ
│   ├── favicon.ico //画像ファイル
│   ├── index.html //それぞれのページに共通で使用するベースのHTML
│   └── manifest.json //上記 2フォルダの設定ファイル
├── src // その他流動的に変化するReactファイル
│   ├── App.css //CSSファイル
│   ├── App.js // サイトの遷移設定などを記載しているファイル（例：/home/ を開くと /page/Home.jsの中身を描画する等）
│   ├── index.css //CSSファイル
│   ├── index.js //テンプレートファイル
│   ├── lambda //
│   ├── logo.svg // svgファイル
│   ├── page //ページを構成するファイル
│   │   ├── Home.js // 「 http://localhost:3000/home/」にアクセスした際にレンダリングするファイル
│   │   ├── QA.js //「「 http://localhost:3000/qa/ 」にアクセスした際にレンダリングするファイル
│   │   └── Top.js //「 「 http://localhost:3000/ 」にアクセスした際にレンダリングするファイル
│   └── serviceWorker.js // Service Worker の制御ファイル
└── yarn.lock // npm環境をyarnで実行する場合の .lockファイル

1097 directories, 16 files

```