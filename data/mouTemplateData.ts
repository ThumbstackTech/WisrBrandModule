const data = [
	{
		_id: {
			$oid: '615d8135e7af8600080e0e7e',
		},
		contract: {
			_id: {
				$oid: '615d8133e7af8600080e0e68',
			},
			schoolName: 'Dr.Bakshi School, Andheri',
			pincode: '400067',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'Near chakan gate',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-06T10:57:55.153Z',
			},
			activities: [
				{
					_id: {
						$oid: '615d8133e7af8600080e0e6d',
					},
					name: 'Republic Day Celebration',
					venue: ['Others'],
					custom: false,
					months: 'Apr',
					availableForBranding: true,
					school: {
						$oid: '615d8133e7af8600080e0e68',
					},
					createdOn: {
						$date: '2021-10-06T10:57:55.315Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615d8133e7af8600080e0e72',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '615d8133e7af8600080e0e6d',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-06T10:57:55.324Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e73',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '615d8133e7af8600080e0e6d',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-06T10:57:55.325Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '615d8133e7af8600080e0e6e',
					},
					name: 'HOli',
					venue: ['Staff Room', 'Others'],
					custom: true,
					months: 'May',
					availableForBranding: true,
					school: {
						$oid: '615d8133e7af8600080e0e68',
					},
					createdOn: {
						$date: '2021-10-06T10:57:55.316Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615d8133e7af8600080e0e74',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '615d8133e7af8600080e0e6e',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-06T10:57:55.326Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e75',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '615d8133e7af8600080e0e6e',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-06T10:57:55.327Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e76',
							},
							name: 'Color',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '615d8133e7af8600080e0e6e',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-06T10:57:55.327Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '615d8133e7af8600080e0e6f',
					},
					type: 'school',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '615d8133e7af8600080e0e68',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-06T10:57:55.317Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615d8133e7af8600080e0e77',
							},
							name: 'gate',
							units: 'feet',
							length: 12,
							breadth: 0,
							height: 41,
							inventory: {
								$oid: '615d8133e7af8600080e0e6f',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.329Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e78',
							},
							name: 'Test',
							_isCustom: true,
							units: 'feet',
							length: 11,
							breadth: 0,
							height: 11,
							inventory: {
								$oid: '615d8133e7af8600080e0e6f',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.330Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '615d8133e7af8600080e0e70',
					},
					type: 'classroom',
					_checked: true,
					name: 'Staff Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '615d8133e7af8600080e0e68',
					},
					parentName: 'Staff Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-06T10:57:55.317Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615d8133e7af8600080e0e79',
							},
							name: 'sleeves',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 3,
							inventory: {
								$oid: '615d8133e7af8600080e0e70',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.331Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '615d8133e7af8600080e0e71',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'Water Bottle 1',
					customName: null,
					images: [],
					school: {
						$oid: '615d8133e7af8600080e0e68',
					},
					parentName: 'Water Bottle',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-06T10:57:55.317Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615d8133e7af8600080e0e7a',
							},
							name: 'stage',
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 12,
							inventory: {
								$oid: '615d8133e7af8600080e0e71',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.334Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e7b',
							},
							name: 'wall',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '615d8133e7af8600080e0e71',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.334Z',
							},
						},
						{
							_id: {
								$oid: '615d8133e7af8600080e0e7c',
							},
							name: 'floor',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '615d8133e7af8600080e0e71',
							},
							createdOn: {
								$date: '2021-10-06T10:57:55.334Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '615d8133e7af8600080e0e68',
		},
		createdOn: {
			$date: '2021-10-06T10:57:57.588Z',
		},
	},
	{
		_id: {
			$oid: '615e7ca9e7af8600080e0e8f',
		},
		contract: {
			_id: {
				$oid: '615e7ca7e7af8600080e0e7f',
			},
			schoolName: 'Mumbai Public School',
			pincode: '400018',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'lower parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-07T04:50:47.387Z',
			},
			activities: [
				{
					_id: {
						$oid: '615e7ca7e7af8600080e0e85',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '615e7ca7e7af8600080e0e7f',
					},
					createdOn: {
						$date: '2021-10-07T04:50:47.502Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e89',
							},
							name: 'trophy',
							isCustom: true,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '615e7ca7e7af8600080e0e85',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-07T04:50:47.508Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '615e7ca7e7af8600080e0e86',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: [],
					school: {
						$oid: '615e7ca7e7af8600080e0e7f',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-07T04:50:47.503Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e8a',
							},
							name: 'board',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 11,
							inventory: {
								$oid: '615e7ca7e7af8600080e0e86',
							},
							createdOn: {
								$date: '2021-10-07T04:50:47.509Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '615e7ca7e7af8600080e0e88',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '615e7ca7e7af8600080e0e7f',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-07T04:50:47.504Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e8b',
							},
							name: 'sleeves',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '615e7ca7e7af8600080e0e88',
							},
							createdOn: {
								$date: '2021-10-07T04:50:47.510Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '615e7ca7e7af8600080e0e87',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'uniform 1',
					customName: null,
					images: [],
					school: {
						$oid: '615e7ca7e7af8600080e0e7f',
					},
					parentName: 'uniform',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-07T04:50:47.503Z',
					},
					attributes: [
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e8c',
							},
							name: 'stage',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '615e7ca7e7af8600080e0e87',
							},
							createdOn: {
								$date: '2021-10-07T04:50:47.511Z',
							},
						},
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e8d',
							},
							name: 'wall',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '615e7ca7e7af8600080e0e87',
							},
							createdOn: {
								$date: '2021-10-07T04:50:47.511Z',
							},
						},
						{
							_id: {
								$oid: '615e7ca7e7af8600080e0e8e',
							},
							name: 'floor',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '615e7ca7e7af8600080e0e87',
							},
							createdOn: {
								$date: '2021-10-07T04:50:47.512Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '615e7ca7e7af8600080e0e7f',
		},
		createdOn: {
			$date: '2021-10-07T04:50:49.719Z',
		},
	},
	{
		_id: {
			$oid: '6165712be7af8600080e0ea0',
		},
		contract: {
			_id: {
				$oid: '61657128e7af8600080e0e90',
			},
			schoolName: 'ABC school',
			pincode: '400018',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Lower Parel ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-12T11:27:36.600Z',
			},
			activities: [
				{
					_id: {
						$oid: '61657128e7af8600080e0e94',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					custom: false,
					months: 'Jan',
					availableForBranding: true,
					school: {
						$oid: '61657128e7af8600080e0e90',
					},
					createdOn: {
						$date: '2021-10-12T11:27:36.753Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61657128e7af8600080e0e98',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61657128e7af8600080e0e94',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-12T11:27:36.765Z',
							},
						},
						{
							_id: {
								$oid: '61657128e7af8600080e0e99',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61657128e7af8600080e0e94',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-12T11:27:36.766Z',
							},
						},
						{
							_id: {
								$oid: '61657128e7af8600080e0e9a',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61657128e7af8600080e0e94',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-12T11:27:36.766Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61657128e7af8600080e0e95',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'Corridor',
					images: [],
					school: {
						$oid: '61657128e7af8600080e0e90',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-12T11:27:36.754Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61657128e7af8600080e0e9b',
							},
							name: 'board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61657128e7af8600080e0e95',
							},
							createdOn: {
								$date: '2021-10-12T11:27:36.768Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61657128e7af8600080e0e96',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'Y 1',
					customName: 'Swimming pool',
					images: [],
					school: {
						$oid: '61657128e7af8600080e0e90',
					},
					parentName: 'Y',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-12T11:27:36.755Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61657128e7af8600080e0e9c',
							},
							name: 'stage',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61657128e7af8600080e0e96',
							},
							createdOn: {
								$date: '2021-10-12T11:27:36.768Z',
							},
						},
						{
							_id: {
								$oid: '61657128e7af8600080e0e9d',
							},
							name: 'wall',
							units: 'feet',
							length: 11,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61657128e7af8600080e0e96',
							},
							createdOn: {
								$date: '2021-10-12T11:27:36.769Z',
							},
						},
						{
							_id: {
								$oid: '61657128e7af8600080e0e9e',
							},
							name: 'floor',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61657128e7af8600080e0e96',
							},
							createdOn: {
								$date: '2021-10-12T11:27:36.769Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61657128e7af8600080e0e97',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'Girls',
					images: [],
					school: {
						$oid: '61657128e7af8600080e0e90',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-12T11:27:36.755Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61657128e7af8600080e0e9f',
							},
							name: 'sleeves',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61657128e7af8600080e0e97',
							},
							createdOn: {
								$date: '2021-10-12T11:27:36.771Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61657128e7af8600080e0e90',
		},
		createdOn: {
			$date: '2021-10-12T11:27:39.111Z',
		},
	},
	{
		_id: {
			$oid: '6166d55d85e0dc000804950e',
		},
		contract: {
			_id: {
				$oid: '6166d55b85e0dc00080494fa',
			},
			schoolName: 'ABCD School',
			pincode: '400018',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Lower Parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-13T12:47:23.965Z',
			},
			activities: [
				{
					_id: {
						$oid: '6166d55c85e0dc00080494fe',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					createdOn: {
						$date: '2021-10-13T12:47:24.130Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc0008049504',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6166d55c85e0dc00080494fe',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-13T12:47:24.141Z',
							},
						},
						{
							_id: {
								$oid: '6166d55c85e0dc0008049505',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '6166d55c85e0dc00080494fe',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-13T12:47:24.141Z',
							},
						},
						{
							_id: {
								$oid: '6166d55c85e0dc0008049506',
							},
							name: 'food packets',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6166d55c85e0dc00080494fe',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-13T12:47:24.142Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6166d55c85e0dc00080494ff',
					},
					name: 'environment day',
					venue: ['Others'],
					custom: true,
					months: 'May',
					availableForBranding: true,
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					createdOn: {
						$date: '2021-10-13T12:47:24.130Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc0008049507',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6166d55c85e0dc00080494ff',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-13T12:47:24.143Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '6166d55c85e0dc0008049500',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 2',
					customName: 'corridor',
					images: [],
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-10-13T12:47:24.132Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc0008049508',
							},
							name: 'board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '6166d55c85e0dc0008049500',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.144Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6166d55c85e0dc0008049501',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'swimming pool 1',
					customName: null,
					images: [],
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					parentName: 'swimming pool',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-13T12:47:24.132Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc0008049509',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '6166d55c85e0dc0008049501',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.145Z',
							},
						},
						{
							_id: {
								$oid: '6166d55c85e0dc000804950a',
							},
							name: 'wall',
							units: 'feet',
							length: 10,
							breadth: 12,
							height: 10,
							inventory: {
								$oid: '6166d55c85e0dc0008049501',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.145Z',
							},
						},
						{
							_id: {
								$oid: '6166d55c85e0dc000804950b',
							},
							name: 'floor',
							units: 'feet',
							length: 100,
							breadth: 50,
							height: 6,
							inventory: {
								$oid: '6166d55c85e0dc0008049501',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.145Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6166d55c85e0dc0008049502',
					},
					type: 'classroom',
					_checked: true,
					name: 'Cabinets 1',
					customName: null,
					images: [],
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					parentName: 'Cabinets',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-13T12:47:24.134Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc000804950c',
							},
							name: 'cabinets',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '6166d55c85e0dc0008049502',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.146Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6166d55c85e0dc0008049503',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'corridor/ outside PR',
					images: ['1634128968601-adorable adorable.JPG'],
					school: {
						$oid: '6166d55b85e0dc00080494fa',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-10-13T12:47:24.136Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6166d55c85e0dc000804950d',
							},
							name: 'board',
							units: 'inches',
							length: 2,
							breadth: 3,
							height: 2,
							inventory: {
								$oid: '6166d55c85e0dc0008049503',
							},
							createdOn: {
								$date: '2021-10-13T12:47:24.149Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '6166d55b85e0dc00080494fa',
		},
		createdOn: {
			$date: '2021-10-13T12:47:25.677Z',
		},
	},
	{
		_id: {
			$oid: '616e772f2d11a30008f9d505',
		},
		contract: {
			_id: {
				$oid: '616e772d2d11a30008f9d4fc',
			},
			schoolName: 'vermaji schools',
			pincode: '201301',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'sector 21, noida',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-19T07:43:41.638Z',
			},
			activities: [
				{
					_id: {
						$oid: '616e772d2d11a30008f9d4ff',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '616e772d2d11a30008f9d4fc',
					},
					createdOn: {
						$date: '2021-10-19T07:43:41.801Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616e772d2d11a30008f9d502',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '616e772d2d11a30008f9d4ff',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-19T07:43:41.809Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '616e772d2d11a30008f9d500',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '616e772d2d11a30008f9d4fc',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-19T07:43:41.802Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616e772d2d11a30008f9d503',
							},
							name: 'sleeves',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 11,
							inventory: {
								$oid: '616e772d2d11a30008f9d500',
							},
							createdOn: {
								$date: '2021-10-19T07:43:41.810Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '616e772d2d11a30008f9d501',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'corridor',
					images: ['1634629273775-adorable adorable.JPG'],
					school: {
						$oid: '616e772d2d11a30008f9d4fc',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-19T07:43:41.804Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616e772d2d11a30008f9d504',
							},
							name: 'board',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '616e772d2d11a30008f9d501',
							},
							createdOn: {
								$date: '2021-10-19T07:43:41.811Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '616e772d2d11a30008f9d4fc',
		},
		createdOn: {
			$date: '2021-10-19T07:43:43.660Z',
		},
	},
	{
		_id: {
			$oid: '616f2962f4c3ea0008aa641e',
		},
		contract: {
			_id: {
				$oid: '616f2960f4c3ea0008aa6411',
			},
			schoolName: 'Cambridge high school',
			pincode: '400051',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'JB nagar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-19T20:24:00.404Z',
			},
			activities: [
				{
					_id: {
						$oid: '616f2960f4c3ea0008aa6413',
					},
					name: 'School Reunion',
					venue: [],
					custom: false,
					months: '',
					availableForBranding: false,
					school: {
						$oid: '616f2960f4c3ea0008aa6411',
					},
					createdOn: {
						$date: '2021-10-19T20:24:00.531Z',
					},
					attributes: [],
				},
				{
					_id: {
						$oid: '616f2960f4c3ea0008aa6414',
					},
					name: "Children's day",
					venue: ['Assembly Hall'],
					custom: false,
					months: 'May',
					availableForBranding: true,
					school: {
						$oid: '616f2960f4c3ea0008aa6411',
					},
					createdOn: {
						$date: '2021-10-19T20:24:00.535Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa6417',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '616f2960f4c3ea0008aa6414',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-19T20:24:00.554Z',
							},
						},
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa6418',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '616f2960f4c3ea0008aa6414',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-19T20:24:00.554Z',
							},
						},
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa6419',
							},
							name: 'Boxes',
							isCustom: true,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '616f2960f4c3ea0008aa6414',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-19T20:24:00.554Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '616f2960f4c3ea0008aa6415',
					},
					type: 'school',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '616f2960f4c3ea0008aa6411',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-19T20:24:00.537Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa641a',
							},
							name: 'gate',
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 3,
							inventory: {
								$oid: '616f2960f4c3ea0008aa6415',
							},
							createdOn: {
								$date: '2021-10-19T20:24:00.562Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '616f2960f4c3ea0008aa6416',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'Water Coolers 1',
					customName: null,
					images: [],
					school: {
						$oid: '616f2960f4c3ea0008aa6411',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-19T20:24:00.537Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa641b',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 23,
							height: 2,
							inventory: {
								$oid: '616f2960f4c3ea0008aa6416',
							},
							createdOn: {
								$date: '2021-10-19T20:24:00.566Z',
							},
						},
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa641c',
							},
							name: 'wall',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '616f2960f4c3ea0008aa6416',
							},
							createdOn: {
								$date: '2021-10-19T20:24:00.566Z',
							},
						},
						{
							_id: {
								$oid: '616f2960f4c3ea0008aa641d',
							},
							name: 'floor',
							units: 'feet',
							length: 21,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '616f2960f4c3ea0008aa6416',
							},
							createdOn: {
								$date: '2021-10-19T20:24:00.567Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '616f2960f4c3ea0008aa6411',
		},
		createdOn: {
			$date: '2021-10-19T20:24:02.722Z',
		},
	},
	{
		_id: {
			$oid: '616fce22f4c3ea0008aa642d',
		},
		contract: {
			_id: {
				$oid: '616fce20f4c3ea0008aa6420',
			},
			schoolName: 'Wondrlab Schools',
			pincode: '201301',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'Sector 21',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-20T08:06:56.367Z',
			},
			activities: [
				{
					_id: {
						$oid: '616fce20f4c3ea0008aa6423',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '616fce20f4c3ea0008aa6420',
					},
					createdOn: {
						$date: '2021-10-20T08:06:56.628Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616fce20f4c3ea0008aa6428',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '616fce20f4c3ea0008aa6423',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-20T08:06:56.635Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '616fce20f4c3ea0008aa6424',
					},
					type: 'school',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'corridor 1',
					images: [],
					school: {
						$oid: '616fce20f4c3ea0008aa6420',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-10-20T08:06:56.629Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616fce20f4c3ea0008aa6429',
							},
							name: 'covers',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '616fce20f4c3ea0008aa6424',
							},
							createdOn: {
								$date: '2021-10-20T08:06:56.635Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '616fce20f4c3ea0008aa6425',
					},
					type: 'school',
					_checked: true,
					name: 'Water Coolers 2',
					customName: 'corridor 2',
					images: [],
					school: {
						$oid: '616fce20f4c3ea0008aa6420',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-10-20T08:06:56.629Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616fce20f4c3ea0008aa642a',
							},
							name: 'covers',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '616fce20f4c3ea0008aa6425',
							},
							createdOn: {
								$date: '2021-10-20T08:06:56.636Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '616fce20f4c3ea0008aa6426',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: '200',
					images: [],
					school: {
						$oid: '616fce20f4c3ea0008aa6420',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-20T08:06:56.629Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616fce20f4c3ea0008aa642b',
							},
							name: 'sleeves',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '616fce20f4c3ea0008aa6426',
							},
							createdOn: {
								$date: '2021-10-20T08:06:56.637Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '616fce20f4c3ea0008aa6427',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: '1',
					images: ['1634717064761-adorable adorable.JPG'],
					school: {
						$oid: '616fce20f4c3ea0008aa6420',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-20T08:06:56.631Z',
					},
					attributes: [
						{
							_id: {
								$oid: '616fce20f4c3ea0008aa642c',
							},
							name: 'board',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '616fce20f4c3ea0008aa6427',
							},
							createdOn: {
								$date: '2021-10-20T08:06:56.638Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '616fce20f4c3ea0008aa6420',
		},
		createdOn: {
			$date: '2021-10-20T08:06:58.132Z',
		},
	},
	{
		_id: {
			$oid: '61725a8df4c3ea0008aa6442',
		},
		contract: {
			_id: {
				$oid: '61725a8bf4c3ea0008aa6431',
			},
			schoolName: 'kinjal intl',
			pincode: '400709',
			state: 'Maharashtra',
			city: 'thane',
			address: 'sector 12  airoli',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-22T06:30:35.221Z',
			},
			activities: [
				{
					_id: {
						$oid: '61725a8bf4c3ea0008aa6434',
					},
					name: 'Independence Day Celebration',
					venue: ['lawn'],
					custom: false,
					months: 'Aug',
					availableForBranding: true,
					school: {
						$oid: '61725a8bf4c3ea0008aa6431',
					},
					createdOn: {
						$date: '2021-10-22T06:30:35.361Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa6438',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61725a8bf4c3ea0008aa6434',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T06:30:35.368Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa6439',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61725a8bf4c3ea0008aa6434',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T06:30:35.368Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643a',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61725a8bf4c3ea0008aa6434',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T06:30:35.368Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643b',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61725a8bf4c3ea0008aa6434',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T06:30:35.369Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61725a8bf4c3ea0008aa6435',
					},
					type: 'school',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: [],
					school: {
						$oid: '61725a8bf4c3ea0008aa6431',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T06:30:35.362Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643c',
							},
							name: 'board',
							units: 'inches',
							length: 5,
							breadth: 8,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6435',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.370Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61725a8bf4c3ea0008aa6436',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'lawn 1',
					customName: null,
					images: [],
					school: {
						$oid: '61725a8bf4c3ea0008aa6431',
					},
					parentName: 'lawn',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T06:30:35.362Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643d',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6436',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.372Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643e',
							},
							name: 'wall',
							units: 'feet',
							length: 3,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6436',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.372Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa643f',
							},
							name: 'floor',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6436',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.372Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61725a8bf4c3ea0008aa6437',
					},
					type: 'classroom',
					_checked: true,
					name: 'Cabinets 1',
					customName: null,
					images: [],
					school: {
						$oid: '61725a8bf4c3ea0008aa6431',
					},
					parentName: 'Cabinets',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T06:30:35.362Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa6440',
							},
							name: 'cabinets',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6437',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.375Z',
							},
						},
						{
							_id: {
								$oid: '61725a8bf4c3ea0008aa6441',
							},
							name: 'doors',
							_isCustom: true,
							units: 'feet',
							length: 2,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61725a8bf4c3ea0008aa6437',
							},
							createdOn: {
								$date: '2021-10-22T06:30:35.375Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61725a8bf4c3ea0008aa6431',
		},
		createdOn: {
			$date: '2021-10-22T06:30:37.262Z',
		},
	},
	{
		_id: {
			$oid: '6172a891f4c3ea0008aa6451',
		},
		contract: {
			_id: {
				$oid: '6172a88ff4c3ea0008aa6444',
			},
			schoolName: 'holy cross',
			pincode: '400608',
			state: 'Maharashtra',
			city: 'thane',
			address: 'sector 12  airoli',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-22T12:03:27.309Z',
			},
			activities: [
				{
					_id: {
						$oid: '6172a88ff4c3ea0008aa6447',
					},
					name: 'Sports Day',
					venue: ['lawn'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '6172a88ff4c3ea0008aa6444',
					},
					createdOn: {
						$date: '2021-10-22T12:03:27.488Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa644c',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6172a88ff4c3ea0008aa6447',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T12:03:27.499Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '6172a88ff4c3ea0008aa6448',
					},
					type: 'school',
					_checked: true,
					name: 'Water Coolers 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172a88ff4c3ea0008aa6444',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T12:03:27.489Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa644b',
							},
							name: 'covers',
							units: 'feet',
							length: 1,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '6172a88ff4c3ea0008aa6448',
							},
							createdOn: {
								$date: '2021-10-22T12:03:27.497Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6172a88ff4c3ea0008aa6449',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'lawn 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172a88ff4c3ea0008aa6444',
					},
					parentName: 'lawn',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T12:03:27.489Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa644d',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '6172a88ff4c3ea0008aa6449',
							},
							createdOn: {
								$date: '2021-10-22T12:03:27.500Z',
							},
						},
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa644e',
							},
							name: 'wall',
							units: 'feet',
							length: 5,
							breadth: 7,
							height: 0,
							inventory: {
								$oid: '6172a88ff4c3ea0008aa6449',
							},
							createdOn: {
								$date: '2021-10-22T12:03:27.500Z',
							},
						},
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa644f',
							},
							name: 'floor',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '6172a88ff4c3ea0008aa6449',
							},
							createdOn: {
								$date: '2021-10-22T12:03:27.501Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6172a88ff4c3ea0008aa644a',
					},
					type: 'classroom',
					_checked: true,
					name: 'Benches 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172a88ff4c3ea0008aa6444',
					},
					parentName: 'Benches',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T12:03:27.490Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172a88ff4c3ea0008aa6450',
							},
							name: 'benches',
							units: 'inches',
							length: 8,
							breadth: 5,
							height: 9,
							inventory: {
								$oid: '6172a88ff4c3ea0008aa644a',
							},
							createdOn: {
								$date: '2021-10-22T12:03:27.502Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '6172a88ff4c3ea0008aa6444',
		},
		createdOn: {
			$date: '2021-10-22T12:03:29.474Z',
		},
	},
	{
		_id: {
			$oid: '6172cb27f4c3ea0008aa6465',
		},
		contract: {
			_id: {
				$oid: '6172cb26f4c3ea0008aa6453',
			},
			schoolName: 'Xaviers Int',
			pincode: '400051',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'Gandhi nagar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-22T14:31:02.143Z',
			},
			activities: [
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa6455',
					},
					name: 'School Fest',
					venue: ['Others', 'Canteen'],
					custom: false,
					months: 'Mar',
					availableForBranding: true,
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					createdOn: {
						$date: '2021-10-22T14:31:02.326Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa645b',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '6172cb26f4c3ea0008aa6455',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T14:31:02.333Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa645c',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6172cb26f4c3ea0008aa6455',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T14:31:02.333Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa645d',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '6172cb26f4c3ea0008aa6455',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-22T14:31:02.333Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa6456',
					},
					name: 'Annual Day',
					venue: [],
					custom: false,
					months: '',
					availableForBranding: false,
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					createdOn: {
						$date: '2021-10-22T14:31:02.326Z',
					},
					attributes: [],
				},
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa6457',
					},
					name: 'Holi',
					venue: [],
					custom: true,
					months: '',
					availableForBranding: false,
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					createdOn: {
						$date: '2021-10-22T14:31:02.327Z',
					},
					attributes: [],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa6458',
					},
					type: 'school',
					_checked: true,
					name: 'Auditorium 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					parentName: 'Auditorium',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T14:31:02.327Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa645e',
							},
							name: 'stage',
							units: 'feet',
							length: 2,
							breadth: 10,
							height: 13,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa6458',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.334Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa645f',
							},
							name: 'screens',
							units: 'feet',
							length: 2,
							breadth: 10,
							height: 13,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa6458',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.335Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa6459',
					},
					type: 'school',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T14:31:02.328Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa6460',
							},
							name: 'gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 4,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa6459',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.336Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '6172cb26f4c3ea0008aa645a',
					},
					type: 'school',
					_custom: true,
					_checked: true,
					name: 'Parking lot 1',
					customName: null,
					images: [],
					school: {
						$oid: '6172cb26f4c3ea0008aa6453',
					},
					parentName: 'Parking lot',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-22T14:31:02.328Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa6461',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa645a',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.337Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa6462',
							},
							name: 'wall',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa645a',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.337Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa6463',
							},
							name: 'floor',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa645a',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.337Z',
							},
						},
						{
							_id: {
								$oid: '6172cb26f4c3ea0008aa6464',
							},
							name: 'Number of cars',
							_isCustom: true,
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '6172cb26f4c3ea0008aa645a',
							},
							createdOn: {
								$date: '2021-10-22T14:31:02.337Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '6172cb26f4c3ea0008aa6453',
		},
		createdOn: {
			$date: '2021-10-22T14:31:03.628Z',
		},
	},
	{
		_id: {
			$oid: '61739dbbf4c3ea0008aa6471',
		},
		contract: {
			_id: {
				$oid: '61739dbaf4c3ea0008aa6467',
			},
			schoolName: 'fr agnel',
			pincode: '400701',
			state: 'Maharashtra',
			city: 'thane',
			address: 'sector 14 airoli',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-23T05:29:30.119Z',
			},
			activities: [
				{
					_id: {
						$oid: '61739dbaf4c3ea0008aa646a',
					},
					name: 'Sports Day',
					venue: ['Auditorium'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '61739dbaf4c3ea0008aa6467',
					},
					createdOn: {
						$date: '2021-10-23T05:29:30.242Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61739dbaf4c3ea0008aa646d',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61739dbaf4c3ea0008aa646a',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-23T05:29:30.247Z',
							},
						},
						{
							_id: {
								$oid: '61739dbaf4c3ea0008aa646e',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61739dbaf4c3ea0008aa646a',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-23T05:29:30.248Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61739dbaf4c3ea0008aa646c',
					},
					type: 'classroom',
					_checked: true,
					name: 'Cabinets 1',
					customName: null,
					images: [],
					school: {
						$oid: '61739dbaf4c3ea0008aa6467',
					},
					parentName: 'Cabinets',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-23T05:29:30.243Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61739dbaf4c3ea0008aa6470',
							},
							name: 'cabinets',
							units: 'inches',
							length: 10,
							breadth: 8,
							height: 0,
							inventory: {
								$oid: '61739dbaf4c3ea0008aa646c',
							},
							createdOn: {
								$date: '2021-10-23T05:29:30.249Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61739dbaf4c3ea0008aa646b',
					},
					type: 'school',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '61739dbaf4c3ea0008aa6467',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-23T05:29:30.243Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61739dbaf4c3ea0008aa646f',
							},
							name: 'gate',
							units: 'feet',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61739dbaf4c3ea0008aa646b',
							},
							createdOn: {
								$date: '2021-10-23T05:29:30.248Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61739dbaf4c3ea0008aa6467',
		},
		createdOn: {
			$date: '2021-10-23T05:29:31.796Z',
		},
	},
	{
		_id: {
			$oid: '61765108f4c3ea0008aa6480',
		},
		contract: {
			_id: {
				$oid: '61765106f4c3ea0008aa6473',
			},
			schoolName: 'RKF ',
			pincode: '400059',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'JB nagar ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-25T06:39:02.009Z',
			},
			activities: [
				{
					_id: {
						$oid: '61765106f4c3ea0008aa6475',
					},
					name: 'School Fest',
					venue: ['Auditorium'],
					custom: false,
					months: 'Jan',
					availableForBranding: true,
					school: {
						$oid: '61765106f4c3ea0008aa6473',
					},
					createdOn: {
						$date: '2021-10-25T06:39:02.131Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61765106f4c3ea0008aa6478',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61765106f4c3ea0008aa6475',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T06:39:02.142Z',
							},
						},
						{
							_id: {
								$oid: '61765106f4c3ea0008aa6479',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61765106f4c3ea0008aa6475',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T06:39:02.142Z',
							},
						},
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647a',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61765106f4c3ea0008aa6475',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T06:39:02.142Z',
							},
						},
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647b',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61765106f4c3ea0008aa6475',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T06:39:02.143Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61765106f4c3ea0008aa6476',
					},
					type: 'school',
					_checked: true,
					name: 'Auditorium 1',
					customName: null,
					images: [],
					school: {
						$oid: '61765106f4c3ea0008aa6473',
					},
					parentName: 'Auditorium',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-25T06:39:02.132Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647c',
							},
							name: 'stage',
							units: 'feet',
							length: 50,
							breadth: 50,
							height: 50,
							inventory: {
								$oid: '61765106f4c3ea0008aa6476',
							},
							createdOn: {
								$date: '2021-10-25T06:39:02.145Z',
							},
						},
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647d',
							},
							name: 'screens',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61765106f4c3ea0008aa6476',
							},
							createdOn: {
								$date: '2021-10-25T06:39:02.146Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61765106f4c3ea0008aa6477',
					},
					type: 'school',
					_checked: true,
					name: 'Assembly Hall 1',
					customName: null,
					images: [],
					school: {
						$oid: '61765106f4c3ea0008aa6473',
					},
					parentName: 'Assembly Hall',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-25T06:39:02.133Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647e',
							},
							name: 'stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61765106f4c3ea0008aa6477',
							},
							createdOn: {
								$date: '2021-10-25T06:39:02.148Z',
							},
						},
						{
							_id: {
								$oid: '61765106f4c3ea0008aa647f',
							},
							name: 'wall',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 10,
							inventory: {
								$oid: '61765106f4c3ea0008aa6477',
							},
							createdOn: {
								$date: '2021-10-25T06:39:02.148Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61765106f4c3ea0008aa6473',
		},
		createdOn: {
			$date: '2021-10-25T06:39:04.364Z',
		},
	},
	{
		_id: {
			$oid: '6176f18f4261f900093eae0c',
		},
		contract: {
			_id: {
				$oid: '6176f18d4261f900093eae02',
			},
			schoolName: 'UAT Test - Dr.Dasilva School, Andheri',
			pincode: '400067',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'Nirmal Nagar, Ghatkoper (East)',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-10-25T18:03:57.919Z',
			},
			activities: [
				{
					_id: {
						$oid: '6176f18e4261f900093eae05',
					},
					name: 'Christmas Party',
					venue: ['Canteen', 'Auditorium'],
					custom: false,
					months: 'Feb',
					availableForBranding: true,
					school: {
						$oid: '6176f18d4261f900093eae02',
					},
					createdOn: {
						$date: '2021-10-25T18:03:58.095Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6176f18e4261f900093eae07',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6176f18e4261f900093eae05',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T18:03:58.110Z',
							},
						},
						{
							_id: {
								$oid: '6176f18e4261f900093eae08',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '6176f18e4261f900093eae05',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T18:03:58.110Z',
							},
						},
						{
							_id: {
								$oid: '6176f18e4261f900093eae09',
							},
							name: 'Custom',
							isCustom: true,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '6176f18e4261f900093eae05',
							},
							isSelected: true,
							createdOn: {
								$date: '2021-10-25T18:03:58.111Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '6176f18e4261f900093eae06',
					},
					type: 'school',
					_checked: true,
					name: 'Music Class 1',
					customName: null,
					images: [
						'1635184933629-hall 2.jpg',
						'1635184933616-cabinate 2.jpg',
						'1635184933624-gallery01.jpg',
						'1635184933626-gate 3.jpg',
					],
					school: {
						$oid: '6176f18d4261f900093eae02',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-10-25T18:03:58.099Z',
					},
					attributes: [
						{
							_id: {
								$oid: '6176f18e4261f900093eae0a',
							},
							name: 'doors',
							units: 'feet',
							length: 3,
							breadth: 1,
							height: 2,
							inventory: {
								$oid: '6176f18e4261f900093eae06',
							},
							createdOn: {
								$date: '2021-10-25T18:03:58.118Z',
							},
						},
						{
							_id: {
								$oid: '6176f18e4261f900093eae0b',
							},
							name: 'walls',
							units: 'feet',
							length: 3,
							breadth: 1,
							height: 2,
							inventory: {
								$oid: '6176f18e4261f900093eae06',
							},
							createdOn: {
								$date: '2021-10-25T18:03:58.119Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '6176f18d4261f900093eae02',
		},
		createdOn: {
			$date: '2021-10-25T18:03:59.762Z',
		},
	},
	{
		_id: {
			$oid: '61a79688388ffb000751b63c',
		},
		contract: {
			_id: {
				$oid: '61a79686388ffb000751b61f',
			},
			schoolName: 'Dev- Govindrao High School ',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Maheshwari Udyan, Matunga ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-01T15:36:38.202Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			activities: [
				{
					_id: {
						$oid: '61a79686388ffb000751b621',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Mar', 'Apr'],
					availableForBranding: true,
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					createdOn: {
						$date: '2021-12-01T15:36:38.365Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b62b',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61a79686388ffb000751b621',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 3,
							units: 'feet',
							quantity: 3,
							createdOn: {
								$date: '2021-12-01T15:36:38.379Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b62c',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b621',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.379Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b62d',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b621',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.380Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b62e',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b621',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.380Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b62f',
							},
							name: 'Testing event attr',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b621',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 4,
							height: 4,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-01T15:36:38.380Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a79686388ffb000751b622',
					},
					name: 'Annual Day',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					createdOn: {
						$date: '2021-12-01T15:36:38.365Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b627',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b622',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.375Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b628',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b622',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.376Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b629',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b622',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.376Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b62a',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b622',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.376Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a79686388ffb000751b623',
					},
					name: 'School Fest',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					createdOn: {
						$date: '2021-12-01T15:36:38.366Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b630',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b623',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.382Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b631',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b623',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.382Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b632',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b623',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.383Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b633',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b623',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.383Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a79686388ffb000751b624',
					},
					name: 'Independence Day Celebration',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					createdOn: {
						$date: '2021-12-01T15:36:38.366Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b634',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b624',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.384Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b635',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b624',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.385Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b636',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b624',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.385Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b637',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61a79686388ffb000751b624',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-01T15:36:38.385Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61a79686388ffb000751b625',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-01T15:36:38.367Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b638',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 2,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61a79686388ffb000751b625',
							},
							quantity: 2,
							createdOn: {
								$date: '2021-12-01T15:36:38.388Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b639',
							},
							name: 'Testing attribute',
							_isCustom: true,
							units: 'feet',
							length: 2,
							breadth: 4,
							height: 3,
							inventory: {
								$oid: '61a79686388ffb000751b625',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-01T15:36:38.389Z',
							},
						},
						{
							_id: {
								$oid: '61a79686388ffb000751b63a',
							},
							name: 'Test attr 2',
							_isCustom: true,
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61a79686388ffb000751b625',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-01T15:36:38.391Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a79686388ffb000751b626',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Hallway 1',
					customName: null,
					images: [],
					school: {
						$oid: '61a79686388ffb000751b61f',
					},
					parentName: 'Hallway',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-01T15:36:38.368Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a79686388ffb000751b63b',
							},
							name: 'Lockers',
							units: 'feet',
							length: 0,
							breadth: 4,
							height: 1,
							inventory: {
								$oid: '61a79686388ffb000751b626',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-01T15:36:38.393Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:40.373Z',
		},
	},
	{
		_id: {
			$oid: '61a84ee8ad4a050009acbbf6',
		},
		contract: {
			_id: {
				$oid: '61a84ee7ad4a050009acbbef',
			},
			schoolName: 'Amrut High School',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'Shyam Shikhar Tower, Bapunagar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-02T04:43:19.463Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61a84ee8ad4a050009acbbf2',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'Uniform',
					images: [],
					school: {
						$oid: '61a84ee7ad4a050009acbbef',
					},
					parentName: 'Uniforms',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-02T04:43:20.722Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a84ee8ad4a050009acbbf4',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 2,
							breadth: 5,
							height: 5,
							inventory: {
								$oid: '61a84ee8ad4a050009acbbf2',
							},
							quantity: 50,
							createdOn: {
								$date: '2021-12-02T04:43:20.748Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a84ee8ad4a050009acbbf3',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 2',
					customName: 'uniform',
					images: [],
					school: {
						$oid: '61a84ee7ad4a050009acbbef',
					},
					parentName: 'Uniforms',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-02T04:43:20.722Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a84ee8ad4a050009acbbf5',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 5,
							breadth: 5,
							height: 5,
							inventory: {
								$oid: '61a84ee8ad4a050009acbbf3',
							},
							quantity: 5,
							createdOn: {
								$date: '2021-12-02T04:43:20.754Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-02T04:43:20.771Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f53',
		},
		contract: {
			_id: {
				$oid: '61a9c8dba064240009692f3f',
			},
			schoolName: 'Preston High School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Crida Road',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-03T07:35:55.634Z',
			},
			registeredUnder: 'Telegana Education Act',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61a9c8dca064240009692f4d',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: [],
					school: {
						$oid: '61a9c8dba064240009692f3f',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-03T07:35:56.793Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a9c8dca064240009692f50',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61a9c8dca064240009692f4d',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-03T07:35:56.827Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a9c8dca064240009692f4e',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '61a9c8dba064240009692f3f',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-03T07:35:56.794Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a9c8dca064240009692f51',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61a9c8dca064240009692f4e',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-03T07:35:56.828Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61a9c8dca064240009692f4f',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 2',
					customName: null,
					images: ['1638516263516-adorable adorable.JPG'],
					school: {
						$oid: '61a9c8dba064240009692f3f',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-03T07:35:56.794Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61a9c8dca064240009692f52',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61a9c8dca064240009692f4f',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-03T07:35:56.830Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.840Z',
		},
	},
	{
		_id: {
			$oid: '61ade2689348190008b7cb80',
		},
		contract: {
			_id: {
				$oid: '61ade2679348190008b7cb6c',
			},
			schoolName: 'Preston High School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Crida Road',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-06T10:13:59.526Z',
			},
			registeredUnder: 'Telangana Education Act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61ade2679348190008b7cb7a',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'SG1',
					images: [],
					school: {
						$oid: '61ade2679348190008b7cb6c',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:13:59.663Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ade2679348190008b7cb7d',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61ade2679348190008b7cb7a',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:13:59.675Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ade2679348190008b7cb7b',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'NB1',
					images: ['1638785376410-mortalkombat.jpg'],
					school: {
						$oid: '61ade2679348190008b7cb6c',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:13:59.667Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ade2679348190008b7cb7e',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61ade2679348190008b7cb7b',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:13:59.675Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ade2679348190008b7cb7c',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 2',
					customName: 'NB2',
					images: ['1638785427390-mortalkombat.jpg'],
					school: {
						$oid: '61ade2679348190008b7cb6c',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:13:59.667Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ade2679348190008b7cb7f',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61ade2679348190008b7cb7c',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:13:59.676Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:14:00.538Z',
		},
	},
	{
		_id: {
			$oid: '61adead49348190008b7cbad',
		},
		contract: {
			_id: {
				$oid: '61adead29348190008b7cb87',
			},
			schoolName: 'Krishnaveni School',
			state: 'Telangana',
			city: 'rangareddy',
			address: 'Kishan Bagh',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-06T10:49:54.986Z',
			},
			registeredUnder: 'Telangana Education Act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61adead39348190008b7cb95',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'Boards',
					images: ['1638786998647-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.185Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cb9e',
							},
							name: 'Boards',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb95',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.195Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cb9f',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb95',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.195Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cba0',
							},
							name: 'Benches',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb95',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.196Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb96',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'WC1',
					images: ['1638787123549-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.186Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cbac',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb96',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.206Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb97',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 2',
					customName: 'WC2',
					images: ['1638787147148-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.186Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba1',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb97',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.199Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb98',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: 'wr1',
					images: ['1638787212191-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.186Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba2',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb98',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.200Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cba3',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb98',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.200Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb99',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: 'wr2',
					images: ['1638787224629-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.186Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba4',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb99',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.201Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cba5',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb99',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.201Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb9a',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 3',
					customName: 'wc3',
					images: ['1638787272168-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.186Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba6',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9a',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.202Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cba7',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9a',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.202Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb9b',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'NB1',
					images: ['1638787365868-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.187Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba8',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9b',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.202Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb9c',
					},
					type: 'otherRooms&Staff',
					_custom: true,
					_checked: true,
					name: 'Digital Room  1',
					customName: 'DR1',
					images: ['1638787555999-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'Digital Room ',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.188Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cba9',
							},
							name: 'Digital Room ',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9c',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T10:49:55.203Z',
							},
						},
						{
							_id: {
								$oid: '61adead39348190008b7cbaa',
							},
							name: 'Wall',
							_isCustom: true,
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9c',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.204Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adead39348190008b7cb9d',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'sg1',
					images: ['1638787597033-mortalkombat.jpg'],
					school: {
						$oid: '61adead29348190008b7cb87',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T10:49:55.188Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adead39348190008b7cbab',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61adead39348190008b7cb9d',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T10:49:55.204Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:56.298Z',
		},
	},
	{
		_id: {
			$oid: '61adf2939348190008b7cbd2',
		},
		contract: {
			_id: {
				$oid: '61adf2929348190008b7cbbc',
			},
			schoolName: 'Amina School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Shastripuram Kind',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-06T11:22:58.126Z',
			},
			registeredUnder: 'Telegana Education Trust 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61adf2929348190008b7cbc8',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Assembly Hall 1',
					customName: 'AH1',
					images: ['1638789525858-adorable adorable.JPG'],
					school: {
						$oid: '61adf2929348190008b7cbbc',
					},
					parentName: 'Assembly Hall',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T11:22:58.318Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adf2929348190008b7cbcc',
							},
							name: 'Stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbc8',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T11:22:58.325Z',
							},
						},
						{
							_id: {
								$oid: '61adf2929348190008b7cbcd',
							},
							name: 'Walls',
							units: 'feet',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbc8',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T11:22:58.325Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adf2929348190008b7cbc9',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'nb 1',
					images: ['1638789560043-adorable adorable.JPG'],
					school: {
						$oid: '61adf2929348190008b7cbbc',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T11:22:58.319Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adf2929348190008b7cbce',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbc9',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T11:22:58.326Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adf2929348190008b7cbca',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'sg 1',
					images: ['1638789608006-adorable adorable.JPG'],
					school: {
						$oid: '61adf2929348190008b7cbbc',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T11:22:58.319Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adf2929348190008b7cbcf',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbca',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T11:22:58.327Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61adf2929348190008b7cbcb',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: 'Sports Area 1',
					customName: 'SA1',
					images: ['1638789639548-adorable adorable.JPG'],
					school: {
						$oid: '61adf2929348190008b7cbbc',
					},
					parentName: 'Sports Area',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T11:22:58.319Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61adf2929348190008b7cbd0',
							},
							name: 'Sports Area',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbcb',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T11:22:58.327Z',
							},
						},
						{
							_id: {
								$oid: '61adf2929348190008b7cbd1',
							},
							name: 'wall',
							_isCustom: true,
							units: 'feet',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61adf2929348190008b7cbcb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T11:22:58.327Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:59.373Z',
		},
	},
	{
		_id: {
			$oid: '61ae145a9348190008b7cbfc',
		},
		contract: {
			_id: {
				$oid: '61ae14599348190008b7cbdc',
			},
			schoolName: 'Mysian The School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Kishan Bagh',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-06T13:47:05.324Z',
			},
			registeredUnder: 'telangana education act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61ae14599348190008b7cbea',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.487Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbf1',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61ae14599348190008b7cbea',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.508Z',
							},
						},
						{
							_id: {
								$oid: '61ae14599348190008b7cbf2',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61ae14599348190008b7cbea',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T13:47:05.508Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbeb',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.488Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbf3',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61ae14599348190008b7cbeb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.510Z',
							},
						},
						{
							_id: {
								$oid: '61ae14599348190008b7cbf4',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61ae14599348190008b7cbeb',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T13:47:05.510Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbec',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 3',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Washrooms',
					quantity: 3,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.489Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbf5',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61ae14599348190008b7cbec',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.511Z',
							},
						},
						{
							_id: {
								$oid: '61ae14599348190008b7cbf6',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61ae14599348190008b7cbec',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T13:47:05.511Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbed',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.489Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbf7',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 0,
							height: 6,
							inventory: {
								$oid: '61ae14599348190008b7cbed',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.513Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbee',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Assembly Hall',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Assembly Hall',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.489Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbf8',
							},
							name: 'Stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61ae14599348190008b7cbee',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T13:47:05.514Z',
							},
						},
						{
							_id: {
								$oid: '61ae14599348190008b7cbf9',
							},
							name: 'Walls',
							units: 'feet',
							length: 3,
							breadth: 0,
							height: 3,
							inventory: {
								$oid: '61ae14599348190008b7cbee',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.515Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbef',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.490Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbfb',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61ae14599348190008b7cbef',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-06T13:47:05.520Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae14599348190008b7cbf0',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: 'Wall 1',
					customName: null,
					images: [],
					school: {
						$oid: '61ae14599348190008b7cbdc',
					},
					parentName: 'Wall',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T13:47:05.490Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae14599348190008b7cbfa',
							},
							name: 'Wall',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61ae14599348190008b7cbf0',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T13:47:05.517Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:06.454Z',
		},
	},
	{
		_id: {
			$oid: '61ae1beb9348190008b7cc0f',
		},
		contract: {
			_id: {
				$oid: '61ae1bea9348190008b7cbfe',
			},
			schoolName: 'BCG ',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'Chakala, Andheri east ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-06T14:19:22.472Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [
				{
					_id: {
						$oid: '61ae1bea9348190008b7cc03',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61ae1bea9348190008b7cbfe',
					},
					createdOn: {
						$date: '2021-12-06T14:19:22.603Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc07',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ae1bea9348190008b7cc03',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-06T14:19:22.611Z',
							},
						},
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc08',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ae1bea9348190008b7cc03',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-06T14:19:22.612Z',
							},
						},
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc0a',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ae1bea9348190008b7cc03',
							},
							isSelected: false,
							images: [],
							length: 4,
							breadth: 4,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T14:19:22.612Z',
							},
						},
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc0b',
							},
							name: 'walls ',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ae1bea9348190008b7cc03',
							},
							isSelected: false,
							images: [],
							length: 6,
							breadth: 6,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T14:19:22.612Z',
							},
						},
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc09',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ae1bea9348190008b7cc03',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-06T14:19:22.612Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61ae1bea9348190008b7cc04',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'nb1',
					images: [],
					school: {
						$oid: '61ae1bea9348190008b7cbfe',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T14:19:22.604Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc0c',
							},
							name: 'Board',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61ae1bea9348190008b7cc04',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T14:19:22.614Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae1bea9348190008b7cc05',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 2',
					customName: 'nb2',
					images: [],
					school: {
						$oid: '61ae1bea9348190008b7cbfe',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T14:19:22.604Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc0d',
							},
							name: 'Board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61ae1bea9348190008b7cc05',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T14:19:22.615Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ae1bea9348190008b7cc06',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'U1',
					images: ['1638799891976-mortalkombat.jpg'],
					school: {
						$oid: '61ae1bea9348190008b7cbfe',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-06T14:19:22.607Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ae1bea9348190008b7cc0e',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 4,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61ae1bea9348190008b7cc06',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-06T14:19:22.616Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:23.659Z',
		},
	},
	{
		_id: {
			$oid: '61af083a9348190008b7cc2a',
		},
		contract: {
			_id: {
				$oid: '61af08399348190008b7cc16',
			},
			schoolName: 'Monarch High School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Rain Bazaar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-07T07:07:37.226Z',
			},
			registeredUnder: 'Telengana Education act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61af08399348190008b7cc24',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'NB1',
					images: ['1638860694078-adorable adorable.JPG'],
					school: {
						$oid: '61af08399348190008b7cc16',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:07:37.363Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af08399348190008b7cc29',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61af08399348190008b7cc24',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:07:37.369Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af08399348190008b7cc25',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 2',
					customName: 'nb 2',
					images: ['1638860721281-adorable adorable.JPG'],
					school: {
						$oid: '61af08399348190008b7cc16',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:07:37.363Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af08399348190008b7cc27',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61af08399348190008b7cc25',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:07:37.368Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af08399348190008b7cc26',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'SG1',
					images: ['1638860750833-adorable adorable.JPG'],
					school: {
						$oid: '61af08399348190008b7cc16',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:07:37.363Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af08399348190008b7cc28',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61af08399348190008b7cc26',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:07:37.368Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:38.682Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4f9348190008b7cc41',
		},
		contract: {
			_id: {
				$oid: '61af0c4e9348190008b7cc31',
			},
			schoolName: 'Brisbane the school ',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'attapur',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-07T07:25:02.292Z',
			},
			registeredUnder: 'Telengana Education Act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61af0c4e9348190008b7cc3d',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'Nb1',
					images: ['1638861824276-adorable adorable.JPG'],
					school: {
						$oid: '61af0c4e9348190008b7cc31',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:25:02.421Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af0c4e9348190008b7cc3f',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61af0c4e9348190008b7cc3d',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:25:02.426Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af0c4e9348190008b7cc3e',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'SG1',
					images: ['1638861854749-adorable adorable.JPG'],
					school: {
						$oid: '61af0c4e9348190008b7cc31',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:25:02.421Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af0c4e9348190008b7cc40',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61af0c4e9348190008b7cc3e',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:25:02.427Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:03.525Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc69',
		},
		contract: {
			_id: {
				$oid: '61af12f49348190008b7cc43',
			},
			schoolName: 'Abrahim Model School',
			state: 'Telangana',
			city: 'hyderabad',
			address: 'Kishan Bagh',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-07T07:53:24.069Z',
			},
			registeredUnder: 'Telengana Education Act 1982',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61af12f49348190008b7cc51',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 2',
					customName: 'wc2',
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.253Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc5a',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc51',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.264Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc52',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: 'w1',
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.253Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc5b',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc52',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.265Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc5c',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc52',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.265Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc53',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: null,
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc5d',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc53',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.268Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc5e',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc53',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.268Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc54',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 3',
					customName: null,
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc5f',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc54',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.268Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc60',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc54',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.269Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc55',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 4',
					customName: null,
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc61',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc55',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.269Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc62',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc55',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.269Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc56',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 5',
					customName: null,
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc63',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc56',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.270Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc64',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc56',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.270Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc57',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 6',
					customName: 'w6',
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Washrooms',
					quantity: 6,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc65',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc57',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.270Z',
							},
						},
						{
							_id: {
								$oid: '61af12f49348190008b7cc66',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc57',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T07:53:24.270Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc58',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'sg1',
					images: [],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc67',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc58',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.271Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af12f49348190008b7cc59',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'wc1',
					images: ['1638863276786-adorable adorable.JPG'],
					school: {
						$oid: '61af12f49348190008b7cc43',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T07:53:24.257Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af12f49348190008b7cc68',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61af12f49348190008b7cc59',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T07:53:24.272Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.910Z',
		},
	},
	{
		_id: {
			$oid: '61af3b819348190008b7cc9a',
		},
		contract: {
			_id: {
				$oid: '61af3b809348190008b7cc80',
			},
			schoolName: 'Eeman The School',
			state: 'Telangana',
			city: 'rangareddy',
			address: 'Attapur',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-07T10:46:24.255Z',
			},
			registeredUnder: 'other',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61af3b809348190008b7cc8c',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: 'Girls ',
					images: ['1638873643098-SBM SR Background.jpg'],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.440Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc98',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61af3b809348190008b7cc8c',
							},
							quantity: 6,
							createdOn: {
								$date: '2021-12-07T10:46:24.453Z',
							},
						},
						{
							_id: {
								$oid: '61af3b809348190008b7cc99',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af3b809348190008b7cc8c',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T10:46:24.453Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af3b809348190008b7cc8d',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: 'Boys',
					images: ['1638873678820-SBM SR Background.jpg'],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.442Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc92',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61af3b809348190008b7cc8d',
							},
							quantity: 6,
							createdOn: {
								$date: '2021-12-07T10:46:24.448Z',
							},
						},
						{
							_id: {
								$oid: '61af3b809348190008b7cc93',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61af3b809348190008b7cc8d',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-07T10:46:24.449Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af3b809348190008b7cc8e',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'Hallway',
					images: [
						'1638873737574-Screenshot (4).png',
						'1638873794047-WhatsApp Image 2021-11-30 at 3.20.44 PM.jpeg',
					],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.442Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc94',
							},
							name: 'Board',
							units: 'inches',
							length: 6,
							breadth: 0,
							height: 6,
							inventory: {
								$oid: '61af3b809348190008b7cc8e',
							},
							quantity: 4,
							createdOn: {
								$date: '2021-12-07T10:46:24.451Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af3b809348190008b7cc8f',
					},
					type: 'outdoor',
					_checked: true,
					name: 'Sports Ground 1',
					customName: null,
					images: ['1638873883376-Top lighting.jpeg'],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'Sports Ground',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.442Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc95',
							},
							name: 'Walls',
							units: 'feet',
							length: 4,
							breadth: 0,
							height: 4,
							inventory: {
								$oid: '61af3b809348190008b7cc8f',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T10:46:24.452Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af3b809348190008b7cc90',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'Main entrance',
					images: ['1638873901909-pre new 2.jpg'],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.443Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc96',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61af3b809348190008b7cc90',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T10:46:24.452Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61af3b809348190008b7cc91',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: 'Lift 1',
					customName: 'Student lift',
					images: ['1638873957844-registration.jpg'],
					school: {
						$oid: '61af3b809348190008b7cc80',
					},
					parentName: 'Lift',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-07T10:46:24.443Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61af3b809348190008b7cc97',
							},
							name: 'Lift',
							units: 'feet',
							length: 8,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61af3b809348190008b7cc91',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-07T10:46:24.453Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:25.526Z',
		},
	},
	{
		_id: {
			$oid: '61b0ad1d9348190008b7ccc5',
		},
		contract: {
			_id: {
				$oid: '61b0ad1c9348190008b7ccaf',
			},
			schoolName: 'RD school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'nikol',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-08T13:03:24.234Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb1',
					},
					name: 'Sports Day',
					venue: ['Canteen'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					createdOn: {
						$date: '2021-12-08T13:03:24.365Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccbb',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb1',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'inches',
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.377Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccbc',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb1',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.378Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccbd',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb1',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.378Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccbe',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb1',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.378Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb2',
					},
					name: "Children's Day",
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					createdOn: {
						$date: '2021-12-08T13:03:24.365Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccb7',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb2',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-08T13:03:24.376Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccb8',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb2',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-08T13:03:24.376Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccb9',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb2',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-08T13:03:24.376Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccba',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b0ad1c9348190008b7ccb2',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-08T13:03:24.376Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb3',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: null,
					images: [],
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-08T13:03:24.369Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccbf',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb3',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.381Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb6',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Bus 1',
					customName: null,
					images: [
						'1638959406299-class1.jfif',
						'1638959406516-class2.jfif',
						'1638959406698-class4.png',
						'1638959406905-classs3.jfif',
					],
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					parentName: 'School Bus',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-08T13:03:24.373Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccc0',
							},
							name: 'Seat Covers',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb6',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.382Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb4',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [
						'1638959324986-class1.jfif',
						'1638959325153-class2.jfif',
						'1638959325315-class4.png',
						'1638959325486-classs3.jfif',
					],
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-08T13:03:24.373Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccc1',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb4',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.382Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b0ad1c9348190008b7ccb5',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Room 1',
					customName: null,
					images: [
						'1638959384692-class1.jfif',
						'1638959384897-class2.jfif',
						'1638959385087-class4.png',
						'1638959385275-classs3.jfif',
					],
					school: {
						$oid: '61b0ad1c9348190008b7ccaf',
					},
					parentName: 'Staff Room',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-08T13:03:24.373Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccc2',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb5',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.383Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccc3',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb5',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.383Z',
							},
						},
						{
							_id: {
								$oid: '61b0ad1c9348190008b7ccc4',
							},
							name: 'Lockers',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b0ad1c9348190008b7ccb5',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-08T13:03:24.383Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61b0ad1c9348190008b7ccaf',
		},
		createdOn: {
			$date: '2021-12-08T13:03:25.770Z',
		},
	},
	{
		_id: {
			$oid: '61b18cbf9348190008b7ccd3',
		},
		contract: {
			_id: {
				$oid: '61b18cbe9348190008b7ccc8',
			},
			schoolName: 'School of Rock ',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: '7 Bunglows',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-09T04:57:34.018Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [
				{
					_id: {
						$oid: '61b18cbe9348190008b7ccca',
					},
					name: "Children's Day",
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61b18cbe9348190008b7ccc8',
					},
					createdOn: {
						$date: '2021-12-09T04:57:34.166Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b18cbe9348190008b7cccc',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b18cbe9348190008b7ccca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-09T04:57:34.171Z',
							},
						},
						{
							_id: {
								$oid: '61b18cbe9348190008b7cccd',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b18cbe9348190008b7ccca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-09T04:57:34.172Z',
							},
						},
						{
							_id: {
								$oid: '61b18cbe9348190008b7ccce',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b18cbe9348190008b7ccca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-09T04:57:34.172Z',
							},
						},
						{
							_id: {
								$oid: '61b18cbe9348190008b7cccf',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b18cbe9348190008b7ccca',
							},
							isSelected: false,
							images: [],
							length: 5,
							breadth: 5,
							height: 0,
							units: 'inches',
							quantity: 1,
							createdOn: {
								$date: '2021-12-09T04:57:34.172Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61b18cbe9348190008b7cccb',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'C1',
					images: ['1639025680878-mortalkombat.jpg'],
					school: {
						$oid: '61b18cbe9348190008b7ccc8',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-09T04:57:34.169Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b18cbe9348190008b7ccd0',
							},
							name: 'Boards',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61b18cbe9348190008b7cccb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-09T04:57:34.176Z',
							},
						},
						{
							_id: {
								$oid: '61b18cbe9348190008b7ccd1',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61b18cbe9348190008b7cccb',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-09T04:57:34.176Z',
							},
						},
						{
							_id: {
								$oid: '61b18cbe9348190008b7ccd2',
							},
							name: 'Benches',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61b18cbe9348190008b7cccb',
							},
							quantity: 0,
							createdOn: {
								$date: '2021-12-09T04:57:34.177Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61b18cbe9348190008b7ccc8',
		},
		createdOn: {
			$date: '2021-12-09T04:57:35.401Z',
		},
	},
	{
		_id: {
			$oid: '61b33cfe9348190008b7ccf7',
		},
		contract: {
			_id: {
				$oid: '61b33cfd9348190008b7cce6',
			},
			schoolName: 'RD school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'nikol',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-10T11:41:49.150Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [
				{
					_id: {
						$oid: '61b33cfd9348190008b7cce8',
					},
					name: 'Sports Day',
					venue: ['Auditorium', 'Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61b33cfd9348190008b7cce6',
					},
					createdOn: {
						$date: '2021-12-10T11:41:49.286Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b33cfd9348190008b7cced',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b33cfd9348190008b7cce8',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.291Z',
							},
						},
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccee',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b33cfd9348190008b7cce8',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.292Z',
							},
						},
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf0',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b33cfd9348190008b7cce8',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.292Z',
							},
						},
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccef',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b33cfd9348190008b7cce8',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.292Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61b33cfd9348190008b7cce9',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '61b33cfd9348190008b7cce6',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-10T11:41:49.287Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf1',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7cce9',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.293Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b33cfd9348190008b7ccea',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: null,
					images: [],
					school: {
						$oid: '61b33cfd9348190008b7cce6',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-10T11:41:49.287Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf2',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7ccea',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.294Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b33cfd9348190008b7cceb',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Room 1',
					customName: null,
					images: [],
					school: {
						$oid: '61b33cfd9348190008b7cce6',
					},
					parentName: 'Staff Room',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-10T11:41:49.287Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf3',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7cceb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.295Z',
							},
						},
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf4',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7cceb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.295Z',
							},
						},
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf5',
							},
							name: 'Lockers',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7cceb',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.296Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b33cfd9348190008b7ccec',
					},
					type: 'outdoor',
					_checked: true,
					name: 'Sports Ground 1',
					customName: null,
					images: [],
					school: {
						$oid: '61b33cfd9348190008b7cce6',
					},
					parentName: 'Sports Ground',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-10T11:41:49.288Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b33cfd9348190008b7ccf6',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b33cfd9348190008b7ccec',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-10T11:41:49.297Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61b33cfd9348190008b7cce6',
		},
		createdOn: {
			$date: '2021-12-10T11:41:50.591Z',
		},
	},
	{
		_id: {
			$oid: '61b6e6bd9348190008b7ccfe',
		},
		contract: {
			_id: {
				$oid: '61b6e6bc9348190008b7ccfc',
			},
			schoolName: 'Army School',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'nikol',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-13T06:22:52.335Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			activities: [],
			inventories: [],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61b6e6bc9348190008b7ccfc',
		},
		createdOn: {
			$date: '2021-12-13T06:22:53.508Z',
		},
	},
	{
		_id: {
			$oid: '61b84ca19348190008b7cd1b',
		},
		contract: {
			_id: {
				$oid: '61b84c9f9348190008b7cd09',
			},
			schoolName: 'abcd schools ',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'lower parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-14T07:49:51.741Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			activities: [
				{
					_id: {
						$oid: '61b84ca09348190008b7cd0e',
					},
					name: 'Annual Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61b84c9f9348190008b7cd09',
					},
					createdOn: {
						$date: '2021-12-14T07:49:51.998Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b84ca09348190008b7cd12',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61b84ca09348190008b7cd0e',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-14T07:49:52.009Z',
							},
						},
						{
							_id: {
								$oid: '61b84ca09348190008b7cd13',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b84ca09348190008b7cd0e',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-14T07:49:52.010Z',
							},
						},
						{
							_id: {
								$oid: '61b84ca09348190008b7cd14',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b84ca09348190008b7cd0e',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-14T07:49:52.010Z',
							},
						},
						{
							_id: {
								$oid: '61b84ca09348190008b7cd15',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61b84ca09348190008b7cd0e',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-14T07:49:52.010Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61b84ca09348190008b7cd0f',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: '1',
					images: [],
					school: {
						$oid: '61b84c9f9348190008b7cd09',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-14T07:49:51.999Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b84ca09348190008b7cd16',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b84ca09348190008b7cd0f',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-14T07:49:52.011Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b84ca09348190008b7cd10',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'bench 1',
					customName: 'grd floor',
					images: ['1639468038837-adorable adorable.JPG'],
					school: {
						$oid: '61b84c9f9348190008b7cd09',
					},
					parentName: 'bench',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-14T07:49:52.004Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b84ca09348190008b7cd17',
							},
							name: 'bench',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '61b84ca09348190008b7cd10',
							},
							quantity: 30,
							createdOn: {
								$date: '2021-12-14T07:49:52.012Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61b84ca09348190008b7cd11',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Computer Lab 1',
					customName: '1',
					images: ['1639468108790-adorable adorable.JPG'],
					school: {
						$oid: '61b84c9f9348190008b7cd09',
					},
					parentName: 'Computer Lab',
					quantity: 1,
					status: 'Available',
					createdOn: {
						$date: '2021-12-14T07:49:52.004Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61b84ca09348190008b7cd18',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b84ca09348190008b7cd11',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-14T07:49:52.012Z',
							},
						},
						{
							_id: {
								$oid: '61b84ca09348190008b7cd1a',
							},
							name: 'Screens',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b84ca09348190008b7cd11',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-14T07:49:52.012Z',
							},
						},
						{
							_id: {
								$oid: '61b84ca09348190008b7cd19',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61b84ca09348190008b7cd11',
							},
							quantity: 1,
							createdOn: {
								$date: '2021-12-14T07:49:52.012Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:53.421Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd7696d7b00086218aa',
		},
		contract: {
			_id: {
				$oid: '61bdcbd6696d7b000862189a',
			},
			schoolName: 'Vaibhav Chaturvedi',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'Noida ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-18T11:53:58.016Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '201301',
			activities: [
				{
					_id: {
						$oid: '61bdcbd6696d7b000862189f',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61bdcbd6696d7b000862189a',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-18T11:53:58.271Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a3',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61bdcbd6696d7b000862189f',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-18T11:53:58.302Z',
							},
						},
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a4',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61bdcbd6696d7b000862189f',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-18T11:53:58.303Z',
							},
						},
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a5',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61bdcbd6696d7b000862189f',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-18T11:53:58.303Z',
							},
						},
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a6',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61bdcbd6696d7b000862189f',
							},
							isSelected: false,
							images: ['1639828395997-adorable adorable.JPG'],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-18T11:53:58.303Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61bdcbd6696d7b00086218a0',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'girls ',
					images: ['1639828224826-adorable adorable.JPG'],
					school: {
						$oid: '61bdcbd6696d7b000862189a',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-18T11:53:58.293Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a7',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61bdcbd6696d7b00086218a0',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2021-12-18T11:53:58.305Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61bdcbd6696d7b00086218a1',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'ground floor',
					images: ['1639828279108-adorable adorable.JPG'],
					school: {
						$oid: '61bdcbd6696d7b000862189a',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-18T11:53:58.293Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a8',
							},
							name: 'Board',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61bdcbd6696d7b00086218a1',
							},
							quantity: 10,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2021-12-18T11:53:58.320Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61bdcbd6696d7b00086218a2',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'Lodhi Road entry',
					images: ['1639828329637-adorable adorable.JPG'],
					school: {
						$oid: '61bdcbd6696d7b000862189a',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-18T11:53:58.293Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61bdcbd6696d7b00086218a9',
							},
							name: 'Gate',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '61bdcbd6696d7b00086218a2',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2021-12-18T11:53:58.321Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:59.398Z',
		},
	},
	{
		_id: {
			$oid: '61c031d1dc06bd00082d9a82',
		},
		contract: {
			_id: {
				$oid: '61c031cfdc06bd00082d9a6e',
			},
			schoolName: 'Talwar Schools',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'noida ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-20T07:33:35.782Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '201301',
			activities: [
				{
					_id: {
						$oid: '61c031cfdc06bd00082d9a74',
					},
					name: 'Annual Day',
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61c031cfdc06bd00082d9a6e',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-20T07:33:35.927Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a79',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c031cfdc06bd00082d9a74',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2021-12-20T07:33:35.944Z',
							},
						},
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7b',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c031cfdc06bd00082d9a74',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 2,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-20T07:33:35.944Z',
							},
						},
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7a',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c031cfdc06bd00082d9a74',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2021-12-20T07:33:35.944Z',
							},
						},
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7c',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c031cfdc06bd00082d9a74',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2021-12-20T07:33:35.945Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c031cfdc06bd00082d9a75',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'girls ',
					images: [],
					school: {
						$oid: '61c031cfdc06bd00082d9a6e',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-20T07:33:35.932Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7d',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61c031cfdc06bd00082d9a75',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2021-12-20T07:33:35.947Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c031cfdc06bd00082d9a76',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'ground floor',
					images: [],
					school: {
						$oid: '61c031cfdc06bd00082d9a6e',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a3',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-20T07:33:35.932Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7e',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61c031cfdc06bd00082d9a76',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a3',
							},
							inventoryMasterAttrSlug: 'watercooler_cover',
							createdOn: {
								$date: '2021-12-20T07:33:35.949Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c031cfdc06bd00082d9a78',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: 'second floor',
					images: [],
					school: {
						$oid: '61c031cfdc06bd00082d9a6e',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-20T07:33:35.932Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a7f',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61c031cfdc06bd00082d9a78',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2021-12-20T07:33:35.950Z',
							},
						},
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a80',
							},
							name: 'Walls',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c031cfdc06bd00082d9a78',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2021-12-20T07:33:35.950Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c031cfdc06bd00082d9a77',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 2',
					customName: 'first floor',
					images: [],
					school: {
						$oid: '61c031cfdc06bd00082d9a6e',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a3',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-20T07:33:35.932Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c031cfdc06bd00082d9a81',
							},
							name: 'Cover',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61c031cfdc06bd00082d9a77',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a3',
							},
							inventoryMasterAttrSlug: 'watercooler_cover',
							createdOn: {
								$date: '2021-12-20T07:33:35.951Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:37.461Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6fdc06bd00082d9ab9',
		},
		contract: {
			_id: {
				$oid: '61c16c6edc06bd00082d9a96',
			},
			schoolName: 'Podar International school Test',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'Santacruz east',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-21T05:55:58.741Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			pincode: '400054',
			activities: [
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa4',
					},
					name: 'Dental Health Week',
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.897Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9aab',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c16c6edc06bd00082d9aa4',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-21T05:55:58.915Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9aac',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c16c6edc06bd00082d9aa4',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-21T05:55:58.915Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9aad',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c16c6edc06bd00082d9aa4',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-21T05:55:58.916Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9aae',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c16c6edc06bd00082d9aa4',
							},
							isSelected: false,
							images: ['1640066071081-download.jpg'],
							length: 6,
							breadth: 6,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-21T05:55:58.916Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa5',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'school bag',
					images: ['1640065167172-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.905Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9aaf',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa5',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2021-12-21T05:55:58.919Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa6',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: 'girls washroom',
					images: ['1640065234369-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a4',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.905Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab0',
							},
							name: 'Doors',
							units: 'feet',
							length: 4,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa6',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_doors',
							createdOn: {
								$date: '2021-12-21T05:55:58.919Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab1',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa6',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_mirrors',
							createdOn: {
								$date: '2021-12-21T05:55:58.920Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa7',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: 'girls washroom',
					images: ['1640065295655-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a4',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.905Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab2',
							},
							name: 'Doors',
							units: 'feet',
							length: 3,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa7',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_doors',
							createdOn: {
								$date: '2021-12-21T05:55:58.921Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab3',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa7',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_mirrors',
							createdOn: {
								$date: '2021-12-21T05:55:58.921Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa8',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Computer Lab 1',
					customName: 'computer wall',
					images: ['1640065487434-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'Computer Lab',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05aa',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.906Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab4',
							},
							name: 'Walls',
							units: 'feet',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa8',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05aa',
							},
							inventoryMasterAttrSlug: 'computerlab_walls',
							createdOn: {
								$date: '2021-12-21T05:55:58.922Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab5',
							},
							name: 'Doors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa8',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05aa',
							},
							inventoryMasterAttrSlug: 'computerlab_doors',
							createdOn: {
								$date: '2021-12-21T05:55:58.922Z',
							},
						},
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab6',
							},
							name: 'Screens',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa8',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05aa',
							},
							inventoryMasterAttrSlug: 'computerlab_screens',
							createdOn: {
								$date: '2021-12-21T05:55:58.922Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aa9',
					},
					type: 'outdoor',
					_checked: true,
					name: 'Sports Ground 1',
					customName: 'Back drop wings',
					images: ['1640065630265-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'Sports Ground',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a8',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.906Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab8',
							},
							name: 'Walls',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aa9',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a8',
							},
							inventoryMasterAttrSlug: 'sportsground_walls',
							createdOn: {
								$date: '2021-12-21T05:55:58.927Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c16c6edc06bd00082d9aaa',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: 'stage backdrop wings 1',
					customName: 'Stage back drop wings',
					images: ['1640065810147-download.jpg'],
					school: {
						$oid: '61c16c6edc06bd00082d9a96',
					},
					parentName: 'stage backdrop wings',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-21T05:55:58.906Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c16c6edc06bd00082d9ab7',
							},
							name: 'stage backdrop wings',
							units: 'feet',
							length: 5,
							breadth: 0,
							height: 3,
							inventory: {
								$oid: '61c16c6edc06bd00082d9aaa',
							},
							quantity: 2,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-21T05:55:58.924Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:59.967Z',
		},
	},
	{
		_id: {
			$oid: '61c2b3bc0481c40008d47cb5',
		},
		contract: {
			_id: {
				$oid: '61c2b3bb0481c40008d47ca8',
			},
			schoolName: 'AVB school ',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: 'JB nagar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-22T05:12:27.047Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400059',
			activities: [
				{
					_id: {
						$oid: '61c2b3bb0481c40008d47caa',
					},
					name: "Children's Day",
					venue: ['Auditorium'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61c2b3bb0481c40008d47ca8',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T05:12:27.254Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cad',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c2b3bb0481c40008d47caa',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 10,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-22T05:12:27.266Z',
							},
						},
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cae',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c2b3bb0481c40008d47caa',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-22T05:12:27.267Z',
							},
						},
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47caf',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c2b3bb0481c40008d47caa',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-22T05:12:27.267Z',
							},
						},
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cb0',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c2b3bb0481c40008d47caa',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-22T05:12:27.267Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c2b3bb0481c40008d47cac',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c2b3bb0481c40008d47ca8',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T05:12:27.259Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cb4',
							},
							name: 'Board',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61c2b3bb0481c40008d47cac',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2021-12-22T05:12:27.276Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c2b3bb0481c40008d47cab',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c2b3bb0481c40008d47ca8',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T05:12:27.259Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cb1',
							},
							name: 'Boards',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61c2b3bb0481c40008d47cab',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2021-12-22T05:12:27.271Z',
							},
						},
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cb2',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61c2b3bb0481c40008d47cab',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2021-12-22T05:12:27.273Z',
							},
						},
						{
							_id: {
								$oid: '61c2b3bb0481c40008d47cb3',
							},
							name: 'Benches',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61c2b3bb0481c40008d47cab',
							},
							quantity: 15,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2021-12-22T05:12:27.274Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c2b3bb0481c40008d47ca8',
		},
		createdOn: {
			$date: '2021-12-22T05:12:28.629Z',
		},
	},
	{
		_id: {
			$oid: '61c2c7d60481c40008d47ccf',
		},
		contract: {
			_id: {
				$oid: '61c2c7d50481c40008d47cca',
			},
			schoolName: 'Dummy school name ',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-22T06:38:13.313Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '400012',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61c2c7d50481c40008d47ccd',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'physical training ',
					images: ['1640154358874-adorable adorable.JPG'],
					school: {
						$oid: '61c2c7d50481c40008d47cca',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T06:38:13.499Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c2c7d50481c40008d47cce',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61c2c7d50481c40008d47ccd',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2021-12-22T06:38:13.504Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c2c7d50481c40008d47cca',
		},
		createdOn: {
			$date: '2021-12-22T06:38:14.523Z',
		},
	},
	{
		_id: {
			$oid: '61c301007b2e40000800fb63',
		},
		contract: {
			_id: {
				$oid: '61c300ff7b2e40000800fb45',
			},
			schoolName: 'Dev user school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'Bhakti circle',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-22T10:42:07.691Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb50',
					},
					name: 'Parent Teacher Meetings',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.874Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb56',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c300ff7b2e40000800fb50',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-22T10:42:07.889Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb51',
					},
					name: 'Christmas',
					venue: ['Sports Ground', 'Other'],
					otherVenueList: ['Terrace'],
					custom: true,
					months: ['Apr', 'Mar', 'Feb'],
					availableForBranding: true,
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.875Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb57',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61c300ff7b2e40000800fb51',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'inches',
							quantity: 1,
							createdOn: {
								$date: '2021-12-22T10:42:07.890Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb58',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c300ff7b2e40000800fb51',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-22T10:42:07.890Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb59',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c300ff7b2e40000800fb51',
							},
							isSelected: false,
							images: ['1640169626126-Screenshot_11.png'],
							length: 10,
							breadth: 10,
							height: 10,
							units: 'inches',
							quantity: 1,
							createdOn: {
								$date: '2021-12-22T10:42:07.890Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb52',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.879Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5a',
							},
							name: 'Boards',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c300ff7b2e40000800fb52',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2021-12-22T10:42:07.892Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5b',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '61c300ff7b2e40000800fb52',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2021-12-22T10:42:07.892Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5c',
							},
							name: 'Benches',
							units: 'inches',
							length: 3,
							breadth: 3,
							height: 3,
							inventory: {
								$oid: '61c300ff7b2e40000800fb52',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2021-12-22T10:42:07.893Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb53',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Assembly Hall 2',
					customName: null,
					images: [],
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					parentName: 'Assembly Hall',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a6',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.880Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5e',
							},
							name: 'Walls',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '61c300ff7b2e40000800fb53',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_walls',
							createdOn: {
								$date: '2021-12-22T10:42:07.894Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5d',
							},
							name: 'Stage',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c300ff7b2e40000800fb53',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_stage',
							createdOn: {
								$date: '2021-12-22T10:42:07.893Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb54',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Bus 2',
					customName: 'School Bus Inventory',
					images: [],
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					parentName: 'School Bus',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ad',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.880Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb5f',
							},
							name: 'Seat Covers',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 25,
							inventory: {
								$oid: '61c300ff7b2e40000800fb54',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ad',
							},
							inventoryMasterAttrSlug: 'schoolbus_seatcovers',
							createdOn: {
								$date: '2021-12-22T10:42:07.897Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c300ff7b2e40000800fb55',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Assembly Hall 1',
					customName: null,
					images: [
						'1640169430089-Screenshot_1.png',
						'1640169438652-Screenshot_2.png',
						'1640169439149-Screenshot_3.png',
						'1640169439754-Screenshot_4.png',
						'1640169440250-Screenshot_5.png',
						'1640169441005-Screenshot_6.png',
						'1640169441521-Screenshot_7.png',
						'1640169442035-Screenshot_8.png',
						'1640169442567-Screenshot_9.png',
					],
					school: {
						$oid: '61c300ff7b2e40000800fb45',
					},
					parentName: 'Assembly Hall',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a6',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-22T10:42:07.884Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb60',
							},
							name: 'Stage',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 10,
							inventory: {
								$oid: '61c300ff7b2e40000800fb55',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_stage',
							createdOn: {
								$date: '2021-12-22T10:42:07.899Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb61',
							},
							name: 'Walls',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 12,
							inventory: {
								$oid: '61c300ff7b2e40000800fb55',
							},
							quantity: 10,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_walls',
							createdOn: {
								$date: '2021-12-22T10:42:07.899Z',
							},
						},
						{
							_id: {
								$oid: '61c300ff7b2e40000800fb62',
							},
							name: 'Floor',
							_isCustom: true,
							units: 'feet',
							length: 10,
							breadth: 20,
							height: 0,
							inventory: {
								$oid: '61c300ff7b2e40000800fb55',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-22T10:42:07.899Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:08.777Z',
		},
	},
	{
		_id: {
			$oid: '61c468159a97b900085caab3',
		},
		contract: {
			_id: {
				$oid: '61c468149a97b900085caaa1',
			},
			schoolName: 'RD school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'test',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-23T12:14:12.520Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61c468149a97b900085caaa3',
					},
					name: 'test',
					venue: ['Other'],
					otherVenueList: [
						'rtrereyreyreyreyreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
						'htht657654745754754',
						'^&%^&%^&^%&567',
						'^*&*^&*678',
					],
					custom: true,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.660Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caaac',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c468149a97b900085caaa3',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:14:12.681Z',
							},
						},
						{
							_id: {
								$oid: '61c468149a97b900085caaad',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c468149a97b900085caaa3',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:14:12.681Z',
							},
						},
						{
							_id: {
								$oid: '61c468149a97b900085caaae',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c468149a97b900085caaa3',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:14:12.681Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c468149a97b900085caaa5',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Auditorium 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					parentName: 'Auditorium',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a7',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.666Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caaaa',
							},
							name: 'Stage',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa5',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_stage',
							createdOn: {
								$date: '2021-12-23T12:14:12.678Z',
							},
						},
						{
							_id: {
								$oid: '61c468149a97b900085caaab',
							},
							name: 'Screens',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa5',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_screen',
							createdOn: {
								$date: '2021-12-23T12:14:12.679Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c468149a97b900085caaa4',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.666Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caaa9',
							},
							name: 'Bag Face',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa4',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2021-12-23T12:14:12.677Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c468149a97b900085caaa8',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: '5J 2',
					customName: null,
					images: [],
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					parentName: '5J',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.667Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caaaf',
							},
							name: '5J',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa8',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:14:12.683Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c468149a97b900085caaa7',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: '5J 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					parentName: '5J',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.667Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caab0',
							},
							name: '5J',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa7',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:14:12.684Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c468149a97b900085caaa6',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c468149a97b900085caaa1',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:14:12.666Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c468149a97b900085caab1',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa6',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2021-12-23T12:14:12.685Z',
							},
						},
						{
							_id: {
								$oid: '61c468149a97b900085caab2',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c468149a97b900085caaa6',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2021-12-23T12:14:12.685Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c468149a97b900085caaa1',
		},
		createdOn: {
			$date: '2021-12-23T12:14:13.756Z',
		},
	},
	{
		_id: {
			$oid: '61c4686c9a97b900085caad5',
		},
		contract: {
			_id: {
				$oid: '61c4686b9a97b900085caab4',
			},
			schoolName: 'RDschool',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'test',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-23T12:15:39.131Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61c4686b9a97b900085caab6',
					},
					name: 'Independence Day Celebration',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.258Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caac4',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab6',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-23T12:15:39.268Z',
							},
						},
						{
							_id: {
								$oid: '61c4686b9a97b900085caac3',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab6',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-23T12:15:39.268Z',
							},
						},
						{
							_id: {
								$oid: '61c4686b9a97b900085caac5',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab6',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-23T12:15:39.268Z',
							},
						},
						{
							_id: {
								$oid: '61c4686b9a97b900085caac6',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab6',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-23T12:15:39.269Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caab7',
					},
					name: 'test',
					venue: [],
					otherVenueList: [],
					custom: true,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.258Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caac7',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab7',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:15:39.269Z',
							},
						},
						{
							_id: {
								$oid: '61c4686b9a97b900085caac8',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab7',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:15:39.270Z',
							},
						},
						{
							_id: {
								$oid: '61c4686b9a97b900085caac9',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c4686b9a97b900085caab7',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-23T12:15:39.270Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c4686b9a97b900085caab9',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 2',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.260Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caaca',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caab9',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2021-12-23T12:15:39.271Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caab8',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.259Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caacb',
							},
							name: 'Bag Face',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caab8',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2021-12-23T12:15:39.272Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caaba',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.260Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caacc',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caaba',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.273Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caabb',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'test 2',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.260Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caacd',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caabb',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.274Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caabc',
					},
					type: 'commonArea',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.260Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caace',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caabc',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.275Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caabd',
					},
					type: 'commonArea',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.261Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caad3',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caabd',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.280Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caabe',
					},
					type: 'otherRooms&Staff',
					_custom: true,
					_checked: true,
					name: 'test 2',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.261Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caad4',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caabe',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.284Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caabf',
					},
					type: 'otherRooms&Staff',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.261Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caacf',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caabf',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.276Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caac0',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [
						'1640238442348-class4.png',
						'1640238447066-class4.png',
						'1640238460076-class1.jfif',
						'1640238460223-classs3.jfif',
					],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.264Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caad0',
							},
							name: 'test',
							units: 'feet',
							length: 11,
							breadth: 11,
							height: 11,
							inventory: {
								$oid: '61c4686b9a97b900085caac0',
							},
							quantity: 11,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.277Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caac1',
					},
					type: 'otherRooms&Staff',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [
						'1640243288081-class1.jfif',
						'1640243288283-class2.jfif',
						'1640243288447-class4.png',
						'1640243288605-classs3.jfif',
					],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.264Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caad1',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caac1',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.277Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c4686b9a97b900085caac2',
					},
					type: 'outdoor',
					_custom: true,
					_checked: true,
					name: 'test 1',
					customName: null,
					images: [
						'1640250506201-class4.png',
						'1640250513018-class1.jfif',
						'1640250513528-class4.png',
						'1640250513990-classs3.jfif',
					],
					school: {
						$oid: '61c4686b9a97b900085caab4',
					},
					parentName: 'test',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2021-12-23T12:15:39.265Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c4686b9a97b900085caad2',
							},
							name: 'test',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c4686b9a97b900085caac2',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2021-12-23T12:15:39.278Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c4686b9a97b900085caab4',
		},
		createdOn: {
			$date: '2021-12-23T12:15:40.163Z',
		},
	},
	{
		_id: {
			$oid: '61c9bce81f64a40009fb9679',
		},
		contract: {
			_id: {
				$oid: '61c9bce61f64a40009fb9669',
			},
			schoolName: 'Delhi Public School',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'lower parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-27T13:17:26.718Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '400018',
			activities: [
				{
					_id: {
						$oid: '61c9bce61f64a40009fb966c',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb', 'May'],
					availableForBranding: true,
					school: {
						$oid: '61c9bce61f64a40009fb9669',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-27T13:17:26.919Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9670',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c9bce61f64a40009fb966c',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 0,
							height: 10,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-27T13:17:26.943Z',
							},
						},
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9671',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c9bce61f64a40009fb966c',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-27T13:17:26.945Z',
							},
						},
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9672',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c9bce61f64a40009fb966c',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-27T13:17:26.945Z',
							},
						},
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9673',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61c9bce61f64a40009fb966c',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2021-12-27T13:17:26.945Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61c9bce61f64a40009fb966d',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'ground floor ',
					images: ['1640610617727-adorable adorable.JPG'],
					school: {
						$oid: '61c9bce61f64a40009fb9669',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-27T13:17:26.929Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9674',
							},
							name: 'Boards',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 2,
							inventory: {
								$oid: '61c9bce61f64a40009fb966d',
							},
							quantity: 10,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2021-12-27T13:17:26.951Z',
							},
						},
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9675',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 2,
							breadth: 3,
							height: 2,
							inventory: {
								$oid: '61c9bce61f64a40009fb966d',
							},
							quantity: 20,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2021-12-27T13:17:26.952Z',
							},
						},
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9676',
							},
							name: 'Benches',
							units: 'inches',
							length: 3,
							breadth: 3,
							height: 2,
							inventory: {
								$oid: '61c9bce61f64a40009fb966d',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2021-12-27T13:17:26.952Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c9bce61f64a40009fb966e',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'first floor ',
					images: ['1640610724732-adorable adorable.JPG'],
					school: {
						$oid: '61c9bce61f64a40009fb9669',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-27T13:17:26.929Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9677',
							},
							name: 'Board',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 2,
							inventory: {
								$oid: '61c9bce61f64a40009fb966e',
							},
							quantity: 20,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2021-12-27T13:17:26.957Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61c9bce61f64a40009fb966f',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 2',
					customName: 'first floor ',
					images: ['1640610776436-adorable adorable.JPG'],
					school: {
						$oid: '61c9bce61f64a40009fb9669',
					},
					parentName: 'Notice Board',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-27T13:17:26.929Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61c9bce61f64a40009fb9678',
							},
							name: 'Board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61c9bce61f64a40009fb966f',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2021-12-27T13:17:26.958Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61c9bce61f64a40009fb9669',
		},
		createdOn: {
			$date: '2021-12-27T13:17:28.280Z',
		},
	},
	{
		_id: {
			$oid: '61cbf3661f64a40009fb9697',
		},
		contract: {
			_id: {
				$oid: '61cbf3641f64a40009fb9686',
			},
			schoolName: 'Devpublic school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'fgr',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2021-12-29T05:34:28.722Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61cbf3641f64a40009fb9688',
					},
					name: 'test',
					venue: ['Canteen'],
					otherVenueList: [],
					custom: true,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61cbf3641f64a40009fb9686',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2021-12-29T05:34:28.937Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61cbf3641f64a40009fb968d',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61cbf3641f64a40009fb9688',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-29T05:34:28.966Z',
							},
						},
						{
							_id: {
								$oid: '61cbf3641f64a40009fb968e',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61cbf3641f64a40009fb9688',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-29T05:34:28.969Z',
							},
						},
						{
							_id: {
								$oid: '61cbf3641f64a40009fb968f',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61cbf3641f64a40009fb9688',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2021-12-29T05:34:28.969Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61cbf3641f64a40009fb9689',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: null,
					images: [],
					school: {
						$oid: '61cbf3641f64a40009fb9686',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-29T05:34:28.948Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9693',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb9689',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2021-12-29T05:34:28.978Z',
							},
						},
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9694',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb9689',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2021-12-29T05:34:28.978Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61cbf3641f64a40009fb968a',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 2',
					customName: null,
					images: [],
					school: {
						$oid: '61cbf3641f64a40009fb9686',
					},
					parentName: 'School Gate',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-29T05:34:28.948Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9695',
							},
							name: 'Gate',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb968a',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2021-12-29T05:34:28.982Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61cbf3641f64a40009fb968b',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Room 1',
					customName: null,
					images: [
						'1640752579980-NumberOfTeachers1.png',
						'1640752590838-ValidationMessageBoardName.png',
					],
					school: {
						$oid: '61cbf3641f64a40009fb9686',
					},
					parentName: 'Staff Room',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a5',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-29T05:34:28.960Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9690',
							},
							name: 'Doors',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb968b',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_doors',
							createdOn: {
								$date: '2021-12-29T05:34:28.973Z',
							},
						},
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9691',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb968b',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_walls',
							createdOn: {
								$date: '2021-12-29T05:34:28.974Z',
							},
						},
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9692',
							},
							name: 'Lockers',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb968b',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_lockers',
							createdOn: {
								$date: '2021-12-29T05:34:28.974Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61cbf3641f64a40009fb968c',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: ['1640753801103-PlaceholderNameIssueInStateCity.png'],
					school: {
						$oid: '61cbf3641f64a40009fb9686',
					},
					parentName: 'School Gate',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2021-12-29T05:34:28.960Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61cbf3641f64a40009fb9696',
							},
							name: 'Gate',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61cbf3641f64a40009fb968c',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2021-12-29T05:34:28.988Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61cbf3641f64a40009fb9686',
		},
		createdOn: {
			$date: '2021-12-29T05:34:30.311Z',
		},
	},
	{
		_id: {
			$oid: '61d293fbf28ea900097c607d',
		},
		contract: {
			_id: {
				$oid: '61d293f9f28ea900097c606d',
			},
			schoolName: 'Dev IIT school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'Nikol',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-03T06:13:13.615Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61d293f9f28ea900097c6071',
					},
					name: 'Annual Day',
					venue: ['Canteen'],
					otherVenueList: [],
					custom: false,
					months: ['Apr'],
					availableForBranding: true,
					school: {
						$oid: '61d293f9f28ea900097c606d',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T06:13:13.742Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d293f9f28ea900097c6074',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d293f9f28ea900097c6071',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 0,
							height: 10,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-03T06:13:13.761Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c6075',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61d293f9f28ea900097c6071',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 0,
							height: 10,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-03T06:13:13.761Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c6076',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d293f9f28ea900097c6071',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T06:13:13.762Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c6077',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d293f9f28ea900097c6071',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T06:13:13.762Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61d293f9f28ea900097c6072',
					},
					type: 'commonArea',
					_custom: true,
					_checked: true,
					name: 'Playground 1',
					customName: null,
					images: [],
					school: {
						$oid: '61d293f9f28ea900097c606d',
					},
					parentName: 'Playground',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T06:13:13.747Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d293f9f28ea900097c6078',
							},
							name: 'Playground',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 10,
							inventory: {
								$oid: '61d293f9f28ea900097c6072',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2022-01-03T06:13:13.766Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c6079',
							},
							name: 'Small Ground',
							_isCustom: true,
							units: 'feet',
							length: 10,
							breadth: 0,
							height: 10,
							inventory: {
								$oid: '61d293f9f28ea900097c6072',
							},
							quantity: 1,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2022-01-03T06:13:13.766Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d293f9f28ea900097c6073',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: null,
					images: [
						'1641190129775-Screenshot_1.png',
						'1641190129989-Screenshot_2.png',
						'1641190130173-Screenshot_3.png',
						'1641190130360-Screenshot_39.png',
					],
					school: {
						$oid: '61d293f9f28ea900097c606d',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T06:13:13.750Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d293f9f28ea900097c607a',
							},
							name: 'Boards',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61d293f9f28ea900097c6073',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-03T06:13:13.767Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c607b',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61d293f9f28ea900097c6073',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-03T06:13:13.768Z',
							},
						},
						{
							_id: {
								$oid: '61d293f9f28ea900097c607c',
							},
							name: 'Benches',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61d293f9f28ea900097c6073',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-03T06:13:13.768Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61d293f9f28ea900097c606d',
		},
		createdOn: {
			$date: '2022-01-03T06:13:15.114Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccada1c66a00095cc859',
		},
		contract: {
			_id: {
				$oid: '61d2ccaca1c66a00095cc83d',
			},
			schoolName: 'Ninad Tech high school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-03T10:15:08.016Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400012',
			activities: [
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc840',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.154Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc846',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61d2ccaca1c66a00095cc840',
							},
							isSelected: false,
							images: [],
							length: 6,
							breadth: 6,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-03T10:15:08.175Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc847',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc840',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2022-01-03T10:15:08.175Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc848',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc840',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2022-01-03T10:15:08.175Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc849',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61d2ccaca1c66a00095cc840',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 10,
							height: 0,
							units: 'inches',
							quantity: 5,
							createdOn: {
								$date: '2022-01-03T10:15:08.175Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc841',
					},
					name: 'School Fest',
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.154Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84a',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc841',
							},
							isSelected: false,
							images: [],
							length: 5,
							breadth: 5,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-03T10:15:08.177Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84b',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc841',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T10:15:08.177Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84c',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc841',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T10:15:08.178Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84d',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc841',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T10:15:08.178Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc842',
					},
					name: 'Teachers Day',
					venue: ['Auditorium'],
					otherVenueList: [],
					custom: true,
					months: ['Sep'],
					availableForBranding: true,
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.154Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84e',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc842',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T10:15:08.179Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc84f',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61d2ccaca1c66a00095cc842',
							},
							isSelected: false,
							images: [],
							length: 6,
							breadth: 6,
							height: 0,
							units: 'feet',
							quantity: 2,
							createdOn: {
								$date: '2022-01-03T10:15:08.180Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc850',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d2ccaca1c66a00095cc842',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-03T10:15:08.180Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc843',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 2',
					customName: 'C2',
					images: [],
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.159Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc851',
							},
							name: 'Boards',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc843',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-03T10:15:08.182Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc852',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc843',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-03T10:15:08.182Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc853',
							},
							name: 'Benches',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc843',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-03T10:15:08.183Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc844',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'C1',
					images: ['1641203973098-mortalkombat.jpg'],
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.167Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc854',
							},
							name: 'Boards',
							units: 'inches',
							length: 4,
							breadth: 0,
							height: 4,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc844',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-03T10:15:08.184Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc855',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc844',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-03T10:15:08.185Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc856',
							},
							name: 'Benches',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc844',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-03T10:15:08.185Z',
							},
						},
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc857',
							},
							name: 'Wall',
							_isCustom: true,
							units: 'feet',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc844',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2022-01-03T10:15:08.185Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d2ccaca1c66a00095cc845',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'SG1',
					images: ['1641204329060-mortalkombat.jpg'],
					school: {
						$oid: '61d2ccaca1c66a00095cc83d',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-03T10:15:08.167Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d2ccaca1c66a00095cc858',
							},
							name: 'Gate',
							units: 'feet',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61d2ccaca1c66a00095cc845',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2022-01-03T10:15:08.186Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:09.020Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee03a1c66a00095cc8b7',
		},
		contract: {
			_id: {
				$oid: '61d3ee02a1c66a00095cc898',
			},
			schoolName: 'Ninad modern school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Ambedkar road',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-04T06:49:38.422Z',
			},
			registeredUnder: 'ABC act',
			pincode: '400012',
			activities: [
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc89c',
					},
					name: 'School Fest',
					venue: ['Auditorium', 'Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.545Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8a5',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89c',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T06:49:38.558Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8a6',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89c',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 0,
							units: 'feet',
							quantity: 2,
							createdOn: {
								$date: '2022-01-04T06:49:38.559Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8a7',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89c',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T06:49:38.559Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8a8',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89c',
							},
							isSelected: false,
							images: [],
							length: 10,
							breadth: 10,
							height: 0,
							units: 'inches',
							quantity: 5,
							createdOn: {
								$date: '2022-01-04T06:49:38.559Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc89d',
					},
					name: 'Republic Day Celebration',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.545Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8ab',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89d',
							},
							isSelected: false,
							images: [],
							length: 3,
							breadth: 3,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T06:49:38.562Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8ac',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89d',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-04T06:49:38.562Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8ad',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89d',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-04T06:49:38.562Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8ae',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89d',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-04T06:49:38.563Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8af',
							},
							name: 'Badges',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d3ee02a1c66a00095cc89d',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 0,
							units: 'inches',
							quantity: 250,
							createdOn: {
								$date: '2022-01-04T06:49:38.563Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc89f',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'Uf1',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.550Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b0',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc89f',
							},
							quantity: 250,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-01-04T06:49:38.566Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc8a1',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 2',
					customName: 'washroom',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a4',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.550Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b1',
							},
							name: 'Doors',
							units: 'inches',
							length: 10,
							breadth: 10,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a1',
							},
							quantity: 4,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_doors',
							createdOn: {
								$date: '2022-01-04T06:49:38.567Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b2',
							},
							name: 'Mirrors',
							units: 'inches',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a1',
							},
							quantity: 6,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_mirrors',
							createdOn: {
								$date: '2022-01-04T06:49:38.567Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc89e',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'SB1',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.550Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b3',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc89e',
							},
							quantity: 250,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-04T06:49:38.568Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc8a0',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: 'washroom boys',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'Washrooms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a4',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.550Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b4',
							},
							name: 'Doors',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a0',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_doors',
							createdOn: {
								$date: '2022-01-04T06:49:38.569Z',
							},
						},
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b5',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a0',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_mirrors',
							createdOn: {
								$date: '2022-01-04T06:49:38.569Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc8a3',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 3',
					customName: 'W coolers 3',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a3',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.551Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8a9',
							},
							name: 'Cover',
							units: 'inches',
							length: 10,
							breadth: 10,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a3',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a3',
							},
							inventoryMasterAttrSlug: 'watercooler_cover',
							createdOn: {
								$date: '2022-01-04T06:49:38.561Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc8a2',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'Water coolers 1',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'Water Coolers',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a3',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.551Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8b6',
							},
							name: 'Cover',
							units: 'inches',
							length: 10,
							breadth: 10,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a2',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a3',
							},
							inventoryMasterAttrSlug: 'watercooler_cover',
							createdOn: {
								$date: '2022-01-04T06:49:38.570Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d3ee02a1c66a00095cc8a4',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'Front gate',
					images: [],
					school: {
						$oid: '61d3ee02a1c66a00095cc898',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T06:49:38.551Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d3ee02a1c66a00095cc8aa',
							},
							name: 'Gate',
							units: 'feet',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61d3ee02a1c66a00095cc8a4',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2022-01-04T06:49:38.561Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:39.837Z',
		},
	},
	{
		_id: {
			$oid: '61d45e6aa1c66a00095cc933',
		},
		contract: {
			_id: {
				$oid: '61d45e68a1c66a00095cc91c',
			},
			schoolName: 'dummy school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Lower parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-04T14:49:12.957Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			pincode: '400018',
			activities: [
				{
					_id: {
						$oid: '61d45e69a1c66a00095cc921',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb', 'Aug'],
					availableForBranding: true,
					school: {
						$oid: '61d45e68a1c66a00095cc91c',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T14:49:13.104Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92b',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc921',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.119Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92c',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc921',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.119Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92d',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc921',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: {
								$numberDouble: 'NaN',
							},
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.119Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92e',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc921',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.119Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d45e69a1c66a00095cc922',
					},
					name: 'Teachers picnic',
					venue: ['Canteen'],
					otherVenueList: [],
					custom: true,
					months: ['Mar'],
					availableForBranding: true,
					school: {
						$oid: '61d45e68a1c66a00095cc91c',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T14:49:13.104Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92f',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc922',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.120Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc930',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc922',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.120Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc931',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61d45e69a1c66a00095cc922',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-04T14:49:13.120Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61d45e69a1c66a00095cc924',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Auditorium 1',
					customName: 'ground floor',
					images: ['1641307467783-adorable adorable.JPG'],
					school: {
						$oid: '61d45e68a1c66a00095cc91c',
					},
					parentName: 'Auditorium',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a7',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T14:49:13.112Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc927',
							},
							name: 'Screens',
							units: 'inches',
							length: 4,
							breadth: 0,
							height: 4,
							inventory: {
								$oid: '61d45e69a1c66a00095cc924',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_screen',
							createdOn: {
								$date: '2022-01-04T14:49:13.116Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc928',
							},
							name: 'seats',
							_isCustom: true,
							units: 'feet',
							length: 1,
							breadth: 0,
							height: 1,
							inventory: {
								$oid: '61d45e69a1c66a00095cc924',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2022-01-04T14:49:13.116Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc926',
							},
							name: 'Stage',
							units: 'feet',
							length: 6,
							breadth: 4,
							height: 4,
							inventory: {
								$oid: '61d45e69a1c66a00095cc924',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_stage',
							createdOn: {
								$date: '2022-01-04T14:49:13.115Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d45e69a1c66a00095cc925',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Auditorium 2',
					customName: 'third floor',
					images: ['1641307561538-adorable adorable.JPG'],
					school: {
						$oid: '61d45e68a1c66a00095cc91c',
					},
					parentName: 'Auditorium',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a7',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T14:49:13.112Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc929',
							},
							name: 'Stage',
							units: 'feet',
							length: 6,
							breadth: 4,
							height: 4,
							inventory: {
								$oid: '61d45e69a1c66a00095cc925',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_stage',
							createdOn: {
								$date: '2022-01-04T14:49:13.117Z',
							},
						},
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc92a',
							},
							name: 'Screens',
							units: 'inches',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61d45e69a1c66a00095cc925',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a7',
							},
							inventoryMasterAttrSlug: 'auditorium_screen',
							createdOn: {
								$date: '2022-01-04T14:49:13.118Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61d45e69a1c66a00095cc923',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'Primary section',
					images: ['1641307380844-adorable adorable.JPG'],
					school: {
						$oid: '61d45e68a1c66a00095cc91c',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-04T14:49:13.112Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61d45e69a1c66a00095cc932',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61d45e69a1c66a00095cc923',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-04T14:49:13.121Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:14.244Z',
		},
	},
	{
		_id: {
			$oid: '61dd61799899370009c5b9c3',
		},
		contract: {
			_id: {
				$oid: '61dd61789899370009c5b9b2',
			},
			schoolName: 'waridhi international school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'dadar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-11T10:52:40.516Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400028',
			activities: [
				{
					_id: {
						$oid: '61dd61789899370009c5b9b5',
					},
					name: 'teachers picnic',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: true,
					months: ['Mar', 'Jan'],
					availableForBranding: true,
					school: {
						$oid: '61dd61789899370009c5b9b2',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T10:52:40.661Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dd61789899370009c5b9ba',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dd61789899370009c5b9b5',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 0,
							units: 'inches',
							quantity: 50,
							createdOn: {
								$date: '2022-01-11T10:52:40.672Z',
							},
						},
						{
							_id: {
								$oid: '61dd61789899370009c5b9bb',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61dd61789899370009c5b9b5',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'inches',
							quantity: 1,
							createdOn: {
								$date: '2022-01-11T10:52:40.673Z',
							},
						},
						{
							_id: {
								$oid: '61dd61789899370009c5b9bd',
							},
							name: 'food boxes',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dd61789899370009c5b9b5',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 11,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-11T10:52:40.673Z',
							},
						},
						{
							_id: {
								$oid: '61dd61789899370009c5b9bc',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dd61789899370009c5b9b5',
							},
							isSelected: false,
							images: [],
							length: 0,
							breadth: 0,
							height: 0,
							units: 'feet',
							quantity: 0,
							createdOn: {
								$date: '2022-01-11T10:52:40.673Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61dd61789899370009c5b9b6',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Assembly Hall 1',
					customName: 'ground floor',
					images: [],
					school: {
						$oid: '61dd61789899370009c5b9b2',
					},
					parentName: 'Assembly Hall',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a6',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T10:52:40.665Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dd61789899370009c5b9bf',
							},
							name: 'Stage',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61dd61789899370009c5b9b6',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_stage',
							createdOn: {
								$date: '2022-01-11T10:52:40.675Z',
							},
						},
						{
							_id: {
								$oid: '61dd61789899370009c5b9c0',
							},
							name: 'Walls',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 4,
							inventory: {
								$oid: '61dd61789899370009c5b9b6',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a6',
							},
							inventoryMasterAttrSlug: 'assemblyhall_walls',
							createdOn: {
								$date: '2022-01-11T10:52:40.675Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dd61789899370009c5b9b7',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Uniforms 1',
					customName: null,
					images: [],
					school: {
						$oid: '61dd61789899370009c5b9b2',
					},
					parentName: 'Staff Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059f',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T10:52:40.665Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dd61789899370009c5b9be',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61dd61789899370009c5b9b7',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059f',
							},
							inventoryMasterAttrSlug: 'staffuniforms_sleeve',
							createdOn: {
								$date: '2022-01-11T10:52:40.674Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dd61789899370009c5b9b9',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'girls',
					images: ['1641898105882-adorable adorable.JPG'],
					school: {
						$oid: '61dd61789899370009c5b9b2',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T10:52:40.669Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dd61789899370009c5b9c1',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61dd61789899370009c5b9b9',
							},
							quantity: 1000,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-11T10:52:40.677Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dd61789899370009c5b9b8',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: 'main gate',
					images: [],
					school: {
						$oid: '61dd61789899370009c5b9b2',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T10:52:40.665Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dd61789899370009c5b9c2',
							},
							name: 'Gate',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61dd61789899370009c5b9b8',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2022-01-11T10:52:40.680Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61dd61789899370009c5b9b2',
		},
		createdOn: {
			$date: '2022-01-11T10:52:41.752Z',
		},
	},
	{
		_id: {
			$oid: '61dde4c19899370009c5b9e4',
		},
		contract: {
			_id: {
				$oid: '61dde4c09899370009c5b9c7',
			},
			schoolName: 'Ninad Mumbai test school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Mahadev palav marg',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-11T20:12:48.116Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '400012',
			activities: [
				{
					_id: {
						$oid: '61dde4c09899370009c5b9c9',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.258Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d0',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9c9',
							},
							isSelected: false,
							images: [],
							length: 4,
							breadth: 4,
							height: 0,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-11T20:12:48.267Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d1',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9c9',
							},
							isSelected: false,
							images: [],
							length: 4,
							breadth: 4,
							height: 0,
							units: 'feet',
							quantity: 2,
							createdOn: {
								$date: '2022-01-11T20:12:48.267Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d2',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9c9',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.267Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d3',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9c9',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.268Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dde4c09899370009c5b9ca',
					},
					name: "Children's Day",
					venue: ['Washrooms'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.258Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d4',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9ca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.269Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d5',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9ca',
							},
							isSelected: false,
							images: [],
							length: 3,
							breadth: 3,
							height: 0,
							units: 'feet',
							quantity: 5,
							createdOn: {
								$date: '2022-01-11T20:12:48.269Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d6',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9ca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.270Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d7',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9ca',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.270Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dde4c09899370009c5b9cb',
					},
					name: 'Republic Day Celebration',
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.259Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d8',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9cb',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.272Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9d9',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9cb',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.272Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9da',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dde4c09899370009c5b9cb',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-11T20:12:48.273Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9db',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61dde4c09899370009c5b9cb',
							},
							isSelected: false,
							images: [],
							length: 5,
							breadth: 5,
							height: 5,
							units: 'feet',
							quantity: 3,
							createdOn: {
								$date: '2022-01-11T20:12:48.273Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61dde4c09899370009c5b9cc',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'classroom 1',
					images: [],
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.261Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9dc',
							},
							name: 'Boards',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9cc',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-11T20:12:48.274Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9dd',
							},
							name: 'Cabinets',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9cc',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-11T20:12:48.274Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9de',
							},
							name: 'Benches',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61dde4c09899370009c5b9cc',
							},
							quantity: 40,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-11T20:12:48.274Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dde4c09899370009c5b9cd',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 2',
					customName: 'class 10',
					images: [],
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.262Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9df',
							},
							name: 'Boards',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9cd',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-11T20:12:48.275Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9e0',
							},
							name: 'Cabinets',
							units: 'inches',
							length: 3,
							breadth: 3,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9cd',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-11T20:12:48.276Z',
							},
						},
						{
							_id: {
								$oid: '61dde4c09899370009c5b9e1',
							},
							name: 'Benches',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61dde4c09899370009c5b9cd',
							},
							quantity: 40,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-11T20:12:48.276Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dde4c09899370009c5b9ce',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'full',
					images: [],
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.262Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9e2',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9ce',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-01-11T20:12:48.279Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61dde4c09899370009c5b9cf',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'nb',
					images: [],
					school: {
						$oid: '61dde4c09899370009c5b9c7',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-11T20:12:48.262Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dde4c09899370009c5b9e3',
							},
							name: 'Board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61dde4c09899370009c5b9cf',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2022-01-11T20:12:48.280Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61dde4c09899370009c5b9c7',
		},
		createdOn: {
			$date: '2022-01-11T20:12:49.679Z',
		},
	},
	{
		_id: {
			$oid: '61de67769899370009c5b9f8',
		},
		contract: {
			_id: {
				$oid: '61de67749899370009c5b9e7',
			},
			schoolName: 'Delhi public school dummy',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Lower parel ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-12T05:30:28.704Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400018',
			activities: [
				{
					_id: {
						$oid: '61de67749899370009c5b9ea',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb', 'Aug'],
					availableForBranding: true,
					school: {
						$oid: '61de67749899370009c5b9e7',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T05:30:28.963Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de67749899370009c5b9ed',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de67749899370009c5b9ea',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-12T05:30:28.970Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9ee',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de67749899370009c5b9ea',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-12T05:30:28.970Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9ef',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de67749899370009c5b9ea',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-12T05:30:28.970Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f0',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de67749899370009c5b9ea',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-12T05:30:28.971Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f1',
							},
							name: 'Trophy',
							isCustom: true,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de67749899370009c5b9ea',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-12T05:30:28.971Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61de67749899370009c5b9eb',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Canteen 1',
					customName: 'ground floor',
					images: [],
					school: {
						$oid: '61de67749899370009c5b9e7',
					},
					parentName: 'Canteen',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a2',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T05:30:28.964Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de67749899370009c5b9f2',
							},
							name: 'Walls',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61de67749899370009c5b9eb',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_walls',
							createdOn: {
								$date: '2022-01-12T05:30:28.975Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f3',
							},
							name: 'Menu',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61de67749899370009c5b9eb',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_menu',
							createdOn: {
								$date: '2022-01-12T05:30:28.975Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f4',
							},
							name: 'Trays',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61de67749899370009c5b9eb',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_trays',
							createdOn: {
								$date: '2022-01-12T05:30:28.976Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f5',
							},
							name: 'Tables',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61de67749899370009c5b9eb',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_tables',
							createdOn: {
								$date: '2022-01-12T05:30:28.976Z',
							},
						},
						{
							_id: {
								$oid: '61de67749899370009c5b9f6',
							},
							name: 'Chairs',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 11,
							inventory: {
								$oid: '61de67749899370009c5b9eb',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_chairs',
							createdOn: {
								$date: '2022-01-12T05:30:28.976Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61de67749899370009c5b9ec',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'boys bags',
					images: ['1641965230091-adorable adorable.JPG'],
					school: {
						$oid: '61de67749899370009c5b9e7',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T05:30:28.967Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de67749899370009c5b9f7',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61de67749899370009c5b9ec',
							},
							quantity: 1000,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-12T05:30:28.978Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61de67749899370009c5b9e7',
		},
		createdOn: {
			$date: '2022-01-12T05:30:30.067Z',
		},
	},
	{
		_id: {
			$oid: '61de7adc9899370009c5ba0f',
		},
		contract: {
			_id: {
				$oid: '61de7adb9899370009c5b9fc',
			},
			schoolName: 'Ninad Delhi school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Mahadev palav marg, currey road',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-12T06:53:15.245Z',
			},
			registeredUnder: 'Section 25 of Companies Act 1956',
			pincode: '400012',
			activities: [
				{
					_id: {
						$oid: '61de7adb9899370009c5b9ff',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61de7adb9899370009c5b9fc',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T06:53:15.565Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de7adb9899370009c5ba04',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5b9ff',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 0,
							units: 'feet',
							quantity: 2,
							createdOn: {
								$date: '2022-01-12T06:53:15.578Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba05',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5b9ff',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.578Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba06',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5b9ff',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.578Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba07',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5b9ff',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.578Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61de7adb9899370009c5ba00',
					},
					name: "Children's Day",
					venue: ['School Bus'],
					otherVenueList: [],
					custom: false,
					months: ['Nov'],
					availableForBranding: true,
					school: {
						$oid: '61de7adb9899370009c5b9fc',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T06:53:15.566Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de7adb9899370009c5ba08',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5ba00',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.581Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba0b',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61de7adb9899370009c5ba00',
							},
							isSelected: false,
							images: [],
							length: 2,
							breadth: 2,
							height: 0,
							units: 'feet',
							quantity: 20,
							createdOn: {
								$date: '2022-01-12T06:53:15.582Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba09',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5ba00',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.581Z',
							},
						},
						{
							_id: {
								$oid: '61de7adb9899370009c5ba0a',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61de7adb9899370009c5ba00',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-12T06:53:15.581Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61de7adb9899370009c5ba01',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'school bag prim',
					images: [],
					school: {
						$oid: '61de7adb9899370009c5b9fc',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T06:53:15.570Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de7adb9899370009c5ba0c',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61de7adb9899370009c5ba01',
							},
							quantity: 50,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-12T06:53:15.584Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61de7adb9899370009c5ba02',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 2',
					customName: 'school bag 2',
					images: [],
					school: {
						$oid: '61de7adb9899370009c5b9fc',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T06:53:15.570Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de7adb9899370009c5ba0d',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61de7adb9899370009c5ba02',
							},
							quantity: 60,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-12T06:53:15.585Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61de7adb9899370009c5ba03',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'school gate not',
					images: ['1641969664750-Screenshot (2).png'],
					school: {
						$oid: '61de7adb9899370009c5b9fc',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-12T06:53:15.574Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61de7adb9899370009c5ba0e',
							},
							name: 'Board',
							units: 'feet',
							length: 2,
							breadth: 20,
							height: 0,
							inventory: {
								$oid: '61de7adb9899370009c5ba03',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2022-01-12T06:53:15.586Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61de7adb9899370009c5b9fc',
		},
		createdOn: {
			$date: '2022-01-12T06:53:16.621Z',
		},
	},
	{
		_id: {
			$oid: '61dff0669899370009c5ba26',
		},
		contract: {
			_id: {
				$oid: '61dff0659899370009c5ba18',
			},
			schoolName: 'dummy delhi school',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'jalvayu vihar ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-13T09:27:01.128Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '201301',
			activities: [
				{
					_id: {
						$oid: '61dff0659899370009c5ba1b',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb', 'Jul'],
					availableForBranding: true,
					school: {
						$oid: '61dff0659899370009c5ba18',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-13T09:27:01.279Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dff0659899370009c5ba22',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dff0659899370009c5ba1b',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-13T09:27:01.295Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba23',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dff0659899370009c5ba1b',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-13T09:27:01.295Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba24',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dff0659899370009c5ba1b',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-13T09:27:01.295Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba25',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61dff0659899370009c5ba1b',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-13T09:27:01.295Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61dff0659899370009c5ba1c',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Canteen 1',
					customName: 'canteen girls',
					images: ['1642065861661-adorable adorable.JPG'],
					school: {
						$oid: '61dff0659899370009c5ba18',
					},
					parentName: 'Canteen',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a2',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-13T09:27:01.288Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61dff0659899370009c5ba1e',
							},
							name: 'Menu',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61dff0659899370009c5ba1c',
							},
							quantity: 1000,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_menu',
							createdOn: {
								$date: '2022-01-13T09:27:01.292Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba1d',
							},
							name: 'Walls',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 0,
							inventory: {
								$oid: '61dff0659899370009c5ba1c',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_walls',
							createdOn: {
								$date: '2022-01-13T09:27:01.292Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba20',
							},
							name: 'Tables',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61dff0659899370009c5ba1c',
							},
							quantity: 50,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_tables',
							createdOn: {
								$date: '2022-01-13T09:27:01.293Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba1f',
							},
							name: 'Trays',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61dff0659899370009c5ba1c',
							},
							quantity: 500,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_trays',
							createdOn: {
								$date: '2022-01-13T09:27:01.293Z',
							},
						},
						{
							_id: {
								$oid: '61dff0659899370009c5ba21',
							},
							name: 'Chairs',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 0,
							inventory: {
								$oid: '61dff0659899370009c5ba1c',
							},
							quantity: 1000,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a2',
							},
							inventoryMasterAttrSlug: 'canteen_chairs',
							createdOn: {
								$date: '2022-01-13T09:27:01.293Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61dff0659899370009c5ba18',
		},
		createdOn: {
			$date: '2022-01-13T09:27:02.584Z',
		},
	},
	{
		_id: {
			$oid: '61e1221e9899370009c5ba3e',
		},
		contract: {
			_id: {
				$oid: '61e1221c9899370009c5ba32',
			},
			schoolName: 'dummy delhi school',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'noida ',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-14T07:11:24.698Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '201301',
			activities: [
				{
					_id: {
						$oid: '61e1221c9899370009c5ba35',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Feb'],
					availableForBranding: true,
					school: {
						$oid: '61e1221c9899370009c5ba32',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-14T07:11:24.837Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61e1221c9899370009c5ba38',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61e1221c9899370009c5ba35',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-14T07:11:24.849Z',
							},
						},
						{
							_id: {
								$oid: '61e1221c9899370009c5ba39',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61e1221c9899370009c5ba35',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-14T07:11:24.849Z',
							},
						},
						{
							_id: {
								$oid: '61e1221c9899370009c5ba3a',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61e1221c9899370009c5ba35',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-14T07:11:24.849Z',
							},
						},
						{
							_id: {
								$oid: '61e1221c9899370009c5ba3b',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61e1221c9899370009c5ba35',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-14T07:11:24.850Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61e1221c9899370009c5ba36',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'girls',
					images: [],
					school: {
						$oid: '61e1221c9899370009c5ba32',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-14T07:11:24.841Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61e1221c9899370009c5ba3c',
							},
							name: 'Sleeve / Pocket',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61e1221c9899370009c5ba36',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-01-14T07:11:24.852Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61e1221c9899370009c5ba37',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'ground floor',
					images: [],
					school: {
						$oid: '61e1221c9899370009c5ba32',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-14T07:11:24.841Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61e1221c9899370009c5ba3d',
							},
							name: 'Board',
							units: 'feet',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61e1221c9899370009c5ba37',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2022-01-14T07:11:24.856Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61e1221c9899370009c5ba32',
		},
		createdOn: {
			$date: '2022-01-14T07:11:26.006Z',
		},
	},
	{
		_id: {
			$oid: '61ea4bc20d942700088bccbf',
		},
		contract: {
			_id: {
				$oid: '61ea4bc10d942700088bccb3',
			},
			schoolName: 'Dummy delhi school',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'sector 21',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-21T05:59:29.530Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '201301',
			activities: [
				{
					_id: {
						$oid: '61ea4bc10d942700088bccb6',
					},
					name: 'Sports Day',
					venue: ['Sports Ground'],
					otherVenueList: [],
					custom: false,
					months: ['Mar', 'Feb'],
					availableForBranding: true,
					school: {
						$oid: '61ea4bc10d942700088bccb3',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-21T05:59:29.700Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ea4bc10d942700088bccbd',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ea4bc10d942700088bccb6',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-21T05:59:29.713Z',
							},
						},
						{
							_id: {
								$oid: '61ea4bc10d942700088bccbb',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ea4bc10d942700088bccb6',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-21T05:59:29.712Z',
							},
						},
						{
							_id: {
								$oid: '61ea4bc10d942700088bccbe',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ea4bc10d942700088bccb6',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-21T05:59:29.713Z',
							},
						},
						{
							_id: {
								$oid: '61ea4bc10d942700088bccbc',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61ea4bc10d942700088bccb6',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-21T05:59:29.712Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61ea4bc10d942700088bccb7',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: 'ground floor',
					images: [],
					school: {
						$oid: '61ea4bc10d942700088bccb3',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-21T05:59:29.704Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ea4bc10d942700088bccb9',
							},
							name: 'Board',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61ea4bc10d942700088bccb7',
							},
							quantity: 10,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2022-01-21T05:59:29.710Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61ea4bc10d942700088bccb8',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'girls',
					images: ['1642744626845-Nissan Mood board-01.jpg'],
					school: {
						$oid: '61ea4bc10d942700088bccb3',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-21T05:59:29.708Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61ea4bc10d942700088bccba',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 1,
							breadth: 1,
							height: 1,
							inventory: {
								$oid: '61ea4bc10d942700088bccb8',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-21T05:59:29.711Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61ea4bc10d942700088bccb3',
		},
		createdOn: {
			$date: '2022-01-21T05:59:30.846Z',
		},
	},
	{
		_id: {
			$oid: '61eeb0c30d942700088bcce6',
		},
		contract: {
			_id: {
				$oid: '61eeb0c20d942700088bccdb',
			},
			schoolName: 'Ninad Mumbai test school dadar',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Mahadev palav marg',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-24T13:59:30.472Z',
			},
			registeredUnder: 'Societies Registration Act 1860',
			pincode: '400012',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61eeb0c20d942700088bccde',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'class 11',
					images: [],
					school: {
						$oid: '61eeb0c20d942700088bccdb',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-24T13:59:30.655Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce2',
							},
							name: 'Benches',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccde',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-24T13:59:30.666Z',
							},
						},
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce1',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccde',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-24T13:59:30.666Z',
							},
						},
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce0',
							},
							name: 'Boards',
							units: 'inches',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccde',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-24T13:59:30.665Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61eeb0c20d942700088bccdf',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 4',
					customName: 'class 12',
					images: [],
					school: {
						$oid: '61eeb0c20d942700088bccdb',
					},
					parentName: 'Classroom',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-24T13:59:30.656Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce4',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccdf',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-01-24T13:59:30.668Z',
							},
						},
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce3',
							},
							name: 'Boards',
							units: 'feet',
							length: 2,
							breadth: 2,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccdf',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-01-24T13:59:30.667Z',
							},
						},
						{
							_id: {
								$oid: '61eeb0c20d942700088bcce5',
							},
							name: 'Benches',
							units: 'feet',
							length: 4,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61eeb0c20d942700088bccdf',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-01-24T13:59:30.668Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61eeb0c20d942700088bccdb',
		},
		createdOn: {
			$date: '2022-01-24T13:59:31.077Z',
		},
	},
	{
		_id: {
			$oid: '61f2419eca22230008f778fe',
		},
		contract: {
			_id: {
				$oid: '61f2419dca22230008f778ea',
			},
			schoolName: 'New RD school',
			state: 'Gujarat',
			city: 'ahmedabad',
			address: 'nikol',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-27T06:54:21.281Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '382350',
			activities: [
				{
					_id: {
						$oid: '61f2419dca22230008f778f0',
					},
					name: 'Annual Day',
					venue: ['Auditorium'],
					otherVenueList: [],
					custom: false,
					months: ['Jan'],
					availableForBranding: true,
					school: {
						$oid: '61f2419dca22230008f778ea',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-27T06:54:21.578Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f2419dca22230008f778f6',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f2419dca22230008f778f0',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-27T06:54:21.592Z',
							},
						},
						{
							_id: {
								$oid: '61f2419dca22230008f778f7',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f2419dca22230008f778f0',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-27T06:54:21.592Z',
							},
						},
						{
							_id: {
								$oid: '61f2419dca22230008f778f8',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f2419dca22230008f778f0',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-27T06:54:21.593Z',
							},
						},
						{
							_id: {
								$oid: '61f2419dca22230008f778f9',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f2419dca22230008f778f0',
							},
							isSelected: false,
							images: [],
							length: 1,
							breadth: 1,
							height: 1,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-27T06:54:21.593Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61f2419dca22230008f778f1',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Hallway 1',
					customName: null,
					images: [],
					school: {
						$oid: '61f2419dca22230008f778ea',
					},
					parentName: 'Hallway',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ac',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-27T06:54:21.583Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f2419dca22230008f778f5',
							},
							name: 'Lockers',
							units: 'inches',
							length: 11,
							breadth: 11,
							height: 11,
							inventory: {
								$oid: '61f2419dca22230008f778f1',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ac',
							},
							inventoryMasterAttrSlug: 'hallway_lockers',
							createdOn: {
								$date: '2022-01-27T06:54:21.591Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f2419dca22230008f778f2',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: null,
					images: [],
					school: {
						$oid: '61f2419dca22230008f778ea',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-27T06:54:21.583Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f2419dca22230008f778fa',
							},
							name: 'Doors',
							units: 'feet',
							length: 11,
							breadth: 11,
							height: 11,
							inventory: {
								$oid: '61f2419dca22230008f778f2',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2022-01-27T06:54:21.594Z',
							},
						},
						{
							_id: {
								$oid: '61f2419dca22230008f778fb',
							},
							name: 'Walls',
							units: 'feet',
							length: 11,
							breadth: 11,
							height: 11,
							inventory: {
								$oid: '61f2419dca22230008f778f2',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2022-01-27T06:54:21.595Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f2419dca22230008f778f3',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '61f2419dca22230008f778ea',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-27T06:54:21.583Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f2419dca22230008f778fc',
							},
							name: 'Gate',
							units: 'feet',
							length: 11,
							breadth: 11111,
							height: 11,
							inventory: {
								$oid: '61f2419dca22230008f778f3',
							},
							quantity: 11,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2022-01-27T06:54:21.595Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f2419dca22230008f778f4',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: null,
					images: [
						'1643266219716-SchoolFeaturesDetailsInventories.png',
						'1643266220345-StandaredisNotDisplayed.png',
						'1643266220933-ValidationmessageNotDsipalyed.png',
					],
					school: {
						$oid: '61f2419dca22230008f778ea',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-27T06:54:21.587Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f2419dca22230008f778fd',
							},
							name: 'Bag Face',
							units: 'feet',
							length: 1,
							breadth: 10000,
							height: 1,
							inventory: {
								$oid: '61f2419dca22230008f778f4',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-01-27T06:54:21.596Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:22.856Z',
		},
	},
	{
		_id: {
			$oid: '61f4ffe1ca22230008f7794b',
		},
		contract: {
			_id: {
				$oid: '61f4ffe0ca22230008f77927',
			},
			schoolName: 'Dev, Greenwood International High School, Mumbai',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'dadar',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-01-29T08:50:40.382Z',
			},
			registeredUnder: 'Section 8 of Companies Act 2013',
			pincode: '400014',
			activities: [
				{
					_id: {
						$oid: '61f4ffe0ca22230008f77929',
					},
					name: 'Sports Day',
					venue: ['Notice Board'],
					otherVenueList: [],
					custom: false,
					months: ['Mar'],
					availableForBranding: true,
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.668Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77934',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f77929',
							},
							isSelected: false,
							images: [],
							length: 3,
							breadth: 1,
							height: 11,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-29T08:50:40.679Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77935',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f77929',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.679Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77936',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f77929',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.680Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77937',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f77929',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.680Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792a',
					},
					name: 'Annual Day',
					venue: ['Assembly Hall'],
					otherVenueList: [],
					custom: false,
					months: ['Mar'],
					availableForBranding: true,
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.668Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77938',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: true,
							activity: {
								$oid: '61f4ffe0ca22230008f7792a',
							},
							isSelected: false,
							images: [],
							length: 70,
							breadth: 1,
							height: 11,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-29T08:50:40.682Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77939',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792a',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.682Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793a',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792a',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.682Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793b',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792a',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.682Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792b',
					},
					name: 'School Fest',
					venue: ['Canteen'],
					otherVenueList: [],
					custom: false,
					months: ['May'],
					availableForBranding: true,
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					status: 'In Review',
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.668Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77946',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: true,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792b',
							},
							isSelected: false,
							images: [],
							length: 70,
							breadth: 4,
							height: 11,
							units: 'feet',
							quantity: 1,
							createdOn: {
								$date: '2022-01-29T08:50:40.690Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77947',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792b',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.690Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77948',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792b',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.690Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77949',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61f4ffe0ca22230008f7792b',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-01-29T08:50:40.690Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792c',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Science Lab 1',
					customName: null,
					images: [],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Science Lab',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a9',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.672Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793f',
							},
							name: 'Standees',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f7792c',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a9',
							},
							inventoryMasterAttrSlug: 'sciencelab_standees',
							createdOn: {
								$date: '2022-01-29T08:50:40.686Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77940',
							},
							name: 'Doors',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 3,
							inventory: {
								$oid: '61f4ffe0ca22230008f7792c',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a9',
							},
							inventoryMasterAttrSlug: 'sciencelab_doors',
							createdOn: {
								$date: '2022-01-29T08:50:40.686Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792e',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: 'red',
					images: ['1643445907334-Tank-gallery.jpg'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Uniforms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77941',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 2,
							breadth: 1,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f7792e',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-01-29T08:50:40.687Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f77930',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Notice Board 1',
					customName: null,
					images: ['1643445965370-gate 3.jpg'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Notice Board',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05b0',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77942',
							},
							name: 'Board',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 3,
							inventory: {
								$oid: '61f4ffe0ca22230008f77930',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05b0',
							},
							inventoryMasterAttrSlug: 'noticeboard_board',
							createdOn: {
								$date: '2022-01-29T08:50:40.687Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f77931',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Washrooms 1',
					customName: null,
					images: ['1643445959163-photo-1574285013029-29296a71930e.jfif'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Washrooms',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a4',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77943',
							},
							name: 'Doors',
							units: 'feet',
							length: 2,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f77931',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_doors',
							createdOn: {
								$date: '2022-01-29T08:50:40.687Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77944',
							},
							name: 'Mirrors',
							units: 'feet',
							length: 2,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f77931',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a4',
							},
							inventoryMasterAttrSlug: 'washroom_mirrors',
							createdOn: {
								$date: '2022-01-29T08:50:40.688Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792f',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Hallway 1',
					customName: null,
					images: ['1643445926604-lecture-hall.jpg'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Hallway',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ac',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f77945',
							},
							name: 'Lockers',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 3,
							inventory: {
								$oid: '61f4ffe0ca22230008f7792f',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ac',
							},
							inventoryMasterAttrSlug: 'hallway_lockers',
							createdOn: {
								$date: '2022-01-29T08:50:40.689Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f77932',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: 'board 3',
					images: ['1643445988632-cabinate 1.jpg'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793c',
							},
							name: 'Doors',
							units: 'feet',
							length: 3,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f77932',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2022-01-29T08:50:40.684Z',
							},
						},
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793d',
							},
							name: 'Walls',
							units: 'feet',
							length: 2,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f77932',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2022-01-29T08:50:40.684Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f7792d',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Gate 1',
					customName: null,
					images: [],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'School Gate',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05af',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.672Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7794a',
							},
							name: 'Gate',
							units: 'feet',
							length: 11,
							breadth: 4,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f7792d',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05af',
							},
							inventoryMasterAttrSlug: 'schoolgate_gate',
							createdOn: {
								$date: '2022-01-29T08:50:40.690Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61f4ffe0ca22230008f77933',
					},
					type: 'outdoor',
					_checked: true,
					name: 'School Bus 1',
					customName: null,
					images: ['1643446043460-gallery01.jpg'],
					school: {
						$oid: '61f4ffe0ca22230008f77927',
					},
					parentName: 'School Bus',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ad',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-01-29T08:50:40.676Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61f4ffe0ca22230008f7793e',
							},
							name: 'Seat Covers',
							units: 'feet',
							length: 3,
							breadth: 7,
							height: 2,
							inventory: {
								$oid: '61f4ffe0ca22230008f77933',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ad',
							},
							inventoryMasterAttrSlug: 'schoolbus_seatcovers',
							createdOn: {
								$date: '2022-01-29T08:50:40.685Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61f4ffe0ca22230008f77927',
		},
		createdOn: {
			$date: '2022-01-29T08:50:41.986Z',
		},
	},
	{
		_id: {
			$oid: '61fa2c9998f2b3000829f625',
		},
		contract: {
			_id: {
				$oid: '61fa2c9698f2b3000829f61a',
			},
			schoolName: 'Test- BCG high school',
			state: 'Maharashtra',
			city: 'mumbai suburban',
			address: '7 Bunglows',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-02-02T07:02:46.672Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400053',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61fa2c9798f2b3000829f61d',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: 'SB1',
					images: ['1643779558381-mortalkombat.jpg'],
					school: {
						$oid: '61fa2c9698f2b3000829f61a',
					},
					parentName: 'School Bags',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-02T07:02:47.065Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fa2c9798f2b3000829f620',
							},
							name: 'Bag Face',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61fa2c9798f2b3000829f61d',
							},
							quantity: 50,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-02-02T07:02:47.072Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fa2c9798f2b3000829f61e',
					},
					type: 'commonArea',
					_checked: true,
					name: 'Water Coolers 1',
					customName: 'WC1',
					images: ['1643781225350-mortalkombat.jpg'],
					school: {
						$oid: '61fa2c9698f2b3000829f61a',
					},
					parentName: 'Water Coolers',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a3',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-02T07:02:47.065Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fa2c9798f2b3000829f621',
							},
							name: 'Cover',
							units: 'inches',
							length: 4,
							breadth: 4,
							height: 0,
							inventory: {
								$oid: '61fa2c9798f2b3000829f61e',
							},
							quantity: 3,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a3',
							},
							inventoryMasterAttrSlug: 'watercooler_cover',
							createdOn: {
								$date: '2022-02-02T07:02:47.074Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fa2c9798f2b3000829f61f',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Room 1',
					customName: 'SR1',
					images: ['1643785268333-mortalkombat.jpg'],
					school: {
						$oid: '61fa2c9698f2b3000829f61a',
					},
					parentName: 'Staff Room',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a5',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-02T07:02:47.065Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fa2c9798f2b3000829f622',
							},
							name: 'Doors',
							units: 'inches',
							length: 5,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61fa2c9798f2b3000829f61f',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_doors',
							createdOn: {
								$date: '2022-02-02T07:02:47.076Z',
							},
						},
						{
							_id: {
								$oid: '61fa2c9798f2b3000829f623',
							},
							name: 'Walls',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61fa2c9798f2b3000829f61f',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_walls',
							createdOn: {
								$date: '2022-02-02T07:02:47.077Z',
							},
						},
						{
							_id: {
								$oid: '61fa2c9798f2b3000829f624',
							},
							name: 'Lockers',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61fa2c9798f2b3000829f61f',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_lockers',
							createdOn: {
								$date: '2022-02-02T07:02:47.078Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61fa2c9698f2b3000829f61a',
		},
		createdOn: {
			$date: '2022-02-02T07:02:49.267Z',
		},
	},
	{
		_id: {
			$oid: '61fa619198f2b3000829f65e',
		},
		contract: {
			_id: {
				$oid: '61fa619098f2b3000829f65b',
			},
			schoolName: 'vermaji schools',
			state: 'Uttar Pradesh',
			city: 'gautam buddha nagar',
			address: 'sector',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-02-02T10:48:47.940Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '201301',
			activities: [],
			inventories: [],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61fa619098f2b3000829f65b',
		},
		createdOn: {
			$date: '2022-02-02T10:48:49.143Z',
		},
	},
	{
		_id: {
			$oid: '61fb607a98f2b3000829f679',
		},
		contract: {
			_id: {
				$oid: '61fb607898f2b3000829f672',
			},
			schoolName: 'Test- RKF high school',
			state: 'Maharashtra',
			city: 'mumbai',
			address: 'Parel',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-02-03T04:56:24.756Z',
			},
			registeredUnder: 'Indian Trusts Act 1982',
			pincode: '400012',
			activities: [],
			inventories: [
				{
					_id: {
						$oid: '61fb607998f2b3000829f675',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: 'C1',
					images: ['1643864102284-mortalkombat.jpg'],
					school: {
						$oid: '61fb607898f2b3000829f672',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-03T04:56:25.121Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fb607998f2b3000829f676',
							},
							name: 'Boards',
							units: 'inches',
							length: 6,
							breadth: 6,
							height: 0,
							inventory: {
								$oid: '61fb607998f2b3000829f675',
							},
							quantity: 1,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-02-03T04:56:25.124Z',
							},
						},
						{
							_id: {
								$oid: '61fb607998f2b3000829f677',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61fb607998f2b3000829f675',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-02-03T04:56:25.124Z',
							},
						},
						{
							_id: {
								$oid: '61fb607998f2b3000829f678',
							},
							name: 'Benches',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61fb607998f2b3000829f675',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-02-03T04:56:25.125Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61fb607898f2b3000829f672',
		},
		createdOn: {
			$date: '2022-02-03T04:56:26.367Z',
		},
	},
	{
		_id: {
			$oid: '61fd1efa69f6fe0008a5cf39',
		},
		contract: {
			_id: {
				$oid: '61fd1ef869f6fe0008a5cf06',
			},
			schoolName: 'Orchids Internation School',
			state: 'Telangana',
			city: 'hyderabad',
			address:
				'Survey no: 369, Behind Saket Sriyam Towers, Ashok Manoj Nagar,  Kapra',
			termsAgreed: true,
			termsAgreedOn: {
				$date: '2022-02-04T12:41:28.367Z',
			},
			registeredUnder: 'Internation school',
			pincode: '500062',
			activities: [
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf16',
					},
					name: 'Annual Day',
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.705Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf21',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf16',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.721Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf22',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf16',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.721Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf23',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf16',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.721Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf24',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf16',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.722Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf17',
					},
					name: "Children's Day",
					venue: [],
					otherVenueList: [],
					custom: false,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.705Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf34',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf17',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.731Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf35',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf17',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.731Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf36',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf17',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.731Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf37',
							},
							name: 'Stalls',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf17',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.732Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf18',
					},
					name: 'Holi',
					venue: [],
					otherVenueList: [],
					custom: true,
					months: [],
					availableForBranding: false,
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					status: 'Unavailable',
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.706Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf25',
							},
							name: 'Stage Backdrop',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf18',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.723Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf26',
							},
							name: 'Stage Front',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf18',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.724Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf27',
							},
							name: 'Stage Wings',
							isCustom: false,
							availableForBranding: false,
							allowBrandsToProvide: false,
							activity: {
								$oid: '61fd1ef869f6fe0008a5cf18',
							},
							isSelected: false,
							images: [],
							length: {
								$numberDouble: 'NaN',
							},
							breadth: {
								$numberDouble: 'NaN',
							},
							height: {
								$numberDouble: 'NaN',
							},
							units: 'feet',
							quantity: {
								$numberDouble: 'NaN',
							},
							createdOn: {
								$date: '2022-02-04T12:41:28.724Z',
							},
						},
					],
				},
			],
			inventories: [
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf19',
					},
					type: 'classroom',
					_checked: true,
					name: 'Classroom 1',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Classroom',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ab',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.708Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf28',
							},
							name: 'Boards',
							units: 'inches',
							length: 5,
							breadth: 0,
							height: 5,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf19',
							},
							quantity: 550,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_boards',
							createdOn: {
								$date: '2022-02-04T12:41:28.725Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf29',
							},
							name: 'Cabinets',
							units: 'feet',
							length: 2,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf19',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_cabinets',
							createdOn: {
								$date: '2022-02-04T12:41:28.726Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2a',
							},
							name: 'Benches',
							units: 'feet',
							length: 5,
							breadth: 0,
							height: 2,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf19',
							},
							quantity: 10,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ab',
							},
							inventoryMasterAttrSlug: 'classroom_benches',
							createdOn: {
								$date: '2022-02-04T12:41:28.726Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1a',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 1',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2b',
							},
							name: 'Bag Face',
							units: 'feet',
							length: 10,
							breadth: 10,
							height: 0,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1a',
							},
							quantity: 2,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-02-04T12:41:28.727Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1b',
					},
					type: 'classroom',
					_checked: true,
					name: 'School Bags 2',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'School Bags',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a1',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2c',
							},
							name: 'Bag Face',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 0,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1b',
							},
							quantity: 0,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a1',
							},
							inventoryMasterAttrSlug: 'schoolbags_bagface',
							createdOn: {
								$date: '2022-02-04T12:41:28.728Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1c',
					},
					type: 'classroom',
					_custom: true,
					_checked: true,
					name: 'Benches 1',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Benches',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: null,
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2d',
							},
							name: 'Benches',
							units: 'inches',
							length: 10,
							breadth: 15,
							height: 0,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1c',
							},
							quantity: 5,
							inventoryMaster: null,
							inventoryMasterAttrSlug: null,
							createdOn: {
								$date: '2022-02-04T12:41:28.728Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1d',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 3',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Uniforms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2e',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 10,
							breadth: 20,
							height: 0,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1d',
							},
							quantity: 200,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-02-04T12:41:28.729Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1e',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Music Class 1',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Music Class',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05ae',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf2f',
							},
							name: 'Doors',
							units: 'feet',
							length: 40,
							breadth: 0,
							height: 40,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1e',
							},
							quantity: 50,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_doors',
							createdOn: {
								$date: '2022-02-04T12:41:28.729Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf30',
							},
							name: 'Walls',
							units: 'inches',
							length: 10,
							breadth: 10,
							height: 10,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1e',
							},
							quantity: 54,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05ae',
							},
							inventoryMasterAttrSlug: 'musicclass_walls',
							createdOn: {
								$date: '2022-02-04T12:41:28.729Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf1f',
					},
					type: 'otherRooms&Staff',
					_checked: true,
					name: 'Staff Room 1',
					customName: null,
					images: [],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Staff Room',
					quantity: 1,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a05a5',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.709Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf31',
							},
							name: 'Doors',
							units: 'feet',
							length: 0,
							breadth: 0,
							height: 10,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1f',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_doors',
							createdOn: {
								$date: '2022-02-04T12:41:28.730Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf32',
							},
							name: 'Walls',
							units: 'feet',
							length: 10,
							breadth: 0,
							height: 10,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1f',
							},
							quantity: 5,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_walls',
							createdOn: {
								$date: '2022-02-04T12:41:28.730Z',
							},
						},
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf33',
							},
							name: 'Lockers',
							units: 'inches',
							length: 100,
							breadth: 5,
							height: 0,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf1f',
							},
							quantity: 4,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a05a5',
							},
							inventoryMasterAttrSlug: 'staffroom_lockers',
							createdOn: {
								$date: '2022-02-04T12:41:28.730Z',
							},
						},
					],
				},
				{
					_id: {
						$oid: '61fd1ef869f6fe0008a5cf20',
					},
					type: 'classroom',
					_checked: true,
					name: 'Uniforms 1',
					customName: null,
					images: [
						'1643978361966-ozuna1.jpg',
						'1643978362725-ozuna2.jpg',
						'1643978363263-ozuna3.jpg',
					],
					school: {
						$oid: '61fd1ef869f6fe0008a5cf06',
					},
					parentName: 'Uniforms',
					quantity: 2,
					status: 'In Review',
					inventoryMaster: {
						$oid: '615ae6c6954fe735a49a059e',
					},
					isApproved: false,
					createdOn: {
						$date: '2022-02-04T12:41:28.712Z',
					},
					attributes: [
						{
							_id: {
								$oid: '61fd1ef869f6fe0008a5cf38',
							},
							name: 'Sleeve / Pocket',
							units: 'feet',
							length: 0,
							breadth: 50,
							height: 10,
							inventory: {
								$oid: '61fd1ef869f6fe0008a5cf20',
							},
							quantity: 100,
							inventoryMaster: {
								$oid: '615ae6c6954fe735a49a059e',
							},
							inventoryMasterAttrSlug: 'uniforms_sleeve',
							createdOn: {
								$date: '2022-02-04T12:41:28.735Z',
							},
						},
					],
				},
			],
		},
		onboardingData: true,
		updateIteration: 0,
		staticData: {
			$oid: '615d8135e7af8600080e0e7d',
		},
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:30.804Z',
		},
	},
];
export default data;
