# Deploy TeraLinkGrabber to GitHub Pages
Write-Host "Building static export for custom domain (teralinkgrabber.com)..." -ForegroundColor Cyan
$env:NEXT_PUBLIC_BASE_PATH=""
npm run build

if (!(Test-Path "out")) {
    Write-Error "Build failed: 'out' directory not found."
    exit 1
}

# Ensure .nojekyll and CNAME are present
Copy-Item -Path "public\.nojekyll" -Destination "out\.nojekyll" -Force
Copy-Item -Path "public\CNAME" -Destination "out\CNAME" -Force

Write-Host "Pushing to gh-pages branch..." -ForegroundColor Cyan
Set-Location "out"
git init -b gh-pages
git add -A
git commit -m "Deploy static export with CNAME to GitHub Pages"
$pushUrl = if ($env:GITHUB_PAT) {
    "https://$($env:GITHUB_PAT)@github.com/Mikerichardmail/tera-downloader-website.git"
} else {
    "https://github.com/Mikerichardmail/tera-downloader-website.git"
}
git push -f $pushUrl gh-pages
Remove-Item -Path .git -Recurse -Force
Set-Location ..

Write-Host "Deployment complete! Custom domain live at: https://teralinkgrabber.com" -ForegroundColor Green
