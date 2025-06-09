@echo off
echo Starting the Route Debugging Tools...
echo.

REM Create a debug.html that uses the debug router with panel
echo ^<!DOCTYPE html^> > debug.html
echo ^<html lang="en"^> >> debug.html
echo ^<head^> >> debug.html
echo     ^<meta charset="UTF-8" /^> >> debug.html
echo     ^<link rel="icon" type="image/svg+xml" href="/vite.svg" /^> >> debug.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0" /^> >> debug.html
echo     ^<title^>BSwisdom - Debug Mode^</title^> >> debug.html
echo ^</head^> >> debug.html
echo ^<body^> >> debug.html
echo     ^<div id="root"^>^<div style="padding: 20px; font-family: Arial, sans-serif;"^>^<h1^>Loading Debug Mode...^</h1^>^</div^>^</div^> >> debug.html
echo     ^<script type="module" src="/src/debug-router-with-panel.jsx"^>^</script^> >> debug.html
echo ^</body^> >> debug.html
echo ^</html^> >> debug.html

echo Debug HTML file created.
echo.

REM Start the dev server
echo Starting Vite dev server...
start cmd /c "echo Console output from dev server: > dev-server-output.txt & npm run dev >> dev-server-output.txt 2>&1"

REM Give the server time to start
echo Waiting for server to start...
timeout /t 5 > nul

REM Open the debug tools in browser
echo Opening debug tools in browser...
start http://localhost:5173/debug.html
start http://localhost:5173/route-tester.html
start http://localhost:5173/debug-console.html

echo.
echo Debug tools launched!
echo You can view the server console output in dev-server-output.txt

REM Output help text
echo.
echo TROUBLESHOOTING GUIDE:
echo 1. If pages are blank, check the browser console for errors.
echo 2. Try using the debug console to navigate between routes.
echo 3. The route tester will show you which routes are working.
echo 4. If Vite gives a "cannot be found" error, check that all imports exist.
echo 5. Look for file path case sensitivity issues (important even on Windows).
echo.
echo Press any key to exit...
pause > nul
