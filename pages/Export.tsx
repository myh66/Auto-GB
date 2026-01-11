import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, RECENT_RECORDS } from '../constants';

const Export: React.FC = () => {
  const navigate = useNavigate();

  // Combine product and history data for a mock table
  const exportData = [
    { id: 1, name: '小米14 Pro (钛金属)', sn: '23127PN0CC', code: '6941812749281', price: 300 },
    { id: 2, name: 'Redmi K70 (墨羽)', sn: '2311DRK48C', code: '6934177728193', price: 200 },
    { id: 3, name: '米家冰箱 536L 对开门', sn: 'BCD-536WMSA', code: '6970244534412', price: 550 },
    { id: 4, name: '米家全能扫拖机器人 X10+', sn: 'B101CN', code: '6934177789012', price: 150 },
    { id: 5, name: '小米电视 S Pro 65', sn: 'L65M9-SP', code: '6970244528912', price: 400 },
    { id: 6, name: '小米巨省电空调 1.5匹', sn: 'KFR-35GW/N1A1', code: '6934177712345', price: 280 },
    { id: 7, name: '米家空气净化器 4', sn: 'AC-M16-SC', code: '6934177756789', price: 120 },
    { id: 8, name: 'Redmi Book 16 (i5/16G)', sn: 'JYU4567CN', code: '6934177728193', price: 450 },
  ];

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md pt-4">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button 
            onClick={() => navigate('/history')}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-semibold leading-tight tracking-tight flex-1 text-center">导出报表</h2>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-primary">
            <span className="material-symbols-outlined text-[24px]">more_horiz</span>
          </button>
        </div>
        <div className="px-4 pb-4 pt-1 space-y-3">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-between px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm active:bg-gray-50 transition-colors group">
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">按日期筛选</span>
                <span className="text-sm font-medium text-[#101418] mt-0.5">2023.10.01 - 10.31</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-[20px]">calendar_month</span>
            </button>
            <button className="flex-none w-[35%] flex items-center justify-between px-3 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm active:bg-gray-50 transition-colors group">
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">选择记录</span>
                <span className="text-sm font-medium text-[#101418] mt-0.5">已选 8 项</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-[20px]">filter_list</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-4 pt-4 pb-4 flex flex-col min-h-0">
        <div className="bg-white rounded-2xl shadow-soft border border-gray-200 flex flex-col h-full overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-green-100 flex items-center justify-center text-[#1D6F42]">
                <span className="material-symbols-outlined text-[16px]">table_chart</span>
              </div>
              <span className="font-medium text-sm text-gray-700">补贴申报明细.xlsx</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-gray-400 font-medium uppercase">总金额</span>
              <span className="block text-xs font-bold text-primary">¥ 2,850.00</span>
            </div>
          </div>
          <div className="overflow-auto flex-1 w-full no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="p-3 pl-4 text-[11px] font-semibold text-gray-500 border-b border-r border-gray-100 w-10 text-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary/20 size-3.5 align-middle" />
                  </th>
                  <th className="p-3 text-[11px] font-semibold text-gray-500 border-b border-gray-100 whitespace-nowrap">产品名称</th>
                  <th className="p-3 text-[11px] font-semibold text-gray-500 border-b border-gray-100">SN码</th>
                  <th className="p-3 text-[11px] font-semibold text-gray-500 border-b border-gray-100">69码</th>
                  <th className="p-3 pr-4 text-[11px] font-semibold text-gray-500 border-b border-gray-100 text-right">补贴金额</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {exportData.map((row) => (
                  <tr key={row.id} className="group hover:bg-gray-50 transition-colors">
                    <td className="p-3 pl-4 border-r border-gray-100 text-center">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary/20 size-3.5 align-middle" />
                    </td>
                    <td className="p-3 text-[#101418] whitespace-nowrap">{row.name}</td>
                    <td className="p-3 text-gray-600 font-mono text-xs whitespace-nowrap">{row.sn}</td>
                    <td className="p-3 text-gray-600 font-mono text-xs whitespace-nowrap">{row.code}</td>
                    <td className="p-3 pr-4 text-right font-medium text-[#101418] whitespace-nowrap">¥ {row.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100 z-20 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
        <button className="w-full h-[52px] bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5">
          <span className="material-symbols-outlined text-[22px]">file_upload</span>
          <span className="text-[17px]">导出为 Excel</span>
        </button>
        <div className="text-center mt-3">
          <p className="text-xs text-gray-400">导出将生成 .xlsx 文件并可分享至微信</p>
        </div>
      </div>
    </div>
  );
};

export default Export;
