import {
  Platform,
  StyleSheet,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { theme } from '../../../theme/theme';

export function createOrbStyle(panelWidth: number, scale = 1): ViewStyle {
  const { orb } = theme.login;
  const size = panelWidth * orb.sizeRatio * scale;

  return {
    width: size,
    height: size,
    right: -(size * orb.rightOffsetRatio),
    bottom: -(size * orb.bottomOffsetRatio),
    borderWidth: orb.borderWidth,
    borderRadius: size / 2,
  };
}

export const demoCodeStyle: TextStyle = {
  fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
};

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  page: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  pageTablet: {
    flexDirection: 'row',
  },
  brandPanel: {
    flex: 1.05,
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: theme.colors.navy900,
    paddingHorizontal: 48,
  },
  brandOrbOuter: {
    position: 'absolute',
    borderColor: theme.colors.brand.ring,
  },
  brandOrbMiddle: {
    position: 'absolute',
    borderColor: theme.colors.brand.ringFaint,
  },
  brandOrbInner: {
    position: 'absolute',
    borderColor: theme.colors.brand.ringFainter,
  },
  brandLockup: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brandMarkBase: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandMarkRegular: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.onBrandBorder,
    backgroundColor: theme.colors.onBrandSurface,
  },
  brandMarkCompact: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: theme.colors.navy900,
  },
  brandName: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: theme.colors.onBrand,
  },
  brandOrganization: {
    marginTop: 2,
    fontSize: 12,
    color: theme.colors.onBrandSecondary,
  },
  brandCopy: {
    zIndex: 10,
    maxWidth: 520,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.7,
    color: theme.colors.loginAccent,
  },
  brandTitle: {
    marginTop: 16,
    fontSize: 46,
    fontWeight: '700',
    lineHeight: 55,
    letterSpacing: -1.2,
    color: theme.colors.onBrand,
  },
  brandSubtitle: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 26,
    color: theme.colors.onBrandSecondary,
  },
  securityNote: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  securityIcon: {
    fontSize: 8,
    color: theme.colors.onBrandSubdued,
  },
  securityText: {
    fontSize: 11,
    letterSpacing: 0.3,
    color: theme.colors.onBrandSubdued,
  },
  formPanel: {
    backgroundColor: theme.colors.surface,
  },
  formPanelPhone: {
    flex: 1,
  },
  formPanelTablet: {
    flex: 0.95,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  formWrap: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  mobileBrand: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  mobileBrandName: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: theme.colors.text,
  },
  formTitle: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    color: theme.colors.text,
  },
  formSubtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
    lineHeight: 23,
    color: theme.colors.textSecondary,
  },
  errorBanner: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.dangerBorder,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.dangerSurface,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  errorBannerText: {
    fontSize: 13,
    lineHeight: 20,
    color: theme.colors.danger,
  },
  form: {
    marginTop: 2,
  },
  label: {
    marginBottom: 7,
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
  },
  passwordLabel: {
    marginTop: 17,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 14,
    fontSize: 15,
    color: theme.colors.text,
  },
  inputError: {
    borderColor: theme.colors.danger,
  },
  passwordInput: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
  },
  passwordTextInput: {
    height: '100%',
    flex: 1,
    paddingLeft: 14,
    fontSize: 15,
    color: theme.colors.text,
  },
  passwordToggle: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  passwordToggleText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  fieldError: {
    marginTop: 5,
    fontSize: 12,
    color: theme.colors.danger,
  },
  submitButton: {
    height: 50,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary,
  },
  submitButtonPressed: {
    backgroundColor: theme.colors.primaryPressed,
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.onBrand,
  },
  submitButtonIcon: {
    fontSize: 20,
    lineHeight: 22,
    color: theme.colors.onBrand,
  },
  demoCredentials: {
    marginTop: 24,
    marginBottom: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 9,
    backgroundColor: theme.colors.primarySubtle,
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  demoLabel: {
    flex: 1,
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    color: theme.colors.textSecondary,
  },
  demoValues: {
    alignItems: 'flex-end',
    gap: 4,
  },
  demoCode: {
    fontSize: 11,
    lineHeight: 15,
    color: theme.colors.text,
  },
  version: {
    textAlign: 'center',
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
});
