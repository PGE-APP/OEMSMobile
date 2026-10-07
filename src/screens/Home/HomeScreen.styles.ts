import { StyleSheet } from 'react-native';

import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.layout,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  brand: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1.3,
    color: theme.colors.navy900,
  },
  brandCaption: {
    marginTop: 2,
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
  logoutButton: {
    minHeight: 42,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primaryBorder,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 16,
  },
  logoutButtonPressed: {
    backgroundColor: theme.colors.primarySubtle,
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    color: theme.colors.text,
  },
  subtitle: {
    maxWidth: 520,
    marginTop: 8,
    fontSize: 15,
    lineHeight: 24,
    color: theme.colors.textSecondary,
  },
  statusPanel: {
    maxWidth: 520,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    padding: 16,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.success,
  },
  statusCopy: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.text,
  },
  statusDescription: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 19,
    color: theme.colors.textSecondary,
  },
});
