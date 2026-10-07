import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../../routs';
import { theme } from '../../theme/theme';
import { ExportTrendCard } from './components/ExportTrendCard';
import { OilDistributionCard } from './components/OilDistributionCard';
import { RefineryOverviewCard } from './components/RefineryOverviewCard';
import { SidebarDrawer } from './components/SidebarDrawer';
import { exportTrend } from './HomeScreen.data';
import { styles } from './styles/HomeScreen.styles';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const trendRangeOptions = [
  { label: '3 เดือน', value: 3 },
  { label: '6 เดือน', value: 6 },
  { label: '9 เดือน', value: 9 },
] as const;

const trendRangeDescriptions = {
  3: 'กรกฎาคม–กันยายน 2569',
  6: 'เมษายน–กันยายน 2569',
  9: 'มกราคม–กันยายน 2569',
} as const;

/** Dashboard Mobile แสดงข้อมูลสรุปที่จำเป็นต่อเจ้าหน้าที่ในจุดปฏิบัติงาน */
export function HomeScreen({ navigation }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState('30/09/2569 09:45 น.');
  const [trendRange, setTrendRange] = useState<3 | 6 | 9>(9);

  const handleRefresh = async () => {
    if (refreshing) {
      return;
    }

    setRefreshing(true);

    // ใช้แทนคำขอ API ระหว่างที่ Dashboard ยังแสดงข้อมูลจำลอง
    await new Promise<void>(resolve => setTimeout(resolve, 600));

    setUpdatedAt(
      new Date().toLocaleString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    );
    setRefreshing(false);
  };

  return (
    <View style={styles.page}>
      <View
        style={[
          styles.header,
          {
            paddingTop: Math.max(insets.top, 12),
          },
        ]}
      >
        <Pressable
          accessibilityLabel="เปิดเมนู"
          accessibilityRole="button"
          onPress={() => setSidebarVisible(true)}
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.menuButtonPressed,
          ]}
          testID="open-sidebar"
        >
          <View style={styles.menuIcon}>
            <View style={styles.menuIconLine} />
            <View style={styles.menuIconLine} />
            <View style={styles.menuIconLine} />
          </View>
        </Pressable>
        <View style={styles.dashboardHeading}>
          <Text style={styles.title}>ภาพรวมการส่งออก</Text>
          <Text style={styles.subtitle}>
            ข้อมูลการส่งออกน้ำมันเดือน{trendRangeDescriptions[trendRange]}
          </Text>
          <Text style={styles.updatedAt}>อัปเดตล่าสุด {updatedAt}</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}
        refreshControl={
          <RefreshControl
            colors={[theme.colors.primary]}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            tintColor={theme.colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.filterPanel}>
          <View style={styles.filterHeader}>
            <Text style={styles.filterTitle}>ตัวกรองข้อมูล</Text>
            <Text style={styles.filterLabel}>ช่วงเวลา</Text>
          </View>
          <View style={styles.filterOptions}>
            {trendRangeOptions.map(option => {
              const selected = trendRange === option.value;

              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  key={option.value}
                  onPress={() => setTrendRange(option.value)}
                  style={({ pressed }) => [
                    styles.filterChip,
                    selected && styles.filterChipSelected,
                    pressed && styles.filterChipPressed,
                  ]}
                  testID={`trend-filter-${option.value}`}
                >
                  <Text
                    style={[
                      styles.filterChipText,
                      selected && styles.filterChipTextSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <OilDistributionCard />
        </View>
        <View style={styles.section}>
          <ExportTrendCard data={exportTrend.slice(-trendRange)} />
        </View>
        <View style={styles.section}>
          <RefineryOverviewCard />
        </View>
      </ScrollView>

      <SidebarDrawer
        bottomInset={insets.bottom}
        onClose={() => setSidebarVisible(false)}
        onLogout={() => navigation.replace('Login')}
        topInset={insets.top}
        visible={sidebarVisible}
      />
    </View>
  );
}
