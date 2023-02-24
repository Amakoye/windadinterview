import { styled } from "@mui/material/styles";
import Link from "next/link";

const NextLink = styled(
  Link,
  {}
)<{}>(({}) => ({
  textDecoration: "none",
}));

export default NextLink;
