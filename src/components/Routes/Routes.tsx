import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { usePluginMeta } from 'utils/utils.plugin';
import { useNavigation, prefixRoute } from '../../utils/utils.routing';
import { ROUTES } from '../../constants';
import { Dashboard } from '../../pages/Dashboard';


export const Routes = () => {
	useNavigation();
	// const meta = usePluginMeta();
	// if (!(meta && meta.jsonData && meta.jsonData.accessKey && meta.jsonData.secretKey && meta.jsonData.region)) {
	// 	alert('Please set access key, region, and secret key');
	// 	return <div>Please set access key, region, and secret key</div>;
	// }
	return (
		<Switch>
			<Route exact path={prefixRoute(ROUTES.Dashboard)} component={(props: any) => <Dashboard {...props} />} />
		</Switch>
	);
};
