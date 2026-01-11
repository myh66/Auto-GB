import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Library: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '手机', '电视', '家电', '笔记本'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === '全部' || product.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.sku.toLowerCase().includes(searchLower) ||
      product.barcode.includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-background-light">
      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md pt-4 pb-2">
        <div className="flex items-center px-4 py-2 justify-between h-[52px]">
          <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-[#101418]">
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#101418] text-[17px] font-semibold leading-tight tracking-tight flex-1 text-center">小米产品库</h2>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-primary">
            <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
          </button>
        </div>
        
        <div className="px-4 pb-2">
          <div className="relative flex items-center w-full h-11 rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden group focus-within:ring-2 ring-primary/20 transition-all">
            <div className="flex items-center justify-center pl-3 pr-2 text-gray-400">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </div>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none p-0 text-base text-[#101418] placeholder:text-gray-400 focus:ring-0 leading-normal" 
              placeholder="搜索型号、SKU 或 69 码" 
              type="text"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="flex items-center justify-center px-2 text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
              </button>
            )}
            <button className="flex items-center justify-center px-3 text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full shadow-sm transition-all active:scale-95 ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-primary/20' 
                  : 'bg-white border border-gray-100 text-[#101418] hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none opacity-20"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 scroll-smooth">
        <div className="py-2 flex justify-between items-end">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">
            {searchQuery ? '搜索结果' : '最近查看'}
          </h3>
          <span className="text-xs text-primary font-medium cursor-pointer">
            共 {filteredProducts.length} 项
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="group relative flex bg-white p-3 rounded-2xl shadow-soft active:scale-[0.99] transition-all border border-transparent hover:border-primary/20 cursor-pointer">
                <div className="shrink-0 mr-4">
                  <div className="bg-gray-100 rounded-xl size-[84px] overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-[#101418] text-[15px] font-semibold leading-tight truncate pr-2">{product.name}</h4>
                    <span className="material-symbols-outlined text-gray-300 text-[20px]">chevron_right</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                      SKU: <span className="text-[#101418]">{product.sku}</span>
                    </p>
                    <div className="flex items-center">
                      <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 border border-gray-200">
                        <span className="material-symbols-outlined text-[14px] text-gray-500 mr-1.5">qr_code_2</span>
                        <span className="text-xs font-mono font-medium text-gray-600 tracking-wide">{product.barcode}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
             <span className="material-symbols-outlined text-[48px] mb-2 opacity-50">search_off</span>
             <p className="text-sm">未找到相关产品</p>
          </div>
        )}
        
        {filteredProducts.length > 0 && (
          <div className="py-4 flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      <div className="absolute bottom-24 right-6 z-30">
        <button 
          onClick={() => navigate('/manual')}
          className="flex items-center justify-center size-14 bg-primary text-white rounded-full shadow-float hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      </div>
    </div>
  );
};

export default Library;