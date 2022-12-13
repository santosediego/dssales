import React from 'react';
import SalesSummaryCard from './sales-summary-card';
import './styles.css';

import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarCharIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={534} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={44434} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={434} label="Mínima" icon={<BarCharIcon />} />
      <SalesSummaryCard value={3434} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
