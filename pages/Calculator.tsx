import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CalcCategory = 'home' | 'digital' | 'car';
type CarType = 'scrap' | 'tradein';
type CarEnergy = 'ev' | 'fuel';

const Calculator: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CalcCategory>('home');
  const [amount, setAmount] = useState<string>('');
  
  // Car specific state
  const [carType, setCarType] = useState<CarType>('scrap');
  const [carEnergy, setCarEnergy] = useState<CarEnergy>('ev');

  // Logic Calculation
  let subsidyRate = 0;
  let maxSubsidy = 0;
  let warningMessage = '';
  let subsidyAmount = 0;
  
  const numericAmount = parseFloat(amount);

  if (!isNaN(numericAmount) && numericAmount > 0) {
    if (activeCategory === 'home') {
      // Home Appliance: 15% for Level 1, Max 1500
      subsidyRate = 0.15;
      maxSubsidy = 1500;
      subsidyAmount = Math.min(numericAmount * subsidyRate, maxSubsidy);
    } else if (activeCategory === 'digital') {
      // Digital: 15%, Max 500, Price Limit 6000
      if (numericAmount > 6000) {
        warningMessage = '单件销售价格不得超过 6000 元';
        subsidyAmount = 0;
      } else {
        subsidyRate = 0.15;
        maxSubsidy = 500;
        subsidyAmount = Math.min(numericAmount * subsidyRate, maxSubsidy);
      }
    } else if (activeCategory === 'car') {
      // Car Logic
      if (carType === 'scrap') {
        if (carEnergy === 'ev') {
          subsidyRate = 0.12;
          maxSubsidy = 20000;
        } else {
          subsidyRate = 0.10;
          maxSubsidy = 15000;
        }
      } else { // tradein
        if (carEnergy === 'ev') {
          subsidyRate = 0.08;
          maxSubsidy = 15000;
        } else {
          subsidyRate = 0.06;
          maxSubsidy = 13000;
        }
      }
      subsidyAmount = Math.min(numericAmount * subsidyRate, maxSubsidy);
    }
  }

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="flex items-center p-4 pb-2 justify-between z-10 sticky top-0 bg-background-light">
        <button onClick={() => navigate(-1)} className="text-slate-900 flex size-12 shrink-0 items-center justify-center rounded-full active:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined" style={{fontSize: '24px'}}>arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">2026 补贴计算器</h2>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-2 pb-8 overflow-y-auto hide-scrollbar z-10">
        {/* Category Selector */}
        <div className="flex py-3 mb-2">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200/60 p-1 relative">
            <button 
              onClick={() => { setActiveCategory('home'); setAmount(''); }}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-[10px] px-2 transition-all duration-200 z-10 ${activeCategory === 'home' ? 'bg-white shadow-sm text-primary font-semibold' : 'text-slate-500 font-medium'}`}
            >
              <span className="truncate text-sm leading-normal">家电</span>
            </button>
            <button 
              onClick={() => { setActiveCategory('digital'); setAmount(''); }}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-[10px] px-2 transition-all duration-200 z-10 ${activeCategory === 'digital' ? 'bg-white shadow-sm text-purple-600 font-semibold' : 'text-slate-500 font-medium'}`}
            >
              <span className="truncate text-sm leading-normal">数码</span>
            </button>
             <button 
              onClick={() => { setActiveCategory('car'); setAmount(''); }}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-[10px] px-2 transition-all duration-200 z-10 ${activeCategory === 'car' ? 'bg-white shadow-sm text-green-600 font-semibold' : 'text-slate-500 font-medium'}`}
            >
              <span className="truncate text-sm leading-normal">汽车</span>
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div className="flex flex-col gap-2 py-2">
          <label className="text-slate-900 text-base font-semibold leading-normal">
            {activeCategory === 'car' ? '车辆价格' : '发票金额'}
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400 text-xl font-medium">¥</span>
            <input 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-white h-16 pl-10 pr-4 text-2xl font-bold leading-normal placeholder:text-slate-300 transition-all shadow-sm ${warningMessage ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'}`}
              inputMode="decimal" 
              type="number"
              placeholder="0.00"
            />
          </div>
          {warningMessage ? (
             <p className="text-xs text-red-500 px-1 font-medium flex items-center gap-1">
               <span className="material-symbols-outlined text-[14px]">error</span> {warningMessage}
             </p>
          ) : (
            <p className="text-xs text-slate-400 px-1">
              {activeCategory === 'home' && '包括冰箱、洗衣机、电视、空调、电脑、热水器'}
              {activeCategory === 'digital' && '包括手机、平板、手表、眼镜 (限价6000元)'}
              {activeCategory === 'car' && '请输入购车发票金额'}
            </p>
          )}
        </div>

        {/* Options for Car */}
        {activeCategory === 'car' && (
          <div className="flex flex-col gap-4 py-4 animate-in fade-in slide-in-from-top-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">更新方式</label>
              <div className="grid grid-cols-2 gap-3">
                <div 
                  onClick={() => setCarType('scrap')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${carType === 'scrap' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined">auto_delete</span>
                    <span className="font-bold text-sm">报废更新</span>
                  </div>
                  <p className="text-[10px] opacity-80">报废国四及以下/旧新能源</p>
                </div>
                <div 
                  onClick={() => setCarType('tradein')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${carType === 'tradein' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined">car_tag</span>
                    <span className="font-bold text-sm">置换更新</span>
                  </div>
                  <p className="text-[10px] opacity-80">转让名下旧车并购买新车</p>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">新车类型</label>
              <div className="grid grid-cols-2 gap-3">
                 <div 
                  onClick={() => setCarEnergy('ev')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${carEnergy === 'ev' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">electric_car</span>
                    <span className="font-bold text-sm">新能源车</span>
                  </div>
                </div>
                <div 
                  onClick={() => setCarEnergy('fuel')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${carEnergy === 'fuel' ? 'bg-orange-50 border-orange-500 text-orange-700' : 'bg-white border-gray-200 text-gray-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">local_gas_station</span>
                    <span className="font-bold text-sm">2.0L及以下燃油</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Options for Home Appliance */}
        {activeCategory === 'home' && (
           <div className="flex flex-col gap-3 py-4 animate-in fade-in slide-in-from-top-4">
            <h2 className="text-slate-900 text-base font-semibold leading-tight tracking-[-0.015em]">能效标准</h2>
            <div className="flex gap-3 flex-wrap">
              <div 
                className={`cursor-pointer flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-5 pr-5 shadow-sm transition-all bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-background-light shadow-primary/20`}
              >
                <span className="material-symbols-outlined text-[18px]">eco</span>
                <p className="text-sm font-bold leading-normal">一级能效/水效</p>
              </div>
              <div 
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-5 pr-5 bg-slate-100 text-slate-400 cursor-not-allowed`}
              >
                <p className="text-sm font-medium leading-normal">二级能效 (暂无补贴)</p>
              </div>
            </div>
          </div>
        )}

        <div className="h-4"></div>

        {/* Result Card */}
        <div className="relative w-full mt-2">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-success/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
          
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 flex flex-col items-center text-center transition-all">
            <div className="flex items-center gap-2 mb-2 opacity-80">
              <span className="material-symbols-outlined text-slate-500" style={{fontSize: '20px'}}>calculate</span>
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">预计补贴</span>
            </div>
            <div className="flex items-baseline gap-1 my-2">
              <span className="text-success text-2xl font-bold">+</span>
              <span className="text-success text-5xl font-black tracking-tight drop-shadow-sm">
                {subsidyAmount.toFixed(2).split('.')[0]}
              </span>
              <span className="text-success text-3xl font-bold">.{subsidyAmount.toFixed(2).split('.')[1]}</span>
            </div>
            <span className="text-slate-400 text-sm font-medium mb-6">元 (CNY)</span>
            
            <div className="w-full bg-white/50 rounded-xl p-3 flex flex-col gap-2 border border-white/40">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">补贴比例</span>
                <span className="text-primary font-medium">{(subsidyRate * 100).toFixed(0)}%</span>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">最高补贴限额</span>
                <span className="text-slate-900 font-medium">¥ {maxSubsidy.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-400 mt-1">
                <span>
                  {activeCategory === 'home' && '* 仅限1级能效产品'}
                  {activeCategory === 'digital' && '* 单品限价6000元以内'}
                  {activeCategory === 'car' && '* 符合发改环资〔2025〕1745号'}
                </span>
                <span 
                   onClick={() => navigate('/policy')}
                   className="material-symbols-outlined text-[16px] text-primary cursor-pointer"
                >
                  help
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
