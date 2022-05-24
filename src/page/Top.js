/* Register.js */
import React from "react"
import { Link } from "react-router-dom";
import "../App.css"
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <div class="jumbotron">
        <Container>
          <Row>
            <h1 class="display-3">Hello, world!</h1>
            <p> ReactでWEBページを作成するためのチュートリアルページです</p>
            <Row>
              <Col><Link to={`/qa/`}><Button variant="primary">Q&Aページ</Button> </Link></Col>
              <Col>            <DropdownButton
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
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div class="my-3 p-3 bg-white rounded box-shadow">
          <h5 class="border-bottom border-gray pb-2 mb-0">前提</h5><br />
          <p>HTML と JavaScript に多少慣れていることを想定しており<br />
            <a href="https://brew.sh/index_ja">Homebrew</a> 及び <a href="https://nodejs.org/ja/">Node.js</a> の環境が構築済みという前提の上で本チュートリアルは記載しています<br />
            <br />
            また、関数、オブジェクト、配列における概念について、馴染みがあることを想定しています。</p>
        </div>
      </Container>
    </>
  );
};

export default Register;