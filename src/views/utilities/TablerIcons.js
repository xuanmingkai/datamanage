import React from 'react'
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// =============================|| TABLER ICONS ||============================= //

const TablerIcons = () => (
    <MainCard title="Tabler Icons">
        <Card sx={{ overflow: 'hidden' }}>
            <IFrameWrapper title="Tabler Icons" width="100%" src="https://tablericons.com/" />
        </Card>
    </MainCard>
);

export default TablerIcons;
