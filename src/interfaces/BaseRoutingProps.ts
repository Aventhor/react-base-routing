import { AppRoute } from './AppRoute';
import { LayoutRoute } from './LayoutRoute';

export interface BaseRoutingProps {
    routes: LayoutRoute[] | AppRoute[];
    /** component to render 404 page */
    notFoundPage?: any;
    schema?: 'layout' | 'simple';
}
