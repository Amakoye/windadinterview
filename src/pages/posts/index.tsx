import Typography from "@mui/material/Typography";
import Posts from "features/posts";

export default function PostsPage() {
  return (
    <>
      <Typography color="primary" variant="h3" textAlign="center" mt={2}>
        All Posts
      </Typography>
      <Posts />
    </>
  );
}
