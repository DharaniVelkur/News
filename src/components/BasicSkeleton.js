import * as React from 'react';
import { Skeleton, Typography,Card,AspectRatio } from '@mui/joy';

export default function BasicSkeleton() {
  return (
    <Card variant="outlined" sx={{ width: 343, display: 'flex', gap: 2 }}>
      <AspectRatio ratio="21/9">
        <Skeleton variant="overlay">
          <img
            alt=""
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries.
        </Skeleton>
      </Typography>
    </Card>
  );
}