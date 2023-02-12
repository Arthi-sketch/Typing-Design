import Card from "../comps/card";
import Button from "../comps/button";
import styles from "../styles/popup.module.css";
import { Zoom } from "react-reveal";
import { useRouter } from "next/router";
import ReplayIcon from "@mui/icons-material/Replay";
import { useEffect } from "react";
import { useState } from "react";

export default function Popup() {
  const router = useRouter();
  const [wpm, setWpm] =useState(0);
  const [acc, setAcc] =useState(0);

  //prevent routing
  if (typeof window !== "undefined" && localStorage.getItem("status") === "false")
    router.push("/");

  useEffect(function() {
    setWpm(localStorage.getItem("wpm")) ;
    setAcc(localStorage.getItem("acc"));
      // console.log(wpm, acc);
  });

  return (
    <Zoom>
      <Card location="pop">
        <div className={styles.popupWindow}>
          <div className={styles.scores}>
            <Button score={wpm} title="Speed-WPM" radius="L" />
            <Button score={acc} title="Accuracy" radius="R" />
          </div>
          <div className={styles.refresh}>
            <Button
              score={
                <ReplayIcon
                  sx={{
                    animation: "spin 2s linear infinite",
                    "@keyframes spin": {
                      "0%": {
                        transform: "rotate(360deg)",
                      },
                      "100%": {
                        transform: "rotate(0deg)",
                      },
                    },
                  }}
                />
              }
              radius="O"
            />
          </div>
        </div>
      </Card>
    </Zoom>
  );
}
