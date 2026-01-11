export interface HistoryItem {
  id: string;
  title: string;
  sn: string;
  time: string;
  status: 'success' | 'pending' | 'failed' | 'manual';
  statusText: string;
  subText: string;
  imageUrl: string;
  amount?: number;
  category?: string;
  efficiency?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  category: string;
  imageUrl: string;
}

export type NavTab = 'home' | 'history' | 'library' | 'policy';
