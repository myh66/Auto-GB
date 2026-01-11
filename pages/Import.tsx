import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Import: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    setLoading(true);
    // Simulate processing delay
    setTimeout(() => {
      setLoading(false);
      navigate('/manual'); // Redirect to manual input (edit mode) after import
    }, 1500);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background-light relative">
      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-semibold leading-tight tracking-tight flex-1 text-center">导入文件</h2>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="flex-1 px-4 pt-4 pb-8 flex flex-col items-center">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="size-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">正在分析文件...</p>
          </div>
        ) : (
          <>
            <div 
              className={`w-full aspect-[4/5] rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center gap-4 bg-white/50 backdrop-blur-sm ${isDragging ? 'border-primary bg-primary/5 scale-[0.99]' : 'border-gray-300 hover:border-primary/50'}`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*,.pdf" 
                onChange={handleFileSelect}
              />
              <div className="size-24 rounded-full bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-[48px]">cloud_upload</span>
              </div>
              <div className="text-center px-8">
                <h3 className="text-lg font-semibold text-[#101418] mb-1">点击或拖拽上传</h3>
                <p className="text-sm text-gray-500">支持 JPG, PNG, PDF 格式</p>
                <p className="text-xs text-gray-400 mt-2">最大支持 20MB</p>
              </div>
            </div>

            <div className="w-full mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-1">快速导入</h3>
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden divide-y divide-gray-100">
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500 bg-green-50 p-2 rounded-lg">chat</span>
                    <span className="text-sm font-medium text-[#101418]">从微信导入</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-lg">folder_shared</span>
                    <span className="text-sm font-medium text-[#101418]">浏览系统文件</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Import;