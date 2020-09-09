import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '@/layout';
import { routerData } from '@/rootRouter/router';

const RooterContainer = () => {
	console.log(Object.keys(routerData));
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					component={(props) => (
						<Layout {...props}>
							<Switch>
								{Object.keys(routerData).map((keyName) => {
									console.log('routerData', routerData);
									const currentItem = routerData[keyName];
									console.log('currentItem', currentItem);
									const Container = currentItem.component;
									return (
										<Route
											key={currentItem.path}
											path={currentItem.path}
											// exact
											component={() => (
												<Container>
													<Switch>
														{(currentItem.routers || []).map((item) => {
															if (item.component) {
																return (
																	<Route
																		path={currentItem.path + item.path}
																		component={item.component}
																		key={currentItem.path + item.path}
																		// exact
																	/>
																);
															} else if (item.children) {
																return (
																	<Router key={currentItem.path + item.path}>
																		{item.children.map((ele) => (
																			<Route
																				path={currentItem.path + item.path + ele.path}
																				component={ele.component}
																				key={currentItem.path + item.path + ele.path}
																				exact
																			/>
																		))}
																	</Router>
																);
															}
														})}
													</Switch>
												</Container>
											)}
										/>
									);
								})}
							</Switch>
						</Layout>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default RooterContainer;
