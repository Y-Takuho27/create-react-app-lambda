/* Register.js */
import React from "react"
import { Link } from "react-router-dom";
import "../App.css"
import logo from "../logo.svg"
import { Container, Row, Col, Button } from 'react-bootstrap';


const Register = () => {
  return (
    <>
      <div class="jumbotron">
      <Container>
        <Row>
        <h1 class="display-3">Hello, world!</h1>
        <Col>
        <p> ReactをWEBページを作成するためのチュートリアルページです<br/>
                前提として「Git」「node」の知識は持っているとして記載します。 </p>
        </Col>
        </Row>
        <Row>
        <Col><Link to={`/`}><Button variant="primary">ホーム画面に戻る</Button> </Link></Col>
        </Row>
        </Container>
    </div>
    <Container>
    <div class="my-3 p-3 bg-white rounded box-shadow">
    <h5 class="border-bottom border-gray pb-2 mb-0">React と ReactNativeに向くエンジニア</h5>
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">React</strong>
              <p class="card-text mb-auto">Reactは高速でスケーラブル、かつシンプルなWebアプリケーションの開発・構築プロセスを簡素化する事を目的に作られた言語です。<br/ >
              そのため、主にWEBアプリケーションを作成したいという目標のある方に向いてるプログラムになります。</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">React Native</strong>
              <p class="card-text mb-auto">ReactNativeは クロス プラットフォーム（Windows、Android、iOS）で共通化する事を目的に作られた言語です<br/ >
              そのため、主にサービスをクロスプラットフォームに提供したいという目的で利用可能な言語です。</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Container>
    <Container>
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <h5 class="border-bottom border-gray pb-2 mb-0">環境作成</h5>
        <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">下記、GitHubのソースコードをクローンする</strong> <br/> <a href="https://github.com/Y-Takuho27/create-react-app-lambda">
                <img alt="Github" src="https://gh-card.dev/repos/Y-Takuho27/create-react-app-lambda.svg"/></a> </p>
        </div>
        <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">クローンしたディレクトリ内で下記のコマンドを実行する</strong> <br/> <code>
                npm install
                </code> </p>
        </div>
        <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">コマンド実行で必要な前提プログラムがインストールされるため、本ディレクトリで下記のコマンドを実行する</strong> <br/> <code>
                npm start
                </code> </p>
        </div>
        <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">ターミナルに下記のコマンドが表示されれば、ローカルホストで本ページが開ければ完了</strong> <br/> <code>
                Compiled successfully!<br/>
                <br/>
                You can now view create-react-app-lambda in the browser.<br/>
                http://localhost:3001<br/>
                <br/>
                Note that the development build is not optimized.<br/>
                To create a production build, use yarn build.
                </code> </p>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Register;