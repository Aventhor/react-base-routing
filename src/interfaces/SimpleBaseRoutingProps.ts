import { AppRoute } from './AppRoute';
import { RoutingProps } from './RoutingProps';

export interface SimpleBaseRoutingProps extends RoutingProps {
    routes: AppRoute[];
}
