import { useSelector } from "@/src/store";
import theme from "@/src/theme/theme";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import NextLink from "components/NextLink";
import { FC } from "react";

const Post: FC<PostProps> = ({ id, userId, body, title }) => {
  const { user } = useSelector((store) => store.usersReducers);

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
      <CardActions
        sx={{
          display: "flex",
          gap: "1em",
        }}
      >
        <NextLink passHref href={`/posts/${id}/comments`}>
          <Btn variant="contained" disableRipple size="small">
            Comments
          </Btn>
        </NextLink>
        <Btn
          variant="outlined"
          disableRipple
          size="small"
          disabled={user?.id !== userId}
        >
          Edit
        </Btn>
        <Btn
          variant="contained"
          disableRipple
          size="small"
          disabled={user?.id !== userId}
          sx={{
            background: theme.palette.error.main,
            "&:hover": {
              background: theme.palette.error.dark,
            },
          }}
        >
          Delete
        </Btn>
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
