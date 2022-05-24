/*  Home.js */
import React from "react"
import "../App.css"
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="jumbotron">
        <Container>
          <Row>
            <h1 class="display-3">Hello, world!</h1>
            <Col>
              <p> 「Q&A」ページです</p>
            </Col>
          </Row>
          <Row>
            <Col><Link to={`/top/`}><Button variant="primary">ホーム画面に戻る</Button> </Link></Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h3 class="text-center mb-4 pb-2 text-primary fw-bold">Q&A</h3>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><i class="far fa-paper-plane text-primary pe-2"></i> Node.js について、学習して置くべきことはある？</Accordion.Header>
            <Accordion.Body>
              特に事前に勉強をするというところはないと思います。<br />
              （※ Node.jsの環境作成ぐらいです。）<br />
              <br />
              最初の認識としては <strong><u>Node.js</u></strong> という環境で当サイトは動作しており、
              ライブラリ等の追加やビルド環境として利用しているというの認識を持って頂けると幸いです。
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><i class="fas fa-pen-alt text-primary pe-2"></i> Netlifyとは？</Accordion.Header>
            <Accordion.Body>
              <strong>「<u><a href="https://www.netlify.com/">Netlify</a>」</u></strong>は静的ウェブサイトのためのホスティングサービスとサーバーレスのバックエンドサービスの一つです。<br /><br />
              ファイル構成などにもサーバーを公開する関係で関係ファイルは多数ありますが
              「React」を勉強する 本チュートリアルでは不要な項目のため、操作方法などは抜粋します。<br />
              <br />
              <div class="text-muted">※本チュートリアルでは「npm start」を利用するローカル環境をご利用頂く想定になります。</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><i class="fas fa-solid fa-chess-pawn text-primary pe-2"></i>サイト構成ファイルの概要を教えてほしい。</Accordion.Header>
            <Accordion.Body>
              下記の本サイトのソースコードで利用している<br />
              最新版のフォルダの概要を記載しておりますので、ご参照ください。<br /><br />
              ※緑文字のファイルについては本チュートリアルでは利用致しません。<br />
              <hr></hr>
              <code>
                .<br />
                ├── <font class="text-success">README.md //README</font><br />
                ├── <font class="text-success">built-lambda //ビルドフォルダ</font><br />
                │   ├── <font class="text-success">async-dadjoke.js // サンプルプログラムA</font><br />
                │   └── <font class="text-success">hello.js // // サンプルプログラムB</font><br />
                ├── <font class="text-success">netlify.toml //netlify  デプロイ用設定ファイル</font><br />
                ├── package-lock.json // npmのpackge-lockファイル<br />
                ├── package.json  // npmのpackgeファイル<br />
                ├── public //　アセットフォルダ<br />
                │   ├── favicon.ico //画像ファイル<br />
                │   ├── index.html //それぞれのページに共通で使用するベースのHTML<br />
                │   └── manifest.json //上記 2フォルダの設定ファイル<br />
                ├── src // その他流動的に変化するReactファイル<br />
                │   ├── App.css //CSSファイル<br />
                │   ├── App.js // サイトの遷移設定などを記載しているファイル（例：/home/ を開くと /page/Home.jsの中身を描画する等）<br />
                │   ├── index.css //CSSファイル<br />
                │   ├── index.js //テンプレートファイル<br />
                │   ├── lambda // lambda プログラムを実行する使用する場合の格納先<br />
                │   ├── logo.svg // svgファイル<br />
                │   ├── page //ページを構成するファイル<br />
                │   │   ├── Home.js // 「 http://localhost:3000/home/」にアクセスした際にレンダリングするファイル<br />
                │   │   ├── QA.js //「「 http://localhost:3000/qa/ 」にアクセスした際にレンダリングするファイル<br />
                │   │   └── Top.js //「 「 http://localhost:3000/ 」にアクセスした際にレンダリングするファイル<br />
                │   └── <font class="text-success">serviceWorker.js // Service Worker の制御ファイル</font><br />
                └── <font class="text-success">yarn.lock // npm環境をyarnで実行する場合の .lockファイル</font><br />
              </code>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};
export default Home;