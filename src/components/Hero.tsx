const city = require("../assets/city.png");
const androidIcon = require("../assets/android.png");
const appleIcon = require("../assets/apple.png");

export const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${city})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-start", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
      }}
    >
      <div
        style={{
          color: "white", // Asegúrate de que el texto sea legible sobre tu fondo
          textAlign: "center",
          width: "600px",
          maxWidth: "80%", // Controla el ancho del texto
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente para mejorar la legibilidad
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <h1>Welcome to Urban Tales</h1>
        <p>
          Step into Urban Tales, where every corner tells a unique story,
          unveiling mysteries and legends.
        </p>
        <p>
          Discover tales of romance, drama, and adventure. There's a story for
          every mood, waiting to resonate with you.
        </p>
        <p>
          <strong>Get ready to experience the city like never before.</strong>
        </p>
        <a href={process.env.REACT_APP_ANDROID_LINK} style={buttonStyle}>
          <img src={androidIcon} alt="Android" style={iconStyle} />
          Download for Android
        </a>
        <a href={process.env.REACT_APP_IOS_LINK} style={buttonStyle}>
          <img src={appleIcon} alt="iOS" style={iconStyle} />
          Download for iOS
        </a>
      </div>
    </div>
  );
};

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "5px",
  textDecoration: "none",
  boxShadow: "0 2px 3px rgba(0, 0, 0, 0.2)",
};

const iconStyle = {
  width: "24px",
  height: "24px",
  marginRight: "10px",
};
