interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '新西兰南北岛自驾游全纪录：四场徒步、三次冒险、数场落日星空，新西兰自助游攻略',
    description: `这是充满魔力的中土世界，极限运动的天堂，另一个半球的孤岛秘境，从北向南景观极其丰富又变化多端。`,
    imgSrc: '/static/images/MFW-2018-10-07.jpeg',
    href: 'https://www.mafengwo.cn/i/10827646.html',
  },
  {
    title: '面向通用人工智能 AGI 的实操学习',
    description: `项目制式学习。`,
    imgSrc: '/static/images/zhihu-2024-04-24.png',
    href: 'https://www.zhihu.com/column/c_1766872813313765376',
  },
]

export default projectsData
