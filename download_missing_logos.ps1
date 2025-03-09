[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$logos = @{
    "tailwind" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg"
    "aws" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonwebservices.svg"
}

foreach ($logo in $logos.GetEnumerator()) {
    $outputPath = "./public/logos/$($logo.Key).svg"
    Write-Host "Downloading $($logo.Key) logo to $outputPath..."
    try {
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -Uri $logo.Value -OutFile $outputPath -UseBasicParsing
        if (Test-Path $outputPath) {
            Write-Host "Successfully downloaded $($logo.Key) logo to $outputPath"
        }
    } catch {
        Write-Host "Failed to download $($logo.Key) logo: $_"
    }
} 