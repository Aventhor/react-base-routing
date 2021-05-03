import React from 'react';
import { AppRoute } from './AppRoute';

export interface LayoutRoute {
    layout: React.ComponentType;
    routes: AppRoute[];
}
