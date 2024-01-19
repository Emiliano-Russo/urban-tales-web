import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserService } from "../services/user.service";
import { Button, Input, Spin, message } from "antd";
import { Header } from "../components/Header";

const userService = new UserService(process.env.REACT_APP_API_URL!);

export const ResetPassword = () => {
  const location = useLocation();
  const [valid, setValid] = useState<boolean | undefined>(undefined);
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Función para parsear la query string
  const getQueryStringValue = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const resetPassword = () => {
    if (token == null) return message.error("token empty");
    if (password != repeatPassword)
      return message.error("The passwords do not match");
    setLoading(true);
    console.log("New PASSWORD", password);
    userService
      .resetPassword(token, password)
      .then((res) => {
        message.success("Password Successfully Changed");
        setDone(true);
      })
      .catch(() => {
        message.error("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Obtener el token
  const token = getQueryStringValue("token");

  useEffect(() => {
    if (token != null)
      userService
        .verifyResetToken(token)
        .then((val) => {
          message.success("Hello :)");
          console.log("val", val);
          setValid(true);
        })
        .catch((err) => {
          message.error("Error");
          setValid(false);
        });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Header />
      {valid == undefined && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>Loading</h2>
          <Spin size="large" />
        </div>
      )}
      {valid ? (
        done ? (
          <>
            <h1 style={{ textAlign: "center" }}>
              Password Successfully Changed 🎉
            </h1>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "40px",
            }}
          >
            <Input.Password
              style={{ width: "200px", margin: "5px" }}
              placeholder="new password"
              value={password}
              onChange={(e) => {
                e.preventDefault();
                const text = e.target.value;
                setPassword(text);
              }}
            />

            <Input.Password
              style={{ width: "200px", marginBottom: "20px" }}
              placeholder="repeat password"
              value={repeatPassword}
              onChange={(e) => {
                e.preventDefault();
                const text = e.target.value;
                setRepeatPassword(text);
              }}
            />
            <Button loading={loading} onClick={resetPassword}>
              Reset Password
            </Button>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Invalid Token</h1>
        </div>
      )}
    </div>
  );
};
