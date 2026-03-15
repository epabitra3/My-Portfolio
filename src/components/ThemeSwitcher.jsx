import { useTheme } from '../contexts/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'theme-dark'

  return (
    <div className="switch-theme-mode">
      <label id="switch" className="switch">
        <input 
          type="checkbox" 
          onChange={toggleTheme} 
          id="slider" 
          checked={!isDark}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ThemeSwitcher
