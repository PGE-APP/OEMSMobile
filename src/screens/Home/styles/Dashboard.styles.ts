import { StyleSheet } from 'react-native';

import { theme } from '../../../theme/theme';

export const dashboardStyles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    shadowColor: '#10263d',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    minHeight: 48,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
  },
  cardSubtitle: {
    marginTop: 3,
    fontSize: 11,
    lineHeight: 16,
    color: theme.colors.textSecondary,
  },
  cardBody: {
    padding: 16,
  },
  oilContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  donutWrap: {
    width: 132,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutTotal: {
    fontSize: 21,
    fontWeight: '700',
    color: theme.colors.text,
  },
  donutUnit: {
    marginTop: 1,
    fontSize: 9,
    color: theme.colors.textSecondary,
  },
  legend: {
    flex: 1,
    gap: 9,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    flex: 1,
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
  legendValue: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.text,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 14,
    marginBottom: 4,
  },
  chartLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  chartLegendSwatch: {
    width: 14,
    height: 7,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
  chartLegendLine: {
    width: 15,
    height: 2,
    backgroundColor: theme.colors.success,
  },
  chartLegendText: {
    fontSize: 9,
    color: theme.colors.textSecondary,
  },
  refinerySelected: {
    borderWidth: 1,
    borderColor: theme.colors.primaryBorder,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primarySubtle,
    padding: 14,
  },
  refinerySelectedTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  refinerySelectedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  refinerySelectedName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  refineryOperator: {
    marginTop: 6,
    fontSize: 10,
    lineHeight: 15,
    color: theme.colors.textSecondary,
  },
  refineryStats: {
    marginTop: 13,
    flexDirection: 'row',
  },
  refineryStat: {
    flex: 1,
  },
  refineryStatDivider: {
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.primaryBorder,
    paddingLeft: 14,
  },
  refineryStatLabel: {
    fontSize: 10,
    color: theme.colors.textSecondary,
  },
  refineryStatValue: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  refineryList: {
    marginTop: 8,
  },
  refineryRow: {
    paddingVertical: 11,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.border,
  },
  refineryRowPressed: {
    opacity: 0.68,
  },
  refineryRowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  refineryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  refineryName: {
    flex: 1,
    fontSize: 12,
    color: theme.colors.text,
  },
  refineryVolume: {
    fontSize: 11,
    fontWeight: '600',
    color: theme.colors.text,
  },
  progressTrack: {
    height: 4,
    marginTop: 8,
    marginLeft: 16,
    overflow: 'hidden',
    borderRadius: 2,
    backgroundColor: theme.colors.border,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
});
