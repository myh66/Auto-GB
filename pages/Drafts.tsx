import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DRAFTS } from '../constants';

const Drafts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-semibold leading-tight tracking-tight flex-1 text-center">草稿箱</h2>
          <button className="text-sm font-medium text-primary px-2 active:opacity-60 transition-opacity">
            编辑
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {DRAFTS.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 pb-20">
             <span className="material-symbols-outlined text-[64px] mb-4 text-gray-300">inbox</span>
             <p>暂无草稿</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {DRAFTS.map((draft) => (
              <div 
                key={draft.id}
                onClick={() => navigate('/manual')}
                className="group bg-white rounded-2xl p-3 pr-4 shadow-sm border border-gray-100 flex items-center gap-3 active:scale-[0.98] transition-all cursor-pointer hover:shadow-md"
              >
                <div className="shrink-0 size-16 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center text-gray-300 relative">
                   {draft.imageUrl ? (
                     <img src={draft.imageUrl} className="w-full h-full object-cover opacity-80" alt="Draft" />
                   ) : (
                     <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                   )}
                   {/* Progress Indicator */}
                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                     <div className="h-full bg-orange-400" style={{width: draft.progress}}></div>
                   </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="text-sm font-semibold text-[#101418] truncate pr-2">{draft.title}</h3>
                    <span className="text-[10px] text-gray-400 shrink-0">{draft.time}</span>
                  </div>
                  <p className="text-xs text-orange-500 font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error_outline</span>
                    {draft.missing}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    完成度: {draft.progress}
                  </p>
                </div>
                
                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drafts;