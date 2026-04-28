$files = Get-ChildItem -Recurse -Filter *.tsx
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match 'motion/react') {
        $content = $content -replace 'motion/react', 'framer-motion'
        Set-Content $file.FullName $content
        Write-Host "Updated: $($file.FullName)"
    }
}
