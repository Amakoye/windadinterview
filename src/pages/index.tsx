import SignIn from "features/auth/SignIn";
import { useEffect } from "react";
import { useDispatch } from "store";
import { getUsers } from "store/thunks/users";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <SignIn />
    </>
  );
}
