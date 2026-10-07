import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../../routs';
import { theme } from '../../theme/theme';
import { createOrbStyle, demoCodeStyle, styles } from './LoginScreen.styles';

const DEVELOPMENT_CREDENTIALS = {
  email: 'admin@oems.local',
  password: 'Admin@123',
};

type LoginErrors = {
  email?: string;
  password?: string;
  form?: string;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <View
      accessibilityElementsHidden
      className={`${styles.brandMarkBase} ${
        compact ? styles.brandMarkCompact : styles.brandMarkRegular
      }`}
    >
      <Text
        className={`${styles.brandMarkGlyphBase} ${
          compact ? styles.brandMarkGlyphCompact : styles.brandMarkGlyphRegular
        }`}
      >
        ✓
      </Text>
    </View>
  );
}

function BrandPanel({
  topInset,
  bottomInset,
}: {
  topInset: number;
  bottomInset: number;
}) {
  const [panelWidth, setPanelWidth] = useState(0);

  return (
    <View
      className={styles.brandPanel}
      onLayout={event => setPanelWidth(event.nativeEvent.layout.width)}
      style={{
        paddingTop: Math.max(topInset, 32),
        paddingBottom: Math.max(bottomInset, 32),
      }}
    >
      <View
        className={styles.brandOrbOuter}
        style={createOrbStyle(panelWidth, theme.login.orb.outerScale)}
      />
      <View
        className={styles.brandOrbMiddle}
        style={createOrbStyle(panelWidth, theme.login.orb.middleScale)}
      />
      <View
        className={styles.brandOrbInner}
        style={createOrbStyle(panelWidth)}
      />

      <View className={styles.brandLockup}>
        <BrandMark />
        <View>
          <Text className={styles.brandName}>OEMS</Text>
          <Text className={styles.brandOrganization}>
            ศูนย์ปฏิบัติการส่งออกน้ำมัน
          </Text>
        </View>
      </View>

      <View className={styles.brandCopy}>
        <Text className={styles.eyebrow}>OIL EXPORT OPERATIONS</Text>
        <Text className={styles.brandTitle}>ระบบติดตามการส่งออกน้ำมัน</Text>
        <Text className={styles.brandSubtitle}>
          ระบบติดตามและควบคุมการส่งออกน้ำมัน
        </Text>
      </View>

      <View className={styles.securityNote}>
        <Text className={styles.securityIcon}>●</Text>
        <Text className={styles.securityText}>
          Secure government operations workspace
        </Text>
      </View>
    </View>
  );
}

function FieldError({ message }: { message?: string }) {
  return message ? <Text className={styles.fieldError}>{message}</Text> : null;
}

/** หน้าเข้าสู่ระบบ Mobile ใช้ visual hierarchy เดียวกับ OEMS Web และปรับเป็น split layout บน Tablet */
export function LoginScreen({ navigation }: LoginScreenProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isTablet = width >= 768;
  const [email, setEmail] = useState(DEVELOPMENT_CREDENTIALS.email);
  const [password, setPassword] = useState(DEVELOPMENT_CREDENTIALS.password);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const submit = () => {
    const nextErrors: LoginErrors = {};
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      nextErrors.email = 'กรุณากรอกอีเมล';
    } else if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      nextErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
    }

    if (!password) {
      nextErrors.password = 'กรุณากรอกรหัสผ่าน';
    }

    if (Object.keys(nextErrors).length === 0) {
      if (
        normalizedEmail !== DEVELOPMENT_CREDENTIALS.email ||
        password !== DEVELOPMENT_CREDENTIALS.password
      ) {
        nextErrors.form = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
      } else {
        setErrors({});
        navigation.replace('Home');
        return;
      }
    }

    setErrors(nextErrors);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className={styles.keyboardView}
    >
      <View className={`${styles.page} ${isTablet ? styles.pageTablet : ''}`}>
        {isTablet ? (
          <BrandPanel topInset={insets.top} bottomInset={insets.bottom} />
        ) : null}

        <View
          className={`${styles.formPanel} ${
            isTablet ? styles.formPanelTablet : styles.formPanelPhone
          }`}
        >
          <ScrollView
            contentContainerClassName={styles.scrollContent}
            contentContainerStyle={{
              paddingTop: Math.max(insets.top, 28),
              paddingBottom: Math.max(insets.bottom, 28),
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className={styles.formWrap}>
              {!isTablet ? (
                <View className={styles.mobileBrand}>
                  <BrandMark compact />
                  <Text className={styles.mobileBrandName}>OEMS</Text>
                </View>
              ) : null}

              <Text className={styles.formTitle}>เข้าสู่ระบบ OEMS</Text>
              <Text className={styles.formSubtitle}>
                ระบบติดตามและควบคุมการส่งออกน้ำมัน
              </Text>

              {errors.form ? (
                <View accessibilityRole="alert" className={styles.errorBanner}>
                  <Text className={styles.errorBannerText}>{errors.form}</Text>
                </View>
              ) : null}

              <View className={styles.form}>
                <Text className={styles.label}>อีเมล</Text>
                <TextInput
                  accessibilityLabel="อีเมล"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={value => {
                    setEmail(value);
                    setErrors(current => ({
                      ...current,
                      email: undefined,
                      form: undefined,
                    }));
                  }}
                  placeholder="name@example.com"
                  placeholderTextColor={theme.colors.placeholder}
                  returnKeyType="next"
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ''
                  }`}
                  testID="email-input"
                  value={email}
                />
                <FieldError message={errors.email} />

                <Text className={`${styles.label} ${styles.passwordLabel}`}>
                  รหัสผ่าน
                </Text>
                <View
                  className={`${styles.passwordInput} ${
                    errors.password ? styles.inputError : ''
                  }`}
                >
                  <TextInput
                    accessibilityLabel="รหัสผ่าน"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    onChangeText={value => {
                      setPassword(value);
                      setErrors(current => ({
                        ...current,
                        password: undefined,
                        form: undefined,
                      }));
                    }}
                    onSubmitEditing={submit}
                    placeholder="กรอกรหัสผ่าน"
                    placeholderTextColor={theme.colors.placeholder}
                    returnKeyType="done"
                    secureTextEntry={!showPassword}
                    className={styles.passwordTextInput}
                    testID="password-input"
                    value={password}
                  />
                  <Pressable
                    accessibilityLabel={
                      showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'
                    }
                    accessibilityRole="button"
                    hitSlop={8}
                    onPress={() => setShowPassword(value => !value)}
                    className={styles.passwordToggle}
                  >
                    <Text className={styles.passwordToggleText}>
                      {showPassword ? 'ซ่อน' : 'แสดง'}
                    </Text>
                  </Pressable>
                </View>
                <FieldError message={errors.password} />

                <Pressable
                  accessibilityRole="button"
                  className={styles.submitButton}
                  onPress={submit}
                  testID="login-button"
                >
                  <Text className={styles.submitButtonText}>เข้าสู่ระบบ</Text>
                  <Text className={styles.submitButtonIcon}>→</Text>
                </Pressable>
              </View>

              <View className={styles.demoCredentials}>
                <Text className={styles.demoLabel}>บัญชีสำหรับทดสอบ</Text>
                <View className={styles.demoValues}>
                  <Text
                    className={styles.demoCode}
                    selectable
                    style={demoCodeStyle}
                  >
                    {DEVELOPMENT_CREDENTIALS.email}
                  </Text>
                  <Text
                    className={styles.demoCode}
                    selectable
                    style={demoCodeStyle}
                  >
                    {DEVELOPMENT_CREDENTIALS.password}
                  </Text>
                </View>
              </View>

              <Text className={styles.version}>OEMS v1.0.0</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
