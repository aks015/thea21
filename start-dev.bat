@echo off
REM Dev server launcher. npm scripts break because this folder path
REM contains "&", so we call Next directly via node.
cd /d "%~dp0"
echo Starting Vertex Studio dev server on http://localhost:3000 ...
node ".\node_modules\next\dist\bin\next" dev
pause
