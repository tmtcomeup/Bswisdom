@echo off
echo Creating backup of BSwisdom site with all updates...

set DEST_FOLDER=%USERPROFILE%\Desktop\BSwisdom-Latest-Site-Working

echo Destination folder: %DEST_FOLDER%

if exist "%DEST_FOLDER%" (
  echo Removing existing backup folder...
  rmdir /s /q "%DEST_FOLDER%"
)

echo Creating new backup folder...
mkdir "%DEST_FOLDER%"

echo Copying files...
xcopy /s /e /h /y "%~dp0*.*" "%DEST_FOLDER%\"

echo Creating desktop shortcut...
powershell "$WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('%USERPROFILE%\Desktop\BSwisdom Latest Site.lnk'); $Shortcut.TargetPath = '%DEST_FOLDER%'; $Shortcut.IconLocation = '%SystemRoot%\System32\SHELL32.dll,3'; $Shortcut.Save()"

echo.
echo Backup complete! The site has been saved to:
echo %DEST_FOLDER%
echo.
echo A shortcut has been created on your desktop.
echo.
echo UPDATES INCLUDED:
echo - Added About page
echo - Added Charity (donations) page
echo - Added Affiliate page with tools and dashboard
echo - Added Partnerships page with application form
echo - Added Terms page
echo - Added all 12 resource categories
echo - Fixed navigation and resource menus
echo.
pause