import { Modal, Pressable, Text, View } from 'react-native';

import { ShieldCheck } from '../../../components/icons/ShieldCheck';
import { theme } from '../../../theme/theme';
import { sidebarItems } from '../HomeScreen.data';
import { styles } from '../styles/HomeScreen.styles';

type SidebarDrawerProps = {
  bottomInset: number;
  onClose: () => void;
  onLogout: () => void;
  topInset: number;
  visible: boolean;
};

export function SidebarDrawer({
  bottomInset,
  onClose,
  onLogout,
  topInset,
  visible,
}: SidebarDrawerProps) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
      transparent
      visible={visible}
    >
      <View accessibilityViewIsModal style={styles.drawerRoot}>
        <View
          style={[
            styles.drawer,
            {
              paddingTop: Math.max(topInset, 24),
              paddingBottom: Math.max(bottomInset, 24),
            },
          ]}
        >
          <View style={styles.drawerHeader}>
            <View style={styles.drawerBrand}>
              <View style={styles.drawerBrandIcon}>
                <ShieldCheck
                  color={theme.colors.onBrand}
                  size={22}
                  strokeWidth={2.25}
                />
              </View>
              <View>
                <Text style={styles.drawerBrandName}>OEMS</Text>
                <Text style={styles.drawerBrandCaption}>SECURE OPERATIONS</Text>
              </View>
            </View>
            <Pressable
              accessibilityLabel="ปิดเมนู"
              accessibilityRole="button"
              onPress={onClose}
              style={({ pressed }) => [
                styles.drawerClose,
                pressed && styles.drawerItemPressed,
              ]}
              testID="close-sidebar"
            >
              <Text style={styles.drawerCloseText}>ปิด</Text>
            </Pressable>
          </View>

          <View style={styles.drawerMenu}>
            {sidebarItems.map((item, index) => {
              const selected = index === 0;

              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  key={item}
                  onPress={onClose}
                  style={({ pressed }) => [
                    styles.drawerItem,
                    selected && styles.drawerItemSelected,
                    pressed && styles.drawerItemPressed,
                  ]}
                >
                  <View
                    style={[
                      styles.drawerItemMarker,
                      selected && styles.drawerItemMarkerSelected,
                    ]}
                  />
                  <Text
                    style={[
                      styles.drawerItemText,
                      selected && styles.drawerItemTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.drawerFooter}>
            <Text style={styles.drawerRole}>ผู้ดูแลระบบ OEMS</Text>
            <Text style={styles.drawerRoleCaption}>Administrator</Text>
            <Pressable
              accessibilityRole="button"
              onPress={onLogout}
              style={({ pressed }) => [
                styles.drawerLogout,
                pressed && styles.drawerItemPressed,
              ]}
              testID="logout-button"
            >
              <Text style={styles.drawerLogoutText}>ออกจากระบบ</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          accessibilityLabel="ปิดเมนู"
          accessibilityRole="button"
          onPress={onClose}
          style={styles.drawerBackdrop}
        />
      </View>
    </Modal>
  );
}
