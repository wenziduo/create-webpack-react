export interface GlobalModelProps {
	userInfo: UserOnfoProps;
}
export interface UserOnfoProps {
	userId: string;
	userType: number;
	departId: number;
	userName: string;
	nick: string;
	group: {
		groupId: number;
		groupName: string;
		groupCreate: string;
		groupModify: string;
		groupAddress: string;
		groupContactNumber: string;
		groupType: number;
		departmentInfoVO: any;
	};
	roleId: number;
	userPermissionListVO: {
		userPermissionVOS: {
			roleVO: {
				id: number;
				roleCode: string;
				roleName: string;
				roleDesc: string;
				roleModule: string;
				groupId: number;
				status: number;
				initRole: number;
				operatorId: string;
				level: number;
				gmtCreate: string;
				gmtModify: string;
			};
			permissionVOS: any;
		};
	};
	props: string;
	hospOrderInfo: HospOrderInfoProps[];
}

export interface HospOrderInfoProps {
	serviceType: number;
	forbiddenState: number;
	orderNumbers: number;
	hospName: string;
	hospId: number;
	hospDistrictDOS: HospDistrictDOSProps[];
}

export interface HospDistrictDOSProps {
	id: number;
	hospId: number;
	hospName: string;
	hospDistrict: string;
	districtType: string;
	districtCode: string;
	receivingPerson: string;
	contactNumber: string;
	districtAddress: string;
	operator: string;
	gmtCreate: string;
	gmtModify: string;
	availability: string;
	chargeFlag: string;
	chargeType: string;
}
