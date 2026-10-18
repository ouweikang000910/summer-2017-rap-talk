const musicUrl = id => `https://music.apple.com/cn/song/${id}`;
const artists = [
  {
    "name": "GAI",
    "cn": "GAI 周延",
    "keyword": "方言，也可以很有气场。",
    "description": "重庆方言、中国风和鲜明的气场，构成了他让人记住的声音。从比赛舞台到后来的作品，听见江湖气，也听见生活。",
    "tags": [
      "重庆方言",
      "中国风",
      "个人辨识度"
    ],
    "song": "苦行僧",
    "image": "gai.jpg",
    "position": "50% 35%",
    "number": "01",
    "tracks": [
      {
        "title": "苦行僧",
        "url": "https://music.apple.com/cn/song/1851681625"
      },
      {
        "title": "沧海一声笑",
        "url": "https://music.apple.com/cn/song/1709991233"
      },
      {
        "title": "空城计",
        "url": "https://music.apple.com/cn/song/1823976615"
      },
      {
        "title": "华夏",
        "url": "https://music.apple.com/cn/song/1882700104"
      },
      {
        "title": "兰花草",
        "url": "https://music.apple.com/cn/song/1836838482"
      }
    ]
  },
  {
    "name": "PG ONE",
    "cn": "PG ONE",
    "keyword": "把竞争感，带上舞台。",
    "description": "从节奏变化到舞台表现，他把比赛的竞争感带到了观众面前。鲜明的节奏处理，是那个夏天让人记住的声音之一。",
    "tags": [
      "节奏变化",
      "舞台表现",
      "舞台张力"
    ],
    "song": "2017年比赛舞台",
    "image": "pgone.jpg",
    "position": "50% 32%",
    "number": "02"
  },
  {
    "name": "JONY J",
    "cn": "Jony J",
    "keyword": "让人记住的，还有歌词。",
    "description": "有些Rapper让人记住声音，而他的表达也让人想认真听完歌词。从自我对话到生活观察，把想说的话写进歌里。",
    "tags": [
      "歌词表达",
      "个人风格",
      "生活观察"
    ],
    "song": "不用去猜",
    "image": "jony.jpg",
    "position": "50% 35%",
    "number": "03",
    "tracks": [
      {
        "title": "不用去猜",
        "url": "https://music.163.com/#/song?id=1933996314"
      },
      {
        "title": "信仰",
        "url": "https://music.163.com/#/song?id=1325896318"
      },
      {
        "title": "奴隶",
        "url": "https://music.163.com/#/song?id=534542490"
      },
      {
        "title": "喜新恋旧",
        "url": "https://music.apple.com/cn/song/1610248399"
      },
      {
        "title": "My Man",
        "url": "https://music.apple.com/cn/song/1610248412"
      }
    ]
  },
  {
    "name": "AFTER JOURNEY",
    "cn": "艾福杰尼",
    "era": "2017 · 中国有嘻哈",
    "keyword": "开口，就有舞台的力量。",
    "description": "2017年《中国有嘻哈》全国季军。充满力量的嗓音和鲜明的节奏感，是那个夏天让人记住的舞台声音。从《After Journey》到《库尔勒》，把自己的经历唱进作品。",
    "tags": [
      "力量感嗓音",
      "节奏张力",
      "2017全国季军"
    ],
    "song": "After Journey",
    "image": "afterjourney.jpg",
    "position": "50% 30%",
    "number": "04",
    "tracks": [
      {
        "title": "After Journey",
        "url": "https://music.163.com/#/song?id=499793088"
      },
      {
        "title": "库尔勒",
        "url": "https://music.163.com/#/song?id=501467093"
      },
      {
        "title": "说散就散",
        "url": "https://music.163.com/#/song?id=523251474"
      }
    ]
  },
  {
    "name": "MC JIN",
    "cn": "欧阳靖 / HipHopMan",
    "keyword": "藏住名字，先让音乐说话。",
    "description": "一位有丰富说唱经历的歌手，以HipHopMan的身份蒙面登场。先让大家听见声音，再揭开面具背后的名字。",
    "tags": [
      "HipHopMan",
      "蒙面参赛",
      "说唱经验"
    ],
    "song": "HipHopMan",
    "image": "jin.jpg",
    "position": "30% 30%",
    "number": "05"
  },
  {
    "name": "TIZZY T",
    "cn": "Tizzy T / 你的男孩",
    "keyword": "年轻的声音，轻松的节奏。",
    "description": "年轻的气质、轻松的节奏，以及那句让人记住的“你的男孩”。从《头文字T》开始，听见属于他的舞台风格。",
    "tags": [
      "年轻气质",
      "节奏感",
      "舞台魅力"
    ],
    "song": "头文字T",
    "image": "tizzy.jpg",
    "position": "65% 25%",
    "number": "06",
    "tracks": [
      {
        "title": "头文字T",
        "url": "https://music.163.com/#/song?id=2100329022"
      }
    ]
  }
];
const songs = [
  {
    "title": "阿司匹林",
    "artist": "王以太",
    "difficulty": 1,
    "group": "热身",
    "hint": "从熟悉的旋律开始，听见王以太的声音。",
    "url": "https://music.163.com/#/song?id=1396141677"
  },
  {
    "title": "头文字T",
    "artist": "Tizzy T",
    "difficulty": 1,
    "group": "热身",
    "hint": "你的男孩，把节奏带回这个舞台。",
    "url": "https://music.163.com/#/song?id=2100329022"
  },
  {
    "title": "信仰",
    "artist": "Jony J",
    "difficulty": 2,
    "group": "热身",
    "hint": "把坚持和表达，写进自己的歌里。",
    "url": "https://music.163.com/#/song?id=1325896318"
  },
  {
    "title": "FRIDAY9 II",
    "artist": "kkluv",
    "aliases": [
      "FRIDAY9Ⅱ",
      "Friday9II"
    ],
    "difficulty": 2,
    "group": "热身",
    "hint": "熟悉的鼓点，来自kkluv的这首作品。",
    "url": "https://music.163.com/#/song?id=2038203229"
  },
  {
    "title": "不用去猜",
    "artist": "Jony J",
    "difficulty": 1,
    "group": "热身",
    "hint": "歌名叫不用去猜，今天偏偏要猜一下。",
    "url": "https://music.163.com/#/song?id=1933996314"
  },
  {
    "title": "恭喜发财",
    "artist": "Higher Brothers / 海尔兄弟",
    "aliases": [
      "Gong Xi Fa Cai"
    ],
    "difficulty": 2,
    "group": "进阶",
    "hint": "熟悉的新年祝福，也可以有说唱的律动。",
    "url": "https://music.163.com/#/song?id=1347297661"
  },
  {
    "title": "大展鸿图",
    "artist": "揽佬 SKAI ISYOURGOD / AR刘夫阳",
    "aliases": [
      "大展宏图",
      "Blueprint Supreme"
    ],
    "difficulty": 2,
    "group": "进阶",
    "hint": "来自揽佬与AR刘夫阳的合作作品。",
    "url": "https://music.163.com/#/song?id=2618710188"
  },
  {
    "title": "隆里电丝",
    "artist": "盛宇 / 刘聪 / ICE杨长青",
    "aliases": [
      "Lonely Dance"
    ],
    "version": "《中国说唱巅峰对决》现场版",
    "difficulty": 2,
    "group": "进阶",
    "hint": "一起听见这首歌现场版的松弛与律动。",
    "url": "https://music.163.com/#/song?id=1964443044"
  },
  {
    "title": "麒麟",
    "artist": "早安",
    "difficulty": 3,
    "group": "进阶",
    "hint": "鲜明的气场，来自早安的声音。",
    "url": "https://music.163.com/#/song?id=1974459985"
  },
  {
    "title": "星球坠落",
    "artist": "艾热 AIR / 李佳隆",
    "version": "《中国新说唱》现场版",
    "difficulty": 2,
    "group": "进阶",
    "hint": "两种声音碰在一起，留下熟悉的旋律。",
    "url": "https://music.163.com/#/song?id=1296583188"
  },
  {
    "title": "Hey KONG",
    "artist": "刘聪 / KEY.L",
    "difficulty": 3,
    "group": "挑战",
    "hint": "听到这首歌，你会想起哪一段生活？",
    "url": "https://music.163.com/#/song?id=1482864953"
  },
  {
    "title": "迷途羔羊",
    "artist": "顽童 MJ116",
    "difficulty": 3,
    "group": "挑战",
    "hint": "来自顽童MJ116的现场演唱版本。",
    "url": "https://music.163.com/#/song?id=2007346948",
    "version": "现场版"
  },
  {
    "title": "别怕变老",
    "artist": "王以太 / 艾热 AIR",
    "aliases": [
      "不怕变老"
    ],
    "difficulty": 3,
    "group": "挑战",
    "hint": "关于陪伴，也关于一起慢慢变老。",
    "url": "https://music.163.com/#/song?id=1876179147"
  },
  {
    "title": "小丑女",
    "artist": "杨和苏 / KeyNG",
    "difficulty": 3,
    "group": "挑战",
    "hint": "来自杨和苏的鲜明表达。",
    "url": "https://music.163.com/#/song?id=1442320451"
  },
  {
    "title": "危险派对",
    "artist": "王以太 / 刘至佳",
    "difficulty": 2,
    "group": "挑战",
    "hint": "最后一首，用熟悉的旋律把气氛拉满。",
    "url": "https://music.163.com/#/song?id=1877996649"
  }
];
const memoryStories = [
  {
    "event": "chain",
    "kicker": "MEMORY 01 / 千人海选",
    "headline": "一条金链子，\n一个开始。",
    "copy": "在海选现场，让制作人记住你。\n拿到金链子，才有继续往前的机会。",
    "question": "如果只有一次开口机会，你会唱哪一段？"
  },
  {
    "event": "seconds",
    "kicker": "MEMORY 02 / 60秒考核",
    "headline": "60秒，\n留下你的声音。",
    "copy": "一个舞台，一次短暂的展示。\n节奏、歌词、临场状态，都摆在眼前。",
    "question": "短短一分钟，够不够让你记住一个人？"
  },
  {
    "event": "meme",
    "kicker": "MEMORY 03 / 那些火遍全网的梗",
    "headline": "你有\nFreestyle吗？",
    "copy": "一句节目里的提问，\n成了那个夏天大家都会接的话。",
    "question": "“我觉得可以。”　“我觉得不行。”"
  },
  {
    "event": "mask",
    "kicker": "MEMORY 04 / HipHopMan揭面",
    "headline": "面具背后，\n是谁的声音？",
    "copy": "先以HipHopMan的身份被听见，\n再让大家认识面具背后的人。",
    "question": "当身份揭晓，你对刚才的表演会有不同感受吗？"
  }
];
