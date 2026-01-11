import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RECENT_RECORDS, DRAFTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4 pt-4">
      {/* Header */}
      <header className="flex items-center justify-between h-16 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-xl">smart_toy</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[#1d1d1f]">AutoGB</h1>
        </div>
        <button 
          onClick={() => navigate('/settings')}
          className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 transition-colors cursor-pointer text-[#1d1d1f]"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      {/* Hero Section Title */}
      <div className="mt-2 mb-4">
        <h2 className="text-2xl font-bold text-[#1d1d1f] leading-tight">智能识别上传</h2>
        <p className="text-sm text-gray-500 mt-1">选择录入方式，加速补贴处理。</p>
      </div>

      {/* Dual Action Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Scan Card */}
        <div className="relative group cursor-pointer active:scale-[0.98] transition-all">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
          <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-white/60 backdrop-blur-sm p-4 h-48 transition-all duration-300 hover:border-primary hover:bg-white/80 shadow-sm">
            <div className="relative mb-3">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform scale-125"></div>
              <div className="relative bg-gradient-to-tr from-primary to-blue-400 size-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-2xl">add_a_photo</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-center mb-1 text-[#1d1d1f]">拍照识别</h3>
            <p className="text-xs text-center text-gray-500 leading-tight px-2">
              扫描收据与能效标签
            </p>
            <div className="mt-3 px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">
              AI 智能匹配
            </div>
          </div>
        </div>

        {/* Manual Input Card */}
        <div 
          onClick={() => navigate('/manual')}
          className="relative group cursor-pointer active:scale-[0.98] transition-all"
        >
          <div className="absolute inset-0 bg-purple-500/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
          <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-purple-500/30 bg-white/60 backdrop-blur-sm p-4 h-48 transition-all duration-300 hover:border-purple-500 hover:bg-white/80 shadow-sm">
            <div className="relative mb-3">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl transform scale-125"></div>
              <div className="relative bg-gradient-to-tr from-purple-500 to-indigo-400 size-14 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="material-symbols-outlined text-white text-2xl">edit_document</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-center mb-1 text-[#1d1d1f]">手动录入</h3>
            <p className="text-xs text-center text-gray-500 leading-tight px-2">
              直接填写详细信息
            </p>
            <div className="mt-3 px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-full border border-purple-100">
              精确录入
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-0">
        <button 
          onClick={() => navigate('/import')}
          className="flex flex-col items-start p-4 rounded-xl bg-white shadow-sm border border-gray-100 active:scale-95 transition-transform"
        >
          <div className="p-2 rounded-lg bg-orange-50 text-orange-600 mb-3">
            <span className="material-symbols-outlined">folder_open</span>
          </div>
          <span className="text-sm font-semibold text-[#1d1d1f]">导入文件</span>
          <span className="text-xs text-gray-400">PDF 或图片</span>
        </button>
        <button 
          onClick={() => navigate('/drafts')}
          className="flex flex-col items-start p-4 rounded-xl bg-white shadow-sm border border-gray-100 active:scale-95 transition-transform"
        >
          <div className="p-2 rounded-lg bg-green-50 text-green-600 mb-3">
            <span className="material-symbols-outlined">history</span>
          </div>
          <span className="text-sm font-semibold text-[#1d1d1f]">草稿箱</span>
          <span className="text-xs text-gray-400">{DRAFTS.length} 个待处理</span>
        </button>
      </div>

      {/* Recent List */}
      <div className="flex items-center justify-between mt-8 mb-4 px-1">
        <h3 className="text-lg font-bold text-[#1d1d1f]">最近识别</h3>
        <button 
          onClick={() => navigate('/history')}
          className="text-primary text-sm font-medium hover:text-blue-600"
        >
          查看全部
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-8">
        {RECENT_RECORDS.slice(0, 4).map((item) => (
          <div 
            key={item.id}
            onClick={() => navigate(`/details/${item.id}`)}
            className="group flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 active:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="relative shrink-0">
              <div 
                className="bg-center bg-no-repeat bg-cover rounded-xl size-16" 
                style={{ backgroundImage: `url("${item.imageUrl}")` }}
              ></div>
              <div className={`absolute -bottom-1 -right-1 rounded-full border-2 border-white size-5 flex items-center justify-center ${
                item.status === 'success' ? 'bg-green-500' : 
                item.status === 'pending' ? 'bg-blue-500 animate-pulse' : 
                item.status === 'failed' ? 'bg-red-500' : 'bg-orange-500'
              }`}>
                <span className="material-symbols-outlined text-white text-[12px] font-bold">
                  {item.status === 'success' ? 'check' : item.status === 'pending' ? 'hourglass_top' : item.status === 'failed' ? 'close' : 'priority_high'}
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-[#1d1d1f] text-base font-semibold truncate pr-2">{item.title}</p>
                <span className="text-xs text-gray-400 shrink-0 mt-1">{item.time}</span>
              </div>
              <p className={`text-xs font-medium mt-0.5 ${
                item.status === 'success' ? 'text-green-600' : 
                item.status === 'pending' ? 'text-primary' : 
                'text-orange-600'
              }`}>
                {item.statusText}
              </p>
              <p className="text-gray-400 text-xs truncate mt-0.5">{item.subText}</p>
            </div>
            <div className="shrink-0 text-gray-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;