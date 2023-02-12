import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../comps/card";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  const router = useRouter();
  let Accuracy=0, WPM=0;
  //protect route
  if (typeof window !== "undefined" && localStorage.getItem("status") !== "true") {
    localStorage.setItem("status", false);
    // console.log("1 ", localStorage.getItem("status"));
  }
  if (typeof window !== "undefined" && localStorage.getItem("status") === "true") 
    router.push("/popup");

  
  const quote = "once upon a time";
  let clock=0;

  let [userStr, setUserStr] = useState("");
  let [count, setCount] = useState(0);
  let [timer, setTimer] = useState(0);

  if (count > 0 && userStr.length !== quote.length && typeof window !== "undefined" && localStorage.getItem("status") === "false") {
    clock=setInterval(() => {
      setTimer(timer + 1);
      console.log(timer);
    }, 1000);
  }

  function userInput(e) {
    setCount(count + 1);
    userStr = userStr + e.key;
    let backspaceOn = false;

    if (e.key === "Backspace") {
      userStr = userStr.slice(0, -10);
      backspaceOn = true;
    }
    setUserStr(userStr);
    // console.log("userStr: " + userStr);

    userStr.split("").map((char, i) => {
      // console.log("quote: " + quote[i] + " user: " + char);
      if (quote[i] !== char) {
        document.getElementsByClassName("cursor")[i].style.color = "red";
        if (quote[i] === " ") {
          document.getElementsByClassName("cursor")[i].style.background = "red";
          document.getElementsByClassName("cursor")[i].style.opacity = "0.5";
        }
      } else {
        document.getElementsByClassName("cursor")[i].style.color = "green";
        if (quote[i] === " ") {
          document.getElementsByClassName("cursor")[i].style.background =
            "green";
          document.getElementsByClassName("cursor")[i].style.opacity = "0.5";
        }
      }
    });

    if (backspaceOn === true) {
      // console.log("userStr in bc: " + userStr);
      if (quote[userStr.length] === " ") {
        document.getElementsByClassName("cursor")[
          userStr.length
        ].style.background = "none";
      }
      document.getElementsByClassName("cursor")[userStr.length].style.color =
        "#222";
      backspaceOn = false;
    }

    if (userStr.length === quote.length) {
      clearInterval(clock);
      //Accuracy calculation
      Accuracy = 0;
      for (let i = 0; i < userStr.length; i++) {
        if (userStr[i] === quote[i]) Accuracy++;
      }
      Accuracy = Math.round((Accuracy * 100) / userStr.length);
      localStorage.setItem("acc", Accuracy);

      //WPM calculation
      WPM = Math.round((count / 5 / timer) * 60);
      console.log("characterTyped: ", count, "timer: ", timer, "WPM: ", WPM);
      localStorage.setItem("wpm", WPM);

      router.push("/popup");

      //protect route
      localStorage.setItem("status", true);
    }
  }

  return (
    <Bounce>
      <Card>
        <span
          tabIndex={0}
          onKeyDownCapture={userInput}
          style={{ color: "#222" }}
        >
          {quote.split("").map((char) => (
            <b className={"cursor"} style={{ color: "#222" }}>
              {char}
            </b>
          ))}
        </span>
      </Card>
    </Bounce>
  );
}
