import React, { useEffect, useState } from 'react';

const Dark = () => {
//when user chooses mode, it will select an array of values
//the value chosen dictates the theme
const [theme, setTheme ] = useState('light');

const handleChange = (e) => {
  setTheme(e.target.value)
}

useEffect(() => {
  (theme === 'dark') ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  if(theme === 'system') {
    const preferDark = window.matchMedia("(prefers-color-theme: dark)");
    (preferDark.matches) ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }
}, [theme])


  return (
    <select name='theme' className='theme'value={theme} onChange={handleChange}>
             <option value="light" >Light</option>
             <option value="dark" >Dark</option>
             <option value="system" >System</option>
    </select>
  )
}

export default Dark;