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

import { ShieldCheck } from '../../components/icons/ShieldCheck';
import type { RootStackParamList } from '../../routs';
import { theme } from '../../theme/theme';
import {
  createOrbStyle,
  demoCodeStyle,
  styles,
} from './styles/LoginScreen.styles';

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
      style={[
        styles.brandMarkBase,
        compact ? styles.brandMarkCompact : styles.brandMarkRegular,
      ]}
    >
      <ShieldCheck
        color={theme.colors.onBrand}
        size={compact ? 24 : 28}
        strokeWidth={2.25}
      />
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
      onLayout={event => setPanelWidth(event.nativeEvent.layout.width)}
      style={[
        styles.brandPanel,
        {
          paddingTop: Math.max(topInset, 32),
          paddingBottom: Math.max(bottomInset, 32),
        },
      ]}
    >
      <View
        style={[
          styles.brandOrbOuter,
          createOrbStyle(panelWidth, theme.login.orb.outerScale),
        ]}
      />
      <View
        style={[
          styles.brandOrbMiddle,
          createOrbStyle(panelWidth, theme.login.orb.middleScale),
        ]}
      />
      <View style={[styles.brandOrbInner, createOrbStyle(panelWidth)]} />

      <View style={styles.brandLockup}>
        <BrandMark />
        <View>
          <Text style={styles.brandName}>OEMS </Text>
          <Text style={styles.brandOrganization}>
            ศูนย์ปฏิบัติการส่งออกน้ำมัน
          </Text>
        </View>
      </View>

      <View style={styles.brandCopy}>
        <Text style={styles.eyebrow}>OIL EXPORT OPERATIONS</Text>
        <Text style={styles.brandTitle}>ระบบติดตามการส่งออกน้ำมัน</Text>
        <Text style={styles.brandSubtitle}>
          ระบบติดตามและควบคุมการส่งออกน้ำมัน
        </Text>
      </View>

      <View style={styles.securityNote}>
        <Text style={styles.securityIcon}>●</Text>
        <Text style={styles.securityText}>
          Secure government operations workspace
        </Text>
      </View>
    </View>
  );
}

function FieldError({ message }: { message?: string }) {
  return message ? <Text style={styles.fieldError}>{message}</Text> : null;
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
      style={styles.keyboardView}
    >
      <View style={[styles.page, isTablet && styles.pageTablet]}>
        {isTablet ? (
          <BrandPanel topInset={insets.top} bottomInset={insets.bottom} />
        ) : null}

        <View
          style={[
            styles.formPanel,
            isTablet ? styles.formPanelTablet : styles.formPanelPhone,
          ]}
        >
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              {
                paddingTop: Math.max(insets.top, 28),
                paddingBottom: Math.max(insets.bottom, 28),
              },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formWrap}>
              {!isTablet ? (
                <View style={styles.mobileBrand}>
                  <BrandMark compact />
                  <Text style={styles.mobileBrandName}>OEMS</Text>
                </View>
              ) : null}

              <Text style={styles.formTitle}>เข้าสู่ระบบ OEMS</Text>
              <Text style={styles.formSubtitle}>
                ระบบติดตามและควบคุมการส่งออกน้ำมัน
              </Text>

              {errors.form ? (
                <View accessibilityRole="alert" style={styles.errorBanner}>
                  <Text style={styles.errorBannerText}>{errors.form}</Text>
                </View>
              ) : null}

              <View style={styles.form}>
                <Text style={styles.label}>อีเมล</Text>
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
                  style={[styles.input, errors.email && styles.inputError]}
                  testID="email-input"
                  value={email}
                />
                <FieldError message={errors.email} />

                <Text style={[styles.label, styles.passwordLabel]}>
                  รหัสผ่าน
                </Text>
                <View
                  style={[
                    styles.passwordInput,
                    errors.password && styles.inputError,
                  ]}
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
                    style={styles.passwordTextInput}
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
                    style={styles.passwordToggle}
                  >
                    <Text style={styles.passwordToggleText}>
                      {showPassword ? 'ซ่อน' : 'แสดง'}
                    </Text>
                  </Pressable>
                </View>
                <FieldError message={errors.password} />

                <Pressable
                  accessibilityRole="button"
                  onPress={submit}
                  style={({ pressed }) => [
                    styles.submitButton,
                    pressed && styles.submitButtonPressed,
                  ]}
                  testID="login-button"
                >
                  <Text style={styles.submitButtonText}>เข้าสู่ระบบ</Text>
                  <Text style={styles.submitButtonIcon}>→</Text>
                </Pressable>
              </View>

              <View style={styles.demoCredentials}>
                <Text style={styles.demoLabel}>บัญชีสำหรับทดสอบ</Text>
                <View style={styles.demoValues}>
                  <Text selectable style={[styles.demoCode, demoCodeStyle]}>
                    {DEVELOPMENT_CREDENTIALS.email}
                  </Text>
                  <Text selectable style={[styles.demoCode, demoCodeStyle]}>
                    {DEVELOPMENT_CREDENTIALS.password}
                  </Text>
                </View>
              </View>

              <Text style={styles.version}>OEMS v1.0.0</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
