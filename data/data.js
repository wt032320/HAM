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

export {
    itemInfo,
    examItemInfo
}