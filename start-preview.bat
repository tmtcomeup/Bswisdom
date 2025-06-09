@echo off
color 0A
cls
echo ================================
echo    Website Preview Launcher
echo ================================
echo.
echo Starting the website preview server...
echo.
cd "%~dp0"
echo Your website will be available at:
echo.
echo   http://localhost:3000
echo.
echo Close this window when you're done viewing the site.
echo ================================
echo.
npx vite preview --host --port 3000
pause