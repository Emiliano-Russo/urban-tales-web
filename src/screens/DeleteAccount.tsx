import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Button, Input, message } from "antd";
import { UserService } from "../services/user.service";

console.log("API URL", process.env.REACT_APP_API_URL);

const userService = new UserService(process.env.REACT_APP_API_URL!);

export const DeleteAccount = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const cleanUp = () => {
    setEmail("");
    setPassword("");
  };

  const deleteAccount = () => {
    console.log("sending login");
    setLoading(true);
    userService
      .loginUser(email, password)
      .then((res: any) => {
        if (res.status == 401) {
          message.error("error bad credentials");
          setLoading(false);
          return;
        }
        console.log("res", res);
        localStorage.setItem("token", res.accessToken);
        userService
          .deleteAccount()
          .then((res) => {
            message.success("deleted account");
          })
          .catch((err) => {
            message.error("error deleting account");
          })
          .finally(() => {
            cleanUp();
            setLoading(false);
          });
      })
      .catch((err) => {
        message.error("error bad credentials");
        console.error(err.message);
      });
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>We are sad :'(</h1>
        <p>in order to delete your account please complete with your credentials</p>
        <Input
          disabled={loading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "200px" }}
          placeholder="Email"
        />
        <br />
        <Input.Password
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "200px", marginTop: "10px" }}
          placeholder="Password"
        />
        <br />
        <Button loading={loading} style={{ marginTop: "20px" }} onClick={() => deleteAccount()}>
          Delete Account{" "}
        </Button>
      </div>
    </div>
  );
};
