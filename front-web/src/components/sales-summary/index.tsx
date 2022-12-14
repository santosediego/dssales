import React, { useEffect, useMemo, useState } from 'react';
import SalesSummaryCard from './sales-summary-card';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './styles.css';

import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarCharIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

type Props = {
  filterData?: FilterData;
};

const initialSumary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSumary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>(`/sales/summary`, { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarCharIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
