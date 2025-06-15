# Microsoft 365 Copilot プレゼンテーション サーバー起動スクリプト

Write-Host "🚀 Microsoft 365 Copilot プレゼンテーション サーバーを起動しています..." -ForegroundColor Green
Write-Host ""

$port = 8080
$url = "http://localhost:$port"

# PowerShell 5.0以上の場合のHTTPサーバー
if ($PSVersionTable.PSVersion.Major -ge 5) {
    try {
        Write-Host "📁 現在のディレクトリ: $(Get-Location)" -ForegroundColor Yellow
        Write-Host "🌐 サーバーURL: $url" -ForegroundColor Cyan
        Write-Host "⏹️  停止するには Ctrl+C を押してください" -ForegroundColor Red
        Write-Host ""
        
        # .NET HttpListener を使用した簡易サーバー
        Add-Type -AssemblyName System.Net.Http
        
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("$url/")
        $listener.Start()
        
        Write-Host "✅ サーバーが正常に起動しました！" -ForegroundColor Green
        Write-Host "🌐 ブラウザで以下のURLにアクセスしてください: $url" -ForegroundColor Yellow
        Write-Host ""
        
        # ブラウザを自動的に開く
        Start-Process $url
        
        while ($listener.IsListening) {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $localPath = $request.Url.AbsolutePath
            if ($localPath -eq "/") { $localPath = "/index.html" }
            
            $filePath = Join-Path (Get-Location) $localPath.TrimStart('/')
            
            if (Test-Path $filePath -PathType Leaf) {
                $content = Get-Content $filePath -Raw -Encoding UTF8
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($content)
                
                # MIME タイプを設定
                $extension = [System.IO.Path]::GetExtension($filePath)
                switch ($extension) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                    ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                    ".json" { $response.ContentType = "application/json; charset=utf-8" }
                    default { $response.ContentType = "text/plain; charset=utf-8" }
                }
                
                $response.StatusCode = 200
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $errorBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
                $response.OutputStream.Write($errorBytes, 0, $errorBytes.Length)
            }
            
            $response.OutputStream.Close()
        }
    }
    catch {
        Write-Host "❌ エラーが発生しました: $_" -ForegroundColor Red
        Write-Host ""
        Write-Host "🔧 代替方法:" -ForegroundColor Yellow
        Write-Host "1. Visual Studio Code の Live Server 拡張機能を使用" -ForegroundColor White
        Write-Host "2. Node.js をインストールして 'npx serve .' を実行" -ForegroundColor White
        Write-Host "3. Python をインストールして 'python -m http.server 8000' を実行" -ForegroundColor White
        Write-Host ""
    }
} else {
    Write-Host "❌ PowerShell 5.0以上が必要です" -ForegroundColor Red
    Write-Host "現在のバージョン: $($PSVersionTable.PSVersion)" -ForegroundColor Yellow
}

Read-Host "Enterキーを押して終了"
