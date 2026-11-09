@echo off
set "PATH=%~dp0.node;%PATH%"
echo Starting Friends in Pondy Development Server at http://localhost:3000 ...
node .\node_modules\next\dist\bin\next dev
pause
