import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import NextLink from "components/NextLink";
import { useRouter } from "next/router";
import { FC } from "react";

const Post: FC<PostProps> = ({ id, userId, body, title }) => {
  const router = useRouter();

  return (
    <CardContainer variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" textAlign="justify">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <NextLink passHref href={`/posts/${id}/comments`}>
          <Btn variant="contained" disableRipple size="small">
            Comments
          </Btn>
        </NextLink>
      </CardActions>
    </CardContainer>
  );
};

const CardContainer = styled(
  Card,
  {}
)<{}>(({}) => ({
  maxWidth: 350,
}));

const Btn = styled(
  Button,
  {}
)<{}>(({}) => ({
  textTransform: "none",
}));

type PostProps = {
  userId: number;
  title: string;
  body: string;
  id: number;
};
export default Post;
