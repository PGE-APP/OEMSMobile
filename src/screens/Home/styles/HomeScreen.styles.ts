import { StyleSheet } from 'react-native';

import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.layout,
  },
  header: {
    minHeight: 74,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  menuButton: {
    width: 42,
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primaryBorder,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
  },
  menuButtonPressed: {
    backgroundColor: theme.colors.primarySubtle,
  },
  menuIcon: {
    width: 20,
    gap: 4,
  },
  menuIconLine: {
    width: '100%',
    height: 2,
    borderRadius: 1,
    backgroundColor: theme.colors.primary,
  },
  scrollContent: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingTop: 22,
  },
  dashboardHeading: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    color: theme.colors.text,
  },
  subtitle: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.textSecondary,
  },
  updatedAt: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 18,
    color: theme.colors.placeholder,
  },
  filterPanel: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    padding: 12,
  },
  filterHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  filterLabel: {
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
  filterOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  filterChip: {
    minHeight: 38,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 8,
  },
  filterChipSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primarySubtle,
  },
  filterChipPressed: {
    opacity: 0.72,
  },
  filterChipText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  filterChipTextSelected: {
    fontWeight: '700',
    color: theme.colors.primary,
  },
  section: {
    marginBottom: 16,
  },
  drawerRoot: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.overlay,
  },
  drawer: {
    width: '82%',
    maxWidth: 320,
    backgroundColor: theme.colors.navy900,
    paddingHorizontal: 16,
  },
  drawerBackdrop: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  drawerBrandIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.onBrandBorder,
    borderRadius: 10,
    backgroundColor: theme.colors.onBrandSurface,
  },
  drawerBrandName: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1.1,
    color: theme.colors.onBrand,
  },
  drawerBrandCaption: {
    marginTop: 2,
    fontSize: 8,
    letterSpacing: 0.9,
    color: theme.colors.onBrandSubdued,
  },
  drawerClose: {
    minWidth: 44,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.onBrandBorder,
    borderRadius: theme.radius.md,
  },
  drawerCloseText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.onBrand,
  },
  drawerMenu: {
    flex: 1,
    marginTop: 38,
    gap: 8,
  },
  drawerItem: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: theme.radius.md,
    paddingHorizontal: 14,
  },
  drawerItemSelected: {
    backgroundColor: theme.colors.primary,
  },
  drawerItemPressed: {
    opacity: 0.72,
  },
  drawerItemMarker: {
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: theme.colors.onBrandBorder,
  },
  drawerItemMarkerSelected: {
    backgroundColor: theme.colors.onBrand,
  },
  drawerItemText: {
    fontSize: 14,
    color: theme.colors.onBrandSecondary,
  },
  drawerItemTextSelected: {
    fontWeight: '600',
    color: theme.colors.onBrand,
  },
  drawerFooter: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.onBrandSurface,
    paddingTop: 18,
  },
  drawerRole: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.onBrand,
  },
  drawerRoleCaption: {
    marginTop: 2,
    fontSize: 10,
    color: theme.colors.onBrandSubdued,
  },
  drawerLogout: {
    minHeight: 44,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.onBrandBorder,
    borderRadius: theme.radius.md,
  },
  drawerLogoutText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.onBrand,
  },
});
