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
    public getSimplePaths(routes: AppRoute[]): string[] {
        return routes.map((route) => route.path);
    }
    public getLayoutPaths(routes: LayoutRoute[]): string[] {
        return routes
            .map((layout) => layout.routes.map((route) => route.path))
            .flat(1);
    }
}

export default new PathsManager();
