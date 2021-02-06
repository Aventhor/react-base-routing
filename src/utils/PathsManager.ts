import { AppRoute } from '../interfaces/AppRoute';
import { LayoutRoute } from '../interfaces/LayoutRoute';

class PathsManager {
    public isAppRoute(object: any): object is AppRoute {
        return 'path' in object;
    }

    public isLayoutRoute(object: any): object is LayoutRoute {
        return 'layout' in object;
    }

    public isRoutesArrayEmpty = (
        routes: LayoutRoute[] | AppRoute[]
    ): boolean => {
        return routes.length === 0;
    };

    public getRoutePathsArray = (route: AppRoute): string[] => {
        if (!route.path) return [];
        if (route.path instanceof Array) {
            return route.path.map((p) => p);
        } else {
            return [route.path];
        }
    };
    public getPathsArray(routes: AppRoute[]): string[] {
        return routes.map((route) => this.getRoutePathsArray(route)).flat(1);
    }
    public getLayoutPaths(routes: LayoutRoute[]): string[] {
        return routes
            .map((layout) =>
                layout.routes
                    .map((route) => this.getRoutePathsArray(route))
                    .flat(1)
            )
            .flat(1);
    }
}

export default new PathsManager();
