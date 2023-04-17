import React, { useEffect, useState } from "react";
import styles from "./Parallax.module.css";

function Parallax() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.screenY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <p
        style={{
          color: `var(--aim-text-default)`,
          fontSize: `var(--aim-largest-font-size)`,
          letterSpacing: "4px",
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        style={{
          color: `var(--aim-text-default)`,
          fontSize: `var(--aim-larger-font-size)`,
          transform: `translateX(${position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p
        style={{
          color: `var(--aim-text-default)`,
          fontSize: `var(--aim-nomal-font-size)`,
          opacity: (position - 900) / 50,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p
        style={{
          color: `var(--aim-text-default)`,
          fontSize: `var(--aim-nomal-font-size)`,
          opacity: (position - 1000) / 100,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        style={{
          color: `var(--aim-default-white)`,
          fontSize: "3rem",
          letterSpacing: "4px",
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        style={{
          color: "white",
          fontSize: "2rem",
          transform: `translateX(${position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          opacity: (position - 1450) / 50,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          opacity: (position - 1550) / 100,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        style={{
          color: "white",
          fontSize: "3rem",
          letterSpacing: "4px",
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p
        style={{
          color: "white",
          fontSize: "2rem",
          transform: `translateX(${position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          opacity: (position - 1800) / 50,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          opacity: (position - 1900) / 100,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default Parallax;
