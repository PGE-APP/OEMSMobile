export const styles = {
  page: 'flex-1 bg-oems-layout px-6',
  header: 'flex-row items-center justify-between py-4',
  brand: 'text-[22px] font-bold tracking-[1.3px] text-oems-navy',
  brandCaption: 'mt-0.5 text-[11px] text-oems-muted',
  logoutButton:
    'min-h-[42px] justify-center rounded-oems-md border border-oems-primary-border bg-oems-surface px-4 active:bg-oems-primary-subtle',
  logoutButtonText: 'text-sm font-semibold text-oems-primary',
  content: 'flex-1 justify-center pb-20',
  title: 'text-[30px] font-bold leading-10 text-oems-text',
  subtitle: 'mt-2 max-w-[520px] text-[15px] leading-6 text-oems-muted',
  statusPanel:
    'mt-6 max-w-[520px] flex-row items-center gap-3 rounded-oems-lg border border-oems-border bg-oems-surface p-4',
  statusIndicator: 'h-2.5 w-2.5 rounded-full bg-oems-success',
  statusCopy: 'flex-1',
  statusTitle: 'text-[15px] font-semibold text-oems-text',
  statusDescription: 'mt-[3px] text-[13px] leading-[19px] text-oems-muted',
} as const;
