import { Route } from '@angular/router';

import { CityRoutes } from './cities/index';
import { SoDetailRoutes } from './cities/selectedsodetail/index';

import { ServiceOfferingsComponent } from './index';

export const ServiceOfferingsRoutes: Route[] = [
  	{
    	path: 'serviceofferings',
    	component: ServiceOfferingsComponent,
    	children: [
        ...CityRoutes,
		...SoDetailRoutes
    	]
  	}
];
