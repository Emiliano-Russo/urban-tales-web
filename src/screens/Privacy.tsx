import { Header } from "../components/Header";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export const Privacy = () => {
  const whiteTextStyle = { color: "white" }; // Style object for white text

  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div style={{ padding: "2% 5%", textAlign: "left" }}>
        <Title style={whiteTextStyle} level={2}>
          Urban Tales Privacy Policy
        </Title>
        <Paragraph style={whiteTextStyle}>
          <strong>Last updated:</strong> 23/11/2023
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          1. Information We Collect
        </Title>
        <Paragraph style={whiteTextStyle}>
          When registering on Urban Tales, we ask users to provide their name, email and password.
          <br />
          Additionally, for users who write a tale, we collect tale-related information such as narrative title, mark,
          and type of tale.
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          2. How We Use the Information
        </Title>
        <Paragraph style={whiteTextStyle}>
          We use the provided information to allow users to make and read new tales.
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          3. Data Protection
        </Title>
        <Paragraph style={whiteTextStyle}>
          The security of your data is important to us. The user's password is stored in an encrypted form, and we take
          security measures to protect against unauthorized access, alteration, disclosure, or destruction of your
          personal information.
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          4. User Rights
        </Title>
        <Paragraph style={whiteTextStyle}>
          Users have the right to access, correct, or delete their personal information at any time. To do so, they can
          contact us through support@urbantales.club
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          5. Changes to This Policy
        </Title>
        <Paragraph style={whiteTextStyle}>
          We may update our privacy policy from time to time. Any changes to this policy will be posted on this page,
          and if the changes are significant, we will provide a more prominent notice.
        </Paragraph>

        <Title style={whiteTextStyle} level={3}>
          6. Contact
        </Title>
        <Paragraph style={whiteTextStyle}>
          If you have questions about this privacy policy, please contact us at <strong>support@urbantales.club</strong>
        </Paragraph>
      </div>
    </div>
  );
};
