/**
 * { keyword: '', translation: '' },
 */
const vocabularyArr =  [
  /* 第一天 */
  { keyword: 'avoid', translation: 'v. 躲开，避开' },
  { keyword: 'procedure', translation: 'n. 步骤；程序；手续' },
  { keyword: 'puppet', translation: 'n. 木偶' },
  { keyword: 'serious', translation: 'adj. 严重的；认真的，严肃的' },
  { keyword: 'glossary', translation: 'n. 词汇表' },
  { keyword: 'telescope', translation: 'n. 望远镜' },
  { keyword: 'viewpoint', translation: 'n. 观点，视点，角度' },
  { keyword: 'insight', translation: 'n. 洞察力' },
  { keyword: 'drastic', translation: 'adj. 极端的；猛烈的' },
  { keyword: 'brace', translation: 'n. 支柱; v. 支撑' },
  { keyword: 'secret', translation: 'n. 秘密' },
  { keyword: 'speculate', translation: 'v. 投机；推测' },
  { keyword: 'source', translation: 'n. 来源' },
  { keyword: 'stadium', translation: 'n. 体育场' },
  { keyword: 'integrate', translation: 'v. 合并' },
  { keyword: 'debt', translation: 'n. 债务，负债；义务' },
  { keyword: 'shallow', translation: 'adj. 浅的' },
  { keyword: 'literature', translation: 'n. 文学，文献' },
  { keyword: 'building', translation: 'n. 大楼，建筑' },
  { keyword: 'joy', translation: 'n. 快乐，喜悦' },
  { keyword: 'additional', translation: 'adj. 额外的；附加的' },
  { keyword: 'depth', translation: 'n. 纵深；深度' },
  { keyword: 'hatch', translation: 'v. 孵化' },
  { keyword: 'inhabit', translation: 'v. 居住于' },
  { keyword: 'sticky', translation: 'adj. 黏糊糊的' },
  { keyword: 'concession', translation: 'n. 让步；特许；承认' },
  { keyword: 'endeavor', translation: 'n. 尝试；努力 v. 尽力' },
  { keyword: 'evolution', translation: 'n. 进化' },
  { keyword: 'gasp', translation: 'v. 喘气；渴望 n. 喘气' },
  { keyword: 'intrigue', translation: 'n. 阴谋 v. 密谋；激起……的兴趣' },
  { keyword: 'punch', translation: 'v. 用力按；用拳头打击 n. 一拳' },
  { keyword: 'little', translation: 'adj. 小的；少的' },
  { keyword: 'disturb', translation: 'v. 打扰；弄乱' },
  { keyword: 'alleviate', translation: 'v. 减轻；缓和' },
  { keyword: 'reproach', translation: 'v. 责备；指责 n. 指责' },
  { keyword: 'despise', translation: 'v. 轻视，蔑视' },
  { keyword: 'mat', translation: 'n. 垫子；草席' },
  { keyword: 'recreation', translation: 'n. 娱乐活动；游戏' },
  { keyword: 'deduce', translation: 'v. 推断' },
  { keyword: 'periodic', translation: 'adj. 周期的' },
  { keyword: 'reward', translation: 'n. 奖品，回报 v. 奖励' },
  { keyword: 'compass', translation: 'n. 指南针' },
  { keyword: 'swear', translation: 'v. 发誓；咒骂 n.誓言' },
  { keyword: 'barrier', translation: 'n. 障碍' },
  { keyword: 'donkey', translation: 'n. 驴；傻瓜' },
  { keyword: 'academy', translation: 'n. 学院；专科院校；研究院' },
  { keyword: 'demonstrate', translation: 'v. 论证；演示' },
  { keyword: 'rid', translation: 'v. 摆脱' },
  { keyword: 'guarantee', translation: 'v. 保证' },
  { keyword: 'desk', translation: 'n. 书桌' },
  { keyword: 'data', translation: 'n. 数据；资料' },
  { keyword: 'extravagant', translation: 'adj. 奢侈的，无节制的' },
  { keyword: 'bark', translation: 'v. 狗叫 n. 狗叫声' },
  { keyword: 'imperative', translation: 'adj. 必要的 n. 命令' },
  { keyword: 'bandage', translation: 'n. 绷带' },
  { keyword: 'specialty', translation: 'n. 专长；特点' },
  { keyword: 'proposal', translation: 'n. 建议；提议；求婚' },

  /* 第二天 */
  { keyword: 'church', translation: 'n. 教堂' },
  { keyword: 'could', translation: 'aux. 可以' },
  { keyword: 'manifest', translation: 'v. 使显现 adj. 显然的' },
  { keyword: 'touch', translation: 'v. 触摸 n. 接触' },
  { keyword: 'aesthetic', translation: 'adj. 美学的，审美的 n. 美感' },
  { keyword: 'lumber', translation: 'n. 木材' },
  { keyword: 'surgeon', translation: 'n. 外科医生' },
  { keyword: 'installation', translation: 'n. 安装' },
  { keyword: 'silly', translation: 'adj. 傻的' },
  { keyword: 'primitive', translation: 'adj. 原始的，简陋的' },
  { keyword: 'bang', translation: 'n. 巨响' },
  { keyword: 'intellect', translation: 'n. 智力' },
  { keyword: 'weakness', translation: 'n. 弱点' },
  { keyword: 'self', translation: 'n. 自己，自我' },
  { keyword: 'native', translation: 'adj. 本地的，土著的' },
  { keyword: 'illustrate', translation: 'v. 说明；证明' },
  { keyword: 'internal', translation: 'adj. 内部的' },
  { keyword: 'pedal', translation: 'n. 踏板' },
  { keyword: 'flour', translation: 'n. 面粉' },
  { keyword: 'extra', translation: 'adj. 额外的' },
  { keyword: 'basketball', translation: 'n. 篮球' },
  { keyword: 'observer', translation: 'n. 观察者' },
  { keyword: 'superiority', translation: 'n. 优越，优等' },
  { keyword: 'tan', translation: 'n. 棕褐色' },
  { keyword: 'midday', translation: 'n. 中午，正午' },
  { keyword: 'line', translation: 'n. 线；路线；排；行' },
  { keyword: 'flood', translation: 'n. 洪水' },
  { keyword: 'window', translation: 'n. 窗' },
  { keyword: 'resignation', translation: 'n. 辞职；辞职书；无奈' },
  { keyword: 'hang', translation: 'v. 悬挂；吊死；绞死' },

  /* 第三天 */
  { keyword: 'historian', translation: 'n. 历史学家' },
  { keyword: 'willing', translation: 'adj. 愿意的' },
  { keyword: 'gun', translation: 'n. 枪，炮' },
  { keyword: 'typical', translation: 'adj. 典型的；特有的' },
  { keyword: 'rip', translation: 'v. 撕开，扯破，敲诈' },
  { keyword: 'press', translation: 'v. 按，压；n. 新闻界；压力；强迫' },
  { keyword: 'expensive', translation: 'adj. 昂贵的' },
  { keyword: 'gap', translation: 'n. 差距；间隙' },
  { keyword: 'aggravate', translation: 'v. 使恶化，加重' },
  { keyword: 'distract', translation: 'v. 使分心；打扰' },
  { keyword: 'suit', translation: 'v. 适合；取悦；满足 n. 起诉；西装；套装' },
  { keyword: 'oval', translation: 'adj. 椭圆形' },
  { keyword: 'appetite', translation: 'n. 胃口' },
  { keyword: 'career', translation: 'n. 职业；生涯；经历 v. 猛冲' },
  { keyword: 'besides', translation: 'prep. 除...之外' },
  { keyword: 'stereo', translation: 'adj. 立体声的' },
  { keyword: 'essence', translation: 'n. 本质；精华' },
  { keyword: 'cooperate', translation: 'v. 合作' },
  { keyword: 'cue', translation: 'n. 提示；开端' },
  { keyword: 'litter', translation: 'n. 垃圾；杂乱' },
  { keyword: 'displease', translation: 'v. 使不愉快，使生气' },
  { keyword: 'optional', translation: 'adj. 可选择的' },
  { keyword: 'slight', translation: 'adj. 轻微的；脆弱的 v. 轻视' },
  { keyword: 'possibly', translation: 'adv. 也许，或许；可能地' },
  { keyword: 'expend', translation: 'v. 消费； 花费' },
  { keyword: 'salute', translation: 'v. 敬礼 n. 致敬' },
  { keyword: 'jewish', translation: 'adj. 犹太人的' },

  /* 第四天 */
  { keyword: 'account', translation: 'n. 账户；账号 v. 作出说明；解释' },
  { keyword: 'norm', translation: 'n. 规范，标准' },
  { keyword: 'consistent', translation: 'adj. 始终如一的，一致的' },
  { keyword: 'robber', translation: 'n. 强盗' },
  { keyword: 'impression', translation: 'n. 印象，感觉' },
  { keyword: 'bizarre', translation: 'adj. 稀奇古怪的' },
  { keyword: 'sailor', translation: 'n. 水手，海员' },
  { keyword: 'supplementary', translation: 'adj. 补充的' },
  { keyword: 'strategic', translation: 'adj. 战略上的' },
  { keyword: 'advertisement', translation: 'n. 广告' },
  { keyword: 'inevitable', translation: 'adj. 不可避免的' },
  { keyword: 'labor', translation: 'n. 劳工' },
  { keyword: 'notable', translation: 'adj. 值得注意的' },
  { keyword: 'reclaim', translation: 'v. 开垦' },
  { keyword: 'analytic', translation: 'adj. 分析法的；分析的' },
  { keyword: 'television', translation: 'n. 电视机' },
  { keyword: 'indicate', translation: 'v. 表明，指示' },
  { keyword: 'shelter', translation: 'n. 避难所' },
  { keyword: 'absence', translation: 'n. 缺乏；缺席' },
  { keyword: 'innocent', translation: 'adj. 无辜的；清白的；天真的；单纯的' },
  { keyword: 'compel', translation: 'v. 强迫' },
  { keyword: 'fascinate', translation: 'v. 使着迷' },
  { keyword: 'unbearable', translation: 'adj. 不可忍受的' },
  { keyword: 'aeroplane', translation: 'n. 飞机' },
  { keyword: 'decent', translation: 'adj. 像样的；体面的；得体的' },

  /* 第五天 */
  { keyword: 'scan', translation: 'v. 扫描；细看；浏览' },
  { keyword: 'stoop', translation: 'v. 弯腰；屈从 n. 弯腰；屈服' },
  { keyword: 'proof', translation: 'n. 证据，证明' },
  { keyword: 'overlook', translation: 'v. 忽视；眺望；宽容 n. 忽视' },
  { keyword: 'cattle', translation: 'n. 牛' },
  { keyword: 'support', translation: 'v. 支持；支撑；供养 n. 支持；支撑；供养' },
  { keyword: 'junction', translation: 'n. 连接' },
  { keyword: 'vocal', translation: 'n. 声音的' },
  { keyword: 'barely', translation: 'adv. 几乎不；仅仅；勉强才能' },
  { keyword: 'funny', translation: 'adj. 有趣的；奇怪的 n. 笑话' },
  { keyword: 'daring', translation: 'adj. 大胆的；勇敢的 n. 冒险' },
  { keyword: 'immigrant', translation: 'n. 移民' },
  { keyword: 'bill', translation: 'n. 议案；账单；纸币；钞票' },
  { keyword: 'dissipate', translation: 'v. 驱散；浪费' },
  { keyword: 'reliability', translation: 'n. 可靠性' },
  { keyword: 'shrug', translation: 'v. 耸肩 n. 耸肩' },
  { keyword: 'aggressive', translation: 'adj. 有侵略性的；好斗的；攻击性的' },
  { keyword: 'tram', translation: 'n. 有轨电车；矿车，缆车' },
  { keyword: 'judge', translation: 'v. 评价；判断 n. 法官；裁判' },
  { keyword: 'everyday', translation: 'adj. 日常的，每天的' },
  { keyword: 'acceptable', translation: 'adj. 可接受的；认同的' },
  { keyword: 'bronze', translation: 'n. 青铜色' },
  { keyword: 'verbal', translation: 'adj. 言语的，口头的' },

]

export default vocabularyArr