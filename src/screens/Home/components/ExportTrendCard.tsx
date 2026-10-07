import { Text, View } from 'react-native';
import Svg, {
  Circle,
  Line,
  Path,
  Rect,
  Text as SvgText,
} from 'react-native-svg';

import { theme } from '../../../theme/theme';
import { exportTrend, type ExportTrendItem } from '../HomeScreen.data';
import { DashboardCard } from './DashboardCard';
import { dashboardStyles as styles } from '../styles/Dashboard.styles';

const WIDTH = 340;
const HEIGHT = 220;
const LEFT = 18;
const TOP = 28;
const BOTTOM = 32;
const PLOT_HEIGHT = HEIGHT - TOP - BOTTOM;
const PLOT_WIDTH = WIDTH - LEFT * 2;
const BAR_WIDTH = 18;

type ExportTrendCardProps = {
  data?: ExportTrendItem[];
};

export function ExportTrendCard({ data = exportTrend }: ExportTrendCardProps) {
  const step = PLOT_WIDTH / data.length;
  const maxVolume = Math.max(...data.map(item => item.volume)) * 1.1;
  const values = data.map(item => item.value);
  const minValue = Math.min(...values) * 0.98;
  const maxValue = Math.max(...values) * 1.02;
  const getX = (index: number) => LEFT + step * index + step / 2;
  const getVolumeY = (value: number) =>
    TOP + PLOT_HEIGHT - (value / maxVolume) * PLOT_HEIGHT;
  const getValueY = (value: number) =>
    TOP +
    PLOT_HEIGHT -
    ((value - minValue) / (maxValue - minValue)) * PLOT_HEIGHT;
  const valuePath = data
    .map(
      (item, index) =>
        `${index === 0 ? 'M' : 'L'} ${getX(index)} ${getValueY(item.value)}`,
    )
    .join(' ');

  return (
    <DashboardCard
      subtitle="ปริมาณ (บาร์เรล) และมูลค่า (ล้านบาท)"
      title="แนวโน้มปริมาณและมูลค่าการส่งออก"
    >
      <View style={styles.chartLegend}>
        <View style={styles.chartLegendItem}>
          <View style={styles.chartLegendSwatch} />
          <Text style={styles.chartLegendText}>ปริมาณ</Text>
        </View>
        <View style={styles.chartLegendItem}>
          <View style={styles.chartLegendLine} />
          <Text style={styles.chartLegendText}>มูลค่า</Text>
        </View>
      </View>

      <View
        accessibilityLabel={`กราฟแนวโน้มการส่งออก ${data[0]?.label ?? ''} ถึง ${
          data[data.length - 1]?.label ?? ''
        }`}
        accessible
      >
        <Svg height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%">
          {[0, 1, 2, 3, 4].map(index => {
            const y = TOP + (PLOT_HEIGHT / 4) * index;

            return (
              <Line
                key={index}
                stroke={theme.colors.border}
                strokeWidth={1}
                x1={LEFT}
                x2={WIDTH - LEFT}
                y1={y}
                y2={y}
              />
            );
          })}

          {data.map((item, index) => {
            const x = getX(index);
            const y = getVolumeY(item.volume);

            return (
              <Rect
                key={item.label}
                fill={theme.colors.primary}
                height={TOP + PLOT_HEIGHT - y}
                rx={4}
                width={BAR_WIDTH}
                x={x - BAR_WIDTH / 2}
                y={y}
              />
            );
          })}

          <Path
            d={valuePath}
            fill="none"
            stroke={theme.colors.success}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
          />

          {data.map((item, index) => (
            <Circle
              key={`point-${item.label}`}
              cx={getX(index)}
              cy={getValueY(item.value)}
              fill={theme.colors.surface}
              r={3.2}
              stroke={theme.colors.success}
              strokeWidth={2}
            />
          ))}

          {data.map((item, index) => (
            <SvgText
              key={`label-${item.label}`}
              fill={theme.colors.textSecondary}
              fontSize={9}
              textAnchor="middle"
              x={getX(index)}
              y={HEIGHT - 10}
            >
              {item.label}
            </SvgText>
          ))}
        </Svg>
      </View>
    </DashboardCard>
  );
}
