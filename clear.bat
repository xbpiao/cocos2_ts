@echo off
setlocal enabledelayedexpansion
rem 保存当前路径
set currentPath=%~dp0
rem 保存当前驱动器盘符
set currentDriver=%~d0
rem 直接使用批处理文件的相对路径
%currentDriver%
cd "%currentPath%"

rem 参考：https://docs.cocos.com/creator/manual/zh/getting-started/project-structure.html

if exist "%currentPath%\.vscode\chrome" (
	rd /q /s "%currentPath%\.vscode\chrome"
)

if exist "%currentPath%\local\logs" (
	rd /q /s "%currentPath%\local\logs"
)

if exist "%currentPath%\export" (
	rd /q /s "%currentPath%\export"
)

del /s .DS_Store
del /s Thumbs.db

tasklist | find /i "cocoscreator.exe" >nul
set curValue=%ERRORLEVEL%
rem echo curValue : %curValue%
if "%curValue%"=="0" (
	echo Pleaese close all CocosCreator.exe!
	goto end_success
)

if exist "%currentPath%\library" (
	rd /q /s "%currentPath%\library"
)

if exist "%currentPath%\temp" (
	rd /q /s "%currentPath%\temp"
)

if exist "%currentPath%\build" (
	rd /q /s "%currentPath%\build"
)

if exist "%currentPath%\packages" (
	rd /q /s "%currentPath%\packages"
)

:end_success
endlocal
@echo on