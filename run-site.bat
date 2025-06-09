@echo off
echo Starting BSwisdom Website...
echo.
echo This will install dependencies and start the development server.
echo.
echo Press any key to continue...
pause > nul

echo Installing dependencies...
call npm install

echo.
echo Starting development server...
echo The website will open in your default browser.
echo.
echo Press Ctrl+C to stop the server when done.
echo.
call npm run dev