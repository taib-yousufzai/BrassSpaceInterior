#!/bin/bash

# Brass Space - GitHub Deployment Script
# This script helps you push your code to GitHub

echo "🚀 Brass Space - GitHub Deployment"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the brass-space directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized"
    exit 1
fi

# Get GitHub username and repository name
echo "📝 Enter your GitHub username:"
read github_username

echo "📝 Enter your repository name (default: brass-space-website):"
read repo_name
repo_name=${repo_name:-brass-space-website}

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists. Removing..."
    git remote remove origin
fi

# Add remote
echo "🔗 Adding GitHub remote..."
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Rename branch to main
echo "🌿 Setting branch to main..."
git branch -M main

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully deployed to GitHub!"
    echo ""
    echo "🌐 View your repository:"
    echo "   https://github.com/$github_username/$repo_name"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Go to https://vercel.com"
    echo "   2. Sign in with GitHub"
    echo "   3. Import your repository: $repo_name"
    echo "   4. Click Deploy"
    echo ""
    echo "📖 For detailed instructions, see GITHUB_DEPLOY.md"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   1. Repository exists on GitHub"
    echo "   2. You have push access"
    echo "   3. Your GitHub credentials are correct"
    echo ""
    echo "💡 Create repository at: https://github.com/new"
fi
