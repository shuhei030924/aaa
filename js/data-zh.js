// Microsoft 365 Copilot 中文数据
const SLIDES_DATA_ZH = {
  "title": "Microsoft 365 Copilot 能做什么",
  "subtitle": "10-15分钟业务效率化指南",
  "slides": [
    {
      "id": "intro",
      "title": "什么是 Microsoft 365 Copilot",
      "type": "intro",
      "content": {
        "heading": "您职场的合作伙伴",
        "description": "Microsoft 365 Copilot 结合了大型语言模型 (LLM) 和 Microsoft Graph 上的业务数据，集成到 Word、Excel、PowerPoint、Outlook、Teams 中的 AI 助手。通过自然语言指令，自动化从文档创建到数据分析的广泛业务操作，支持提高生产力和创造力。",
        "usecases": [
          {
            "title": "大型语言模型 (LLM) 的高级理解能力",
            "description": "搭载与 ChatGPT 同等的最新 AI 技术，准确理解复杂指令和模糊表达。把握上下文并执行适当的回答和工作"
          },
          {
            "title": "Microsoft Graph 集成利用组织数据",
            "description": "横向参考公司内部文件、邮件、日历、聊天记录等，生成针对个人和组织的专业化建议"
          },
          {
            "title": "自然语言的直观操作",
            "description": "「总结昨天的会议资料」「将销售数据制作成图表」等，可以直接用平时使用的语言进行指示"
          },
          {
            "title": "实时业务支持",
            "description": "工作过程中实时提供建议和修正，实现高效的业务流程。无需等待时间，即时获得结果"
          },
          {
            "title": "用户保持最终决定权",
            "description": "Copilot 创建建议和草稿，但最终的判断和责任始终由用户保持。不过度依赖AI的安全协作关系"
          },
          {
            "title": "Copilot Chat 的横向信息搜索",
            "description": "跨越多个应用程序和文件的信息搜索和分析。也可应对「告诉我过去3个月销售相关的所有资料」等复合性问题"
          }
        ]
      }
    },
    {
      "id": "word",
      "title": "在 Word 中的应用",
      "type": "application",
      "content": {
        "icon": "📄",
        "description": "文档创建和编辑的革新性效率化",
        "usecases": [          {
            "title": "文档草稿自动生成",
            "description": "只需指示「创建设备导入计划书」，就能参考技术规格和公司内部标准操作程序，在几秒钟内创建高质量草稿。即使从空白状态也能生成专业文档"
          },
          {
            "title": "文档摘要和问答",
            "description": "从长篇文档中提取要点并总结。对文档内容提问，即可立即回答特定部分的说明或补充信息"
          },
          {
            "title": "文章重写和改进",
            "description": "对选定文本进行语法、拼写检查，提出更清晰易读表达的改进建议。语调变更（礼貌的敬语、随意等）也可批量对应"
          },
          {
            "title": "结构化和格式转换",
            "description": "将要点转换为表格、从文本中提取列表等，一键执行文档结构改进"
          },
          {
            "title": "语音对话支持（2025年新功能）",
            "description": "支持语音输入和响应。对着「总结这份报告的第三章」说话，就会用语音回答相应部分。可实现免手操作的文档确认"
          }
        ]
      }
    },
    {
      "id": "excel",
      "title": "在 Excel 中的应用",
      "type": "application",
      "content": {
        "icon": "📊",
        "description": "任何人都能轻松进行数据分析和可视化",
        "usecases": [          {
            "title": "生产数据分析和趋势提取",
            "description": "只需提问「告诉我本期产量数据的主要趋势」，就能自动分析设备效率和良品率等趋势。无需专业知识即可获得制造现场的高级洞察"
          },
          {
            "title": "制造图表和仪表板自动生成",
            "description": "基于生产数据特性提议并自动创建最适合的图表。良品率趋势图或设备稼动率仪表板等，一键实现专业级可视化"
          },          {
            "title": "设备管理公式支援和函数说明",
            "description": "「添加计算设备稼动率的列」会自动插入良品率计算函数。「计算MTBF(平均故障间隔时间)」等设备管理相关公式也会详细解释"
          },
          {
            "title": "生产数据操作自动化",
            "description": "用自然语言指示生产数据的添加删除、排序、筛选、条件格式设置。「删除良品率低于95%的行」「按设备效率排序」等一键执行"
          },
          {
            "title": "数据清洗",
            "description": "重复数据删除、缺失值补充、数据格式统一等，自动化繁琐的数据整理工作"
          }
        ]
      }
    },
    {
      "id": "powerpoint",
      "title": "在 PowerPoint 中的应用",
      "type": "application",
      "content": {
        "icon": "🎯",
        "description": "演示文稿创建的完全自动化",
        "usecases": [          {
            "title": "技术演示资料自动创建",
            "description": "指定设备规格或工程改善计划，委托「用这个内容制作技术说明资料」，几分钟内生成包含技术概要、实施计划、预期效果的完整资料"
          },
          {
            "title": "长篇演示文稿摘要",
            "description": "将几十页幻灯片「总结成3页左右要点幻灯片」，仅提取重要要点。将详细资料缩减为面向管理层摘要的工作也能瞬间完成"
          },
          {
            "title": "幻灯片构成和故事改进",
            "description": "「按逻辑性重新构成章节分割」优化幻灯片顺序。也会指出不足话题并提议新幻灯片"
          },
          {
            "title": "多文件整合（2025年新功能）",
            "description": "同时参考最多5个文件（Word、PDF、TXT等），自动生成从多个文档中摘录整合信息的统一演示文稿"
          },
          {
            "title": "设计统一和品牌对应",
            "description": "应用符合公司品牌准则的配色和模板，支持创建美观且一致的资料"
          }
        ]
      }
    },
    {
      "id": "outlook",
      "title": "在 Outlook 中的应用",
      "type": "application",
      "content": {
        "icon": "✉️",
        "description": "邮件处理的完全效率化",
        "usecases": [          {
            "title": "设备状态沟通",
            "description": "「写一封设备故障报告邮件」「起草设备维护请求」，自动生成包含技术术语和紧急程度的专业回复草案。根据设备问题的性质提议适当的文面"
          },
          {
            "title": "生产邮件自动摘要",
            "description": "设备故障或工程改善相关的长邮件线程用「总结这个设备问题的经过」，要点总结主要问题、对策、行动项目。能短时间内掌握制造现场情况"          },
          {
            "title": "文章润色和语调调整",
            "description": "「让这个表达更礼貌」「简洁」「友好」一键文体转换。重写支援界面也可选择「简洁化」「详细说明」等"
          },
          {
            "title": "附件文件内容确认（2025年新功能）",
            "description": "Copilot打开收到邮件的附件资料（Word、PowerPoint、PDF），「告诉我附件报告的要旨」无需打开文件即可掌握内容"
          },
          {
            "title": "日程调整自动化",
            "description": "考虑参与者空闲时间自动生成会议日程调整邮件。包含多个候选日期提示和会议室预约"
          }
        ]
      }
    },
    {
      "id": "teams",
      "title": "在 Teams 中的应用",
      "type": "application",
      "content": {
        "icon": "👥",
        "description": "协作革命的实现",
        "usecases": [          {
            "title": "生产会议自动摘要和行动提取",
            "description": "分析生产评审会议发言，按设备状态和改善提案整理主要论点、结论、决定事项。自动提取设备维护项目及负责人、期限"
          },
          {
            "title": "技术聊天和频道内容摘要",
            "description": "「告诉我昨晚关于设备故障的讨论要点」，仅提取缺席期间技术聊天内容的重要部分报告。防止重要技术信息的遗漏"
          },          {
            "title": "基于技术对话内容的问答",
            "description": "「上周设备评审会议确定的改善方案是？」「关于良品率下降，工程师担心的点是？」等对过去技术讨论内容的提问立即回答。实现对制造现场知识的高速访问"
          },
          {
            "title": "消息创建支援",
            "description": "「用礼貌语调发布会议提醒」「想随意发送祝词」等指定目的和语调自动生成消息草稿"
          },          {
            "title": "实时生产会议支援",
            "description": "生产评审会议中「这个设备问题的上次结论是？」「显示相关的设备履历资料」等，支持现场技术信息搜索和显示"
          }
        ]
      }
    },
    {      "id": "copilot-chat",
      "title": "Copilot Chat - 跨部门技术支援",
      "type": "application",
      "content": {
        "icon": "🤖",
        "description": "跨越多个应用的制造现场高级支援",
        "usecases": [
          {
            "title": "技术资料横向搜索",
            "description": "「搜索设备X相关的所有技术资料和维护记录」，横向搜索Word操作手册、Excel生产数据、PowerPoint培训资料、Teams技术讨论、维护邮件，一次性显示相关信息"
          },
          {
            "title": "工程改善流程自动化",
            "description": "「创建月度良品率报告」分析生产数据（Excel），生成带图表的改善报告（Word），也创建技术说明资料（PowerPoint），到向相关部门发送邮件全自动执行"
          },          {
            "title": "技术知识整合和洞察提供",
            "description": "整合分析制造现场分散的技术信息，生成「从设备效率数据提出下季度改善建议」等高维度洞察和技术建议"
          },
          {
            "title": "品质合规支援",
            "description": "自动执行技术文档和操作内容的品质标准检查、与ISO规程的一致性确认、对外技术资料共享时的风险评估"
          }
        ]
      }
    }
  ]
};
