import React, { useEffect, useState } from 'react';

const Dark = () => {
//when user chooses mode, it will select an array of values
//the value chosen dictates the theme
const [theme, setTheme ] = useState('light');

const handleChange = (e) => {
  setTheme(e.target.value)
}

useEffect(() => {
   if (theme === 'dark') {
    document.body.classList.add('dark');
  } else if (theme === 'light') {
    document.body.classList.remove('dark');
  } else if (theme === 'system') {
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)");
    preferDark.matches
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }
}, [theme])


useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);
}, []);


  return (
    <div className='theme'>
    <label htmlFor="theme-select">Theme:</label>
    <select name='theme' value={theme} className='options' onChange={handleChange}>
             <option value="light" >Light ☀️</option>
             <option value="dark" >Dark 🌙</option>
             <option value="system" >System</option>
    </select>
    </div>
  )
}

export default Dark;