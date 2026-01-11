import React from 'react';
import { useNavigate } from 'react-router-dom';

const Policy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 pt-4 pb-2">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button 
            onClick={() => navigate(-1)} 
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-bold leading-tight tracking-tight flex-1 text-center">2026 政策详情</h2>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 pb-24">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-[#101418] mb-2 leading-snug">
            关于2026年实施大规模设备更新和消费品以旧换新政策的通知
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">发改环资〔2025〕1745号</span>
            <span>2025年12月29日</span>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-base font-bold text-[#101418] mb-4">
              <span className="flex items-center justify-center size-6 rounded-full bg-blue-100 text-primary text-xs">01</span>
              家电以旧换新
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-1">补贴范围 (6类)</p>
                <p className="text-sm text-gray-600">冰箱、洗衣机、电视、空调、电脑、热水器</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <p className="text-xs text-gray-500 mb-1">能效要求</p>
                  <p className="text-sm font-bold text-primary">1级能效/水效</p>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <p className="text-xs text-gray-500 mb-1">补贴比例</p>
                  <p className="text-sm font-bold text-primary">15%</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
                <span className="material-symbols-outlined text-[16px]">info</span>
                每位消费者每类产品补贴1件，上限1500元
              </div>
            </div>
          </section>

          <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-base font-bold text-[#101418] mb-4">
              <span className="flex items-center justify-center size-6 rounded-full bg-purple-100 text-purple-600 text-xs">02</span>
              数码产品购新
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-1">补贴范围 (4类)</p>
                <p className="text-sm text-gray-600">手机、平板、智能手表手环、智能眼镜</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-600">单件限价</span>
                <span className="text-sm font-bold text-gray-900">≤ 6000元</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                  <p className="text-xs text-gray-500 mb-1">补贴比例</p>
                  <p className="text-sm font-bold text-purple-600">15%</p>
                </div>
                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                  <p className="text-xs text-gray-500 mb-1">最高补贴</p>
                  <p className="text-sm font-bold text-purple-600">500元</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-base font-bold text-[#101418] mb-4">
              <span className="flex items-center justify-center size-6 rounded-full bg-green-100 text-green-600 text-xs">03</span>
              汽车以旧换新
            </h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2 border-l-4 border-green-500 pl-2">报废更新</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-green-50/30 rounded-xl border border-green-100">
                  <span className="text-sm text-gray-700">新能源乘用车</span>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-green-700">补贴 12%</span>
                    <span className="block text-[10px] text-green-600">上限 2万元</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-sm text-gray-700">2.0L及以下燃油车</span>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-gray-900">补贴 10%</span>
                    <span className="block text-[10px] text-gray-500">上限 1.5万元</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-2 border-l-4 border-blue-500 pl-2">置换更新</h4>
               <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-xl border border-blue-100">
                  <span className="text-sm text-gray-700">新能源乘用车</span>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-blue-700">补贴 8%</span>
                    <span className="block text-[10px] text-blue-600">上限 1.5万元</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-sm text-gray-700">2.0L及以下燃油车</span>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-gray-900">补贴 6%</span>
                    <span className="block text-[10px] text-gray-500">上限 1.3万元</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

           <section className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-base font-bold text-[#101418] mb-4">
              <span className="flex items-center justify-center size-6 rounded-full bg-gray-100 text-gray-600 text-xs">04</span>
              其他政策
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600">
              <li>支持智能家居（含适老化）产品，具体由地方制定。</li>
              <li>支持老旧营运货车、新能源公交车、老旧农机报废更新。</li>
              <li>支持老旧小区加装电梯、养老机构设施更新。</li>
            </ul>
          </section>
          
           <div className="flex justify-center pt-4">
            <button 
              onClick={() => navigate('/calculator')}
              className="bg-[#101418] text-white px-6 py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-transform flex items-center gap-2"
            >
              <span className="material-symbols-outlined">calculate</span>
              前往补贴计算器
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;