import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  "大家电 (空调/冰箱/洗衣机)",
  "厨卫电器 (热水器/燃气灶/油烟机)",
  "生活电器 (吸尘器/空气净化器)",
  "数码产品 (手机/电脑/平板)",
  "智能家居 (智能门锁/摄像头)",
  "个护健康 (吹风机/电动牙刷)",
  "办公设备 (打印机/投影仪)",
  "其他"
];

const ManualInput: React.FC = () => {
  const navigate = useNavigate();
  const [snValue, setSnValue] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  
  // Category Auto-suggestion State
  const [categoryValue, setCategoryValue] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        categoryInputRef.current &&
        !categoryInputRef.current.contains(event.target as Node)
      ) {
        setShowCategoryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCategories = CATEGORIES.filter(c => 
    c.toLowerCase().includes(categoryValue.toLowerCase())
  );

  useEffect(() => {
    let stream: MediaStream | null = null;
    let timeoutId: any = null;

    if (isScanning) {
      const startCamera = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          
          // Simulate successful scan after 2.5 seconds
          timeoutId = setTimeout(() => {
             const mockSN = 'GB-' + Math.floor(Math.random() * 10000) + '-X';
             setSnValue(mockSN);
             setIsScanning(false);
             // Optional: vibrate if supported
             if (navigator.vibrate) navigator.vibrate(200);
          }, 2500);
        } catch (err) {
          console.error("Camera access denied or error:", err);
          alert("无法访问相机，请确保已授予权限。");
          setIsScanning(false);
        }
      };
      
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isScanning]);

  return (
    <div className="flex flex-col h-full bg-background-light relative">
      {/* Scanner Overlay */}
      {isScanning && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="relative flex-1 bg-black overflow-hidden">
             <video 
               ref={videoRef} 
               autoPlay 
               playsInline 
               muted
               className="absolute inset-0 w-full h-full object-cover opacity-70"
             />
             
             {/* Reticle UI */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[70%] aspect-[3/2] border-2 border-primary/50 rounded-lg relative shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] backdrop-blur-[1px]">
                 {/* Corners */}
                 <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-primary -mt-[2px] -ml-[2px] rounded-tl-md"></div>
                 <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-primary -mt-[2px] -mr-[2px] rounded-tr-md"></div>
                 <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-primary -mb-[2px] -ml-[2px] rounded-bl-md"></div>
                 <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-primary -mb-[2px] -mr-[2px] rounded-br-md"></div>
                 
                 {/* Laser Line */}
                 <div className="absolute top-1/2 left-2 right-2 h-[2px] bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
                 
                 <div className="absolute -bottom-8 left-0 right-0 text-center">
                   <p className="text-white/90 text-sm font-medium tracking-wide drop-shadow-md">将条形码对准框内</p>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="h-24 bg-black flex items-center justify-center pb-safe-bottom z-10">
            <button 
              onClick={() => setIsScanning(false)}
              className="size-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md active:bg-white/30 transition-colors"
            >
              <span className="material-symbols-outlined text-white text-[32px]">close</span>
            </button>
          </div>
        </div>
      )}

      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-semibold leading-tight tracking-tight flex-1 text-center">手动录入</h2>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-5">
        
        {/* Basic Info */}
        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-1">基本信息</h3>
          <div className="space-y-3">
             <div className="space-y-1">
               <label className="text-sm font-medium text-gray-700 ml-1">产品名称</label>
               <input type="text" placeholder="例如：海尔冰箱 500L" className="w-full px-4 py-3 rounded-xl bg-white border-transparent focus:border-primary focus:ring-0 text-sm shadow-soft transition-shadow placeholder:text-gray-400" />
             </div>
             
             <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">购买金额</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 font-medium">¥</span>
                    <input type="number" placeholder="0.00" className="w-full pl-7 pr-4 py-3 rounded-xl bg-white border-transparent focus:border-primary focus:ring-0 text-sm shadow-soft transition-shadow placeholder:text-gray-400" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">购买日期</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-white border-transparent focus:border-primary focus:ring-0 text-sm shadow-soft transition-shadow text-gray-600" />
                </div>
             </div>
          </div>
        </section>

        {/* Technical Info */}
        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-1">规格参数</h3>
          <div className="space-y-3">
             <div className="space-y-1">
               <label className="text-sm font-medium text-gray-700 ml-1">SN 序列号</label>
               <div className="relative">
                 <input 
                    type="text" 
                    value={snValue}
                    onChange={(e) => setSnValue(e.target.value)}
                    placeholder="输入或扫描条码" 
                    className="w-full px-4 py-3 rounded-xl bg-white border-transparent focus:border-primary focus:ring-0 text-sm shadow-soft transition-shadow placeholder:text-gray-400 font-mono" 
                 />
                 <button 
                    onClick={() => setIsScanning(true)}
                    className="absolute right-2 top-2 p-1.5 text-primary bg-primary/10 rounded-lg hover:bg-primary/20 active:scale-95 transition-all"
                 >
                   <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                 </button>
               </div>
             </div>
             
             <div className="space-y-1 relative z-30">
               <label className="text-sm font-medium text-gray-700 ml-1">产品类别</label>
               <div className="relative">
                 <input 
                   ref={categoryInputRef}
                   type="text"
                   value={categoryValue}
                   onChange={(e) => {
                     setCategoryValue(e.target.value);
                     setShowCategoryDropdown(true);
                   }}
                   onFocus={() => setShowCategoryDropdown(true)}
                   placeholder="搜索或选择类别"
                   className="w-full px-4 py-3 rounded-xl bg-white border-transparent focus:border-primary focus:ring-0 text-sm shadow-soft transition-shadow placeholder:text-gray-400"
                 />
                 <span className="absolute right-4 top-3.5 material-symbols-outlined text-gray-400 pointer-events-none text-[20px] transition-transform duration-200" style={{ transform: showCategoryDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                 </span>
                 
                 {/* Auto-suggestion Dropdown */}
                 {showCategoryDropdown && (
                   <div ref={dropdownRef} className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 max-h-60 overflow-y-auto z-40 animate-in fade-in slide-in-from-top-2 duration-200">
                     {filteredCategories.length > 0 ? (
                       <div className="py-1">
                         {filteredCategories.map((cat, index) => (
                           <div 
                             key={index}
                             onClick={() => {
                               setCategoryValue(cat);
                               setShowCategoryDropdown(false);
                             }}
                             className="px-4 py-3 text-sm text-[#101418] hover:bg-gray-50 active:bg-blue-50 cursor-pointer flex items-center justify-between border-b border-gray-50 last:border-0"
                           >
                             <span>{cat}</span>
                             {categoryValue === cat && <span className="material-symbols-outlined text-primary text-[16px]">check</span>}
                           </div>
                         ))}
                       </div>
                     ) : (
                        <div className="py-1">
                           <div className="px-4 py-3 text-sm text-gray-400 text-center border-b border-gray-50">
                             无匹配结果
                           </div>
                           <button 
                             onClick={() => setShowCategoryDropdown(false)}
                             className="w-full px-4 py-3 text-sm text-primary font-medium hover:bg-primary/5 active:bg-primary/10 flex items-center justify-center gap-2 transition-colors"
                           >
                             <span className="material-symbols-outlined text-[20px]">add</span>
                             <span>使用 "{categoryValue}"</span>
                           </button>
                        </div>
                     )}
                   </div>
                 )}
               </div>
             </div>
          </div>
        </section>

        {/* Upload Proof */}
        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-1">凭证上传</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed border-gray-300 bg-white hover:border-primary/50 hover:bg-primary/5 transition-all gap-2 group active:scale-[0.98]">
              <div className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <span className="text-xs text-gray-500 font-medium group-hover:text-primary transition-colors">上传发票</span>
            </button>
             <button className="flex flex-col items-center justify-center h-32 rounded-xl border-2 border-dashed border-gray-300 bg-white hover:border-primary/50 hover:bg-primary/5 transition-all gap-2 group active:scale-[0.98]">
              <div className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-primary transition-colors shadow-sm">
                <span className="material-symbols-outlined">label</span>
              </div>
              <span className="text-xs text-gray-500 font-medium group-hover:text-primary transition-colors">能效标签</span>
            </button>
          </div>
        </section>

      </div>

      <div className="p-4 bg-white border-t border-gray-100 z-20 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => navigate('/')}
          className="w-full h-[50px] bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined filled">save</span>
          <span>保存记录</span>
        </button>
      </div>
    </div>
  );
};

export default ManualInput;
