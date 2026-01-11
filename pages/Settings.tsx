import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="sticky top-0 z-20 bg-background-light/90 backdrop-blur-xl border-b border-gray-200/50 pt-4">
        <div className="flex items-center px-4 justify-between h-[52px]">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-primary active:opacity-60 transition-opacity -ml-2 px-2 py-1 rounded-lg"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
            <span className="text-[17px] leading-none pb-[1px]">返回</span>
          </button>
          <h2 className="text-[#000000] text-[17px] font-semibold flex-1 text-center absolute left-0 right-0 pointer-events-none">识别设置</h2>
          <button onClick={() => navigate('/')} className="text-primary text-[17px] font-medium active:opacity-60 transition-opacity">
            完成
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth pb-12">
        <div className="mt-6 mb-2 px-4">
          <h3 className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 ml-1">AI 引擎</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-ios divide-y divide-gray-100">
            <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-md bg-blue-50 text-primary">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>
                <span className="text-[17px] text-gray-900">后端服务商</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[17px] text-gray-500 group-hover:text-primary transition-colors">Qwen2-VL</span>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">chevron_right</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-md bg-purple-50 text-purple-600">
                  <span className="material-symbols-outlined text-[20px]">alt_route</span>
                </div>
                <span className="text-[17px] text-gray-900">备用模型</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[17px] text-gray-500">GPT-4o</span>
                <span className="material-symbols-outlined text-gray-400 text-[18px]">chevron_right</span>
              </div>
            </button>
          </div>
          <p className="mt-2 ml-4 text-[13px] text-gray-500 leading-snug">
            Qwen2-VL 针对中文文档与复杂表格识别进行了优化。
          </p>
        </div>

        <div className="mt-6 mb-2 px-4">
          <h3 className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 ml-1">识别偏好</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-ios divide-y divide-gray-100">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-md bg-orange-50 text-orange-500">
                  <span className="material-symbols-outlined text-[20px]">center_focus_strong</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] text-gray-900 leading-snug">高精度模式</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked type="checkbox" className="sr-only peer" />
                <div className="w-[51px] h-[31px] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-primary border border-gray-200"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-md bg-green-50 text-green-600">
                  <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] text-gray-900 leading-snug">自动匹配小米库</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked type="checkbox" className="sr-only peer" />
                <div className="w-[51px] h-[31px] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[27px] after:w-[27px] after:transition-all peer-checked:bg-primary border border-gray-200"></div>
              </label>
            </div>
          </div>
          <p className="mt-2 ml-4 text-[13px] text-gray-500 leading-snug">
            开启后，系统将自动把识别到的电器型号与小米产品库（SKU）进行关联。
          </p>
        </div>

        <div className="mt-6 mb-8 px-4">
          <h3 className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 ml-1">图片与流量</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-ios p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-8 rounded-md bg-indigo-50 text-indigo-500">
                <span className="material-symbols-outlined text-[20px]">image</span>
              </div>
              <span className="text-[17px] text-gray-900">图片压缩质量</span>
              <span className="ml-auto text-[15px] font-medium text-primary">75%</span>
            </div>
            <div className="relative w-full h-10 flex items-center px-2">
              <input type="range" min="1" max="100" defaultValue="75" className="w-full z-20 opacity-0 absolute inset-0 cursor-pointer" />
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden relative z-10">
                <div className="h-full bg-primary w-[75%] rounded-full"></div>
              </div>
              <div className="size-7 bg-white rounded-full shadow-md absolute left-[75%] -ml-3.5 z-10 border border-gray-100 pointer-events-none"></div>
            </div>
            <div className="flex justify-between mt-1 px-1">
              <span className="text-[12px] font-medium text-gray-400">节省流量</span>
              <span className="text-[12px] font-medium text-gray-400">高画质</span>
            </div>
          </div>
          <p className="mt-2 ml-4 text-[13px] text-gray-500 leading-snug">
            较低的画质可以加快上传速度并节省流量，但可能会影响OCR文字识别的准确度。
          </p>
        </div>

        <div className="mt-8 mb-12 flex flex-col items-center justify-center space-y-4">
          <button className="text-primary text-[15px] font-medium active:opacity-60">恢复默认设置</button>
          <div className="text-[12px] text-gray-400 text-center">
            AutoGB Version 2.4.1 (Build 890)<br/>
            Powered by GuoBu AI Engine
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
