import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RECENT_RECORDS } from '../constants';

const Details: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = RECENT_RECORDS.find(r => r.id === id) || RECENT_RECORDS[0];

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light">
      <header className="absolute top-0 w-full z-20 pt-4 px-4 h-16 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-black/5">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-text-main hover:bg-black/5 rounded-full w-10 h-10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-base font-bold text-center flex-1 pr-10 truncate">记录详情</h1>
      </header>

      <main className="flex-1 flex flex-col pt-20 pb-24 px-4 overflow-y-auto">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md">已验证</span>
            <span className="text-xs text-gray-500">今天 10:23</span>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-[400px]">
          {/* Photo Preview */}
          <div className="relative group col-span-1 row-span-1 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">image</span> 照片预览
            </div>
            <div 
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuALcfHnKj8ZUovUWZ8rNrWTiH0j0toWnJDzhHWAXCMJvyVnMIAFkw-smzOeHzW1wyh8ZxEBVa9qbFuo1YQ4g3wKfln_8KRZG6zQnSv20IbMC98x4F7gtkk68KG8p-ah5avpnzQqxFd-DdQtgwwY8s2q8LEQi4uMd-XJZTRiqGxdrzjdPjOfrAYGwzSqhtQqqPo53Y53Iw39nMKhigULkHUWCNgu8hTVEoq2S16StzQToAQoqdq8sq9lFCjak_CgUqI3frYpEEY-YEU")` }}
            ></div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer">
              <span className="material-symbols-outlined text-white drop-shadow-md">zoom_in_map</span>
            </div>
          </div>

          {/* Extracted Data */}
          <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-sm p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary">提取数据</h3>
              <span className="material-symbols-outlined text-primary text-[16px]">document_scanner</span>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="group/copy cursor-pointer">
                <p className="text-[10px] text-gray-400 uppercase leading-none mb-1">序列号</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-mono font-medium text-gray-900 truncate">REF-99283-X</p>
                  <span className="material-symbols-outlined text-[10px] text-gray-400 opacity-0 group-hover/copy:opacity-100 transition-opacity">content_copy</span>
                </div>
              </div>
              <div className="group/copy cursor-pointer">
                <p className="text-[10px] text-gray-400 uppercase leading-none mb-1">型号</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-mono font-medium text-gray-900 truncate">BCD-500W</p>
                </div>
              </div>
              <div className="group/copy cursor-pointer">
                <p className="text-[10px] text-gray-400 uppercase leading-none mb-1">69码</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-mono font-medium text-gray-900 truncate">690123456789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Matched Product */}
          <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-sm p-3 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-2 z-10 relative">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary">匹配产品</h3>
              <span className="material-symbols-outlined text-green-500 text-[16px] filled">check_circle</span>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] text-black/5 pointer-events-none rotate-12">kitchen</span>
            <div className="flex-1 flex flex-col justify-end z-10 relative">
              <p className="text-xs font-bold text-gray-900 leading-tight mb-1 line-clamp-2">{item.title}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                  {item.category || '大家电'}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-800">
                  {item.efficiency || '一级能效'}
                </span>
              </div>
            </div>
          </div>

          {/* Subsidy Card */}
          <div className="col-span-1 row-span-1 bg-gradient-to-br from-primary to-[#005bbd] rounded-xl shadow-md p-3 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
            <div className="flex items-center justify-between relative z-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">补贴金额</h3>
              <span className="material-symbols-outlined text-white/90 text-[16px]">currency_yen</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center relative z-10">
              <p className="text-3xl font-bold tracking-tight">¥{item.amount || '500'}</p>
              <p className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full mt-1 font-medium backdrop-blur-sm">自动通过</p>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-6 left-0 w-full px-4 z-30">
        <div className="flex gap-3 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
          <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            <span>编辑</span>
          </button>
          <button className="flex items-center justify-center w-14 bg-red-50 text-red-600 hover:bg-red-100 font-semibold rounded-xl transition-all active:scale-[0.95]">
            <span className="material-symbols-outlined text-[24px]">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
