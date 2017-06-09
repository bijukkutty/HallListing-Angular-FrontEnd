import { Route } from '@angular/router';

import { CityComponent } from './index';
import { SoDetailRoutes } from './selectedsodetail/selsodetail.routes';

export const CityRoutes: Route[] = [
	{
		path: 'landingpage',
		component: CityComponent,
/*		children: [
        ...SoDetailRoutes
    	]*/
	}
];
