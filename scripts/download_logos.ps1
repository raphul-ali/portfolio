$logos = @{
    "react" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    "typescript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    "nextjs" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    "tailwind" = "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    "materialui" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
    "node" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    "express" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    "graphql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    "mongodb" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    "postgresql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    "mysql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    "redis" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
    "aws" = "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
    "docker" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    "git" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    "github" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    "vscode" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    "jira" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    "figma" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
}

# Create logos directory if it doesn't exist
$logosDir = "public/logos"
if (-not (Test-Path $logosDir)) {
    New-Item -ItemType Directory -Path $logosDir
}

# Download each logo
foreach ($logo in $logos.GetEnumerator()) {
    $outputPath = Join-Path $logosDir "$($logo.Key).svg"
    Write-Host "Downloading $($logo.Key) logo..."
    try {
        Invoke-WebRequest -Uri $logo.Value -OutFile $outputPath
        Write-Host "Successfully downloaded $($logo.Key) logo"
    } catch {
        Write-Host "Failed to download $($logo.Key) logo: $_"
    }
}

Write-Host "Logo download process completed!" 