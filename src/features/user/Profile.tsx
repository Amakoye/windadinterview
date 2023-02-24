import { setCurreuntUser } from "@/src/store/slices/users";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import NextLink from "components/NextLink";
import { useRouter } from "next/router";
import { AiFillEdit, AiOutlineLogout } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import theme from "theme/theme";

function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { users } = useSelector((store) => store.usersReducers);

  const { name, email, phone, website, username } = users.filter(
    (user) => user.id === Number(router.query?.id)
  )[0];

  return (
    <Stack>
      <Box mt={5} sx={{ display: "grid", placeItems: "center" }}>
        <Typography textAlign="center" color="primary" gutterBottom>
          Profile
        </Typography>
        <Card
          variant="outlined"
          sx={{
            width: matchesSM ? "90%" : 600,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <RxAvatar
                style={{
                  fontSize: 80,
                  color: theme.palette.primary.light,
                }}
              />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {username}
              </Typography>
            </Box>
            <Typography variant="body2">Name: {name}</Typography>
            <Typography variant="body2">Email: {email}</Typography>
            <Typography variant="body2">Phone: {phone}</Typography>
            <Typography variant="body2">Website: {website}</Typography>

            <Box
              sx={{
                marginTop: "1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1em",
              }}
            >
              <IconButton
                color="primary"
                sx={{
                  background: theme.palette.grey[200],
                }}
              >
                <AiFillEdit />
              </IconButton>

              <IconButton
                color="primary"
                onClick={() => {
                  dispatch(setCurreuntUser(null));
                  router.push("/");
                }}
                sx={{
                  background: theme.palette.grey[200],
                }}
              >
                <AiOutlineLogout />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <NextLink passHref href="/posts">
        <Typography color="primary" textAlign="center" mt={5}>
          View posts
        </Typography>
      </NextLink>
    </Stack>
  );
}

export default Profile;
