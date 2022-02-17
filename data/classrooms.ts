const data = [
	{
		_id: {
			$oid: '611902f343e0980009967fd7',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '611902f343e0980009967fd3',
		},
		createdOn: {
			$date: '2021-08-15T12:05:07.474Z',
		},
	},
	{
		_id: {
			$oid: '611938a31c7c0b0008718030',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 232,
		school: {
			$oid: '611938a31c7c0b000871802d',
		},
		createdOn: {
			$date: '2021-08-15T15:54:11.321Z',
		},
	},
	{
		_id: {
			$oid: '611a723f7a200a00084cdcc2',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 200,
		girls: 200,
		avgAnnualFee: 123,
		school: {
			$oid: '611a723f7a200a00084cdcbc',
		},
		createdOn: {
			$date: '2021-08-16T14:12:15.295Z',
		},
	},
	{
		_id: {
			$oid: '611a723f7a200a00084cdcc3',
		},
		class: 'Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 4,
		girls: 4,
		avgAnnualFee: 123123,
		school: {
			$oid: '611a723f7a200a00084cdcbc',
		},
		createdOn: {
			$date: '2021-08-16T14:12:15.295Z',
		},
	},
	{
		_id: {
			$oid: '611a7a447a200a00084cdcfe',
		},
		class: '11',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 200,
		girls: {
			$numberDouble: 'NaN',
		},
		avgAnnualFee: 800,
		school: {
			$oid: '611a7a447a200a00084cdcfb',
		},
		createdOn: {
			$date: '2021-08-16T14:46:28.251Z',
		},
	},
	{
		_id: {
			$oid: '611a7a447a200a00084cdcff',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 100,
		girls: {
			$numberDouble: 'NaN',
		},
		avgAnnualFee: 5,
		school: {
			$oid: '611a7a447a200a00084cdcfb',
		},
		createdOn: {
			$date: '2021-08-16T14:46:28.251Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd2c',
		},
		class: '5',
		noOfSections: 4,
		ageByStandard: 10,
		boys: 20,
		girls: 20,
		avgAnnualFee: 50000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.090Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd2d',
		},
		class: '6',
		noOfSections: 5,
		ageByStandard: 11,
		boys: 20,
		girls: 20,
		avgAnnualFee: 55000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.090Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd2e',
		},
		class: '7',
		noOfSections: 5,
		ageByStandard: 12,
		boys: 20,
		girls: 20,
		avgAnnualFee: 55000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd2f',
		},
		class: '8',
		noOfSections: 4,
		ageByStandard: 13,
		boys: 15,
		girls: 15,
		avgAnnualFee: 55000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd30',
		},
		class: '9',
		noOfSections: 4,
		ageByStandard: 13,
		boys: 20,
		girls: 20,
		avgAnnualFee: 60000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd31',
		},
		class: '10',
		noOfSections: 4,
		ageByStandard: 14,
		boys: 20,
		girls: 20,
		avgAnnualFee: 65000,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd65',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.517Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd66',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.517Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd67',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.518Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd68',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.518Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd69',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.518Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6a',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.518Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6b',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6c',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6d',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6e',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd6f',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdda6',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.997Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdda7',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.997Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdda5',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.997Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdda8',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.998Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdda9',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.998Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddaa',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.998Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddab',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.998Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddac',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.998Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddad',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddae',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddaf',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdde6',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.364Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdde7',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.364Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdde8',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.365Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdde9',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.365Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddea',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.365Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddeb',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.366Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddec',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.366Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cdded',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.366Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddee',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.366Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddef',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.366Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddf0',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.367Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde27',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.504Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde28',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.504Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde29',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.504Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2a',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.504Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2b',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.505Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2c',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.505Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2d',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.505Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2e',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.505Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde2f',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.505Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde30',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.506Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde31',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.506Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde6b',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde6c',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde6d',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde6e',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde6f',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde70',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.769Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde71',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde72',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde73',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde74',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde75',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde89',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.194Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8a',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.194Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8b',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.194Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8c',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.195Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8d',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.195Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8e',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.195Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde8f',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.195Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde90',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.195Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde91',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde92',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde93',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec4',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.230Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec5',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.230Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec6',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec7',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec8',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdec9',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdeca',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdecb',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.231Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdecd',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.232Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdecc',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.232Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdece',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.232Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdede',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.238Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdedf',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee0',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee1',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee2',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee3',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee4',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.239Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee5',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee6',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee7',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee8',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdef8',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdef9',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdefa',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdefb',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdefc',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdefd',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.245Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdefe',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.246Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdeff',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.246Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf00',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.246Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf01',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.246Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf02',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.246Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf12',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 48,
		girls: 36,
		avgAnnualFee: 23000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.253Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf13',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 46,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.253Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf14',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 44,
		girls: 39,
		avgAnnualFee: 25000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.254Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf15',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 43,
		girls: 37,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.254Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf16',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 48,
		girls: 35,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.254Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf17',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 46,
		girls: 42,
		avgAnnualFee: 27000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.254Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf18',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 54,
		girls: 43,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.254Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf19',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 52,
		girls: 40,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1a',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 5,
		boys: 49,
		girls: 46,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1b',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 6,
		boys: 53,
		girls: 39,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1c',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 58,
		girls: 37,
		avgAnnualFee: 21000,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfe8',
		},
		class: '5',
		noOfSections: 5,
		ageByStandard: 11,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 35,
		avgAnnualFee: 10000,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.870Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfea',
		},
		class: '7',
		noOfSections: 6,
		ageByStandard: 14,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 45,
		avgAnnualFee: 12500,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.870Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfe9',
		},
		class: '6',
		noOfSections: 5,
		ageByStandard: 13,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 25,
		avgAnnualFee: 12500,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.870Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfec',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 3,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 10,
		avgAnnualFee: 1000,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.870Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfeb',
		},
		class: '8',
		noOfSections: 4,
		ageByStandard: 15,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 40,
		avgAnnualFee: 13000,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.870Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfed',
		},
		class: '10',
		noOfSections: 3,
		ageByStandard: 3,
		boys: {
			$numberDouble: 'NaN',
		},
		girls: 4,
		avgAnnualFee: 11000,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce008',
		},
		class: 'N/Pg',
		noOfSections: 3,
		ageByStandard: 4,
		boys: 10,
		girls: 10,
		avgAnnualFee: 30000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.389Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce009',
		},
		class: 'Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 15,
		girls: 15,
		avgAnnualFee: 50000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.389Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00a',
		},
		class: '1',
		noOfSections: 3,
		ageByStandard: 6,
		boys: 15,
		girls: 15,
		avgAnnualFee: 50000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00b',
		},
		class: '2',
		noOfSections: 3,
		ageByStandard: 7,
		boys: 15,
		girls: 15,
		avgAnnualFee: 75000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00c',
		},
		class: '3',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 15,
		girls: 15,
		avgAnnualFee: 75000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00d',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 16,
		girls: 16,
		avgAnnualFee: 75000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00e',
		},
		class: '5',
		noOfSections: 3,
		ageByStandard: 10,
		boys: 16,
		girls: 16,
		avgAnnualFee: 90000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce00f',
		},
		class: '6',
		noOfSections: 3,
		ageByStandard: 11,
		boys: 16,
		girls: 16,
		avgAnnualFee: 90000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce010',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 16,
		girls: 16,
		avgAnnualFee: 120000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.390Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce011',
		},
		class: '8',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 16,
		girls: 16,
		avgAnnualFee: 120000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce012',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 16,
		girls: 16,
		avgAnnualFee: 150000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce013',
		},
		class: '10',
		noOfSections: 3,
		ageByStandard: 15,
		boys: 16,
		girls: 16,
		avgAnnualFee: 150000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce014',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 16,
		boys: 20,
		girls: 20,
		avgAnnualFee: 180000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce015',
		},
		class: '12',
		noOfSections: 3,
		ageByStandard: 17,
		boys: 20,
		girls: 20,
		avgAnnualFee: 180000,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79676',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 15,
		boys: 70,
		girls: 50,
		avgAnnualFee: 5000,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.511Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79677',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 3,
		girls: 2,
		avgAnnualFee: 200,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.512Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79678',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 2,
		girls: 3,
		avgAnnualFee: 4000,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.512Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79679',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 100,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.513Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967a',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 30,
		girls: 30,
		avgAnnualFee: 100,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.513Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967b',
		},
		class: '10',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 1,
		girls: 1,
		avgAnnualFee: 20,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.513Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967c',
		},
		class: '11',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 3,
		girls: 2,
		avgAnnualFee: 1200,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.513Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967d',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 2,
		girls: 7,
		avgAnnualFee: 200,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.513Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967e',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 3,
		girls: 3,
		avgAnnualFee: 20,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.514Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e7967f',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 3,
		girls: 5,
		avgAnnualFee: 200,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.514Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79680',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 1,
		girls: 2,
		avgAnnualFee: 300,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.514Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79681',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 3,
		girls: 3,
		avgAnnualFee: 100,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.514Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e79699',
		},
		class: 'Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 300,
		girls: 300,
		avgAnnualFee: 50000,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.026Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e7969a',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 3,
		girls: 3,
		avgAnnualFee: 12,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.027Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e7969b',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 2,
		girls: 2,
		avgAnnualFee: 23,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.027Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e7969c',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 2,
		girls: 2,
		avgAnnualFee: 456,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.027Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e7969d',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 2,
		girls: 2,
		avgAnnualFee: 345,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.027Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e2',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.051Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e3',
		},
		class: 'Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.051Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e4',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.051Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e5',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.052Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e6',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.052Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e7',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.052Z',
		},
	},
	{
		_id: {
			$oid: '612a23dbf99b4d0008828e40',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 19,
		girls: 13,
		avgAnnualFee: 37000,
		school: {
			$oid: '612a23dbf99b4d0008828e3e',
		},
		createdOn: {
			$date: '2021-08-28T11:54:03.650Z',
		},
	},
	{
		_id: {
			$oid: '612a23dbf99b4d0008828e41',
		},
		class: '12',
		noOfSections: 3,
		ageByStandard: 3,
		boys: 45,
		girls: 62,
		avgAnnualFee: 38000,
		school: {
			$oid: '612a23dbf99b4d0008828e3e',
		},
		createdOn: {
			$date: '2021-08-28T11:54:03.650Z',
		},
	},
	{
		_id: {
			$oid: '612b59f8f99b4d0008828e48',
		},
		class: 'Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 6,
		girls: 5,
		avgAnnualFee: 25000,
		school: {
			$oid: '612b59f8f99b4d0008828e46',
		},
		createdOn: {
			$date: '2021-08-29T09:57:12.827Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e50',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 50000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.738Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e51',
		},
		class: 'Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 50000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.738Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e52',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 5,
		girls: 5,
		avgAnnualFee: 50000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.739Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e53',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 5,
		girls: 5,
		avgAnnualFee: 60000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.739Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e54',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 8,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.743Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e55',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.743Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e56',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 5,
		girls: 6,
		avgAnnualFee: 65000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.743Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e57',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.744Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e58',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.745Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e59',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 5,
		girls: 5,
		avgAnnualFee: 100000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.745Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e5a',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 5,
		girls: 7,
		avgAnnualFee: 100000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.745Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e5b',
		},
		class: '10',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 5,
		girls: 6,
		avgAnnualFee: 100000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.746Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e5c',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 16,
		boys: 6,
		girls: 6,
		avgAnnualFee: 100000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.747Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e5d',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 17,
		boys: 6,
		girls: 5,
		avgAnnualFee: 100000,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.747Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba78',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.741Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba79',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.741Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba7a',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.741Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba7b',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.741Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba7c',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.741Z',
		},
	},
	{
		_id: {
			$oid: '613ae846ed036e00082d3efd',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 1,
		girls: 2,
		avgAnnualFee: 5670,
		school: {
			$oid: '613ae846ed036e00082d3efb',
		},
		createdOn: {
			$date: '2021-09-10T05:08:22.898Z',
		},
	},
	{
		_id: {
			$oid: '613ae846ed036e00082d3efe',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 2,
		girls: 3,
		avgAnnualFee: 7890,
		school: {
			$oid: '613ae846ed036e00082d3efb',
		},
		createdOn: {
			$date: '2021-09-10T05:08:22.899Z',
		},
	},
	{
		_id: {
			$oid: '613ae846ed036e00082d3eff',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 3,
		girls: 2,
		avgAnnualFee: 8970,
		school: {
			$oid: '613ae846ed036e00082d3efb',
		},
		createdOn: {
			$date: '2021-09-10T05:08:22.899Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f0b',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 4000,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.829Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f0c',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 1,
		girls: 1,
		avgAnnualFee: 28323,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.829Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f0d',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 5,
		girls: 11,
		avgAnnualFee: 37434,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.830Z',
		},
	},
	{
		_id: {
			$oid: '613afbaced036e00082d3f28',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '613afbabed036e00082d3f25',
		},
		createdOn: {
			$date: '2021-09-10T06:31:08.086Z',
		},
	},
	{
		_id: {
			$oid: '613afbaced036e00082d3f27',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '613afbabed036e00082d3f25',
		},
		createdOn: {
			$date: '2021-09-10T06:31:08.086Z',
		},
	},
	{
		_id: {
			$oid: '613b2982ef861d00094c23eb',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 2,
		girls: 2,
		avgAnnualFee: 560,
		school: {
			$oid: '613b2982ef861d00094c23e9',
		},
		createdOn: {
			$date: '2021-09-10T09:46:42.184Z',
		},
	},
	{
		_id: {
			$oid: '613b2982ef861d00094c23ec',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 60,
		school: {
			$oid: '613b2982ef861d00094c23e9',
		},
		createdOn: {
			$date: '2021-09-10T09:46:42.185Z',
		},
	},
	{
		_id: {
			$oid: '613b2982ef861d00094c23ed',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 2,
		girls: 1,
		avgAnnualFee: 980,
		school: {
			$oid: '613b2982ef861d00094c23e9',
		},
		createdOn: {
			$date: '2021-09-10T09:46:42.185Z',
		},
	},
	{
		_id: {
			$oid: '613b29dbef861d00094c23ff',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 100,
		avgAnnualFee: 1500,
		school: {
			$oid: '613b29daef861d00094c23fd',
		},
		createdOn: {
			$date: '2021-09-10T09:48:10.983Z',
		},
	},
	{
		_id: {
			$oid: '613b3751ef861d00094c240d',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 100,
		girls: 100,
		avgAnnualFee: 123,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:45:37.715Z',
		},
	},
	{
		_id: {
			$oid: '613b3751ef861d00094c240e',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 20,
		girls: 30,
		avgAnnualFee: 123,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:45:37.715Z',
		},
	},
	{
		_id: {
			$oid: '613b3751ef861d00094c240f',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 30,
		girls: 30,
		avgAnnualFee: 123,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:45:37.715Z',
		},
	},
	{
		_id: {
			$oid: '613b385cef861d00094c242a',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 111,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:50:04.217Z',
		},
	},
	{
		_id: {
			$oid: '613b385cef861d00094c242c',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 12,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:50:04.221Z',
		},
	},
	{
		_id: {
			$oid: '613b385cef861d00094c242b',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 3,
		girls: 4,
		avgAnnualFee: 1212,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:50:04.221Z',
		},
	},
	{
		_id: {
			$oid: '613b385cef861d00094c242d',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1212,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:50:04.222Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec52000711452c',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 50000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.139Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec52000711452d',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.139Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec52000711452e',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.139Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec52000711452f',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.140Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114530',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.140Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114531',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.140Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114532',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.141Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114533',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 5,
		girls: 5,
		avgAnnualFee: 55000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.141Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114534',
		},
		class: '7',
		noOfSections: 9,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.141Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114535',
		},
		class: '8',
		noOfSections: 10,
		ageByStandard: 3,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.141Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114536',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.142Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114537',
		},
		class: '10',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 5,
		girls: 5,
		avgAnnualFee: 65000,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.142Z',
		},
	},
	{
		_id: {
			$oid: '613ecb2030ec520007114549',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 45,
		school: {
			$oid: '613ecb2030ec520007114547',
		},
		createdOn: {
			$date: '2021-09-13T03:53:04.304Z',
		},
	},
	{
		_id: {
			$oid: '613ecb2030ec52000711454a',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 1,
		girls: 1,
		avgAnnualFee: 456,
		school: {
			$oid: '613ecb2030ec520007114547',
		},
		createdOn: {
			$date: '2021-09-13T03:53:04.304Z',
		},
	},
	{
		_id: {
			$oid: '613f1f21eec99a0009899821',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '613f1f21eec99a000989981f',
		},
		createdOn: {
			$date: '2021-09-13T09:51:29.673Z',
		},
	},
	{
		_id: {
			$oid: '613f1f21eec99a0009899822',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '613f1f21eec99a000989981f',
		},
		createdOn: {
			$date: '2021-09-13T09:51:29.674Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47a',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 3848,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.813Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47b',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 4,
		girls: 3,
		avgAnnualFee: 5454,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.814Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47c',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 200,
		girls: 132,
		avgAnnualFee: 4343,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.814Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47d',
		},
		class: '1',
		noOfSections: 5,
		ageByStandard: 6,
		boys: 455,
		girls: 343,
		avgAnnualFee: 3444,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.815Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47e',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 5,
		girls: 54,
		avgAnnualFee: 433,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.815Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb47f',
		},
		class: '3',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 234,
		girls: 43,
		avgAnnualFee: 4666,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.815Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb480',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 5,
		girls: 5,
		avgAnnualFee: 334,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.816Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb481',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 4,
		girls: 3,
		avgAnnualFee: 3443,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.816Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb482',
		},
		class: '6',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 44,
		girls: 44,
		avgAnnualFee: 4455,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.816Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb483',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 254,
		girls: 234,
		avgAnnualFee: 3344,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.816Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb484',
		},
		class: '8',
		noOfSections: 6,
		ageByStandard: 11,
		boys: 7,
		girls: 5,
		avgAnnualFee: 4342,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.817Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb485',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 233,
		girls: 123,
		avgAnnualFee: 3434,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.817Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb486',
		},
		class: '10',
		noOfSections: 4,
		ageByStandard: 18,
		boys: 234,
		girls: 234,
		avgAnnualFee: 44544,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.817Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb487',
		},
		class: '11',
		noOfSections: 2,
		ageByStandard: 17,
		boys: 123,
		girls: 111,
		avgAnnualFee: 22323,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.818Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb488',
		},
		class: '12',
		noOfSections: 4,
		ageByStandard: 19,
		boys: 343,
		girls: 342,
		avgAnnualFee: 5668,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.818Z',
		},
	},
	{
		_id: {
			$oid: '614439f2090e67000baeb507',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 300,
		school: {
			$oid: '614439f2090e67000baeb505',
		},
		createdOn: {
			$date: '2021-09-17T06:47:14.690Z',
		},
	},
	{
		_id: {
			$oid: '61444175090e67000baeb513',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 2,
		avgAnnualFee: 123231,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:19:17.091Z',
		},
	},
	{
		_id: {
			$oid: '61444175090e67000baeb514',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:19:17.091Z',
		},
	},
	{
		_id: {
			$oid: '61444175090e67000baeb515',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 12312,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:19:17.092Z',
		},
	},
	{
		_id: {
			$oid: '6144429e090e67000baeb52e',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 2,
		girls: 2,
		avgAnnualFee: 123,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:24:14.828Z',
		},
	},
	{
		_id: {
			$oid: '6144429e090e67000baeb52f',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 3,
		girls: 3,
		avgAnnualFee: 12,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:24:14.948Z',
		},
	},
	{
		_id: {
			$oid: '6144429f090e67000baeb530',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 4,
		girls: 3,
		avgAnnualFee: 123,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:24:15.038Z',
		},
	},
	{
		_id: {
			$oid: '6144429f090e67000baeb531',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 3,
		girls: 5,
		avgAnnualFee: 12,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:24:15.120Z',
		},
	},
	{
		_id: {
			$oid: '614865a532e4ba0008098c3e',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 5,
		girls: 6,
		avgAnnualFee: 1231,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:42:45.893Z',
		},
	},
	{
		_id: {
			$oid: '614865a532e4ba0008098c3f',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 11,
		girls: 11,
		avgAnnualFee: 345345,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:42:45.893Z',
		},
	},
	{
		_id: {
			$oid: '614865a532e4ba0008098c40',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 8,
		girls: 8,
		avgAnnualFee: 34534,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:42:45.893Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5d6',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 12,
		girls: 15,
		avgAnnualFee: 40000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.414Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5d7',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 12,
		girls: 13,
		avgAnnualFee: 2000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.414Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5d8',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 5,
		girls: 8,
		avgAnnualFee: 10000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.415Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5d9',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 20,
		girls: 20,
		avgAnnualFee: 2000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.415Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5da',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 23,
		avgAnnualFee: 30000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.415Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5db',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 30,
		girls: 20,
		avgAnnualFee: 4000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.416Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5dc',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 3,
		boys: 30,
		girls: 20,
		avgAnnualFee: 3000,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.416Z',
		},
	},
	{
		_id: {
			$oid: '614c353f858405000a58d5fd',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:05:19.078Z',
		},
	},
	{
		_id: {
			$oid: '614c353f858405000a58d5fe',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:05:19.079Z',
		},
	},
	{
		_id: {
			$oid: '614c353f858405000a58d5ff',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:05:19.079Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d611',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 43,
		girls: 25,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.615Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d610',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 23,
		girls: 29,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.615Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d612',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 45,
		girls: 23,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.615Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d613',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 61,
		girls: 26,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.615Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d614',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 54,
		girls: 30,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.615Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d615',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 44,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d616',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 48,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d617',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d618',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d619',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 55,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d644',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 23,
		girls: 29,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.185Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d645',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 43,
		girls: 25,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.185Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d646',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 45,
		girls: 23,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.186Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d647',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 61,
		girls: 26,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.186Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d648',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 54,
		girls: 30,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.186Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d649',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 44,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.186Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64a',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 48,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.186Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64b',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64c',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64d',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 55,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d678',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 23,
		girls: 29,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.942Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d679',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 43,
		girls: 25,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67a',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 45,
		girls: 23,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67b',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 61,
		girls: 26,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67c',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 54,
		girls: 30,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67d',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 44,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67e',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 48,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d67f',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d680',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 49,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d681',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 55,
		girls: 1,
		avgAnnualFee: 5000,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c386d858405000a58d6aa',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:18:53.359Z',
		},
	},
	{
		_id: {
			$oid: '614c386d858405000a58d6ab',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:18:53.441Z',
		},
	},
	{
		_id: {
			$oid: '614c386d858405000a58d6ac',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:18:53.565Z',
		},
	},
	{
		_id: {
			$oid: '614c3887858405000a58d6ad',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:19:19.690Z',
		},
	},
	{
		_id: {
			$oid: '614c3887858405000a58d6ae',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:19:19.797Z',
		},
	},
	{
		_id: {
			$oid: '614c3887858405000a58d6af',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:19:19.890Z',
		},
	},
	{
		_id: {
			$oid: '614c38f0858405000a58d6b0',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:21:04.108Z',
		},
	},
	{
		_id: {
			$oid: '614c38f0858405000a58d6b1',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:21:04.217Z',
		},
	},
	{
		_id: {
			$oid: '614c38f0858405000a58d6b2',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:21:04.331Z',
		},
	},
	{
		_id: {
			$oid: '614c45af858405000a58d6b3',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T09:15:27.826Z',
		},
	},
	{
		_id: {
			$oid: '614c45af858405000a58d6b4',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T09:15:27.915Z',
		},
	},
	{
		_id: {
			$oid: '614c45af858405000a58d6b5',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T09:15:27.992Z',
		},
	},
	{
		_id: {
			$oid: '614efa7e142d520008ac75a3',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 4000,
		school: {
			$oid: '614efa7d142d520008ac75a1',
		},
		createdOn: {
			$date: '2021-09-25T10:31:26.143Z',
		},
	},
	{
		_id: {
			$oid: '61534b65142d520008ac75c1',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 3,
		girls: 2,
		avgAnnualFee: 123,
		school: {
			$oid: '61534b65142d520008ac75bf',
		},
		createdOn: {
			$date: '2021-09-28T17:05:41.672Z',
		},
	},
	{
		_id: {
			$oid: '61534b65142d520008ac75c2',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 0,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '61534b65142d520008ac75bf',
		},
		createdOn: {
			$date: '2021-09-28T17:05:41.672Z',
		},
	},
	{
		_id: {
			$oid: '61534b65142d520008ac75c3',
		},
		class: 'Sr.Kg',
		noOfSections: 3,
		ageByStandard: 3,
		boys: 2,
		girls: 0,
		avgAnnualFee: 123,
		school: {
			$oid: '61534b65142d520008ac75bf',
		},
		createdOn: {
			$date: '2021-09-28T17:05:41.672Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75cf',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 3,
		girls: 0,
		avgAnnualFee: 123,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.468Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d0',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 3,
		girls: 0,
		avgAnnualFee: 123,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.469Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d1',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 3,
		girls: 0,
		avgAnnualFee: 12312,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.469Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d2',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 0,
		girls: 6,
		avgAnnualFee: 12312,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.469Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d3',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 0,
		girls: 6,
		avgAnnualFee: 1231,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.469Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d4',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 0,
		girls: 8,
		avgAnnualFee: 123123,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d5',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 0,
		girls: 4,
		avgAnnualFee: 123123,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac760d',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 6,
		girls: 5,
		avgAnnualFee: 25000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.929Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac760e',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 7,
		girls: 3,
		avgAnnualFee: 35000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.930Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac760f',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 10,
		girls: 10,
		avgAnnualFee: 40000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.930Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7610',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 20,
		girls: 15,
		avgAnnualFee: 50000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.930Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7611',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 20,
		girls: 20,
		avgAnnualFee: 50000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.931Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7612',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 3,
		girls: 3,
		avgAnnualFee: 50000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.931Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7613',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 3,
		girls: 3,
		avgAnnualFee: 50000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.931Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7614',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 3,
		girls: 3,
		avgAnnualFee: 60000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.931Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7616',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 60000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.932Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7615',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 60000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.931Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7617',
		},
		class: '8',
		noOfSections: 3,
		ageByStandard: 6,
		boys: 2,
		girls: 2,
		avgAnnualFee: 30000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.932Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7618',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 2,
		girls: 2,
		avgAnnualFee: 20000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.932Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac7619',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 3,
		girls: 2,
		avgAnnualFee: 20000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.932Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac761a',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 60000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.932Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac761b',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 21,
		girls: 9,
		avgAnnualFee: 35000,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.933Z',
		},
	},
	{
		_id: {
			$oid: '615d6667142d520008ac7623',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 50000,
		school: {
			$oid: '615d6667142d520008ac7621',
		},
		createdOn: {
			$date: '2021-10-06T09:03:35.225Z',
		},
	},
	{
		_id: {
			$oid: '615d6667142d520008ac7624',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 2,
		girls: 2,
		avgAnnualFee: 50000,
		school: {
			$oid: '615d6667142d520008ac7621',
		},
		createdOn: {
			$date: '2021-10-06T09:03:35.225Z',
		},
	},
	{
		_id: {
			$oid: '615d8133e7af8600080e0e6a',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 0,
		avgAnnualFee: 123,
		school: {
			$oid: '615d8133e7af8600080e0e68',
		},
		createdOn: {
			$date: '2021-10-06T10:57:55.314Z',
		},
	},
	{
		_id: {
			$oid: '615d8133e7af8600080e0e6b',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 0,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '615d8133e7af8600080e0e68',
		},
		createdOn: {
			$date: '2021-10-06T10:57:55.314Z',
		},
	},
	{
		_id: {
			$oid: '615d8133e7af8600080e0e6c',
		},
		class: 'Sr.Kg',
		noOfSections: 4,
		ageByStandard: 3,
		boys: 0,
		girls: 1,
		avgAnnualFee: 123,
		school: {
			$oid: '615d8133e7af8600080e0e68',
		},
		createdOn: {
			$date: '2021-10-06T10:57:55.315Z',
		},
	},
	{
		_id: {
			$oid: '615e7ca7e7af8600080e0e81',
		},
		class: '1',
		noOfSections: 3,
		ageByStandard: 7,
		girls: 80,
		avgAnnualFee: 20000,
		school: {
			$oid: '615e7ca7e7af8600080e0e7f',
		},
		createdOn: {
			$date: '2021-10-07T04:50:47.501Z',
		},
	},
	{
		_id: {
			$oid: '615e7ca7e7af8600080e0e82',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 6,
		girls: 4,
		avgAnnualFee: 1,
		school: {
			$oid: '615e7ca7e7af8600080e0e7f',
		},
		createdOn: {
			$date: '2021-10-07T04:50:47.502Z',
		},
	},
	{
		_id: {
			$oid: '615e7ca7e7af8600080e0e83',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 6,
		girls: 3,
		avgAnnualFee: 1,
		school: {
			$oid: '615e7ca7e7af8600080e0e7f',
		},
		createdOn: {
			$date: '2021-10-07T04:50:47.502Z',
		},
	},
	{
		_id: {
			$oid: '615e7ca7e7af8600080e0e84',
		},
		class: '4',
		noOfSections: 4,
		ageByStandard: 3,
		girls: 3,
		avgAnnualFee: 22000,
		school: {
			$oid: '615e7ca7e7af8600080e0e7f',
		},
		createdOn: {
			$date: '2021-10-07T04:50:47.502Z',
		},
	},
	{
		_id: {
			$oid: '61657128e7af8600080e0e92',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		girls: 11,
		avgAnnualFee: 10000,
		school: {
			$oid: '61657128e7af8600080e0e90',
		},
		createdOn: {
			$date: '2021-10-12T11:27:36.752Z',
		},
	},
	{
		_id: {
			$oid: '61657128e7af8600080e0e93',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 5,
		girls: 12,
		avgAnnualFee: 15000,
		school: {
			$oid: '61657128e7af8600080e0e90',
		},
		createdOn: {
			$date: '2021-10-12T11:27:36.752Z',
		},
	},
	{
		_id: {
			$oid: '6166d55c85e0dc00080494fc',
		},
		class: '11',
		noOfSections: 5,
		ageByStandard: 15,
		girls: 100,
		avgAnnualFee: 10000,
		school: {
			$oid: '6166d55b85e0dc00080494fa',
		},
		createdOn: {
			$date: '2021-10-13T12:47:24.128Z',
		},
	},
	{
		_id: {
			$oid: '6166d55c85e0dc00080494fd',
		},
		class: '12',
		noOfSections: 3,
		ageByStandard: 15,
		girls: 100,
		avgAnnualFee: 12000,
		school: {
			$oid: '6166d55b85e0dc00080494fa',
		},
		createdOn: {
			$date: '2021-10-13T12:47:24.129Z',
		},
	},
	{
		_id: {
			$oid: '616e772d2d11a30008f9d4fd',
		},
		class: 'Jr.Kg',
		noOfSections: 4,
		ageByStandard: 9,
		girls: 8,
		avgAnnualFee: 10000,
		school: {
			$oid: '616e772d2d11a30008f9d4fc',
		},
		createdOn: {
			$date: '2021-10-19T07:43:41.799Z',
		},
	},
	{
		_id: {
			$oid: '616e772d2d11a30008f9d4fe',
		},
		class: 'Sr.Kg',
		noOfSections: 8,
		ageByStandard: 11,
		girls: 10,
		avgAnnualFee: 120000,
		school: {
			$oid: '616e772d2d11a30008f9d4fc',
		},
		createdOn: {
			$date: '2021-10-19T07:43:41.800Z',
		},
	},
	{
		_id: {
			$oid: '616f2960f4c3ea0008aa6412',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 150,
		girls: 150,
		avgAnnualFee: 18000,
		school: {
			$oid: '616f2960f4c3ea0008aa6411',
		},
		createdOn: {
			$date: '2021-10-19T20:24:00.530Z',
		},
	},
	{
		_id: {
			$oid: '616fce20f4c3ea0008aa6421',
		},
		class: 'Jr.Kg',
		noOfSections: 4,
		ageByStandard: 4,
		girls: 100,
		avgAnnualFee: 12000,
		school: {
			$oid: '616fce20f4c3ea0008aa6420',
		},
		createdOn: {
			$date: '2021-10-20T08:06:56.628Z',
		},
	},
	{
		_id: {
			$oid: '616fce20f4c3ea0008aa6422',
		},
		class: 'Sr.Kg',
		noOfSections: 4,
		ageByStandard: 5,
		girls: 75,
		avgAnnualFee: 15000,
		school: {
			$oid: '616fce20f4c3ea0008aa6420',
		},
		createdOn: {
			$date: '2021-10-20T08:06:56.628Z',
		},
	},
	{
		_id: {
			$oid: '61725a8bf4c3ea0008aa6432',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 26,
		girls: 12,
		avgAnnualFee: 40000,
		school: {
			$oid: '61725a8bf4c3ea0008aa6431',
		},
		createdOn: {
			$date: '2021-10-22T06:30:35.360Z',
		},
	},
	{
		_id: {
			$oid: '61725a8bf4c3ea0008aa6433',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 7,
		girls: 20,
		avgAnnualFee: 40000,
		school: {
			$oid: '61725a8bf4c3ea0008aa6431',
		},
		createdOn: {
			$date: '2021-10-22T06:30:35.361Z',
		},
	},
	{
		_id: {
			$oid: '6172a88ff4c3ea0008aa6445',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 19,
		girls: 34,
		avgAnnualFee: 5600,
		school: {
			$oid: '6172a88ff4c3ea0008aa6444',
		},
		createdOn: {
			$date: '2021-10-22T12:03:27.486Z',
		},
	},
	{
		_id: {
			$oid: '6172a88ff4c3ea0008aa6446',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 12,
		girls: 29,
		avgAnnualFee: 5899,
		school: {
			$oid: '6172a88ff4c3ea0008aa6444',
		},
		createdOn: {
			$date: '2021-10-22T12:03:27.487Z',
		},
	},
	{
		_id: {
			$oid: '6172cb26f4c3ea0008aa6454',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 20,
		girls: 20,
		avgAnnualFee: 6000,
		school: {
			$oid: '6172cb26f4c3ea0008aa6453',
		},
		createdOn: {
			$date: '2021-10-22T14:31:02.326Z',
		},
	},
	{
		_id: {
			$oid: '61739dbaf4c3ea0008aa6468',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 6,
		girls: 9,
		avgAnnualFee: 3000,
		school: {
			$oid: '61739dbaf4c3ea0008aa6467',
		},
		createdOn: {
			$date: '2021-10-23T05:29:30.241Z',
		},
	},
	{
		_id: {
			$oid: '61739dbaf4c3ea0008aa6469',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 9,
		girls: 3,
		avgAnnualFee: 4000,
		school: {
			$oid: '61739dbaf4c3ea0008aa6467',
		},
		createdOn: {
			$date: '2021-10-23T05:29:30.241Z',
		},
	},
	{
		_id: {
			$oid: '61765106f4c3ea0008aa6474',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '61765106f4c3ea0008aa6473',
		},
		createdOn: {
			$date: '2021-10-25T06:39:02.131Z',
		},
	},
	{
		_id: {
			$oid: '6176f18e4261f900093eae03',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 1,
		girls: 3,
		avgAnnualFee: 123,
		school: {
			$oid: '6176f18d4261f900093eae02',
		},
		createdOn: {
			$date: '2021-10-25T18:03:58.093Z',
		},
	},
	{
		_id: {
			$oid: '6176f18e4261f900093eae04',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 2,
		girls: 3,
		avgAnnualFee: 123,
		school: {
			$oid: '6176f18d4261f900093eae02',
		},
		createdOn: {
			$date: '2021-10-25T18:03:58.093Z',
		},
	},
	{
		_id: {
			$oid: '61a79686388ffb000751b620',
		},
		class: 'N/Pg',
		noOfSections: 3,
		ageByStandard: 3,
		girls: 29,
		avgAnnualFee: 7907,
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:38.364Z',
		},
	},
	{
		_id: {
			$oid: '61a84ee8ad4a050009acbbf0',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		girls: 0,
		avgAnnualFee: 500,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-02T04:43:20.715Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61a84ee8ad4a050009acbbf1',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		girls: 0,
		avgAnnualFee: 500,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-02T04:43:20.721Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f40',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		girls: 155,
		avgAnnualFee: 15000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.791Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f41',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 25,
		avgAnnualFee: 15000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.791Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f42',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.791Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f43',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.791Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f44',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 25,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f45',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f47',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 25,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f46',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 35,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f48',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 25,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f49',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 20,
		girls: 25,
		avgAnnualFee: 30000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f4a',
		},
		class: '8',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 25,
		girls: 40,
		avgAnnualFee: 35000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.792Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f4b',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 30,
		avgAnnualFee: 45000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.793Z',
		},
	},
	{
		_id: {
			$oid: '61a9c8dca064240009692f4c',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 40,
		girls: 35,
		avgAnnualFee: 50000,
		school: {
			$oid: '61a9c8dba064240009692f3f',
		},
		createdOn: {
			$date: '2021-12-03T07:35:56.793Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb6d',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		boys: 75,
		girls: 80,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.653Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb6e',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 10,
		girls: 15,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.653Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb6f',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 20,
		girls: 10,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.654Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb71',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 25,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.654Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb70',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.654Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb72',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.655Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb73',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 35,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.656Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb74',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 25,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.656Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb75',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 25,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.656Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb76',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 20,
		girls: 25,
		avgAnnualFee: 30000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.657Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb77',
		},
		class: '8',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 25,
		girls: 40,
		avgAnnualFee: 35000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.657Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb78',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 30,
		avgAnnualFee: 45000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.657Z',
		},
	},
	{
		_id: {
			$oid: '61ade2679348190008b7cb79',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 40,
		girls: 35,
		avgAnnualFee: 50000,
		school: {
			$oid: '61ade2679348190008b7cb6c',
		},
		createdOn: {
			$date: '2021-12-06T10:13:59.658Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb88',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		boys: 70,
		girls: 90,
		avgAnnualFee: 15000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.180Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb89',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 30,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.180Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8a',
		},
		class: 'Sr.Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 30,
		girls: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.180Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8f',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 20,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.181Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8e',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 35,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.181Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb90',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 25,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.181Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8d',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 25,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.181Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb91',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 20,
		girls: 25,
		avgAnnualFee: 30000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.182Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8c',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.180Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb8b',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.180Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb92',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 25,
		girls: 40,
		avgAnnualFee: 35000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.182Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb93',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 35,
		avgAnnualFee: 45000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.182Z',
		},
	},
	{
		_id: {
			$oid: '61adead39348190008b7cb94',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 40,
		girls: 35,
		avgAnnualFee: 50000,
		school: {
			$oid: '61adead29348190008b7cb87',
		},
		createdOn: {
			$date: '2021-12-06T10:49:55.182Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbbd',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		boys: 75,
		girls: 70,
		avgAnnualFee: 33000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbbe',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 25,
		girls: 20,
		avgAnnualFee: 40000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbbf',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 25,
		avgAnnualFee: 40000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc0',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 32,
		girls: 30,
		avgAnnualFee: 45000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc1',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 35,
		girls: 30,
		avgAnnualFee: 45000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc2',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 20,
		girls: 25,
		avgAnnualFee: 45000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.314Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc3',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 25,
		girls: 30,
		avgAnnualFee: 50000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.315Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc4',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 20,
		girls: 25,
		avgAnnualFee: 50000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.315Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc5',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 25,
		girls: 35,
		avgAnnualFee: 50000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.315Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc6',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 35,
		avgAnnualFee: 55000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.315Z',
		},
	},
	{
		_id: {
			$oid: '61adf2929348190008b7cbc7',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 35,
		girls: 35,
		avgAnnualFee: 60000,
		school: {
			$oid: '61adf2929348190008b7cbbc',
		},
		createdOn: {
			$date: '2021-12-06T11:22:58.315Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbdd',
		},
		class: 'N/Pg',
		noOfSections: 3,
		ageByStandard: 3,
		boys: 20,
		girls: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.475Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbde',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 35,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.476Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbdf',
		},
		class: 'Sr.Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 20,
		girls: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.477Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe0',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.477Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe1',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.477Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe2',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.477Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe3',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 35,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.478Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe4',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 20,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.479Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe5',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 20,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.479Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe6',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 35,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.479Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe7',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 30,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.480Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe8',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 30,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.480Z',
		},
	},
	{
		_id: {
			$oid: '61ae14599348190008b7cbe9',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 35,
		girls: 35,
		avgAnnualFee: 40000,
		school: {
			$oid: '61ae14599348190008b7cbdc',
		},
		createdOn: {
			$date: '2021-12-06T13:47:05.480Z',
		},
	},
	{
		_id: {
			$oid: '61ae1bea9348190008b7cbff',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 5,
		boys: 30,
		girls: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:22.602Z',
		},
	},
	{
		_id: {
			$oid: '61ae1bea9348190008b7cc00',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 15000,
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:22.602Z',
		},
	},
	{
		_id: {
			$oid: '61ae1bea9348190008b7cc01',
		},
		class: '3',
		noOfSections: 3,
		ageByStandard: 7,
		boys: 40,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:22.602Z',
		},
	},
	{
		_id: {
			$oid: '61ae1bea9348190008b7cc02',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 35,
		girls: 40,
		avgAnnualFee: 25000,
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:22.602Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc18',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 30,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc17',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		boys: 90,
		girls: 90,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc19',
		},
		class: 'Sr.Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 25,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1e',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 30,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1f',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 40,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc21',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 30,
		girls: 40,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1b',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc20',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 30,
		girls: 30,
		avgAnnualFee: 35000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1c',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 35,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1d',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 40,
		girls: 35,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc1a',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 35,
		girls: 30,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.358Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc23',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 35,
		girls: 35,
		avgAnnualFee: 45000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.359Z',
		},
	},
	{
		_id: {
			$oid: '61af08399348190008b7cc22',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 35,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af08399348190008b7cc16',
		},
		createdOn: {
			$date: '2021-12-07T07:07:37.359Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc32',
		},
		class: 'N/Pg',
		noOfSections: 7,
		ageByStandard: 3,
		boys: 90,
		girls: 95,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.417Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc36',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 30,
		girls: 35,
		avgAnnualFee: 45000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc33',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 30,
		girls: 30,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.417Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc3a',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 25,
		girls: 35,
		avgAnnualFee: 55000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc34',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 30,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.417Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc39',
		},
		class: '7',
		noOfSections: 3,
		ageByStandard: 12,
		boys: 20,
		girls: 25,
		avgAnnualFee: 50000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc35',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 35,
		girls: 35,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.417Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc38',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 25,
		girls: 30,
		avgAnnualFee: 45000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc37',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 20,
		girls: 40,
		avgAnnualFee: 45000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc3b',
		},
		class: '9',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 30,
		girls: 40,
		avgAnnualFee: 60000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af0c4e9348190008b7cc3c',
		},
		class: '10',
		noOfSections: 3,
		ageByStandard: 15,
		boys: 40,
		girls: 30,
		avgAnnualFee: 70000,
		school: {
			$oid: '61af0c4e9348190008b7cc31',
		},
		createdOn: {
			$date: '2021-12-07T07:25:02.418Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc44',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 10,
		girls: 15,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.250Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc45',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 15,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.250Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc46',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 18,
		girls: 15,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc47',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 15,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc48',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 30,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc49',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 20,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4c',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 15,
		girls: 20,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4a',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 10,
		girls: 15,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4d',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 20,
		girls: 20,
		avgAnnualFee: 30000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4b',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 20,
		girls: 15,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4e',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 20,
		girls: 20,
		avgAnnualFee: 30000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.251Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc4f',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 14,
		boys: 20,
		girls: 20,
		avgAnnualFee: 35000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.252Z',
		},
	},
	{
		_id: {
			$oid: '61af12f49348190008b7cc50',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 25,
		girls: 25,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T07:53:24.252Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc82',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 25,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc84',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 20,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc85',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 20,
		girls: 25,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc81',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 5,
		girls: 20,
		avgAnnualFee: 15000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.428Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc83',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 7,
		boys: 30,
		girls: 25,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc86',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 20,
		girls: 25,
		avgAnnualFee: 20000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc87',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 25,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc88',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 20,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc89',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 13,
		boys: 25,
		girls: 35,
		avgAnnualFee: 35000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc8a',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 30,
		girls: 25,
		avgAnnualFee: 40000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61af3b809348190008b7cc8b',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 25,
		girls: 20,
		avgAnnualFee: 45000,
		school: {
			$oid: '61af3b809348190008b7cc80',
		},
		createdOn: {
			$date: '2021-12-07T10:46:24.429Z',
		},
	},
	{
		_id: {
			$oid: '61b0ad1c9348190008b7ccb0',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 5,
		girls: 40,
		avgAnnualFee: 1450,
		school: {
			$oid: '61b0ad1c9348190008b7ccaf',
		},
		createdOn: {
			$date: '2021-12-08T13:03:24.364Z',
		},
	},
	{
		_id: {
			$oid: '61b18cbe9348190008b7ccc9',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 11,
		avgAnnualFee: 10000,
		school: {
			$oid: '61b18cbe9348190008b7ccc8',
		},
		createdOn: {
			$date: '2021-12-09T04:57:34.166Z',
		},
	},
	{
		_id: {
			$oid: '61b33cfd9348190008b7cce7',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 5,
		girls: 20,
		avgAnnualFee: 14500,
		school: {
			$oid: '61b33cfd9348190008b7cce6',
		},
		createdOn: {
			$date: '2021-12-10T11:41:49.286Z',
		},
	},
	{
		_id: {
			$oid: '61b6e6bc9348190008b7ccfd',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 0,
		avgAnnualFee: 100,
		school: {
			$oid: '61b6e6bc9348190008b7ccfc',
		},
		createdOn: {
			$date: '2021-12-13T06:22:52.461Z',
		},
		boys: 1,
	},
	{
		_id: {
			$oid: '61b84ca09348190008b7cd0b',
		},
		class: '2',
		noOfSections: 3,
		ageByStandard: 3,
		boys: 2,
		girls: 2,
		avgAnnualFee: 1,
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:51.998Z',
		},
	},
	{
		_id: {
			$oid: '61b84ca09348190008b7cd0c',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:51.998Z',
		},
	},
	{
		_id: {
			$oid: '61b84ca09348190008b7cd0d',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:51.998Z',
		},
	},
	{
		_id: {
			$oid: '61b84ca09348190008b7cd0a',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 24,
		girls: 25,
		avgAnnualFee: 100000,
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:51.997Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd6696d7b000862189b',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 25,
		girls: 25,
		avgAnnualFee: 10000,
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:58.270Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd6696d7b000862189c',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:58.270Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd6696d7b000862189d',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:58.270Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd6696d7b000862189e',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:58.271Z',
		},
	},
	{
		_id: {
			$oid: '61c02453dc06bd00082d9a63',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 20,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T06:36:03.315Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61c02459dc06bd00082d9a64',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T06:36:09.959Z',
		},
	},
	{
		_id: {
			$oid: '61c0245adc06bd00082d9a65',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T06:36:10.849Z',
		},
	},
	{
		_id: {
			$oid: '61c02b81dc06bd00082d9a66',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:06:41.586Z',
		},
	},
	{
		_id: {
			$oid: '61c02b83dc06bd00082d9a67',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:06:43.873Z',
		},
	},
	{
		_id: {
			$oid: '61c02d41dc06bd00082d9a68',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 997,
		avgAnnualFee: 7.895696665646545e32,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:14:09.210Z',
		},
	},
	{
		_id: {
			$oid: '61c02d42dc06bd00082d9a69',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 997,
		avgAnnualFee: 7.895696665646545e32,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:14:10.052Z',
		},
	},
	{
		_id: {
			$oid: '61c02ddedc06bd00082d9a6a',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:16:46.260Z',
		},
	},
	{
		_id: {
			$oid: '61c02de6dc06bd00082d9a6b',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:16:54.150Z',
		},
	},
	{
		_id: {
			$oid: '61c02df9dc06bd00082d9a6c',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 43,
		avgAnnualFee: 1300,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-20T07:17:13.346Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a71',
		},
		class: '2',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 20,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.926Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a6f',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.925Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a70',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 20,
		girls: 20,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.925Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a72',
		},
		class: '3',
		noOfSections: 3,
		ageByStandard: 7,
		boys: 25,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.926Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a73',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 35,
		girls: 36,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.927Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a97',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 25,
		girls: 22,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.893Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a98',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 25,
		girls: 22,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.893Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a99',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 26,
		girls: 20,
		avgAnnualFee: 25000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.893Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9a',
		},
		class: '1',
		noOfSections: 2,
		ageByStandard: 6,
		boys: 27,
		girls: 22,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.894Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9b',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 27,
		girls: 21,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.894Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9c',
		},
		class: '3',
		noOfSections: 2,
		ageByStandard: 8,
		boys: 27,
		girls: 23,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.894Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9d',
		},
		class: '4',
		noOfSections: 2,
		ageByStandard: 9,
		boys: 27,
		girls: 28,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.894Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9e',
		},
		class: '5',
		noOfSections: 2,
		ageByStandard: 10,
		boys: 29,
		girls: 22,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.894Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9a9f',
		},
		class: '6',
		noOfSections: 2,
		ageByStandard: 11,
		boys: 26,
		girls: 23,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.895Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9aa0',
		},
		class: '7',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 22,
		girls: 20,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.895Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9aa1',
		},
		class: '8',
		noOfSections: 2,
		ageByStandard: 13,
		boys: 27,
		girls: 23,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.896Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9aa2',
		},
		class: '9',
		noOfSections: 2,
		ageByStandard: 14,
		boys: 25,
		girls: 21,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.896Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9aa3',
		},
		class: '10',
		noOfSections: 2,
		ageByStandard: 15,
		boys: 22,
		girls: 21,
		avgAnnualFee: 30000,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.896Z',
		},
	},
	{
		_id: {
			$oid: '61c2b3bb0481c40008d47ca9',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 20000,
		school: {
			$oid: '61c2b3bb0481c40008d47ca8',
		},
		createdOn: {
			$date: '2021-12-22T05:12:27.254Z',
		},
	},
	{
		_id: {
			$oid: '61c2c7d50481c40008d47ccc',
		},
		class: '12',
		noOfSections: 3,
		ageByStandard: 15,
		boys: 40,
		girls: 40,
		avgAnnualFee: 120000,
		school: {
			$oid: '61c2c7d50481c40008d47cca',
		},
		createdOn: {
			$date: '2021-12-22T06:38:13.485Z',
		},
	},
	{
		_id: {
			$oid: '61c2c7d50481c40008d47ccb',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 40,
		girls: 40,
		avgAnnualFee: 120000,
		school: {
			$oid: '61c2c7d50481c40008d47cca',
		},
		createdOn: {
			$date: '2021-12-22T06:38:13.485Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb46',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 6,
		boys: 10,
		girls: 10,
		avgAnnualFee: 100,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb48',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 8,
		boys: 20,
		girls: 20,
		avgAnnualFee: 500,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb47',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 7,
		boys: 10,
		girls: 10,
		avgAnnualFee: 100,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4b',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 11,
		boys: 40,
		avgAnnualFee: 800,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4f',
		},
		class: '10',
		noOfSections: 4,
		ageByStandard: 15,
		boys: 800,
		avgAnnualFee: 5000,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.874Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4c',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 80,
		avgAnnualFee: 800,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.874Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4a',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 10,
		boys: 50,
		avgAnnualFee: 700,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4d',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 12,
		boys: 20,
		avgAnnualFee: 1000,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.874Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb4e',
		},
		class: '9',
		noOfSections: 4,
		ageByStandard: 14,
		boys: 500,
		avgAnnualFee: 2000,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.874Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb49',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 9,
		boys: 30,
		girls: 30,
		avgAnnualFee: 600,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.873Z',
		},
	},
	{
		_id: {
			$oid: '61c468149a97b900085caaa2',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 1500,
		school: {
			$oid: '61c468149a97b900085caaa1',
		},
		createdOn: {
			$date: '2021-12-23T12:14:12.659Z',
		},
	},
	{
		_id: {
			$oid: '61c4686b9a97b900085caab5',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 11,
		avgAnnualFee: 15000,
		school: {
			$oid: '61c4686b9a97b900085caab4',
		},
		createdOn: {
			$date: '2021-12-23T12:15:39.258Z',
		},
	},
	{
		_id: {
			$oid: '61c9bce61f64a40009fb966a',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 14,
		boys: 35,
		girls: 35,
		avgAnnualFee: 45000,
		school: {
			$oid: '61c9bce61f64a40009fb9669',
		},
		createdOn: {
			$date: '2021-12-27T13:17:26.919Z',
		},
	},
	{
		_id: {
			$oid: '61c9bce61f64a40009fb966b',
		},
		class: '12',
		noOfSections: 5,
		ageByStandard: 15,
		boys: 45,
		girls: 45,
		avgAnnualFee: 50000,
		school: {
			$oid: '61c9bce61f64a40009fb9669',
		},
		createdOn: {
			$date: '2021-12-27T13:17:26.919Z',
		},
	},
	{
		_id: {
			$oid: '61cbf3641f64a40009fb9687',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 12340,
		school: {
			$oid: '61cbf3641f64a40009fb9686',
		},
		createdOn: {
			$date: '2021-12-29T05:34:28.935Z',
		},
	},
	{
		_id: {
			$oid: '61d293f9f28ea900097c6070',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 10,
		girls: 10,
		avgAnnualFee: 300,
		school: {
			$oid: '61d293f9f28ea900097c606d',
		},
		createdOn: {
			$date: '2022-01-03T06:13:13.742Z',
		},
	},
	{
		_id: {
			$oid: '61d293f9f28ea900097c606f',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 10,
		girls: 10,
		avgAnnualFee: 200,
		school: {
			$oid: '61d293f9f28ea900097c606d',
		},
		createdOn: {
			$date: '2022-01-03T06:13:13.742Z',
		},
	},
	{
		_id: {
			$oid: '61d293f9f28ea900097c606e',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 0,
		school: {
			$oid: '61d293f9f28ea900097c606d',
		},
		createdOn: {
			$date: '2022-01-03T06:13:13.741Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccaca1c66a00095cc83e',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 15,
		boys: 50,
		girls: 50,
		avgAnnualFee: 30000,
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:08.146Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccaca1c66a00095cc83f',
		},
		class: '12',
		noOfSections: 2,
		ageByStandard: 16,
		boys: 45,
		girls: 55,
		avgAnnualFee: 50000,
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:08.146Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee02a1c66a00095cc89a',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 20,
		girls: 15,
		avgAnnualFee: 32000,
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:38.544Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee02a1c66a00095cc89b',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 30,
		girls: 30,
		avgAnnualFee: 40000,
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:38.544Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee02a1c66a00095cc899',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 20,
		girls: 10,
		avgAnnualFee: 30000,
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:38.544Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc91d',
		},
		class: '1',
		noOfSections: 4,
		ageByStandard: 7,
		boys: 20,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc91e',
		},
		class: '2',
		noOfSections: 3,
		ageByStandard: 8,
		boys: 20,
		girls: 25,
		avgAnnualFee: 25000,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc91f',
		},
		class: '3',
		noOfSections: 3,
		ageByStandard: 10,
		boys: 30,
		girls: 25,
		avgAnnualFee: 20000,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc920',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 11,
		boys: 35,
		girls: 30,
		avgAnnualFee: 30000,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61d696af64216b0007f3f3a9',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:13:51.347Z',
		},
	},
	{
		_id: {
			$oid: '61d6976664216b0007f3f3aa',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:16:54.895Z',
		},
	},
	{
		_id: {
			$oid: '61d6977964216b0007f3f3ab',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:17:13.961Z',
		},
	},
	{
		_id: {
			$oid: '61d6978364216b0007f3f3ac',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:17:23.068Z',
		},
	},
	{
		_id: {
			$oid: '61d6979164216b0007f3f3ad',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:17:37.368Z',
		},
	},
	{
		_id: {
			$oid: '61d6987964216b0007f3f3ae',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:21:29.215Z',
		},
	},
	{
		_id: {
			$oid: '61d6988364216b0007f3f3af',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		girls: 10,
		avgAnnualFee: 10,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-01-06T07:21:39.439Z',
		},
	},
	{
		_id: {
			$oid: '61dd61789899370009c5b9b3',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 30,
		girls: 35,
		avgAnnualFee: 25000,
		school: {
			$oid: '61dd61789899370009c5b9b2',
		},
		createdOn: {
			$date: '2022-01-11T10:52:40.660Z',
		},
	},
	{
		_id: {
			$oid: '61dd61789899370009c5b9b4',
		},
		class: '12',
		noOfSections: 4,
		ageByStandard: 14,
		boys: 30,
		girls: 35,
		avgAnnualFee: 30000,
		school: {
			$oid: '61dd61789899370009c5b9b2',
		},
		createdOn: {
			$date: '2022-01-11T10:52:40.660Z',
		},
	},
	{
		_id: {
			$oid: '61dde4c09899370009c5b9c8',
		},
		class: 'N/Pg',
		noOfSections: 4,
		ageByStandard: 4,
		boys: 100,
		girls: 100,
		avgAnnualFee: 40000,
		school: {
			$oid: '61dde4c09899370009c5b9c7',
		},
		createdOn: {
			$date: '2022-01-11T20:12:48.257Z',
		},
	},
	{
		_id: {
			$oid: '61de67749899370009c5b9e8',
		},
		class: '11',
		noOfSections: 4,
		ageByStandard: 13,
		boys: 30,
		girls: 35,
		avgAnnualFee: 25000,
		school: {
			$oid: '61de67749899370009c5b9e7',
		},
		createdOn: {
			$date: '2022-01-12T05:30:28.962Z',
		},
	},
	{
		_id: {
			$oid: '61de67749899370009c5b9e9',
		},
		class: '12',
		noOfSections: 4,
		ageByStandard: 15,
		boys: 30,
		girls: 35,
		avgAnnualFee: 30000,
		school: {
			$oid: '61de67749899370009c5b9e7',
		},
		createdOn: {
			$date: '2022-01-12T05:30:28.963Z',
		},
	},
	{
		_id: {
			$oid: '61de7adb9899370009c5b9fd',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 40,
		girls: 40,
		avgAnnualFee: 20000,
		school: {
			$oid: '61de7adb9899370009c5b9fc',
		},
		createdOn: {
			$date: '2022-01-12T06:53:15.561Z',
		},
	},
	{
		_id: {
			$oid: '61de7adb9899370009c5b9fe',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 50,
		girls: 50,
		avgAnnualFee: 30000,
		school: {
			$oid: '61de7adb9899370009c5b9fc',
		},
		createdOn: {
			$date: '2022-01-12T06:53:15.564Z',
		},
	},
	{
		_id: {
			$oid: '61dff0659899370009c5ba19',
		},
		class: '11',
		noOfSections: 3,
		ageByStandard: 13,
		boys: 30,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61dff0659899370009c5ba18',
		},
		createdOn: {
			$date: '2022-01-13T09:27:01.278Z',
		},
	},
	{
		_id: {
			$oid: '61dff0659899370009c5ba1a',
		},
		class: '12',
		noOfSections: 4,
		ageByStandard: 15,
		boys: 30,
		girls: 30,
		avgAnnualFee: 25000,
		school: {
			$oid: '61dff0659899370009c5ba18',
		},
		createdOn: {
			$date: '2022-01-13T09:27:01.278Z',
		},
	},
	{
		_id: {
			$oid: '61e1221c9899370009c5ba33',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 3,
		girls: 100,
		avgAnnualFee: 25000,
		school: {
			$oid: '61e1221c9899370009c5ba32',
		},
		createdOn: {
			$date: '2022-01-14T07:11:24.836Z',
		},
	},
	{
		_id: {
			$oid: '61e1221c9899370009c5ba34',
		},
		class: 'Sr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		girls: 100,
		avgAnnualFee: 30000,
		school: {
			$oid: '61e1221c9899370009c5ba32',
		},
		createdOn: {
			$date: '2022-01-14T07:11:24.837Z',
		},
	},
	{
		_id: {
			$oid: '61e93c580d942700088bcca1',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 111,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-20T10:41:28.134Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61e93c580d942700088bcca2',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 110,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-20T10:41:28.136Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61e93c580d942700088bcca3',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 110,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-20T10:41:28.136Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61e93c580d942700088bcca4',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		girls: 10,
		avgAnnualFee: 110,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-20T10:41:28.137Z',
		},
		boys: 0,
	},
	{
		_id: {
			$oid: '61ea4bc10d942700088bccb5',
		},
		class: '12',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61ea4bc10d942700088bccb3',
		},
		createdOn: {
			$date: '2022-01-21T05:59:29.700Z',
		},
	},
	{
		_id: {
			$oid: '61ea4bc10d942700088bccb4',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61ea4bc10d942700088bccb3',
		},
		createdOn: {
			$date: '2022-01-21T05:59:29.699Z',
		},
	},
	{
		_id: {
			$oid: '61eeb0c20d942700088bccdc',
		},
		class: '11',
		noOfSections: 4,
		ageByStandard: 17,
		boys: 230,
		girls: 124,
		avgAnnualFee: 45600,
		school: {
			$oid: '61eeb0c20d942700088bccdb',
		},
		createdOn: {
			$date: '2022-01-24T13:59:30.650Z',
		},
	},
	{
		_id: {
			$oid: '61eeb0c20d942700088bccdd',
		},
		class: '12',
		noOfSections: 4,
		ageByStandard: 18,
		boys: 120,
		girls: 200,
		avgAnnualFee: 50000,
		school: {
			$oid: '61eeb0c20d942700088bccdb',
		},
		createdOn: {
			$date: '2022-01-24T13:59:30.650Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778eb',
		},
		class: 'N/Pg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 500000,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.577Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778ec',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 50000,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.577Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778ef',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 500000,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.578Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778ed',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 500000,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.577Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778ee',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 50000,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.577Z',
		},
	},
	{
		_id: {
			$oid: '61f4ffe0ca22230008f77928',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 12,
		boys: 23,
		girls: 22,
		avgAnnualFee: 3232,
		school: {
			$oid: '61f4ffe0ca22230008f77927',
		},
		createdOn: {
			$date: '2022-01-29T08:50:40.668Z',
		},
	},
	{
		_id: {
			$oid: '61fa2c9798f2b3000829f61b',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 20,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61fa2c9698f2b3000829f61a',
		},
		createdOn: {
			$date: '2022-02-02T07:02:47.053Z',
		},
	},
	{
		_id: {
			$oid: '61fa2c9798f2b3000829f61c',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 18,
		girls: 20,
		avgAnnualFee: 20000,
		school: {
			$oid: '61fa2c9698f2b3000829f61a',
		},
		createdOn: {
			$date: '2022-02-02T07:02:47.054Z',
		},
	},
	{
		_id: {
			$oid: '61fa619098f2b3000829f65d',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61fa619098f2b3000829f65b',
		},
		createdOn: {
			$date: '2022-02-02T10:48:48.218Z',
		},
	},
	{
		_id: {
			$oid: '61fa619098f2b3000829f65c',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 1,
		girls: 1,
		avgAnnualFee: 1,
		school: {
			$oid: '61fa619098f2b3000829f65b',
		},
		createdOn: {
			$date: '2022-02-02T10:48:48.218Z',
		},
	},
	{
		_id: {
			$oid: '61fb607998f2b3000829f673',
		},
		class: 'Jr.Kg',
		noOfSections: 1,
		ageByStandard: 4,
		boys: 10,
		girls: 10,
		avgAnnualFee: 10000,
		school: {
			$oid: '61fb607898f2b3000829f672',
		},
		createdOn: {
			$date: '2022-02-03T04:56:25.118Z',
		},
	},
	{
		_id: {
			$oid: '61fb607998f2b3000829f674',
		},
		class: 'Sr.Kg',
		noOfSections: 1,
		ageByStandard: 5,
		boys: 10,
		girls: 10,
		avgAnnualFee: 15000,
		school: {
			$oid: '61fb607898f2b3000829f672',
		},
		createdOn: {
			$date: '2022-02-03T04:56:25.118Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf07',
		},
		class: 'N/Pg',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 1500,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.703Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf08',
		},
		class: 'Jr.Kg',
		noOfSections: 2,
		ageByStandard: 4,
		boys: 50,
		girls: 50,
		avgAnnualFee: 1700,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.703Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf09',
		},
		class: 'Sr.Kg',
		noOfSections: 3,
		ageByStandard: 5,
		boys: 60,
		girls: 60,
		avgAnnualFee: 2000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.703Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0a',
		},
		class: '1',
		noOfSections: 3,
		ageByStandard: 6,
		boys: 60,
		girls: 70,
		avgAnnualFee: 2500,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.703Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0b',
		},
		class: '2',
		noOfSections: 4,
		ageByStandard: 7,
		boys: 70,
		girls: 70,
		avgAnnualFee: 3500,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.703Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0c',
		},
		class: '3',
		noOfSections: 4,
		ageByStandard: 8,
		boys: 80,
		girls: 80,
		avgAnnualFee: 5000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0d',
		},
		class: '4',
		noOfSections: 3,
		ageByStandard: 9,
		boys: 70,
		girls: 70,
		avgAnnualFee: 8000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0e',
		},
		class: '5',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 70,
		girls: 70,
		avgAnnualFee: 9000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf0f',
		},
		class: '6',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 10000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf10',
		},
		class: '7',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 40,
		girls: 40,
		avgAnnualFee: 10010,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf11',
		},
		class: '8',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 40,
		girls: 40,
		avgAnnualFee: 11000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf12',
		},
		class: '9',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 12000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.704Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf13',
		},
		class: '10',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 50,
		girls: 50,
		avgAnnualFee: 13000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.705Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf14',
		},
		class: '11',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 60,
		girls: 60,
		avgAnnualFee: 14000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.705Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf15',
		},
		class: '12',
		noOfSections: 2,
		ageByStandard: 3,
		boys: 70,
		girls: 70,
		avgAnnualFee: 20000,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.705Z',
		},
	},
	{
		_id: {
			$oid: '62039c6f69f6fe0008a5d132',
		},
		class: '1',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 10,
		avgAnnualFee: 100,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-09T10:50:23.173Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '62039c6f69f6fe0008a5d133',
		},
		class: '2',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 20,
		avgAnnualFee: 200,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-09T10:50:23.176Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '62039c6f69f6fe0008a5d134',
		},
		class: '3',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 30,
		avgAnnualFee: 300,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-09T10:50:23.179Z',
		},
		girls: 0,
	},
	{
		_id: {
			$oid: '62039c6f69f6fe0008a5d135',
		},
		class: '4',
		noOfSections: 1,
		ageByStandard: 3,
		boys: 40,
		avgAnnualFee: 400,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-09T10:50:23.181Z',
		},
		girls: 0,
	},
];
export default data;
