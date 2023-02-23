import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const Post: FC<PostProps> = ({ id, userId, body, title }) => {
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
    </CardContainer>
  );
};

const CardContainer = styled(
  Card,
  {}
)<{}>(({}) => ({
  maxWidth: 350,
}));

type PostProps = {
  userId: number;
  title: string;
  body: string;
  id: number;
};
export default Post;
