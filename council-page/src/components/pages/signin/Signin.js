import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./signin.css";

function Login() {
    return (
        <div className="login-box">
            <Container id="panel">
                <div className="form-title">로그인</div>
                <Form className="form">
                {/* <div className="form-title">로그인</div> */}
                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                    >
                        <Col sm>
                            <Form.Control
                                type="password"
                                placeholder="UserID"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                    >
                        <Col sm>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
