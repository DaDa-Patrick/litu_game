#!/bin/bash

# GitHub Pages 部署檢查腳本
# 此腳本會打開瀏覽器，引導你完成 GitHub Pages 設定

echo "🚀 GitHub Pages 部署助手"
echo "========================"
echo ""
echo "✅ 代碼已成功推送到 GitHub"
echo "✅ GitHub Actions 工作流程已創建"
echo ""
echo "📝 接下來需要手動完成以下步驟："
echo ""
echo "1. 打開 GitHub Pages 設定頁面（即將自動打開瀏覽器）"
echo "2. 在 'Build and deployment' 部分："
echo "   - 將 'Source' 從 'Deploy from a branch' 改為 'GitHub Actions'"
echo "3. 等待部署完成（約 2-3 分鐘）"
echo ""
echo "按 Enter 鍵打開 GitHub 設定頁面..."
read

# 打開 GitHub Pages 設定頁面
open "https://github.com/DaDa-Patrick/litu_game/settings/pages"

echo ""
echo "⏳ 完成設定後，請等待幾分鐘"
echo "📍 部署狀態：https://github.com/DaDa-Patrick/litu_game/actions"
echo "🌐 網站地址：https://dada-patrick.github.io/litu_game/"
echo ""
echo "按 Enter 鍵打開 Actions 頁面查看部署狀態..."
read

open "https://github.com/DaDa-Patrick/litu_game/actions"

echo ""
echo "✨ 完成！"
