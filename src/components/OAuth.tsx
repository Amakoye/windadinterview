import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <OAuthBtn variant="outlined" fullWidth>
      <FcGoogle
        style={{
          marginRight: "0.5em",
        }}
      />
      Sign with Google
    </OAuthBtn>
  );
}

const OAuthBtn = styled(
  Button,
  {}
)(({}) => ({
  textTransform: "none",
  marginBottom: "1em",
}));

export default OAuth;
