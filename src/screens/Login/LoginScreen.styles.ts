import { Platform, type TextStyle, type ViewStyle } from 'react-native';

import { theme } from '../../theme/theme';

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

export const styles = {
  keyboardView: 'flex-1 bg-oems-surface',
  page: 'flex-1 bg-oems-surface',
  pageTablet: 'flex-row',
  brandPanel: 'flex-[1.05] justify-between overflow-hidden bg-oems-navy px-12',
  brandOrbOuter: 'absolute border-oems-brand-ring',
  brandOrbMiddle: 'absolute border-oems-brand-ring-faint',
  brandOrbInner: 'absolute border-oems-brand-ring-fainter',
  brandLockup: 'z-10 flex-row items-center gap-3',
  brandMarkBase: 'items-center justify-center',
  brandMarkRegular:
    'h-12 w-12 rounded-oems-lg border border-oems-brand-border bg-oems-brand-surface',
  brandMarkCompact: 'h-[42px] w-[42px] rounded-[10px] border-0 bg-oems-navy',
  brandMarkGlyphBase: 'font-bold text-oems-brand-on',
  brandMarkGlyphRegular: 'text-[28px] leading-8',
  brandMarkGlyphCompact: 'text-2xl leading-7',
  brandName: 'text-lg font-bold tracking-[1.2px] text-oems-brand-on',
  brandOrganization: 'mt-0.5 text-xs text-oems-brand-secondary',
  brandCopy: 'z-10 max-w-[520px]',
  eyebrow: 'text-xs font-bold tracking-[1.7px] text-oems-login-accent',
  brandTitle:
    'mt-4 text-[46px] font-bold leading-[55px] tracking-[-1.2px] text-oems-brand-on',
  brandSubtitle:
    'mt-[18px] text-[17px] leading-[26px] text-oems-brand-secondary',
  securityNote: 'z-10 flex-row items-center gap-[9px]',
  securityIcon: 'text-[8px] text-oems-brand-subdued',
  securityText: 'text-[11px] tracking-[0.3px] text-oems-brand-subdued',
  formPanel: 'bg-oems-surface',
  formPanelPhone: 'flex-1',
  formPanelTablet: 'flex-[0.95]',
  scrollContent: 'flex-grow justify-center px-6',
  formWrap: 'w-full max-w-[420px] self-center',
  mobileBrand: 'mb-10 flex-row items-center gap-[11px]',
  mobileBrandName: 'text-xl font-bold tracking-[1.2px] text-oems-text',
  formTitle: 'text-[30px] font-bold leading-10 text-oems-text',
  formSubtitle: 'mb-6 mt-1.5 text-[15px] leading-[23px] text-oems-muted',
  errorBanner:
    'mb-4 rounded-oems-md border border-oems-danger-border bg-oems-danger-surface px-[14px] py-3',
  errorBannerText: 'text-[13px] leading-5 text-oems-danger',
  form: 'mt-0.5',
  label: 'mb-[7px] text-sm font-medium text-oems-text',
  passwordLabel: 'mt-[17px]',
  input:
    'h-[50px] rounded-oems-md border border-oems-border bg-oems-surface px-[14px] text-[15px] text-oems-text',
  inputError: '!border-oems-danger',
  passwordInput:
    'h-[50px] flex-row items-center rounded-oems-md border border-oems-border bg-oems-surface',
  passwordTextInput: 'h-full flex-1 pl-[14px] text-[15px] text-oems-text',
  passwordToggle: 'h-full justify-center px-[14px]',
  passwordToggleText: 'text-[13px] font-semibold text-oems-primary',
  fieldError: 'mt-[5px] text-xs text-oems-danger',
  submitButton:
    'mt-[22px] h-[50px] flex-row items-center justify-center gap-2.5 rounded-oems-md bg-oems-primary active:bg-oems-primary-pressed',
  submitButtonText: 'text-[15px] font-semibold text-oems-brand-on',
  submitButtonIcon: 'text-xl leading-[22px] text-oems-brand-on',
  demoCredentials:
    'mb-[27px] mt-6 flex-row items-center justify-between gap-3 rounded-[9px] border border-oems-border bg-oems-primary-subtle px-[15px] py-[13px]',
  demoLabel: 'flex-1 text-[11px] font-medium leading-4 text-oems-muted',
  demoValues: 'items-end gap-1',
  demoCode: 'text-[11px] leading-[15px] text-oems-text',
  version: 'text-center text-[11px] text-oems-muted',
} as const;
