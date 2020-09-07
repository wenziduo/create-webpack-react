import React, { useEffect } from 'react';
import Wenziduo666 from 'wenziduo666';
import { useDispatch } from 'react-redux';
import { asyncDispatch } from '@/utils';
import Search from './component/Search';
import Table from './component/Table';
import Card from '@/antdComponent/card';

export default function HomePage() {
	return (
		<Card>
			<Search />
			<Table />
		</Card>
	);
}
