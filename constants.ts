import { HistoryItem, ProductItem } from './types';

export const RECENT_RECORDS: HistoryItem[] = [
  {
    id: '1',
    title: '海尔冰箱 500L',
    sn: 'GB-2023-8849',
    time: '2分钟前',
    status: 'success',
    statusText: '补贴已批准',
    subText: '编号: GB-2023-8849 • 上海门店',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC8qEssMUnX_KGzrbi80FkTxu-LY9JB6PWYYyH9CFbNj1JV28VK2Jmb40YkCPnpPVkr6o60Os0SvVbgUVj0s2hx18DC761UYHjrX_xHNPt3Z3_5FAp30vRv459fc7vHt6YrCw8v8bWADTM9o4dpnYgKOImPlKFRkWBTUk-SiwVjODOaif7Zp4nFbwYEXFbwRLyCxVApS7n9Gngb-P7BtKFiSDdwkPZqbEXhRj4v_gGxx6M1C2t4OnD-Gq93k_SjJcwqFfO7oMKhu4',
    amount: 500,
    category: '大家电',
    efficiency: '一级能效'
  },
  {
    id: '2',
    title: '美的空调挂机',
    sn: 'Analyzing...',
    time: '15分钟前',
    status: 'pending',
    statusText: 'AI 处理中...',
    subText: '正在分析能效标签',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUN1teKyrUTqktLqS0WqYSpO4v9DRH3dIyUw8OgSuwGI6HT5YFy_OfQGxkGOR_ZwCKWhywAjbq8cGaaruSiNfc45EAeoQ7dViYdeDV1hUsXude8rf07GkanAylALhdPKhLlP3YUOLxxS60qcXNjbKc57cfEoicsqJDXZbIYOgL6nOhaFiRp-yMOrnCN-_QSGqh8ppPiGa08SDHVlIUdg1EuHPLx6IwfIpP3hYHOMVphWc0e4JRXeu_qy7SZ9XbkoK8H9YNQSGGeQk'
  },
  {
    id: '3',
    title: '西门子洗烘套装',
    sn: 'Unknown',
    time: '1小时前',
    status: 'manual',
    statusText: '需人工复核',
    subText: '检测到收据模糊',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5N0RMRn9t8N7QUd_AhwwWFItCITZCDuDrK1LJoxHnqetW-bN4116wigkfSNOzgHSwDJCsX3IdM74dsPqWS3NDzCS7H2o63eFWpQlIxOqma6MrHCA2tKIDnEbrxwOcAnmQmtDa_qZYFykXsZS8YXAEc76sopwIexsQK93wyyvMi_RKQnU-jZebg_b6kQ3WOqlYXhPgLM1weK8nNmZNDrbxYylOr7L0Ne85f6OqzrhMin5g-a9mNhXaEPg4wpVJK5B53ApZLSmwFH4'
  },
  {
    id: '4',
    title: '格力变频空调',
    sn: 'GB-2023-88X',
    time: '2小时前',
    status: 'success',
    statusText: '补贴已批准',
    subText: 'SN码: GB-2023-88X',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADJ0hdWCg4ljZIPu415eDapy09HvsbjX4MZfcn-prZvPSqAIQSJNtoZ8YsqLCda0JTfxAEIEVQ338O_DUoxVNe33U1znctUFMXJQp58ImxPXyh5uei-lxJn20dccB8XXvhgU88Vud5p3v0wF9RLZh5JyyzfhHlJa-uq0Dpq5tbJj7b8cZZ3eeWMylxr0a2EbBun3FxxR5r1Jvguxl2Dk4zy8gunzciXxc-XmKE4oDq88Y3GObYvB7l__Wh-iO9jf6VyO4aei68wcw'
  },
  {
    id: '5',
    title: '西门子 iQ300 洗衣机',
    sn: 'GB-2023-99Y',
    time: '5小时前',
    status: 'pending',
    statusText: '待处理',
    subText: 'SN码: GB-2023-99Y',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbYk7mCiAiscwQktkTFvGkgBleOilcwpqJtAy20F-Qv0ndx-J-eQdl6ixg7R7HZlaA9GF9Yuz3-Pf4BxG6z-bVnU8vKq1wyQlZzZQyAHBhX8necVpe0EA4DhfRy7Feq6WNToLnWpuXgyVTT6oHdoEHQ2n9pynjoEGWVG-U3ZV4KXTaGYN6jwu2elgg3w-Db5Vchj5eX2I15O7Gs_krV3G9CeW_9150NC3Yx1pWF812R_w3dzMJUbASbftJ8VXx0FSDrf7eCAQHkI'
  },
  {
    id: '6',
    title: '美的电饭煲',
    sn: 'MD-RC-5542',
    time: '2天前',
    status: 'success',
    statusText: '匹配成功',
    subText: 'SN码: MD-RC-5542',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJuWicyAV7UDuH9aWNlwqRJl8oaq4aVkRoQUxpAHxnr0eSAz7cZgqI_iPiBkS7rvrMxa0z4zM8QLP6Dile1nLCO4pGzq8WOTEGXKt_81epa-8tqK0HMlP0cTuiVqbp7shB_3EX6lTvVDHTVwvqVyorfJZox5iKkEzBuvN6tpK87j0vCjlXlKsjBcK9XiWXI7G7gIB5CKjuVdgDqDJgHrtkMWVpxMAx4jac8Or_O4MvM_mm_i3FZ0VXD-1PXOj3e5SfIxJ8jWeQRhw'
  },
  {
    id: '7',
    title: '索尼 Bravia 电视',
    sn: '未知',
    time: '3天前',
    status: 'failed',
    statusText: '匹配失败',
    subText: 'SN码: 未知',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVXHck8iG3tpAO1CVM_IPqOgygriiqv59FtLLb3UIF7aNXGKs8Cyu4a8H8_tXmG4RHsMusIuyPypZpOp8m4eG36TvHF0HIvJ0OvvU0mPh9UHHdRCfN51PyaAPk9GLK_E2yFZkpEIasONjhHdvtBbWjXfex5YsK1Wd-F9RAEqDTkqnVzMY9_814Ekxh2gElUWl46wyLfvRGAczzClC5k87zV_Ci4Kw8vLP23oky9FkYDyO5gADt6AtO2GX8t2-sWaaoZzkMN8KzW4'
  }
];

export const DRAFTS = [
  {
    id: 'd1',
    title: '未命名发票识别',
    time: '刚刚',
    progress: '25%',
    missing: '缺少能效标签',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADJ0hdWCg4ljZIPu415eDapy09HvsbjX4MZfcn-prZvPSqAIQSJNtoZ8YsqLCda0JTfxAEIEVQ338O_DUoxVNe33U1znctUFMXJQp58ImxPXyh5uei-lxJn20dccB8XXvhgU88Vud5p3v0wF9RLZh5JyyzfhHlJa-uq0Dpq5tbJj7b8cZZ3eeWMylxr0a2EbBun3FxxR5r1Jvguxl2Dk4zy8gunzciXxc-XmKE4oDq88Y3GObYvB7l__Wh-iO9jf6VyO4aei68wcw'
  },
  {
    id: 'd2',
    title: '格力空调 (需补充)',
    time: '昨天 14:30',
    progress: '60%',
    missing: 'SN 码模糊',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUN1teKyrUTqktLqS0WqYSpO4v9DRH3dIyUw8OgSuwGI6HT5YFy_OfQGxkGOR_ZwCKWhywAjbq8cGaaruSiNfc45EAeoQ7dViYdeDV1hUsXude8rf07GkanAylALhdPKhLlP3YUOLxxS60qcXNjbKc57cfEoicsqJDXZbIYOgL6nOhaFiRp-yMOrnCN-_QSGqh8ppPiGa08SDHVlIUdg1EuHPLx6IwfIpP3hYHOMVphWc0e4JRXeu_qy7SZ9XbkoK8H9YNQSGGeQk'
  },
  {
    id: 'd3',
    title: '手工录入草稿',
    time: '10月20日',
    progress: '40%',
    missing: '待上传凭证',
    imageUrl: null
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: '小米 14 (12GB+256GB 黑色)',
    sku: '23127PN0CC',
    barcode: '6941812749281',
    category: '手机',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdGkZiiNxPq40R9FGw9DKrj9qMAr-Wrh2N-bAz8oCEimEewrepBQLOU40YMfg07K0ZvxFuun5WjX9SYT_WW7aMpfeubkD5kh4Kll7ERWY9GagPLRP2qbZJBIQL0wAGFtGY_2wo82OBF58hQAOBgVBS3eV3J_6bgsSCaC2oLdWeSc-U3LrAVIBHjga0qQROVa2chtkz37CLjtXn_BVcAZT7V4Cgm4i3roBpZ-wTAt-5KME6eh5CZ5W6ET3oJbFAqlxFwAzGj8G4_wM'
  },
  {
    id: 'p2',
    name: '小米电视 S Pro 65 Mini LED',
    sku: 'L65M9-SP',
    barcode: '6970244528912',
    category: '电视',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiJM6QFKuADMI2l3B0DLp4M4WNot3f3X1isTFHtwGVRHH71Rsx2OIFa4RJcsPixONlambYRbvxOdyIEcda2UidCx3y17cGrURubbT0RGeFPhtVlPD93r13SA3OuaNqMR0UGgV-NyNHCvb2qkYPg0sPa-Ge3_Tub1Sq6kghsHwPJEYT2_BLD1eMiW1Rr4oPB_5I6MU-LVnMnYOckt06Bi7IkrIQE7W61DZ3-l35S-lxtkk4XvU_AoPuqi3LHHBz8hoq1h9e4H-lAGg'
  },
  {
    id: 'p3',
    name: 'Redmi Book 16 2024 (i5/16G)',
    sku: 'JYU4567CN',
    barcode: '6934177728193',
    category: '笔记本',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQrJ76eUY5IvgyQ2vKGLXZuEkEq1172CqRtx8sUjL3vOT4JgyaN4p25uz7OjwJkupkk1tZtzcGC_bdZj_rTy8PBZJ5ihBa_1FUtHhk3U1--m5d8du2MyPt8djECHHRJr0f5blyjlxENuaVY--9AxEmtChZZKfOr9lLUcYKkqSTKgxuKYOR57aovV8bB0JWbjnPy0J__lOy7VAWxVKfweDb3PQsuGzCfM4dgmJzg0uTzQzi64GxZTq9bLynD_gdyCyyfbUM8vFpjmw'
  },
  {
    id: 'p4',
    name: '米家冰箱 536L 对开门',
    sku: 'BCD-536WMSA',
    barcode: '6970244534412',
    category: '家电',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeVMIqV1AS8W01vzdCm-d8BRY5jSFpdG2Q0Glr5oXy_wv5mAKB1xuw-kRJFX7f4A3XvVD0dHkk5CVAZI4VlNENvKObETIY7acSpPAOAWrpGUQSLmHvNXcwOjp0swxTg0QusovjbiWWevuJmume3IbPFWXLnHet12tvEWJ8AX-THqhs3msfz1qw0xyegyQrABHE_VNZDTOspwdbutkj7ZMNzAra2Kr0cPC_u0LEeCG7ZuRNu7RUwOJvFoZNSuP7GAk_T-UIKWaDbEU'
  },
  {
    id: 'p5',
    name: '小米扫拖机器人 X10+',
    sku: 'B101CN',
    barcode: '6934177789012',
    category: '家电',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDRCHv5VsuiWgshcLVXuJDipjvRU1UJsRzFZAh_Qj5ruu6cbeLwDFy4TuPT3TxwFpV1oGKwihrnM64eWU9jsr5TnmNlDtcJnuZDZkxA98WrXSwbaRQzmuEzzRAN97X1w0p1BW3c10N1qk0XZ2fR-Z6J-ohD20-PS6nfrs9v1WQ3ONwoy0N_h3y2aKBx087QO30H0mOHGcmmGyPdvsqzW6GGp6CgcZvnf0UQSpFRRnVpEaniLeEFLI34T4O_BbAHPHeaf3je1Vsguk'
  }
];