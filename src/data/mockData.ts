export type ProjectCategory = "儿童教育" | "环境保护" | "困境帮扶" | "志愿者服务";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  cover: string;
  targetPeople: string;
  impact: string;
  details: string[];
};

export type News = {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  cover: string;
  content: string[];
  tags: string[];
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const orgInfo = {
  ein: "99-3462546",
  name: "Q WORLD ATHLETICS INC",
  officer: "Albert M Quashie",
  address: "2808 Seabiscuit Drive, Onley, MD 20832",
  email: "contact@qworldathletics.us",
  phone: "+1 (301) 555-2468",
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "公益项目", href: "/projects" },
  { label: "新闻资讯", href: "/news" },
  { label: "志愿者招募", href: "/volunteer" },
  { label: "在线捐赠", href: "/donate" },
  { label: "联系我们", href: "/contact" },
  { label: "透明公开", href: "/transparency" },
  { label: "FAQ", href: "/faq" },
];

export const projectCategories: ProjectCategory[] = ["儿童教育", "环境保护", "困境帮扶", "志愿者服务"];

export const projects: Project[] = [
  {
    id: 1,
    slug: "sunrise-learning-centers",
    title: "晨光学习中心计划",
    category: "儿童教育",
    location: "马里兰州蒙哥马利县",
    summary: "为低收入家庭儿童提供课后辅导、阅读角和科学启蒙课程。",
    cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "6-14 岁儿童与其家庭",
    impact: "累计服务 420 名儿童，阅读能力平均提升 28%。",
    details: [
      "项目每周开放 5 天，涵盖数学、阅读、英语表达和创造力工作坊。",
      "通过与当地学校合作，我们为学生建立学习追踪档案并提供个别辅导。",
      "家长课堂帮助家庭建立高质量陪伴与家庭阅读习惯。",
    ],
  },
  {
    id: 2,
    slug: "green-community-garden",
    title: "绿色社区花园",
    category: "环境保护",
    location: "华盛顿都会区",
    summary: "在社区空置地建立可持续花园，推广城市生态教育和堆肥实践。",
    cover: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "社区居民与青少年志愿者",
    impact: "建设 11 个社区花园，减少有机垃圾约 18 吨。",
    details: [
      "每个花园设置雨水回收和原生植物示范区。",
      "青少年志愿者每月开展一次面向儿童的自然课堂。",
      "每季度举办社区共享餐桌，推广低碳饮食理念。",
    ],
  },
  {
    id: 3,
    slug: "warm-winter-relief",
    title: "暖冬关怀行动",
    category: "困境帮扶",
    location: "巴尔的摩及周边",
    summary: "向困难家庭和流动人口发放保暖物资、应急食品和生活支持包。",
    cover: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "困难家庭、独居长者、流动人口",
    impact: "已发放 3,200 份暖冬包，覆盖 17 个社区点位。",
    details: [
      "暖冬包包含外套、毛毯、保温杯、应急食品与健康手册。",
      "联合社区机构建立快速转介机制，连接医疗与心理援助资源。",
      "志愿者开展上门探访，重点关注行动不便的长者。",
    ],
  },
  {
    id: 4,
    slug: "youth-volunteer-lab",
    title: "青年志愿者实验室",
    category: "志愿者服务",
    location: "线上 + 线下联合",
    summary: "培养青年志愿者在公益项目中的组织能力、沟通能力和领导力。",
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "16-28 岁青年",
    impact: "培养 260 名核心青年志愿者，累计服务时长 9,000 小时。",
    details: [
      "课程包括公益项目设计、活动运营、团队协作和数据记录。",
      "每位学员需完成至少一个社区实践项目并进行成果答辩。",
      "优秀志愿者可担任项目组长，持续带领新成员成长。",
    ],
  },
  {
    id: 5,
    slug: "digital-classroom-bridge",
    title: "数字课堂桥梁",
    category: "儿童教育",
    location: "远程教育支持",
    summary: "为资源不足学校提供二手设备翻新、数字课程与教师技术培训。",
    cover: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "乡镇学校师生",
    impact: "支持 23 所学校，帮助 1,800 名学生接入数字学习资源。",
    details: [
      "项目回收并翻新可用设备，统一安装学习软件与安全系统。",
      "建立志愿讲师库，提供在线直播课程和录播内容。",
      "为教师提供每月数字教学工具培训和教案共创支持。",
    ],
  },
  {
    id: 6,
    slug: "river-keepers-program",
    title: "河岸守护者计划",
    category: "环境保护",
    location: "帕图森特河流域",
    summary: "组织公众参与河道清洁、水质监测和生态修复活动。",
    cover: "https://images.unsplash.com/photo-1438401171849-74ac270044ee?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "沿河社区居民与学校社团",
    impact: "清理河岸垃圾 12 吨，恢复本地植物 4,500 株。",
    details: [
      "引入简单可视化水质检测工具，提升公众科学参与度。",
      "建立学校生态观察点，鼓励学生持续记录鸟类和水生植物变化。",
      "与地方政府共享监测数据，推动河岸维护机制常态化。",
    ],
  },
  {
    id: 7,
    slug: "family-resilience-fund",
    title: "家庭韧性支持基金",
    category: "困境帮扶",
    location: "大华府地区",
    summary: "为遭遇突发危机的家庭提供短期资金援助与社会服务衔接。",
    cover: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "面临失业、疾病或突发事件的家庭",
    impact: "已支持 185 个家庭渡过短期危机，复工复学率达 81%。",
    details: [
      "资助范围覆盖租金缓冲、药品支出和儿童学业支持。",
      "每个家庭配备个案志愿者，制定 3 个月恢复计划。",
      "项目联合心理咨询师提供压力管理和家庭沟通辅导。",
    ],
  },
  {
    id: 8,
    slug: "community-service-weekends",
    title: "社区服务周末",
    category: "志愿者服务",
    location: "多社区联动",
    summary: "每月举办主题志愿服务日，覆盖清洁、探访、助教与公益宣传。",
    cover: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=80",
    targetPeople: "社区居民、企业志愿团队",
    impact: "累计举办 36 场活动，参与人数超过 2,100 人次。",
    details: [
      "活动采用线上报名与志愿时长认证机制。",
      "为企业团队提供定制化公益日方案与影响力报告。",
      "通过亲子志愿模块促进家庭共同参与社区服务。",
    ],
  },
];

export const newsList: News[] = [
  {
    id: 1,
    slug: "annual-forum-2026",
    title: "Q WORLD ATHLETICS 年度公益论坛圆满举办",
    date: "2026-03-18",
    author: "传播与合作部",
    excerpt: "论坛聚焦儿童教育公平、社区协作与公益透明治理，吸引近 300 名参与者。",
    cover: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    tags: ["论坛", "年度活动", "合作"],
    content: [
      "本次论坛邀请教育工作者、环保组织代表和社区领袖共同探讨基层公益如何形成长期影响。",
      "我们发布了未来三年的项目路线图，强调以数据驱动项目迭代，并持续提升受益人参与度。",
      "论坛现场达成 7 项跨机构合作意向，预计将在青少年志愿者培养与社区花园建设中优先落地。",
    ],
  },
  {
    id: 2,
    slug: "new-learning-center-opened",
    title: "第三所晨光学习中心在本周正式开放",
    date: "2026-02-27",
    author: "项目运营组",
    excerpt: "新中心将服务超过 120 名儿童，提供课后托管、阅读与科学实验课程。",
    cover: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    tags: ["儿童教育", "项目进展"],
    content: [
      "新中心位于公共交通便利区域，便于周边家庭接送。",
      "除了基础课程，中心新增艺术表达和情绪管理模块，帮助儿童建立全面能力。",
      "我们欢迎更多有教育背景的志愿者加入课程支持团队。",
    ],
  },
  {
    id: 3,
    slug: "river-cleanup-day",
    title: "河岸守护者计划完成春季清洁行动",
    date: "2026-02-10",
    author: "环境项目部",
    excerpt: "200 余名志愿者参与沿河清洁与监测，单日清理垃圾 1.4 吨。",
    cover: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    tags: ["环境保护", "志愿行动"],
    content: [
      "活动覆盖 4 个重点河段，并同步开展水质采样。",
      "志愿者中有 60 位来自本地高中社团，他们将在后续持续参与生态记录。",
      "监测数据将用于下一阶段河岸植物恢复方案。",
    ],
  },
  {
    id: 4,
    slug: "winter-relief-impact-report",
    title: "暖冬关怀行动发布阶段影响报告",
    date: "2026-01-24",
    author: "评估与研究组",
    excerpt: "报告显示，受助家庭在冬季基础生活稳定性方面有明显提升。",
    cover: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    tags: ["困境帮扶", "影响力"],
    content: [
      "通过电话回访与实地走访，项目组完成了 320 份样本评估。",
      "超过 76% 的受访者表示援助有效缓解了短期物资压力。",
      "下一阶段将加强心理支持与就业信息衔接服务。",
    ],
  },
  {
    id: 5,
    slug: "youth-lab-graduation",
    title: "青年志愿者实验室首期学员结业",
    date: "2025-12-30",
    author: "志愿者发展组",
    excerpt: "首期 48 名学员完成结业项目，主题涵盖助学、环保与社区共融。",
    cover: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
    tags: ["志愿者", "培训"],
    content: [
      "学员在三个月内完成理论学习与实地实践。",
      "结业答辩采用公开评审机制，邀请社区代表参与评价。",
      "我们将持续追踪学员在社区中的长期服务表现。",
    ],
  },
  {
    id: 6,
    slug: "donation-transparency-updated",
    title: "在线捐赠透明看板上线月度更新",
    date: "2025-12-12",
    author: "财务与合规组",
    excerpt: "平台新增资金流向图表与项目执行进度说明，提升公众可追踪性。",
    cover: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80",
    tags: ["透明公开", "捐赠"],
    content: [
      "看板以月度为单位展示收入、支出和项目执行比例。",
      "每笔定向捐赠都可在系统中查看对应项目阶段成果。",
      "我们将继续优化数据可视化，帮助捐赠人更容易理解公益进展。",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Albert M Quashie",
    role: "发起人 / Principal Officer",
    bio: "长期关注儿童发展与社区运动公益，推动组织建立跨领域合作网络。",
  },
  {
    id: 2,
    name: "Lina Chen",
    role: "执行主任",
    bio: "负责组织战略与项目统筹，擅长社区资源整合与影响评估。",
  },
  {
    id: 3,
    name: "David Morales",
    role: "教育项目主管",
    bio: "拥有 12 年教育项目经验，专注弱势儿童学习支持体系建设。",
  },
  {
    id: 4,
    name: "Mia Thompson",
    role: "环境项目主管",
    bio: "专注城市生态和公众参与式环保行动，倡导可持续社区实践。",
  },
  {
    id: 5,
    name: "Zoe Wang",
    role: "志愿者发展经理",
    bio: "负责志愿者招募与培训体系，推动青年志愿者长期成长路径。",
  },
  {
    id: 6,
    name: "Ethan Brooks",
    role: "财务与合规负责人",
    bio: "负责财务透明披露与合规管理，确保每一笔善款可追踪、可审计。",
  },
];

export const faqList: FAQ[] = [
  {
    id: 1,
    question: "如何参与志愿者服务？",
    answer: "可在志愿者招募页面提交报名表。我们会在 3 个工作日内通过邮件联系并安排线上说明会。",
  },
  {
    id: 2,
    question: "捐赠后是否可以获取收据？",
    answer: "可以。提交捐赠后系统会发送电子确认函，财务团队将在 5 个工作日内提供捐赠记录证明。",
  },
  {
    id: 3,
    question: "善款将主要用于哪些方向？",
    answer: "善款将根据捐赠意向用于儿童教育、环境保护、困境帮扶和志愿者服务能力建设。",
  },
  {
    id: 4,
    question: "项目是否接受企业合作？",
    answer: "欢迎企业通过员工志愿服务、公益配捐、联合倡议等方式参与。可通过联系我们页面提交合作需求。",
  },
  {
    id: 5,
    question: "我可以指定捐赠项目吗？",
    answer: "可以。在在线捐赠页面可选择定向项目；若未选择，资金将进入最紧急项目池统一调配。",
  },
  {
    id: 6,
    question: "组织如何保证信息公开透明？",
    answer: "我们按月更新资金与项目执行数据，并每年发布年度报告，接受独立审计与社会监督。",
  },
  {
    id: 7,
    question: "未成年人可以报名志愿者吗？",
    answer: "16-18 岁志愿者可在监护人同意下参与指定活动，我们会安排适龄岗位与安全培训。",
  },
  {
    id: 8,
    question: "可以长期加入项目团队吗？",
    answer: "可以。核心志愿者可申请长期项目岗位，参与活动策划、执行与复盘。",
  },
];

export const annualReports = [
  {
    year: "2025",
    income: "$1,280,000",
    expense: "$1,105,000",
    beneficiaries: "4,900+",
    highlights: "新增 2 个教育项目点，志愿服务时长同比增长 37%。",
  },
  {
    year: "2024",
    income: "$1,040,000",
    expense: "$920,000",
    beneficiaries: "3,700+",
    highlights: "启动河岸守护者计划并完成首年生态恢复试点。",
  },
  {
    year: "2023",
    income: "$860,000",
    expense: "$780,000",
    beneficiaries: "2,900+",
    highlights: "建立组织透明看板，完善项目评估指标体系。",
  },
];
