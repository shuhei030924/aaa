// Microsoft 365 Copilot プレゼンテーション データ
const SLIDES_DATA = {
  "title": "Microsoft 365 Copilotで出来ること",
  "subtitle": "2025年最新版 - AIアシスタントによる業務革新ガイド",
  "slides": [    {
      "id": "intro",
      "title": "Microsoft 365 Copilotとは",
      "type": "intro",
      "content": {
        "heading": "あなたの職場のパートナー",
        "description": "Microsoft 365 Copilotは、大規模言語モデル（LLM）とMicrosoft Graph上の業務データを組み合わせ、Word、Excel、PowerPoint、Outlook、Teamsに統合されたAIアシスタントです。自然言語による指示で、文書作成からデータ分析まで幅広い業務を自動化し、生産性と創造性の向上をサポートします。",        "usecases": [
          {
            "title": "大規模言語モデル（LLM）による高度な理解力",
            "description": "ChatGPTと同等の最新AI技術を搭載し、複雑な指示や曖昧な表現も正確に理解。文脈を把握して適切な回答や作業を実行"
          },
          {
            "title": "Microsoft Graph連携で組織データを活用",
            "description": "社内のファイル、メール、カレンダー、チャット履歴などを横断的に参照し、個人や組織に特化した提案を生成"
          },          {
            "title": "自然言語での直感的な操作",
            "description": "「昨日の歩留まり会議資料から要点をまとめて」「製造データをグラフにして」など、普段使っている言葉でそのまま指示可能"
          }
        ]
      }
    },{
      "id": "word",
      "title": "Word での活用",
      "type": "application",
      "content": {
        "icon": "📄",        "description": "文書作成・編集の革新的な効率化",        "usecases": [          {
            "title": "文書のドラフト自動生成",
            "description": "「新工程導入の提案書を作成して」と指示するだけで、関連資料や社内情報を参照しながら数秒で提案書の素案を作成。白紙の状態からでも高品質な下書きを生成"
          },
          {
            "title": "文書要約と質問応答",
            "description": "長文ドキュメントから要点を抽出して要約。文書内容について質問すれば、特定セクションの説明や補足情報を即座に回答"
          },
          {
            "title": "文章のリライトと改善",
            "description": "選択したテキストの文法・スペルチェック、より明確で読みやすい表現への改善提案。トーン変更（丁寧な敬語、カジュアルなど）も一括対応"
          }
        ]
      }
    },
    {
      "id": "excel",
      "title": "Excel での活用",
      "type": "application",      "content": {
        "icon": "📊",        "description": "データ分析・可視化を誰でも簡単に",        "usecases": [          {
            "title": "データ分析と洞察抽出",
            "description": "「今期の歩留まりデータから主要な傾向を教えて」と質問するだけで、工程別変動率や異常値などのトレンドを自動分析。専門知識不要で高度な洞察を獲得"
          },
          {
            "title": "グラフ・可視化の自動生成",
            "description": "数値データに最適なグラフやチャートを提案・自動作成。歩留まり推移の折れ線グラフや装置別稼働率棒グラフなど、プロレベルの可視化をワンクリックで実現"
          },
          {
            "title": "数式支援と関数説明",
            "description": "「製造開始と完了から製造時間を計算する列を追加して」で自動的に時間計算関数を挿入。既存数式の意味も分かりやすく解説"
          }
        ]
      }
    },
    {
      "id": "powerpoint",
      "title": "PowerPoint での活用",
      "type": "application",      "content": {
        "icon": "🎯",        "description": "プレゼンテーション作成の完全自動化",        "usecases": [          {
            "title": "プレゼン資料の自動作成",
            "description": "アウトラインやWord文書を指定して「この装置導入計画でプレゼン資料を作って」と依頼すると、スライド構成からスピーカーノート、出典まで含めた完全な資料を数分で生成"
          },
          {
            "title": "長尺プレゼンの要約",
            "description": "何十枚のスライドを「3枚程度の要点スライドにまとめて」で重要ポイントのみ抽出。詳細資料を経営層向けサマリーに縮約する作業も瞬時に完了"
          }
        ]
      }
    },
    {
      "id": "outlook",
      "title": "Outlook での活用",
      "type": "application",      "content": {
        "icon": "✉️",        "description": "メール対応の完全効率化",        "usecases": [
          {
            "title": "メール内容の自動要約",
            "description": "長いメールスレッドを「このメールの経緯をまとめて」で主要トピック・結論・アクションアイテムを箇条書き要約。CCメールでも短時間で状況把握が可能"
          },          {
            "title": "返信メールの自動ドラフト",
            "description": "「装置トラブルの報告と対策を提案する返信を書いて」で状況説明から具体的対応策まで含めた返信案を自動生成。トーンや目的に応じた適切な文面を提案"
          }
        ]
      }
    },
    {
      "id": "teams",
      "title": "Teams での活用",
      "type": "application",      "content": {
        "icon": "👥",        "description": "コラボレーション革命の実現",        "usecases": [
          {
            "title": "会議の自動要約とアクション抽出",
            "description": "会議の発言を解析し、議題別の主要論点・結論・決定事項を整理。「誰が何を発言したか」も含めて参加者間の合意点・相違点を明示。アクションアイテムと担当者・期限を自動抽出"
          },
          {
            "title": "チャット・チャネル内容のサマリー",
            "description": "「昨晩の議論のポイントを教えて」で不在中のチャット内容を重要部分のみ抽出して報告。長時間のスクロールや見落としを防止"
          }
        ]
      }
    },
    {
      "id": "advanced",
      "title": "Copilot Chat - 横断的活用",
      "type": "application",      "content": {
        "icon": "🤖",        "description": "複数アプリを横断した高度な業務支援",        "usecases": [          {
            "title": "組織横断情報検索",
            "description": "「装置Aの導入に関する全ての資料と会議記録を検索」で、Word文書、Excel資料、PowerPoint、Teams会議、メールを横断検索して関連情報を一括表示"
          },
          {
            "title": "業務フロー自動化",
            "description": "「月次製造レポートを作成」で歩留まりデータ（Excel）を分析し、グラフ付きレポート（Word）を生成、プレゼン資料（PowerPoint）も作成して関係者にメール送信まで自動実行"
          }
        ]
      }
    }
  ]
};
