export type OilDistributionItem = {
  id: string;
  label: string;
  value: number;
  percentage: number;
  color: string;
};

export type ExportTrendItem = {
  label: string;
  volume: number;
  value: number;
};

export type RefineryItem = {
  id: string;
  name: string;
  operator: string;
  volume: number;
  value: number;
  color: string;
};

export const oilDistribution: OilDistributionItem[] = [
  {
    id: 'diesel',
    label: 'ดีเซล',
    value: 651_690,
    percentage: 52.3,
    color: '#1769e0',
  },
  {
    id: 'gasoline',
    label: 'เบนซิน',
    value: 270_913,
    percentage: 21.7,
    color: '#1258bc',
  },
  {
    id: 'jet',
    label: 'น้ำมันเครื่องบิน',
    value: 155_710,
    percentage: 12.5,
    color: '#18a673',
  },
  {
    id: 'fuel-oil',
    label: 'น้ำมันเตา',
    value: 107_529,
    percentage: 8.6,
    color: '#d97706',
  },
  {
    id: 'other',
    label: 'อื่น ๆ',
    value: 59_838,
    percentage: 4.9,
    color: '#64748b',
  },
];

export const exportTrend: ExportTrendItem[] = [
  { label: 'ม.ค.', volume: 96_000, value: 7_850 },
  { label: 'ก.พ.', volume: 115_000, value: 8_420 },
  { label: 'มี.ค.', volume: 126_000, value: 8_810 },
  { label: 'เม.ย.', volume: 121_000, value: 8_590 },
  { label: 'พ.ค.', volume: 139_000, value: 9_120 },
  { label: 'มิ.ย.', volume: 148_000, value: 9_540 },
  { label: 'ก.ค.', volume: 137_000, value: 9_080 },
  { label: 'ส.ค.', volume: 151_000, value: 9_710 },
  { label: 'ก.ย.', volume: 162_000, value: 10_120 },
];

export const refineries: RefineryItem[] = [
  {
    id: 'bangchak',
    name: 'โรงกลั่นบางจาก',
    operator: 'บริษัท บางจาก คอร์ปอเรชั่น จำกัด (มหาชน)',
    volume: 269_450,
    value: 2_310.5,
    color: '#1769e0',
  },
  {
    id: 'irpc',
    name: 'โรงกลั่นไออาร์พีซี',
    operator: 'บริษัท ไออาร์พีซี จำกัด (มหาชน)',
    volume: 242_860,
    value: 1_927.3,
    color: '#18a673',
  },
  {
    id: 'star',
    name: 'โรงกลั่นสตาร์',
    operator: 'บริษัท สตาร์ ปิโตรเลียม รีไฟน์นิ่ง จำกัด (มหาชน)',
    volume: 186_320,
    value: 1_482.6,
    color: '#65a30d',
  },
  {
    id: 'thaioil',
    name: 'โรงกลั่นไทยออยล์',
    operator: 'บริษัท ไทยออยล์ จำกัด (มหาชน)',
    volume: 145_780,
    value: 1_151.4,
    color: '#d97706',
  },
  {
    id: 'pttgc',
    name: 'โรงกลั่นพีทีที จีซี',
    operator: 'บริษัท พีทีที โกลบอล เคมิคอล จำกัด (มหาชน)',
    volume: 121_450,
    value: 963.4,
    color: '#7c3aed',
  },
  {
    id: 'bangchak-sriracha',
    name: 'โรงกลั่นบางจาก ศรีราชา',
    operator: 'บริษัท บางจาก ศรีราชา จำกัด (มหาชน)',
    volume: 114_920,
    value: 914.8,
    color: '#db2777',
  },
  {
    id: 'pttgc-6',
    name: 'โรงกลั่นพีทีที จีซี สาขา 6',
    operator: 'บริษัท พีทีที โกลบอล เคมิคอล จำกัด (มหาชน)',
    volume: 98_740,
    value: 786.2,
    color: '#2563eb',
  },
];

export const sidebarItems = [
  'แดชบอร์ด',
  'เอกสาร',
  'สถิติ',
  'รายงาน',
  'ตั้งค่า',
] as const;
