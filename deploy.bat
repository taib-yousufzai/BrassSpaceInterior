@echo off
REM Brass Space - GitHub Deployment Script (Windows)
REM This script helps you push your code to GitHub

echo.
echo ================================
echo Brass Space - GitHub Deployment
echo ================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo Error: Please run this script from the brass-space directory
    exit /b 1
)

REM Check if git is initialized
if not exist ".git" (
    echo Error: Git repository not initialized
    exit /b 1
)

REM Get GitHub username and repository name
set /p github_username="Enter your GitHub username: "
set /p repo_name="Enter your repository name (default: brass-space-website): "
if "%repo_name%"=="" set repo_name=brass-space-website

REM Check if remote already exists and remove it
git remote | findstr "origin" >nul
if %errorlevel%==0 (
    echo Remote 'origin' already exists. Removing...
    git remote remove origin
)

REM Add remote
echo Adding GitHub remote...
git remote add origin "https://github.com/%github_username%/%repo_name%.git"

REM Rename branch to main
echo Setting branch to main...
git branch -M main

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main

if %errorlevel%==0 (
    echo.
    echo ================================
    echo Successfully deployed to GitHub!
    echo ================================
    echo.
    echo View your repository:
    echo https://github.com/%github_username%/%repo_name%
    echo.
    echo Next steps:
    echo 1. Go to https://vercel.com
    echo 2. Sign in with GitHub
    echo 3. Import your repository: %repo_name%
    echo 4. Click Deploy
    echo.
    echo For detailed instructions, see GITHUB_DEPLOY.md
) else (
    echo.
    echo ================================
    echo Push failed. Please check:
    echo ================================
    echo 1. Repository exists on GitHub
    echo 2. You have push access
    echo 3. Your GitHub credentials are correct
    echo.
    echo Create repository at: https://github.com/new
)

pause
