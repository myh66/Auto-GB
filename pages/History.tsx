import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RECENT_RECORDS } from '../constants';

const History: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');

  const filteredRecords = filter === 'all' 
    ? RECENT_RECORDS 
    : RECENT_RECORDS.filter(r => {
        if (filter === 'success') return r.status === 'success';
        if (filter === 'pending') return r.status === 'pending';
        return r.status === 'failed' || r.status === 'manual';
      });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-[#101418]">识别记录</h1>
          <button 
             onClick={() => navigate('/export')}
             className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-[#101418] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400">search</span>
          </div>
          <input 
            className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm" 
            placeholder="搜索记录" 
            type="text"
          />
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="px-4 py-2 mb-2">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[
            { id: 'all', label: '全部' },
            { id: 'success', label: '匹配成功' },
            { id: 'pending', label: '待处理' },
            { id: 'failed', label: '匹配失败' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex shrink-0 items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm border ${
                filter === tab.id 
                  ? 'bg-[#101418] text-white border-transparent' 
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main className="flex-1 px-4 overflow-y-auto pb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-6">
          {filteredRecords.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate(`/details/${item.id}`)}
              className="group bg-white rounded-2xl p-3 shadow-soft border border-transparent flex flex-col gap-3 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span 
                    className={`material-symbols-outlined text-[16px] leading-none font-bold filled ${
                      item.status === 'success' ? 'text-green-500' : 
                      item.status === 'pending' ? 'text-orange-500' : 'text-red-500'
                    }`}
                  >
                    {item.status === 'success' ? 'check_circle' : item.status === 'pending' ? 'pending' : 'error'}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                     item.status === 'success' ? 'text-green-500' : 
                     item.status === 'pending' ? 'text-orange-500' : 'text-red-500'
                  }`}>
                    {item.status === 'success' ? '成功' : item.status === 'pending' ? '待处理' : '失败'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#101418] font-semibold text-sm leading-tight line-clamp-1">{item.title}</h3>
                <p className="text-gray-400 text-[11px] font-mono leading-none tracking-tight">SN码: {item.sn.includes('GB') ? item.sn : '未知'}</p>
                <p className="text-gray-400 text-[10px] font-medium mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default History;