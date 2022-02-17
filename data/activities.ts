const data = [
	{
		_id: {
			$oid: '611902f343e0980009967fd8',
		},
		name: 'Independence Day',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611902f343e0980009967fd3',
		},
		createdOn: {
			$date: '2021-08-15T12:05:07.474Z',
		},
	},
	{
		_id: {
			$oid: '611902f343e0980009967fd9',
		},
		name: 'School Reunion',
		venue: ['Assembly Hall'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '611902f343e0980009967fd3',
		},
		createdOn: {
			$date: '2021-08-15T12:05:07.475Z',
		},
	},
	{
		_id: {
			$oid: '611938a31c7c0b0008718031',
		},
		name: 'Summer Camp',
		venue: ['Canteen'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611938a31c7c0b000871802d',
		},
		createdOn: {
			$date: '2021-08-15T15:54:11.322Z',
		},
	},
	{
		_id: {
			$oid: '611938a31c7c0b0008718032',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611938a31c7c0b000871802d',
		},
		createdOn: {
			$date: '2021-08-15T15:54:11.322Z',
		},
	},
	{
		_id: {
			$oid: '611a723f7a200a00084cdcc4',
		},
		name: 'Christmas Party',
		venue: ['School Gate'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '611a723f7a200a00084cdcbc',
		},
		createdOn: {
			$date: '2021-08-16T14:12:15.296Z',
		},
	},
	{
		_id: {
			$oid: '611a723f7a200a00084cdcc5',
		},
		name: 'Republic Day Celebration',
		venue: ['Canteen'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '611a723f7a200a00084cdcbc',
		},
		createdOn: {
			$date: '2021-08-16T14:12:15.296Z',
		},
	},
	{
		_id: {
			$oid: '611a723f7a200a00084cdcc6',
		},
		name: 'Holi',
		venue: [],
		custom: true,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611a723f7a200a00084cdcbc',
		},
		createdOn: {
			$date: '2021-08-16T14:12:15.296Z',
		},
	},
	{
		_id: {
			$oid: '611a7a447a200a00084cdd00',
		},
		name: 'Independence Day',
		venue: ['Canteen', 'Sports Ground'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '611a7a447a200a00084cdcfb',
		},
		createdOn: {
			$date: '2021-08-16T14:46:28.251Z',
		},
	},
	{
		_id: {
			$oid: '611a7a447a200a00084cdd01',
		},
		name: 'Diwali Party',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611a7a447a200a00084cdcfb',
		},
		createdOn: {
			$date: '2021-08-16T14:46:28.251Z',
		},
	},
	{
		_id: {
			$oid: '611a7a447a200a00084cdd02',
		},
		name: 'Republic Day Celebration',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611a7a447a200a00084cdcfb',
		},
		createdOn: {
			$date: '2021-08-16T14:46:28.251Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd32',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd33',
		},
		name: 'Independence Day',
		venue: ['Auditorium'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.091Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd34',
		},
		name: 'Summer Camp',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.092Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd35',
		},
		name: 'Gender Education Session',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.093Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd36',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.093Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd37',
		},
		name: 'Dental Health Week',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.093Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd38',
		},
		name: 'Diwali Party',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.093Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd39',
		},
		name: 'Christmas Party',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.093Z',
		},
	},
	{
		_id: {
			$oid: '611b7d5f7a200a00084cdd3a',
		},
		name: 'Republic Day Celebration',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b7d5e7a200a00084cdd27',
		},
		createdOn: {
			$date: '2021-08-17T09:11:59.094Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd70',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.519Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd71',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.520Z',
		},
	},
	{
		_id: {
			$oid: '611b80e87a200a00084cdd72',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e87a200a00084cdd60',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.520Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddb0',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddb1',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddb2',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e87a200a00084cdda0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:04.999Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddf1',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.367Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddf2',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.367Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cddf3',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cdde0',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.367Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde32',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.506Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde33',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.506Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde34',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cdde2',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.506Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde76',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.770Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde77',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.771Z',
		},
	},
	{
		_id: {
			$oid: '611b80e97a200a00084cde78',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde04',
		},
		createdOn: {
			$date: '2021-08-17T09:27:05.771Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde94',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde95',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cde96',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde03',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.196Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdecf',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.233Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cded0',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.233Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cded1',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde40',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.233Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdee9',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdeea',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.240Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdeeb',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde41',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.241Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf03',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.247Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf04',
		},
		name: 'School Reunion',
		venue: ['Auditorium'],
		custom: false,
		months: 'none',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.247Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf05',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde42',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.247Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1d',
		},
		name: 'School fest',
		venue: ['Auditorium'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1e',
		},
		name: 'School Reunion',
		venue: ['Auditorium'],
		custom: false,
		months: 'none',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.255Z',
		},
	},
	{
		_id: {
			$oid: '611b80ea7a200a00084cdf1f',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '611b80e97a200a00084cde43',
		},
		createdOn: {
			$date: '2021-08-17T09:27:06.256Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfee',
		},
		name: 'School fest',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdfef',
		},
		name: 'Independence Day',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff0',
		},
		name: 'Summer Camp',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff1',
		},
		name: 'Gender Education Session',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff2',
		},
		name: 'School Reunion',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff3',
		},
		name: 'Dental Health Week',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff4',
		},
		name: 'Diwali Party',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff5',
		},
		name: 'Christmas Party',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba0d57a200a00084cdff6',
		},
		name: 'Republic Day Celebration',
		venue: ['Notice Board'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '611ba0d57a200a00084cdfe6',
		},
		createdOn: {
			$date: '2021-08-17T11:43:17.871Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce016',
		},
		name: 'School fest',
		venue: [
			'Assembly Hall',
			'Notice Board',
			'Canteen',
			'Sports Ground',
			'School Bus',
			'School Gate',
			'Auditorium',
		],
		custom: false,
		months: 'none',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.391Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce017',
		},
		name: 'Independence Day',
		venue: ['Assembly Hall'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.392Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce018',
		},
		name: 'Summer Camp',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.392Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce019',
		},
		name: 'Gender Education Session',
		venue: [
			'Auditorium',
			'Assembly Hall',
			'Canteen',
			'Notice Board',
			'School Bus',
		],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.392Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce01a',
		},
		name: 'School Reunion',
		venue: [
			'Auditorium',
			'Canteen',
			'Assembly Hall',
			'Notice Board',
			'School Gate',
		],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.392Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce01b',
		},
		name: 'Dental Health Week',
		venue: ['Auditorium'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.392Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce01c',
		},
		name: 'Diwali Party',
		venue: ['Auditorium', 'Sports Ground', 'Assembly Hall'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.393Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce01d',
		},
		name: 'Christmas Party',
		venue: [
			'Canteen',
			'Auditorium',
			'Assembly Hall',
			'Notice Board',
			'Sports Ground',
			'Staff Room',
			'School Bus',
			'School Gate',
		],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.393Z',
		},
	},
	{
		_id: {
			$oid: '611ba1e37a200a00084ce01e',
		},
		name: 'Republic Day Celebration',
		venue: [
			'Auditorium',
			'Canteen',
			'Assembly Hall',
			'Staff Room',
			'Notice Board',
			'Sports Ground',
			'School Bus',
			'School Gate',
		],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '611ba1e37a200a00084ce004',
		},
		createdOn: {
			$date: '2021-08-17T11:47:47.393Z',
		},
	},
	{
		_id: {
			$oid: '611dcc88233ed20008e79682',
		},
		name: 'Independence Day',
		venue: ['Staff Room'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '611dcc88233ed20008e79673',
		},
		createdOn: {
			$date: '2021-08-19T03:14:16.515Z',
		},
	},
	{
		_id: {
			$oid: '611e00d7233ed20008e7969e',
		},
		name: "Children's day",
		venue: ['Auditorium'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '611e00d6233ed20008e79697',
		},
		createdOn: {
			$date: '2021-08-19T06:57:27.028Z',
		},
	},
	{
		_id: {
			$oid: '611f8bed54125b00087e11e8',
		},
		name: 'Parent Teacher Meetings',
		venue: ['Auditorium'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '611f8bec54125b00087e11e0',
		},
		createdOn: {
			$date: '2021-08-20T11:03:09.053Z',
		},
	},
	{
		_id: {
			$oid: '612a23dbf99b4d0008828e42',
		},
		name: 'School Fest',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '612a23dbf99b4d0008828e3e',
		},
		createdOn: {
			$date: '2021-08-28T11:54:03.651Z',
		},
	},
	{
		_id: {
			$oid: '612b59f8f99b4d0008828e49',
		},
		name: 'School Fest',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '612b59f8f99b4d0008828e46',
		},
		createdOn: {
			$date: '2021-08-29T09:57:12.828Z',
		},
	},
	{
		_id: {
			$oid: '612df7a4f99b4d0008828e5e',
		},
		name: 'Summer Camp',
		venue: ['Auditorium'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '612df7a4f99b4d0008828e4e',
		},
		createdOn: {
			$date: '2021-08-31T09:34:28.749Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba7d',
		},
		name: "Children's day",
		venue: ['Water Tank', 'Assembly Hall'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.742Z',
		},
	},
	{
		_id: {
			$oid: '6130c14611ac8900088aba7e',
		},
		name: 'Holi',
		venue: ['Water Tank', 'Assembly Hall'],
		custom: true,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '6130c14611ac8900088aba76',
		},
		createdOn: {
			$date: '2021-09-02T12:19:18.742Z',
		},
	},
	{
		_id: {
			$oid: '613ae846ed036e00082d3f00',
		},
		name: 'School Fest',
		venue: ['Canteen', 'Staff Room'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '613ae846ed036e00082d3efb',
		},
		createdOn: {
			$date: '2021-09-10T05:08:22.900Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f0e',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.830Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f0f',
		},
		name: 'Diwali Party',
		venue: ['Auditorium', 'Staff Room', 'Assembly Hall', 'Canteen'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.830Z',
		},
	},
	{
		_id: {
			$oid: '613aea21ed036e00082d3f10',
		},
		name: 'Christmas Party',
		venue: ['Auditorium', 'Canteen'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T05:16:17.830Z',
		},
	},
	{
		_id: {
			$oid: '613afbaced036e00082d3f29',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '613afbabed036e00082d3f25',
		},
		createdOn: {
			$date: '2021-09-10T06:31:08.086Z',
		},
	},
	{
		_id: {
			$oid: '613b26afef861d00094c23e6',
		},
		name: 'Dental Health Week',
		venue: ['Staff Room'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '613aea21ed036e00082d3f09',
		},
		createdOn: {
			$date: '2021-09-10T09:34:39.808Z',
		},
	},
	{
		_id: {
			$oid: '613b2982ef861d00094c23ee',
		},
		name: 'Diwali Party',
		venue: ['Canteen', 'Auditorium'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '613b2982ef861d00094c23e9',
		},
		createdOn: {
			$date: '2021-09-10T09:46:42.186Z',
		},
	},
	{
		_id: {
			$oid: '613b2982ef861d00094c23ef',
		},
		name: 'Ganapati Festival',
		venue: ['Assembly Hall'],
		custom: true,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '613b2982ef861d00094c23e9',
		},
		createdOn: {
			$date: '2021-09-10T09:46:42.186Z',
		},
	},
	{
		_id: {
			$oid: '613b29dbef861d00094c2400',
		},
		name: 'School Fest',
		venue: ['Canteen'],
		custom: false,
		months: 'July',
		availableForBranding: true,
		school: {
			$oid: '613b29daef861d00094c23fd',
		},
		createdOn: {
			$date: '2021-09-10T09:48:10.984Z',
		},
	},
	{
		_id: {
			$oid: '613b3751ef861d00094c2410',
		},
		name: "Children's day",
		venue: ['Auditorium', 'Assembly Hall'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:45:37.716Z',
		},
	},
	{
		_id: {
			$oid: '613b3751ef861d00094c2411',
		},
		name: 'Holi',
		venue: ['Canteen', 'Assembly Hall'],
		custom: true,
		months: 'July',
		availableForBranding: true,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-10T10:45:37.719Z',
		},
	},
	{
		_id: {
			$oid: '613e193b30ec520007114538',
		},
		name: 'Sports Day',
		venue: ['Auditorium'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '613e193b30ec52000711452a',
		},
		createdOn: {
			$date: '2021-09-12T15:14:03.142Z',
		},
	},
	{
		_id: {
			$oid: '613ecb2030ec52000711454b',
		},
		name: 'Summer Camp',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '613ecb2030ec520007114547',
		},
		createdOn: {
			$date: '2021-09-13T03:53:04.304Z',
		},
	},
	{
		_id: {
			$oid: '613f1f21eec99a0009899823',
		},
		name: 'Summer Camp',
		venue: ['Canteen'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '613f1f21eec99a000989981f',
		},
		createdOn: {
			$date: '2021-09-13T09:51:29.674Z',
		},
	},
	{
		_id: {
			$oid: '61407d4f6dc55b000898ed69',
		},
		name: 'Ganpati Celebration',
		venue: ['Assembly Hall', 'Notice Board'],
		custom: true,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '613ae846ed036e00082d3efb',
		},
		createdOn: {
			$date: '2021-09-14T10:45:35.542Z',
		},
	},
	{
		_id: {
			$oid: '614082086dc55b000898ed6d',
		},
		name: 'Republic Day Celebration',
		venue: ['Science Lab', 'Auditorium'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '613b3751ef861d00094c240b',
		},
		createdOn: {
			$date: '2021-09-14T11:05:44.619Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb489',
		},
		name: 'School Fest',
		venue: [
			'Others',
			'Auditorium',
			'Canteen',
			'Assembly Hall',
			'Staff Room',
			'Notice Board',
			'Sports Ground',
			'School Bus',
			'School Gate',
			'Water Coolers',
			'Washrooms',
			'Science Lab',
			'Music Class',
			'Hallway',
			'Computer Lab',
		],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.819Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48a',
		},
		name: 'Independence Day Celebration',
		venue: ['Computer Lab', 'Music Class', 'Washrooms', 'Science Lab'],
		custom: false,
		months: 'March',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.819Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48b',
		},
		name: 'Summer Camp',
		venue: ['Assembly Hall', 'Notice Board', 'Staff Room', 'Sports Ground'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.819Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48c',
		},
		name: 'Sports Day',
		venue: ['Auditorium'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.819Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48d',
		},
		name: 'Annual Day',
		venue: ['Assembly Hall', 'Auditorium', 'Others'],
		custom: false,
		months: 'Sep',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.820Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48e',
		},
		name: 'Gender Education Session',
		venue: ['Assembly Hall', 'School Gate', 'Computer Lab', 'Others'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.820Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb48f',
		},
		name: 'Parent Teacher Meetings',
		venue: ['Assembly Hall', 'Notice Board', 'School Gate', 'Washrooms'],
		custom: false,
		months: 'July',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.820Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb490',
		},
		name: 'School Reunion',
		venue: ['Staff Room', 'Computer Lab', 'Science Lab', 'Music Class'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.820Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb491',
		},
		name: 'Dental Health Week',
		venue: ['Assembly Hall', 'Computer Lab', 'Water Coolers', 'School Bus'],
		custom: false,
		months: 'June',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.820Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb492',
		},
		name: 'Diwali Party',
		venue: ['Staff Room', 'Sports Ground'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.821Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb493',
		},
		name: 'Christmas Party',
		venue: ['Washrooms', 'Science Lab', 'Others'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.821Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb494',
		},
		name: 'Republic Day Celebration',
		venue: ['Staff Room', 'Sports Ground'],
		custom: false,
		months: 'July',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.821Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb495',
		},
		name: "Children's day",
		venue: ['Hallway', 'Computer Lab'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.821Z',
		},
	},
	{
		_id: {
			$oid: '6143a0c1090e67000baeb496',
		},
		name: 'New years eve',
		venue: ['Assembly Hall', 'Staff Room'],
		custom: true,
		months: 'July',
		availableForBranding: true,
		school: {
			$oid: '6143a0c1090e67000baeb478',
		},
		createdOn: {
			$date: '2021-09-16T19:53:37.822Z',
		},
	},
	{
		_id: {
			$oid: '614439f2090e67000baeb508',
		},
		name: 'Independence Day Celebration',
		venue: ['Auditorium', 'Canteen'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614439f2090e67000baeb505',
		},
		createdOn: {
			$date: '2021-09-17T06:47:14.690Z',
		},
	},
	{
		_id: {
			$oid: '614439f2090e67000baeb509',
		},
		name: 'Sports Day',
		venue: [],
		custom: false,
		months: 'none',
		availableForBranding: false,
		school: {
			$oid: '614439f2090e67000baeb505',
		},
		createdOn: {
			$date: '2021-09-17T06:47:14.690Z',
		},
	},
	{
		_id: {
			$oid: '61444175090e67000baeb516',
		},
		name: "Children's day",
		venue: ['Auditorium'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:19:17.092Z',
		},
	},
	{
		_id: {
			$oid: '61444175090e67000baeb517',
		},
		name: 'Diwali party 2',
		venue: ['Water Tank 2'],
		custom: true,
		months: 'Apr',
		availableForBranding: true,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:19:17.092Z',
		},
	},
	{
		_id: {
			$oid: '614442a0090e67000baeb532',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium', 'Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '61444174090e67000baeb511',
		},
		createdOn: {
			$date: '2021-09-17T07:24:16.939Z',
		},
	},
	{
		_id: {
			$oid: '614865a532e4ba0008098c41',
		},
		name: 'Christmas Party',
		venue: ['Water Tank'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:42:45.894Z',
		},
	},
	{
		_id: {
			$oid: '614865a532e4ba0008098c42',
		},
		name: 'Holi',
		venue: ['Canteen', 'Others'],
		custom: true,
		months: 'Oct',
		availableForBranding: true,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:42:45.895Z',
		},
	},
	{
		_id: {
			$oid: '6148680732e4ba0008098c68',
		},
		name: 'Diwali Party',
		venue: ['Water Tank', 'Others'],
		custom: false,
		months: 'Apr',
		availableForBranding: true,
		school: {
			$oid: '614865a532e4ba0008098c3c',
		},
		createdOn: {
			$date: '2021-09-20T10:52:55.465Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5dd',
		},
		name: 'Independence Day Celebration',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.416Z',
		},
	},
	{
		_id: {
			$oid: '614ac292858405000a58d5de',
		},
		name: 'Bazaar',
		venue: [],
		custom: true,
		months: '',
		availableForBranding: false,
		school: {
			$oid: '614ac292858405000a58d5d4',
		},
		createdOn: {
			$date: '2021-09-22T05:43:46.417Z',
		},
	},
	{
		_id: {
			$oid: '614c353f858405000a58d600',
		},
		name: "Children's day",
		venue: ['Staff Room', 'Others'],
		custom: false,
		months: 'Mar',
		availableForBranding: true,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:05:19.080Z',
		},
	},
	{
		_id: {
			$oid: '614c353f858405000a58d601',
		},
		name: 'Holi',
		venue: ['Canteen', 'Others'],
		custom: true,
		months: 'Jul',
		availableForBranding: true,
		school: {
			$oid: '614c353e858405000a58d5fb',
		},
		createdOn: {
			$date: '2021-09-23T08:05:19.080Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d61a',
		},
		name: 'School Fest',
		venue: ['Others'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d61b',
		},
		name: 'Independence Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d61c',
		},
		name: 'Annual Day',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d61d',
		},
		name: 'Republic Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.616Z',
		},
	},
	{
		_id: {
			$oid: '614c356f858405000a58d61e',
		},
		name: "Children's day",
		venue: ['Others'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '614c356f858405000a58d60e',
		},
		createdOn: {
			$date: '2021-09-23T08:06:07.617Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64e',
		},
		name: 'School Fest',
		venue: ['Others'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d64f',
		},
		name: 'Independence Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d650',
		},
		name: 'Annual Day',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d651',
		},
		name: 'Republic Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3572858405000a58d652',
		},
		name: "Children's day",
		venue: ['Others'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '614c3572858405000a58d642',
		},
		createdOn: {
			$date: '2021-09-23T08:06:10.187Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d682',
		},
		name: 'School Fest',
		venue: ['Others'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d683',
		},
		name: 'Independence Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Aug',
		availableForBranding: true,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d684',
		},
		name: 'Annual Day',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d685',
		},
		name: 'Republic Day Celebration',
		venue: ['Others'],
		custom: false,
		months: 'Jan',
		availableForBranding: true,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614c3574858405000a58d686',
		},
		name: "Children's day",
		venue: ['Others'],
		custom: false,
		months: 'Nov',
		availableForBranding: true,
		school: {
			$oid: '614c3574858405000a58d676',
		},
		createdOn: {
			$date: '2021-09-23T08:06:12.943Z',
		},
	},
	{
		_id: {
			$oid: '614efa7e142d520008ac75a4',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '614efa7d142d520008ac75a1',
		},
		createdOn: {
			$date: '2021-09-25T10:31:26.143Z',
		},
	},
	{
		_id: {
			$oid: '614efa7e142d520008ac75a5',
		},
		name: 'music fest',
		venue: ['Music Class'],
		custom: true,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '614efa7d142d520008ac75a1',
		},
		createdOn: {
			$date: '2021-09-25T10:31:26.144Z',
		},
	},
	{
		_id: {
			$oid: '61534b65142d520008ac75c4',
		},
		name: "Children's day",
		venue: ['Canteen'],
		custom: false,
		months: 'Apr',
		availableForBranding: true,
		school: {
			$oid: '61534b65142d520008ac75bf',
		},
		createdOn: {
			$date: '2021-09-28T17:05:41.673Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d6',
		},
		name: 'School Reunion',
		venue: ['Notice Board'],
		custom: false,
		months: 'Apr',
		availableForBranding: true,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d7',
		},
		name: 'Dental Health Week',
		venue: ['Others'],
		custom: false,
		months: 'Dec',
		availableForBranding: true,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d8',
		},
		name: 'Christmas Party',
		venue: ['Water Coolers'],
		custom: false,
		months: 'Oct',
		availableForBranding: true,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75d9',
		},
		name: "Children's day",
		venue: ['School Bus'],
		custom: false,
		months: 'May',
		availableForBranding: true,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61544a30142d520008ac75da',
		},
		name: 'Holi',
		venue: ['School Bus'],
		custom: true,
		months: 'May',
		availableForBranding: true,
		school: {
			$oid: '61544a30142d520008ac75cd',
		},
		createdOn: {
			$date: '2021-09-29T11:12:48.472Z',
		},
	},
	{
		_id: {
			$oid: '61555be1142d520008ac761c',
		},
		name: 'Sports Day',
		venue: ['Auditorium'],
		custom: false,
		months: 'Mar',
		availableForBranding: true,
		school: {
			$oid: '61555be1142d520008ac760b',
		},
		createdOn: {
			$date: '2021-09-30T06:40:33.933Z',
		},
	},
	{
		_id: {
			$oid: '615d6667142d520008ac7625',
		},
		name: 'Annual Day',
		venue: ['Auditorium'],
		custom: false,
		months: 'Feb',
		availableForBranding: true,
		school: {
			$oid: '615d6667142d520008ac7621',
		},
		createdOn: {
			$date: '2021-10-06T09:03:35.226Z',
		},
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
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
	},
	{
		_id: {
			$oid: '61a79686388ffb000751b621',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Mar', 'Apr'],
		availableForBranding: true,
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:38.365Z',
		},
	},
	{
		_id: {
			$oid: '61a79686388ffb000751b622',
		},
		name: 'Annual Day',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:38.365Z',
		},
	},
	{
		_id: {
			$oid: '61a79686388ffb000751b623',
		},
		name: 'School Fest',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:38.366Z',
		},
	},
	{
		_id: {
			$oid: '61a79686388ffb000751b624',
		},
		name: 'Independence Day Celebration',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61a79686388ffb000751b61f',
		},
		createdOn: {
			$date: '2021-12-01T15:36:38.366Z',
		},
	},
	{
		_id: {
			$oid: '61ae1bea9348190008b7cc03',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61ae1bea9348190008b7cbfe',
		},
		createdOn: {
			$date: '2021-12-06T14:19:22.603Z',
		},
	},
	{
		_id: {
			$oid: '61af2b769348190008b7cc6e',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Jan', 'May'],
		availableForBranding: true,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-07T09:37:58.037Z',
		},
	},
	{
		_id: {
			$oid: '61b0ad1c9348190008b7ccb1',
		},
		name: 'Sports Day',
		venue: ['Canteen'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61b0ad1c9348190008b7ccaf',
		},
		createdOn: {
			$date: '2021-12-08T13:03:24.365Z',
		},
	},
	{
		_id: {
			$oid: '61b0ad1c9348190008b7ccb2',
		},
		name: "Children's Day",
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61b0ad1c9348190008b7ccaf',
		},
		createdOn: {
			$date: '2021-12-08T13:03:24.365Z',
		},
	},
	{
		_id: {
			$oid: '61b18cbe9348190008b7ccca',
		},
		name: "Children's Day",
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61b18cbe9348190008b7ccc8',
		},
		createdOn: {
			$date: '2021-12-09T04:57:34.166Z',
		},
	},
	{
		_id: {
			$oid: '61b33cfd9348190008b7cce8',
		},
		name: 'Sports Day',
		venue: ['Auditorium', 'Assembly Hall'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61b33cfd9348190008b7cce6',
		},
		createdOn: {
			$date: '2021-12-10T11:41:49.286Z',
		},
	},
	{
		_id: {
			$oid: '61b84ca09348190008b7cd0e',
		},
		name: 'Annual Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61b84c9f9348190008b7cd09',
		},
		createdOn: {
			$date: '2021-12-14T07:49:51.998Z',
		},
	},
	{
		_id: {
			$oid: '61b971d49348190008b7cd3a',
		},
		name: 'Sports Day',
		venue: ['Canteen'],
		custom: false,
		months: ['Jan', 'Feb'],
		availableForBranding: true,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-15T04:40:52.611Z',
		},
	},
	{
		_id: {
			$oid: '61b973d29348190008b7cd45',
		},
		name: 'Annual Day',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-15T04:49:22.938Z',
		},
	},
	{
		_id: {
			$oid: '61b982999348190008b7cd4d',
		},
		name: 'Dental Health Week',
		venue: ['Staff Room'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2021-12-15T05:52:25.694Z',
		},
	},
	{
		_id: {
			$oid: '61bc475f696d7b0008621892',
		},
		name: 'Dental Health Week',
		venue: ['Staff Room'],
		custom: false,
		months: ['May'],
		availableForBranding: true,
		school: {
			$oid: '61af12f49348190008b7cc43',
		},
		createdOn: {
			$date: '2021-12-17T08:16:31.441Z',
		},
	},
	{
		_id: {
			$oid: '61bdcbd6696d7b000862189f',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61bdcbd6696d7b000862189a',
		},
		createdOn: {
			$date: '2021-12-18T11:53:58.271Z',
		},
	},
	{
		_id: {
			$oid: '61c031cfdc06bd00082d9a74',
		},
		name: 'Annual Day',
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61c031cfdc06bd00082d9a6e',
		},
		createdOn: {
			$date: '2021-12-20T07:33:35.927Z',
		},
	},
	{
		_id: {
			$oid: '61c16c6edc06bd00082d9aa4',
		},
		name: 'Dental Health Week',
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61c16c6edc06bd00082d9a96',
		},
		createdOn: {
			$date: '2021-12-21T05:55:58.897Z',
		},
	},
	{
		_id: {
			$oid: '61c2b3bb0481c40008d47caa',
		},
		name: "Children's Day",
		venue: ['Auditorium'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61c2b3bb0481c40008d47ca8',
		},
		createdOn: {
			$date: '2021-12-22T05:12:27.254Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb50',
		},
		name: 'Parent Teacher Meetings',
		venue: ['Auditorium'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.874Z',
		},
	},
	{
		_id: {
			$oid: '61c300ff7b2e40000800fb51',
		},
		name: 'Christmas',
		venue: ['Sports Ground', 'Other'],
		custom: true,
		months: ['Apr', 'Mar', 'Feb'],
		availableForBranding: true,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2021-12-22T10:42:07.875Z',
		},
	},
	{
		_id: {
			$oid: '61c468149a97b900085caaa3',
		},
		name: 'test',
		venue: ['Other'],
		custom: true,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61c468149a97b900085caaa1',
		},
		createdOn: {
			$date: '2021-12-23T12:14:12.660Z',
		},
	},
	{
		_id: {
			$oid: '61c4686b9a97b900085caab6',
		},
		name: 'Independence Day Celebration',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61c4686b9a97b900085caab4',
		},
		createdOn: {
			$date: '2021-12-23T12:15:39.258Z',
		},
	},
	{
		_id: {
			$oid: '61c4686b9a97b900085caab7',
		},
		name: 'test',
		venue: [],
		custom: true,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61c4686b9a97b900085caab4',
		},
		createdOn: {
			$date: '2021-12-23T12:15:39.258Z',
		},
	},
	{
		_id: {
			$oid: '61c9bce61f64a40009fb966c',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb', 'May'],
		availableForBranding: true,
		school: {
			$oid: '61c9bce61f64a40009fb9669',
		},
		createdOn: {
			$date: '2021-12-27T13:17:26.919Z',
		},
	},
	{
		_id: {
			$oid: '61cbf3641f64a40009fb9688',
		},
		name: 'test',
		venue: ['Canteen'],
		custom: true,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61cbf3641f64a40009fb9686',
		},
		createdOn: {
			$date: '2021-12-29T05:34:28.937Z',
		},
	},
	{
		_id: {
			$oid: '61d293f9f28ea900097c6071',
		},
		name: 'Annual Day',
		venue: ['Canteen'],
		custom: false,
		months: ['Apr'],
		availableForBranding: true,
		school: {
			$oid: '61d293f9f28ea900097c606d',
		},
		createdOn: {
			$date: '2022-01-03T06:13:13.742Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccaca1c66a00095cc840',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:08.154Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccaca1c66a00095cc841',
		},
		name: 'School Fest',
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:08.154Z',
		},
	},
	{
		_id: {
			$oid: '61d2ccaca1c66a00095cc842',
		},
		name: 'Teachers Day',
		venue: ['Auditorium'],
		custom: true,
		months: ['Sep'],
		availableForBranding: true,
		school: {
			$oid: '61d2ccaca1c66a00095cc83d',
		},
		createdOn: {
			$date: '2022-01-03T10:15:08.154Z',
		},
	},
	{
		_id: {
			$oid: '61d3df89a1c66a00095cc877',
		},
		name: 'School Fest',
		venue: ['Auditorium'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-04T05:47:53.733Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee02a1c66a00095cc89c',
		},
		name: 'School Fest',
		venue: ['Auditorium', 'Assembly Hall'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:38.545Z',
		},
	},
	{
		_id: {
			$oid: '61d3ee02a1c66a00095cc89d',
		},
		name: 'Republic Day Celebration',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61d3ee02a1c66a00095cc898',
		},
		createdOn: {
			$date: '2022-01-04T06:49:38.545Z',
		},
	},
	{
		_id: {
			$oid: '61d4222ca1c66a00095cc8db',
		},
		name: 'Republic Day Celebration',
		venue: ['Auditorium'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-04T10:32:12.836Z',
		},
	},
	{
		_id: {
			$oid: '61d43418a1c66a00095cc8f2',
		},
		name: "Children's Day",
		venue: ['Canteen'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61a84ee7ad4a050009acbbef',
		},
		createdOn: {
			$date: '2022-01-04T11:48:40.876Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc921',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb', 'Aug'],
		availableForBranding: true,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61d45e69a1c66a00095cc922',
		},
		name: 'Teachers picnic',
		venue: ['Canteen'],
		custom: true,
		months: ['Mar'],
		availableForBranding: true,
		school: {
			$oid: '61d45e68a1c66a00095cc91c',
		},
		createdOn: {
			$date: '2022-01-04T14:49:13.104Z',
		},
	},
	{
		_id: {
			$oid: '61dd61789899370009c5b9b5',
		},
		name: 'teachers picnic',
		venue: ['Sports Ground'],
		custom: true,
		months: ['Mar', 'Jan'],
		availableForBranding: true,
		school: {
			$oid: '61dd61789899370009c5b9b2',
		},
		createdOn: {
			$date: '2022-01-11T10:52:40.661Z',
		},
	},
	{
		_id: {
			$oid: '61dde4c09899370009c5b9c9',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61dde4c09899370009c5b9c7',
		},
		createdOn: {
			$date: '2022-01-11T20:12:48.258Z',
		},
	},
	{
		_id: {
			$oid: '61dde4c09899370009c5b9ca',
		},
		name: "Children's Day",
		venue: ['Washrooms'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61dde4c09899370009c5b9c7',
		},
		createdOn: {
			$date: '2022-01-11T20:12:48.258Z',
		},
	},
	{
		_id: {
			$oid: '61dde4c09899370009c5b9cb',
		},
		name: 'Republic Day Celebration',
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61dde4c09899370009c5b9c7',
		},
		createdOn: {
			$date: '2022-01-11T20:12:48.259Z',
		},
	},
	{
		_id: {
			$oid: '61de67749899370009c5b9ea',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb', 'Aug'],
		availableForBranding: true,
		school: {
			$oid: '61de67749899370009c5b9e7',
		},
		createdOn: {
			$date: '2022-01-12T05:30:28.963Z',
		},
	},
	{
		_id: {
			$oid: '61de7adb9899370009c5b9ff',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61de7adb9899370009c5b9fc',
		},
		createdOn: {
			$date: '2022-01-12T06:53:15.565Z',
		},
	},
	{
		_id: {
			$oid: '61de7adb9899370009c5ba00',
		},
		name: "Children's Day",
		venue: ['School Bus'],
		custom: false,
		months: ['Nov'],
		availableForBranding: true,
		school: {
			$oid: '61de7adb9899370009c5b9fc',
		},
		createdOn: {
			$date: '2022-01-12T06:53:15.566Z',
		},
	},
	{
		_id: {
			$oid: '61dff0659899370009c5ba1b',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb', 'Jul'],
		availableForBranding: true,
		school: {
			$oid: '61dff0659899370009c5ba18',
		},
		createdOn: {
			$date: '2022-01-13T09:27:01.279Z',
		},
	},
	{
		_id: {
			$oid: '61e1221c9899370009c5ba35',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61e1221c9899370009c5ba32',
		},
		createdOn: {
			$date: '2022-01-14T07:11:24.837Z',
		},
	},
	{
		_id: {
			$oid: '61ea4bc10d942700088bccb6',
		},
		name: 'Sports Day',
		venue: ['Sports Ground'],
		custom: false,
		months: ['Mar', 'Feb'],
		availableForBranding: true,
		school: {
			$oid: '61ea4bc10d942700088bccb3',
		},
		createdOn: {
			$date: '2022-01-21T05:59:29.700Z',
		},
	},
	{
		_id: {
			$oid: '61f2419dca22230008f778f0',
		},
		name: 'Annual Day',
		venue: ['Auditorium'],
		custom: false,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61f2419dca22230008f778ea',
		},
		createdOn: {
			$date: '2022-01-27T06:54:21.578Z',
		},
	},
	{
		_id: {
			$oid: '61f4ffe0ca22230008f77929',
		},
		name: 'Sports Day',
		venue: ['Notice Board'],
		custom: false,
		months: ['Mar'],
		availableForBranding: true,
		school: {
			$oid: '61f4ffe0ca22230008f77927',
		},
		createdOn: {
			$date: '2022-01-29T08:50:40.668Z',
		},
	},
	{
		_id: {
			$oid: '61f4ffe0ca22230008f7792a',
		},
		name: 'Annual Day',
		venue: ['Assembly Hall'],
		custom: false,
		months: ['Mar'],
		availableForBranding: true,
		school: {
			$oid: '61f4ffe0ca22230008f77927',
		},
		createdOn: {
			$date: '2022-01-29T08:50:40.668Z',
		},
	},
	{
		_id: {
			$oid: '61f4ffe0ca22230008f7792b',
		},
		name: 'School Fest',
		venue: ['Canteen'],
		custom: false,
		months: ['May'],
		availableForBranding: true,
		school: {
			$oid: '61f4ffe0ca22230008f77927',
		},
		createdOn: {
			$date: '2022-01-29T08:50:40.668Z',
		},
	},
	{
		_id: {
			$oid: '61fbd14298f2b3000829f696',
		},
		name: 'Christmas',
		venue: ['Auditorium'],
		custom: true,
		months: ['Jan'],
		availableForBranding: true,
		school: {
			$oid: '61c300ff7b2e40000800fb45',
		},
		createdOn: {
			$date: '2022-02-03T12:57:38.096Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf16',
		},
		name: 'Annual Day',
		venue: ['Auditorium', 'Canteen', 'Other'],
		custom: false,
		months: ['Feb'],
		availableForBranding: true,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.705Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf17',
		},
		name: "Children's Day",
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.705Z',
		},
	},
	{
		_id: {
			$oid: '61fd1ef869f6fe0008a5cf18',
		},
		name: 'Holi',
		venue: [],
		custom: true,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-04T12:41:28.706Z',
		},
	},
	{
		_id: {
			$oid: '6200c65469f6fe0008a5cf5b',
		},
		name: 'Sports Day',
		venue: [],
		custom: false,
		months: [],
		availableForBranding: false,
		school: {
			$oid: '61fd1ef869f6fe0008a5cf06',
		},
		createdOn: {
			$date: '2022-02-07T07:12:20.377Z',
		},
	},
];
export default data;
