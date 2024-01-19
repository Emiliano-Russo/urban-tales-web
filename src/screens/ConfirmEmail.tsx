import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Spin, message } from "antd";
import { UserService } from "../services/user.service";
import { useLocation } from "react-router-dom";

const userService = new UserService(process.env.REACT_APP_API_URL!);

export const ConfrimEmail = () => {
  const location = useLocation();
  const [valid, setValid] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    if (token != null)
      userService
        .verifyEmail(token)
        .then((val) => {
          message.success("Confirmed :)");
          setValid(true);
        })
        .catch((err) => {
          message.error("Error");
          setValid(false);
        });
  }, []);

  const getQueryStringValue = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  // Obtener el token
  const token = getQueryStringValue("token");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {valid == undefined ? (
        <Spin style={{ marginTop: "20px" }} size="large" />
      ) : valid ? (
        <h1 style={{ textAlign: "center" }}>Email Confirmed ✅</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Error</h1>
      )}
    </div>
  );
};
