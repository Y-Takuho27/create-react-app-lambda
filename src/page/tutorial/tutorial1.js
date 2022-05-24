/* Register.js */
import React from "react"
import { Link } from "react-router-dom";
import logo from "../../logo.svg"
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

const Register = () => {
    return (
        <>
            <div class="jumbotron">
                <Container>
                    <Row>
                        <h1 class="display-3">Hello, world!</h1>
                        <Col>
                            <p> ReactでWEBページを作成するためのチュートリアルページです<br /></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Link to={`/top/`}><Button variant="primary">ホームへ戻る</Button> </Link></Col>
                        <Col><Link to={`/qa/`}><Button variant="primary">Q&Aページ</Button> </Link></Col>
                        <Col>         <DropdownButton
                            variant="primary"
                            title="チュートリアル一覧へ"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="/#/tutorial/tp1/">1. 環境作成</Dropdown.Item>
                            <Dropdown.Item href="/#/tutorial/tp2/">2. App.jsの仕組みについて</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">作成中</Dropdown.Item>
                        </DropdownButton></Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div class="my-3 p-3 bg-white rounded box-shadow">
                    <h5 class="border-bottom border-gray pb-2 mb-0">概要</h5><br />
                    <p>本ページでは、本WEBサイトをローカル環境で表示する方法を学習していきます</p>
                </div>
                <div class="my-3 p-3 bg-white rounded box-shadow">
                    <h5 class="border-bottom border-gray pb-2 mb-0">作業手順</h5>
                    <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">下記、GitHubのソースコードをクローンする</strong>
                            <a href="https://github.com/Y-Takuho27/create-react-app-lambda">
                                <img class="img-fluid" alt="Github" src="https://gh-card.dev/repos/Y-Takuho27/create-react-app-lambda.svg" />
                            </a>
                        </p>
                    </div>
                    <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">クローンしたディレクトリ内で下記のコマンドを実行する</strong> <br /> <code>
                            npm install
                        </code> </p>
                    </div>
                    <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">コマンド実行で必要な前提プログラムがインストールされるため、本ディレクトリで下記のコマンドを実行する</strong> <br /> <code>
                            npm start
                        </code> </p>
                    </div>
                    <div class="media text-muted pt-3"> <img src={logo} className="App-logo" alt="logo" class="mr-2 rounded" width="32px" height="32px" />
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong class="d-block text-gray-dark">ターミナルに下記のコマンドが表示されれば、ローカルホストで本ページが開ければ完了</strong> <br />
                            <code>
                                Compiled successfully!<br />
                                <br />
                                You can now view create-react-app-lambda in the browser.<br />
                                http://localhost:3001<br />
                                <br />
                                Note that the development build is not optimized.<br />
                                To create a production build, use yarn build.
                            </code> </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Register;