import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/Form";
import "./accounts.css";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { useLogInMutation } from "../../store/accountApi";
import { useCallback } from "react";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { updateField } from "../../store/accountSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = useSelector((state) => state.account);
  const [logIn] = useLogInMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  return (
    <Container className="form-login card shadow p-4 mt-5 d-grid">
      <div className="d-flex justify-content-center mt-2">
        <Image src={logo} style={{ width: "6rem" }} />
      </div>
      <div className="text-center mt-3">
        <h5>Please sign in</h5>
      </div>
      <Form
        className="mt-3 mb-3 w-100 justify-content-center"
        method="POST"
        onSubmit={ (e) => {
          e.preventDefault()
          logIn(e.target)
          navigate('/')
        }
      }
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            onChange={field}
            value={email}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            onChange={field}
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="md" variant="info" type="submit">
            Sign in
          </Button>
        </div>
      </Form>
      <div className="text-center">
        <p>Don't have an account?</p>
        <p>
          Create one{" "}
          <Link className="link" to="/signup">
            {" "}
            here!
          </Link>
        </p>
      </div>
    </Container>
  );
}
export default Login;
