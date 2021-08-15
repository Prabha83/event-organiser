import { useEffect } from "react";
import withAuth from "@src/hocs/withAuth";
import { useAuth } from "@src/providers/AuthProvider";

function Signout() {
  const { setAuthenticated } = useAuth();

  useEffect(() => {
    async function doSignout() {
      const response = await fetch("/api/logout");
      if (response.status === 200) {
        setAuthenticated(false);
      } else {
        console.log("failed to logout", response);
      }
    }
    doSignout();
  }, [setAuthenticated]);

  return <p>Signing out...</p>;
}

export default withAuth(Signout, "/");
