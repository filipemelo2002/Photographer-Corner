import React, { useState, useEffect } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import api from "../../service/api";
import { FaCamera, FaUserCog } from "react-icons/fa";
import "./styles.css";
export default function Admin({ history }) {
  const [alertVisible, setAlertVisible] = useState("none");
  const [variant, setVariant] = useState("");
  const [alertMessage, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  async function handleSignIn() {
    if (user.length === 0 || pass.length === 0) {
      setVariant("warning");
      setMessage("Ops!! Por favor, preencha todos os campos ;)");
      setAlertVisible("block");
    } else {
      try {
        const response = await api.post("/sessions", { user, pass });
        const usuario = response.data;
        localStorage.setItem("adminId", usuario.admin_authorization);
        window.location.reload(true);
        history.push("/");
      } catch (err) {
        setVariant("danger");
        setMessage(
          "Ops!! Por favor, verifique os dados inserídos e tente novamente! ;)"
        );
        setAlertVisible("block");
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem("adminId")) {
      history.push("/");
    }
  }, [history]);
  return (
    <>
      <div className="loginFormBody">
        <div className="loginFields">
          <div className="adminAvatar">
            <FaUserCog className="avatar" />
          </div>
          <div className="errorMessage" style={{ display: alertVisible }}>
            <Alert variant={variant} sylte={{ fontFamily: "arial" }}>
              {alertMessage}
            </Alert>
          </div>
          <Form>
            <Form.Group controlId="user">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                required={true}
                value={user}
                onChange={event => setUser(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="pass">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                required={true}
                value={pass}
                onChange={event => setPass(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="outline-dark"
              size="lg"
              block
              onClick={() => handleSignIn()}
            >
              Entrar <FaCamera />
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
