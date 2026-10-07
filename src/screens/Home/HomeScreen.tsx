import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../../routs';
import { styles } from './HomeScreen.styles';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

/** หน้าเริ่มต้นหลัง Login และจุดต่อสำหรับ Dashboard ในลำดับถัดไป */
export function HomeScreen({ navigation }: HomeScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={styles.page}
      style={{
        paddingTop: Math.max(insets.top, 24),
        paddingBottom: Math.max(insets.bottom, 24),
      }}
    >
      <View className={styles.header}>
        <View>
          <Text className={styles.brand}>OEMS</Text>
          <Text className={styles.brandCaption}>Mobile Operations</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          className={styles.logoutButton}
          onPress={() => navigation.replace('Login')}
          testID="logout-button"
        >
          <Text className={styles.logoutButtonText}>ออกจากระบบ</Text>
        </Pressable>
      </View>

      <View className={styles.content}>
        <Text className={styles.title}>ภาพรวมการส่งออก</Text>
        <Text className={styles.subtitle}>
          เข้าสู่ระบบสำเร็จ และพร้อมเชื่อมต่อหน้าจอ Mobile ตาม Requirement
        </Text>

        <View className={styles.statusPanel}>
          <View className={styles.statusIndicator} />
          <View className={styles.statusCopy}>
            <Text className={styles.statusTitle}>Navigation พร้อมใช้งาน</Text>
            <Text className={styles.statusDescription}>
              Login และ Home เชื่อมต่อด้วย Native Stack แล้ว
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
