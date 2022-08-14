import { AppBar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar/Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();
  const [windowScrollVal, setWindowScrollVal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20
        ? setWindowScrollVal(true)
        : setWindowScrollVal(false);
    });
  }, [windowScrollVal]);
  return (
    <AppBar
      className={styles.Navbar}
      style={
        router.pathname === "/"
          ? windowScrollVal
            ? { borderBottom: "1px solid #d4d4d4" }
            : { borderBottom: "0px" }
          : { borderBottom: "1px solid #d4d4d4" }
      }
    >
      <Link href="/">
        <a className={styles.logoCont}>
          <Image src="/Logo.png" alt="wayfordev" width="40px" height="40px" />
          <Typography className={styles.title}>WayForDev</Typography>
        </a>
      </Link>
      <Box className={styles.linksCont}>
        <Link href="/allpaths">
          <Button
            variant="outlined"
            className={styles.btns}
            style={
              router.pathname === "/allpaths"
                ? { backgroundColor: "#f5ae14" }
                : { backgroundColor: "#fff" }
            }
          >
            All Paths
          </Button>
        </Link>
        <Link href="/findapi">
          <Button
            variant="outlined"
            className={styles.btns}
            style={
              router.pathname === "/findapi"
                ? { backgroundColor: "#f5ae14" }
                : { backgroundColor: "#fff" }
            }
          >
            Api
          </Button>
        </Link>
      </Box>
    </AppBar>
  );
}
