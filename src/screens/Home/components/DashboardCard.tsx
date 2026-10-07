import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { dashboardStyles as styles } from '../styles/Dashboard.styles';

type DashboardCardProps = {
  children: ReactNode;
  subtitle?: string;
  title: string;
};

export function DashboardCard({
  children,
  subtitle,
  title,
}: DashboardCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.cardBody}>{children}</View>
    </View>
  );
}
