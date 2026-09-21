# Deploy TeraLinkGrabber to GitHub Pages
Write-Host "Building static export..." -ForegroundColor Cyan
$env:NEXT_PUBLIC_BASE_PATH="/tera-downloader-website"
npm run build
$env:NEXT_PUBLIC_BASE_PATH=""

if (!(Test-Path "out")) {
    Write-Error "Build failed: 'out' directory not found."
    exit 1
}

# Ensure .nojekyll is present to allow _next assets on GitHub Pages
Copy-Item -Path "public\.nojekyll" -Destination "out\.nojekyll" -Force

Write-Host "Pushing to gh-pages branch..." -ForegroundColor Cyan
Set-Location "out"
git init -b gh-pages
git add -A
git commit -m "Deploy static export to GitHub Pages"
git push -f https://github.com/Mikerichardmail/tera-downloader-website.git gh-pages
Remove-Item -Path .git -Recurse -Force
Set-Location ..

Write-Host "Deployment complete! Visit: https://mikerichardmail.github.io/tera-downloader-website/" -ForegroundColor Green
