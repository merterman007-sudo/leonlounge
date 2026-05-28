param(
  [Parameter(Mandatory = $true)]
  [string]$Url,
  [string]$OutFile = "menu-qr.png",
  [int]$Size = 900
)

try {
  $encoded = [System.Uri]::EscapeDataString($Url)
  $qrEndpoint = "https://api.qrserver.com/v1/create-qr-code/?size=${Size}x${Size}&data=$encoded"
  Invoke-WebRequest -Uri $qrEndpoint -OutFile $OutFile
  Write-Output "QR olusturuldu: $OutFile"
}
catch {
  Write-Error "QR olusturulamadi: $($_.Exception.Message)"
  exit 1
}
