import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { refineries } from '../HomeScreen.data';
import { DashboardCard } from './DashboardCard';
import { dashboardStyles as styles } from '../styles/Dashboard.styles';

const MAX_VOLUME = Math.max(...refineries.map(item => item.volume));

export function RefineryOverviewCard() {
  const [selectedId, setSelectedId] = useState(refineries[0].id);
  const selected =
    refineries.find(refinery => refinery.id === selectedId) ?? refineries[0];

  return (
    <DashboardCard
      subtitle="แตะรายชื่อเพื่อดูปริมาณและมูลค่า"
      title="ภาพรวมตามโรงกลั่น"
    >
      <View style={styles.refinerySelected}>
        <View style={styles.refinerySelectedTop}>
          <View
            style={[
              styles.refinerySelectedDot,
              { backgroundColor: selected.color },
            ]}
          />
          <Text style={styles.refinerySelectedName}>{selected.name}</Text>
        </View>
        <Text style={styles.refineryOperator}>{selected.operator}</Text>

        <View style={styles.refineryStats}>
          <View style={styles.refineryStat}>
            <Text style={styles.refineryStatLabel}>ปริมาณ (บาร์เรล)</Text>
            <Text style={styles.refineryStatValue}>
              {selected.volume.toLocaleString()}
            </Text>
          </View>
          <View style={[styles.refineryStat, styles.refineryStatDivider]}>
            <Text style={styles.refineryStatLabel}>มูลค่า (ล้านบาท)</Text>
            <Text style={styles.refineryStatValue}>
              ฿{selected.value.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.refineryList}>
        {refineries.map(refinery => {
          const selectedRow = refinery.id === selected.id;

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: selectedRow }}
              key={refinery.id}
              onPress={() => setSelectedId(refinery.id)}
              style={({ pressed }) => [
                styles.refineryRow,
                pressed && styles.refineryRowPressed,
              ]}
              testID={`refinery-${refinery.id}`}
            >
              <View style={styles.refineryRowTop}>
                <View
                  style={[
                    styles.refineryDot,
                    { backgroundColor: refinery.color },
                  ]}
                />
                <Text numberOfLines={1} style={styles.refineryName}>
                  {refinery.name}
                </Text>
                <Text style={styles.refineryVolume}>
                  {refinery.volume.toLocaleString()}
                </Text>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      backgroundColor: refinery.color,
                      width: `${(refinery.volume / MAX_VOLUME) * 100}%`,
                    },
                  ]}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </DashboardCard>
  );
}
