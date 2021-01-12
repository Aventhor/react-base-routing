import { LayoutRoute } from './LayoutRoute';
import { RoutingProps } from './RoutingProps';

export interface BaseRoutingProps extends RoutingProps {
    routes: LayoutRoute[];
}
