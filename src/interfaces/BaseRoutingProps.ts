import { AppRoute } from './AppRoute';
import { LayoutRoute } from './LayoutRoute';

export interface BaseRoutingProps {
    routes: LayoutRoute[] | AppRoute[];
    notFoundPage?: any;
    schema?: 'layout' | 'simple';
}
