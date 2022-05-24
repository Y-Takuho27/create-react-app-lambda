/* Register.js */
import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, DropdownButton, Accordion } from 'react-bootstrap';

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
                        <Col>
                            <DropdownButton
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
                    <p>本ページでは App.js に記載されている内容の意味などをまとめていきます。 <br />
                        また、本記載は「2022年5月25日」現在の最新版の下記App.jsを参照していることをご了承ください。</p>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i class="far fa-paper-plane text-primary pe-2"></i> 「2022年5月25日」の「App.js」を確認する</Accordion.Header>
                            <Accordion.Body>
                                <pre><code>{`
                    import React from "react";
                    import { HashRouter, Routes, Route } from "react-router-dom";
                    import Home from "./page/Home";
                    import TOP from "./page/Top";
                    import QA from "./page/QA";
                    import TP1 from "./page/tutorial/tutorial1"
                    import TP2 from "./page/tutorial/tutorial2"
                    import 'bootstrap/dist/css/bootstrap.min.css';
                    import './index.css';

                    const App = () => {
                      return (
                    <HashRouter>
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/top/'} element={<TOP />} />
                            <Route path={'/qa/'} element={<QA />} />
                            <Route path={'/tutorial/tp1/'} element={<TP1 />} />
                            <Route path={'tutorial/tp2/'} element={<TP2 />} />
                        </Routes>
                    </HashRouter>
                    );
                    };
                    export default App;
                    `}
                                </code></pre>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <h5 class="border-bottom border-gray pb-2 mb-0">App.jsとは</h5><br />
                <p>本ページではApp.jsは「ページ」を開いた際にどのページでも必ず実行をする必要がある処理を記載しています。<br />
                    一例ですが、この後表示される「react-router-dom"（ページ遷移を制御するライブラリ）」などはこのプログラムに記載します。<br />
                    <br />
                    ※ 飽くまでもApp.jsを本ページでは上記の使い方をしており、参画する要件によっては同じ役割でもファイル名が異なる可能性があります。
                </p>
                <h5 class="border-bottom border-gray pb-2 mb-0">それぞれのタグの意味</h5><br />
                <h6 class="border-bottom border-gray pb-2 mb-0">import ○○ from "■■" とは？</h6><br />
                <p>このような記載は ○○ という名前の処理を ■■ というライブラリを読み込んでください。という指示のために利用されます。<br />
                    一例を記載すると「import {'HashRouter, Routes, Route'} from "react-router-dom";」の場合は 「react-router-dom」というライブラリから
                    「HashRouter, Routes, Route」という機能を読み込んでくださいというような事です。
                </p>
                <h6 class="border-bottom border-gray pb-2 mb-0">Routerとは？</h6><br />
                <p>ファイルを見ると所々で「Router」という言葉が表示されていると思います。<br />
                    この記載はどのURLが、どのリクエストに紐づいているのかを設定するために記載しており<br />
                    <br />
                    例をあげると「/top/」という階層をユーザーが踏んだ際に<br />
                    「import TOP from "./page/Top";」から読み込んだファイルを表示してください<br />
                    というような処理をこのページで実行するために表示をしているものです。<br />
                </p>
            </Container>
        </>
    );
};

export default Register;