import { Typography, Box, ButtonGroup, Button } from "@mui/material";

import styles from "../../styles/Home/FirstSec.module.scss";

const FirstSec = () => {
  return (
    <Box className={styles.FirstSec}>
      <Typography className={styles.heading}>Make the right choice</Typography>
      <Typography className={styles.heading}>
        to become a successful developer
      </Typography>
      <ButtonGroup variant="outlined" className={styles.btnCont}>
        <Button className={styles.buttons}>Full Stack</Button>
        <Button className={styles.buttons}>App Developer</Button>
        <Button className={styles.buttons}>DevOps</Button>
        <Button className={styles.buttons}>UI/UX</Button>
        <Button className={styles.buttons}>Blockchain</Button>
      </ButtonGroup>
    </Box>
  );
};

export default FirstSec;
