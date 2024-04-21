import { useTheme } from "../ThemeProvider/ThemeProvider"

const Theme = () => {

    const { theme, switchTheme } = useTheme()

    const handleTheme = () => {
        switchTheme({ theme1: 'Black' });
    };
    const handleSwitch = () => {
        switchTheme(null);
    };

    return (
        <div className="Theme">

            {theme ? (
                <>
                    <button onClick={handleSwitch}>Dark Theme</button>
                </>
            ) : (
                <>
                    <button onClick={handleTheme}>White Theme</button>
                </>
            )}
        </div>
    )
}

export default Theme;