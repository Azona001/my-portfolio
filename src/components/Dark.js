import React, { useEffect, useState } from "react";

const Dark = () => {
  //when user chooses mode, it will select an array of values
  //the value chosen dictates the theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark" || theme === "system") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="theme">
      <label htmlFor="theme-select">Theme:</label>
      <select
        id="theme-select"
        name="theme"
        value={theme}
        className="options"
        onChange={handleChange}
      >
        <option value="light">Light ☀️</option>
        <option value="dark">Dark 🌙</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default Dark;
