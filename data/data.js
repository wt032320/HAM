const itemInfo = [
    {
        title: '在线测试',
        item: [
            {
                icon: 'ceshi',
                content: '每日一测',
                router: '/pages/exercise/exercise',
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
            {
                icon: 'luntanzhongxin',
                content: '论坛中心',
                router: '/pages/forum/forum',
                unique: 'sb'
            }
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
            }
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
        optionA: '中华人民共和国无线电管理条例，国务院和中央军委',
        optionB: '中华人民共和国无线电管理办法，工业和信息化部',
        optionC: '中华人民共和国电信条例，国务院',
        optionD: '中华人民共和国业余无线电台管理办法，工业和信息化部',
        correct_option: 'A'
    },
    {
        number: 2,
        type: '单选题',
        question: '我国现行法律体系中专门针对业余无线电台管理的最高法律文件及其立法机关是：',
        optionA: '业余无线电台管理办法，工业和信息化部',
        optionB: '个人业余无线电台管理暂行办法，国家体委和国家无委',
        optionC: '业余无线电台管理暂行规定，国家体委和国家无委',
        optionD: '中华人民共和国电信条例，国务院',
        correct_option: 'A'
    },
    {
        number: 3,
        type: '单选题',
        question: '我国的无线电主管部门是：',
        optionA: '各级无线电管理机构',
        optionB: '各级体育管理机构',
        optionC: '各地业余无线电协会',
        optionD: '各地电信管理局',
        correct_option: 'A'
    },
    {
        number: 4,
        type: '单选题',
        question: '我国依法负责对业余无线电台实施监督管理的机构是：',
        optionA: '国家无线电管理机构和地方无线电管理机构',
        optionB: '在国家或地方民政部门注册的业余无线电协会',
        optionC: '国家体育管理机构和地方体育管理机构',
        optionD: '国家和地方公安部门',
        correct_option: 'A'
    },
    {
        number: 5,
        type: '单选题',
        question: '《业余无线电台管理办法》所说的“地方无线电管理机构”指的是：',
        optionA: '省、自治区、直辖市无线电管理机构',
        optionB: '地方业余无线电协会或者类似组织机构',
        optionC: '地市县（区）及以下各级无线电管理机构',
        optionD: '各地方与无线电设备生产销售和无线电应用有关的行政管理机构',
        correct_option: 'A'
    },
    {
        number: 6,
        type: '单选题',
        question: '国家鼓励和支持业余无线电台开展下列活动：',
        optionA: '无线电通信技术研究、普及活动以及突发重大自然灾害等紧急情况下的应急通信活动',
        optionB: '休闲娱乐性交谈',
        optionC: '机动车辆行车服务性通信活动',
        optionD: '作为日常公益活动的通信工具',
        correct_option: 'A'
    },
    {
        number: 7,
        type: '单选题',
        question: '关于业余电台管理的正确说法是：',
        optionA: '依法设置的业余无线电台受国家法律保护',
        optionB: '业余无线电爱好者的一切行为都受国家法律保护',
        optionC: '通过法律手段限制业余无线电台的设置',
        optionD: '在业余电台与其他业务电台遇到干扰纠纷时无条件优先保护其他业务电台',
        correct_option: 'A'
    },
    {
        number: 8,
        type: '单选题',
        question: '无线电频率的使用必须得到各级无线电管理机构的批准，基本依据是“无线电频谱资源属于国家所有”，出自于下列法律：',
        optionA: '中华人民共和国物权法',
        optionB: '中华人民共和国民法通则',
        optionC: '中华人民共和国刑法',
        optionD: '中华人民共和国电信法',
        correct_option: 'A'
    },
    {
        number: 9,
        type: '单选题',
        question: '我国对无线电管理术语“业余业务”、“卫星业余业务”和“业余无线电台”做出具体定义的法规文件是：',
        optionA: '中华人民共和国无线电频率划分规定',
        optionB: '中华人民共和国无线电管理条例',
        optionC: '中华人民共和国电信条例',
        optionD: '无线电台执照管理规定',
        correct_option: 'A'
    },
    {
        number: 10,
        type: '单选题',
        question: '业余电台的法定用途为：',
        optionA: '供业余无线电爱好者进行自我训练、相互通信和技术研究',
        optionB: '供公民在业余时间进行与个人生活事务有关的通信',
        optionC: '供公民在业余时间进行休闲娱乐',
        optionD: '供私家车主或者相应组织作为行车安全保障和途中消遣工具',
        correct_option: 'A'
    },
]

export {
    itemInfo,
    examItemInfo,
    topicData
}