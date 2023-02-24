import theme from "@/src/theme/theme";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "store";
import { getComments } from "store/thunks/comments/comments";

const Comments = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query?.id;

  const { loading, comments } = useSelector((store) => store.commentsReducer);

  useEffect(() => {
    dispatch(getComments({ postId: Number(id) }));
  }, [dispatch, id]);

  return (
    <Stack spacing={2} maxWidth="md" mx="auto" mt={5}>
      <Typography color="primary" variant="h5" textAlign="center">
        Comments
      </Typography>
      {comments.map(({ id, name, body }) => (
        <CommentContainer key={id}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name:{name}
          </Typography>
          <Typography variant="body2">{body}</Typography>
        </CommentContainer>
      ))}
    </Stack>
  );
};

const CommentContainer = styled(
  Box,
  {}
)(({}) => ({
  background: theme.palette.grey[100],
  padding: "1em",
  borderRadius: "0.5em",
}));

export default Comments;
