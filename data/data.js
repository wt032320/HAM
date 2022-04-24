const itemInfo = [
    {
        title: '在线测试',
        item: [
            {
                icon: 'ceshi',
                content: '每日一测',
                router: '/pages/topic/topic',
                unique: 'sa'
            },
            {
                icon: 'kaoshi_1',
                content: '模拟考试',
                router: '/pages/exam/exam',
                unique: 'sb'
            }
        ],
        unique: 'aa'
    },
    {
        title: '社区',
        item: [
            {
                icon: 'xuexizhongxin',
                content: '学习中心',
                router: '/pages/study/study',
                unique: 'sa'
            },
        ],
        unique: 'ab'
    },
    {
        title: '个人中心',
        item: [
            {
                icon: 'yonghuxinxiguanli',
                content: '信息管理',
                router: '/pages/manage/manage',
                unique: 'sa'
            },
            {
                icon: 'shiti1',
                content: '错题集',
                router: '/pages/gather/gather',
                unique: 'sb'
            },
            {
                icon: 'shoucang1',
                content: '试题收藏',
                router: '/pages/collect/collect',
                unique: 'sc'
            },
            {
                icon: 'kaoshijilu',
                content: '考试记录',
                router: '/pages/record/record',
                unique: 'sd'
            },
        ],
        unique: 'ac'
    }
]

const examItemInfo = [
    {
        title: '数学运算',
        total_quantity: 1331,
        finish_quantity: 10,
        corrent_rate: '10%',
        unique: 'unique_0'
    },
    {
        title: '逻辑填空',
        total_quantity: 1211,
        finish_quantity: 1211,
        corrent_rate: '65%',
        unique: 'unique_1'
    },
    {
        title: '常识判断',
        total_quantity: 1451,
        finish_quantity: 0,
        corrent_rate: '0%',
        unique: 'unique_2'
    },
    {
        title: '片段阅读',
        total_quantity: 1635,
        finish_quantity: 1456,
        corrent_rate: '2%',
        unique: 'unique_3'
    },
    {
        title: '类比推理',
        total_quantity: 1315,
        finish_quantity: 34,
        corrent_rate: '2%',
        unique: 'unique_4'
    },
    {
        title: '逻辑判断',
        total_quantity: 981,
        finish_quantity: 20,
        corrent_rate: '4%',
        unique: 'unique_5'
    },
    {
        title: '定义判断',
        total_quantity: 1981,
        finish_quantity: 220,
        corrent_rate: '14%',
        unique: 'unique_6'
    },
]

const topicData = [
    {
        number: 1,
        type: '单选题',
        question: '我国现行法律体系中专门针对无线电管理的最高法律文件及其立法机关是:',
        options: [{ 
            content: '中华人民共和国无线电管理条例，国务院和中央军委',
            select: "A",
        },{
            
            content: '中华人民共和国无线电管理办法，工业和信息化部',
            select: "B",
        },{ 
            content: '中华人民共和国电信条例，国务院',
            select: "C",
        },{ 
            content: '中华人民共和国业余无线电台管理办法，工业和信息化部',
            select: "D",
        }],
        correct_option: 'A',
        
    },
    {
        number: 2,
        type: '单选题',
        question: '我国现行法律体系中专门针对业余无线电台管理的最高法律文件及其立法机关是：',
        options: [{ 
            
            content: '业余无线电台管理办法，工业和信息化部',
            select: "A",
        },{
            
            content: '个人业余无线电台管理暂行办法，国家体委和国家无委',
            select: "B",
        },{ 
            content: '业余无线电台管理暂行规定，国家体委和国家无委',
            select: "C",
        },{ 
            content: '中华人民共和国电信条例，国务院',
            select: "D",
        }],
        correct_option: 'A'
    },
    {
        number: 3,
        type: '单选题',
        question: '我国的无线电主管部门是：',
        options: [{ 
            
            content: '各级无线电管理机构',
            select: "A",
        },{
            
            content: '各级体育管理机构',
            select: "B",
        },{ 
            content: '各地业余无线电协会',
            select: "C",
        },{ 
            content: '各地电信管理局',
            select: "D",
        }],
        correct_option: 'C'
    },
    {
        number: 4,
        type: '单选题',
        question: '我国依法负责对业余无线电台实施监督管理的机构是：',
        options: [{ 
            
            content: '国家无线电管理机构和地方无线电管理机构',
            select: "A",
        },{
            
            content: '在国家或地方民政部门注册的业余无线电协会',
            select: "B",
        },{ 
            content: '国家体育管理机构和地方体育管理机构',
            select: "C",
        },{ 
            content: '国家和地方公安部门',
            select: "D",
        }],
        correct_option: 'B'
    },
    {
        number: 5,
        type: '单选题',
        question: '《业余无线电台管理办法》所说的“地方无线电管理机构”指的是：',
        options: [{ 
            
            content: '省、自治区、直辖市无线电管理机构',
            select: "A",
        },{
            
            content: '地方业余无线电协会或者类似组织机构',
            select: "B",
        },{ 
            content: '地市县（区）及以下各级无线电管理机构',
            select: "C",
        },{ 
            content: '各地方与无线电设备生产销售和无线电应用有关的行政管理机构',
            select: "D",
        }],
        correct_option: 'A'
    },
    {
        number: 6,
        type: '单选题',
        question: '国家鼓励和支持业余无线电台开展下列活动：',
        options: [{ 
            content: '无线电通信技术研究、普及活动以及突发重大自然灾害等紧急情况下的应急通信活动',
            select: "A",
        },{
            content: '休闲娱乐性交谈',
            select: "B",
        },{ 
            content: '机动车辆行车服务性通信活动',
            select: "C",
        },{ 
            content: '作为日常公益活动的通信工具',
            select: "D",
        }],
        correct_option: 'C'
    },
    {
        number: 7,
        type: '单选题',
        question: '关于业余电台管理的正确说法是：',
        options: [{ 
            content: '依法设置的业余无线电台受国家法律保护',
            select: "A",
        },{
            content: '业余无线电爱好者的一切行为都受国家法律保护',
            select: "B",
        },{ 
            content: '通过法律手段限制业余无线电台的设置',
            select: "C",
        },{ 
            content: '在业余电台与其他业务电台遇到干扰纠纷时无条件优先保护其他业务电台',
            select: "D",
        }],
        correct_option: 'D'
    },
    {
        number: 8,
        type: '单选题',
        question: '无线电频率的使用必须得到各级无线电管理机构的批准，基本依据是“无线电频谱资源属于国家所有”，出自于下列法律：',
        options: [{ 
            content: '中华人民共和国物权法',
            select: "A",
        },{
            content: '中华人民共和国民法通则',
            select: "B",
        },{ 
            content: '中华人民共和国刑法',
            select: "C",
        },{ 
            content: '中华人民共和国电信法',
            select: "D",
        }],
        correct_option: 'B'
    },
    {
        number: 9,
        type: '单选题',
        question: '我国对无线电管理术语“业余业务”、“卫星业余业务”和“业余无线电台”做出具体定义的法规文件是：',
        options: [{ 
            
            content: '中华人民共和国无线电频率划分规定',
            select: "A",
        },{
            
            content: '中华人民共和国无线电管理条例',
            select: "B",
        },{ 
            content: '中华人民共和国电信条例',
            select: "C",
        },{ 
            content: '无线电台执照管理规定',
            select: "D",
        }],
        correct_option: 'A'
    },
    {
        number: 10,
        type: '单选题',
        question: '业余电台的法定用途为：',
        options: [{ 
            
            content: '供业余无线电爱好者进行自我训练、相互通信和技术研究',
            select: "A",
        },{
            
            content: '供公民在业余时间进行与个人生活事务有关的通信',
            select: "B",
        },{ 
            content: '供公民在业余时间进行休闲娱乐',
            select: "C",
        },{ 
            content: '供私家车主或者相应组织作为行车安全保障和途中消遣工具',
            select: "D",
        }],
        correct_option: 'C'
    },
    {
        number: 11,
        type: '单选题',
        question: '业余电台的法定用途为：',
        options: [{ 
            
            content: '供业余无线电爱好者进行自我训练、相互通信和技术研究',
            select: "A",
        },{
            
            content: '供公民在业余时间进行与个人生活事务有关的通信',
            select: "B",
        },{ 
            content: '供公民在业余时间进行休闲娱乐',
            select: "C",
        },{ 
            content: '供私家车主或者相应组织作为行车安全保障和途中消遣工具',
            select: "D",
        }],
        correct_option: 'C'
    },
    {
        number: 12,
        type: '单选题',
        question: '业余电台的法定用途为：',
        options: [{ 
            
            content: '供业余无线电爱好者进行自我训练、相互通信和技术研究',
            select: "A",
        },{
            
            content: '供公民在业余时间进行与个人生活事务有关的通信',
            select: "B",
        },{ 
            content: '供公民在业余时间进行休闲娱乐',
            select: "C",
        },{ 
            content: '供私家车主或者相应组织作为行车安全保障和途中消遣工具',
            select: "D",
        }],
        correct_option: 'C'
    },
    {
        number: 13,
        type: '单选题',
        question: '业余电台的法定用途为：',
        options: [{ 
            
            content: '供业余无线电爱好者进行自我训练、相互通信和技术研究',
            select: "A",
        },{
            
            content: '供公民在业余时间进行与个人生活事务有关的通信',
            select: "B",
        },{ 
            content: '供公民在业余时间进行休闲娱乐',
            select: "C",
        },{ 
            content: '供私家车主或者相应组织作为行车安全保障和途中消遣工具',
            select: "D",
        }],
        correct_option: 'C'
    },
]

const recordInfo = [
    {
        title: '模拟考试一',
        correctNumber: 12,
        unfinishedNumber: 11,
        wrongNumber: 7,
        totalNumber: 30,
        status: false,
        startedAt: '2022/04/21 12:30',
        createAt: '2022/04/21 14:00'
    },
    {
        title: '模拟考试二',
        correctNumber: 21,
        unfinishedNumber: 0,
        wrongNumber: 9,
        totalNumber: 30,
        status: true,
        startedAt: '2022/04/21 14:30',
        createAt: '2022/04/21 15:00'
    }
]

const studyInfo = [
    {
        _id: '1',
        author: '小嘴抹了蜜',
        category: '技能分享',
        time: '2022/04/12 12:30:22',
        title: 'javascript debugger 原理揭秘',
        pictureUrl: '../../images/image/info.png',
        paragraph: '文字是人类用符号记录表达信息以传之久远的方式和工具。 现代文字大多是记录语言的工具。 人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。'
    },
    {
        _id: '2',
        author: '唐家四少z',
        category: '技能分享',
        time: '2022/04/12 12:30:22',
        title: 'javascript es6语法',
        pictureUrl: 'http://tmp/7gawsQwBuPo95960a189dd3fb52ae636a71a242dc7b6.jpg',
        paragraph: '接到手书，知道你要到我的故乡去，叫我给你一点什么指导。老实说，我的故乡，真正觉得可怀恋的地方并不是那里；但是因为在那里生长，住过十多年，究竟知道一点情形，所以写这一封信告诉你。'
    },
    {
        _id: '3',
        author: '小嘴抹了蜜',
        category: '技能分享',
        time: '2022/04/12 12:30:22',
        title: 'javascript debugger 原理揭秘',
        pictureUrl: '../../images/image/login.png',
        paragraph: '文字是人类用符号记录表达信息以传之久远的方式和工具。 现代文字大多是记录语言的工具。 人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。'
    },
    {
        _id: '4',
        author: '京城十三少',
        category: '技能分享',
        time: '2022/04/12 12:30:22',
        title: '钢铁是怎样练成的，文字是人类用符号记录表达信息以传之久远的方式和工具',
        pictureUrl: '',
        paragraph: '我所要告诉你的，并不是那里的风土人情，那是写不尽的，但是你到那里一看也就会明白的，不必啰唆地多讲。我要说的是一种很有趣的东西，这便是船。你在家乡平常总坐人力车、电车或是汽车，但在我的故乡那里这些都没有，除了在城内或山上是用轿子以外，普通代步都是用船。'
    },
    {
        _id: '5',
        author: '我不知道gaa',
        category: '大神分享',
        time: '2022/04/12 12:30:22',
        title: 'jdk18的开发思路',
        pictureUrl: '',
        paragraph: '你如坐船出去，可是不能像坐电车的那样性急，立刻盼望走到。倘若出城，走三四十里路（我们那里的里程是很短，一里才及英里三分之一），来回总要预备一天。你坐在船上，应该是游山的态度，看看四周物色，随处可见的山，岸旁的乌桕，河边的红寥和白苹、渔舍，各式各样的桥，困倦的时候睡在舱中拿出随笔来看，或者冲一碗清茶喝喝。'
    },
    {
        _id: '6',
        author: '月花满天z',
        category: '技能分享',
        time: '2022/04/12 12:30:22',
        title: '你如坐船出去，可是不能像坐电车的那样性急，立刻盼望走到。',
        pictureUrl: '',
        paragraph: '文字是人类用符号记录表达信息以传之久远的方式和工具。 现代文字大多是记录语言的工具。 人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。'
    },
]

export {
    itemInfo,
    examItemInfo,
    topicData,
    recordInfo,
    studyInfo
}