import React, { FC } from 'react';

interface SkeletonProps {
  styles?: any;
}

const Skeleton: FC<SkeletonProps> = ({ styles }) => (
  <div style={{ animation: 'skeleton-loading 1s linear infinite alternate' }} css={styles} />
);

export default Skeleton;
