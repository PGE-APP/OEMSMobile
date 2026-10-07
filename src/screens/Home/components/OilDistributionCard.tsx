import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { oilDistribution } from '../HomeScreen.data';
import { DashboardCard } from './DashboardCard';
import { dashboardStyles as styles } from '../styles/Dashboard.styles';

const SIZE = 132;
const CENTER = SIZE / 2;
const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function OilDistributionCard() {
  let offset = 0;

  return (
    <DashboardCard
      subtitle="ปริมาณรวม 1,245,680 บาร์เรล"
      title="สัดส่วนตามประเภทน้ำมัน"
    >
      <View style={styles.oilContent}>
        <View
          accessibilityLabel="กราฟสัดส่วนตามประเภทน้ำมัน"
          accessible
          style={styles.donutWrap}
        >
          <Svg height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE}>
            {oilDistribution.map(item => {
              const segment = (item.percentage / 100) * CIRCUMFERENCE;
              const currentOffset = offset;
              offset += segment;

              return (
                <Circle
                  key={item.id}
                  cx={CENTER}
                  cy={CENTER}
                  fill="none"
                  origin={`${CENTER}, ${CENTER}`}
                  r={RADIUS}
                  rotation={-90}
                  stroke={item.color}
                  strokeDasharray={[segment, CIRCUMFERENCE - segment]}
                  strokeDashoffset={-currentOffset}
                  strokeWidth={18}
                />
              );
            })}
          </Svg>
          <View pointerEvents="none" style={styles.donutCenter}>
            <Text style={styles.donutTotal}>1.2M</Text>
            <Text style={styles.donutUnit}>บาร์เรลรวม</Text>
          </View>
        </View>

        <View style={styles.legend}>
          {oilDistribution.map(item => (
            <View key={item.id} style={styles.legendRow}>
              <View
                style={[styles.legendDot, { backgroundColor: item.color }]}
              />
              <Text numberOfLines={1} style={styles.legendLabel}>
                {item.label}
              </Text>
              <Text style={styles.legendValue}>{item.percentage}%</Text>
            </View>
          ))}
        </View>
      </View>
    </DashboardCard>
  );
}
