import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@/pages/login';
import Layout from '@/layout';
import { routerData } from '@/rootRooter/router';

const RooterContainer = () => {
	console.log(Object.keys(routerData));
	return (
		<Router>
			<Switch>
				<Route path="/" component={Layout} />
				<Route path="/login" component={Login} exact />
				{Object.keys(routerData).map((keyName) => {
					console.log('routerData', routerData);
					const currentItem = routerData[keyName];
					console.log('currentItem', currentItem);
					const Container = currentItem.component;
					return (
						<Route
							key={currentItem.path}
							path={currentItem.path}
							component={() => (
								<Container>
									<Switch>
										{(currentItem.routers || []).map((item) => (
											<Route
												path={currentItem.path + item.path}
												component={item.component}
												key={currentItem.path + item.path}
											/>
										))}
									</Switch>
								</Container>
							)}
						/>
					);
				})}
			</Switch>
		</Router>
	);
};

export default RooterContainer;
