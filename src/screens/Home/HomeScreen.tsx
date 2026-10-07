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
      style={[
        styles.page,
        {
          paddingTop: Math.max(insets.top, 24),
          paddingBottom: Math.max(insets.bottom, 24),
        },
      ]}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>OEMS</Text>
          <Text style={styles.brandCaption}>Mobile Operations</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.replace('Login')}
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.logoutButtonPressed,
          ]}
          testID="logout-button"
        >
          <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>ภาพรวมการส่งออก</Text>
        <Text style={styles.subtitle}>
          เข้าสู่ระบบสำเร็จ และพร้อมเชื่อมต่อหน้าจอ Mobile ตาม Requirement
        </Text>

        <View style={styles.statusPanel}>
          <View style={styles.statusIndicator} />
          <View style={styles.statusCopy}>
            <Text style={styles.statusTitle}>Navigation พร้อมใช้งาน</Text>
            <Text style={styles.statusDescription}>
              Login และ Home เชื่อมต่อด้วย Native Stack แล้ว
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
