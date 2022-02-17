const data = [
	{
		_id: {
			$oid: '61b7244a9348190008b7cd03',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query:
			"Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
		status: 'pending',
		createdOn: {
			$date: '2021-12-13T10:45:30.571Z',
		},
	},
	{
		_id: {
			$oid: '61c1ac23dc06bd00082d9acf',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: 'test',
		status: 'pending',
		createdOn: {
			$date: '2021-12-21T10:27:47.780Z',
		},
	},
	{
		_id: {
			$oid: '61c1ac2ddc06bd00082d9ad1',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: 'test',
		status: 'pending',
		createdOn: {
			$date: '2021-12-21T10:27:57.422Z',
		},
	},
	{
		_id: {
			$oid: '61ceef8ef28ea900097c603a',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: '^&*(*()&)(*&)(7',
		status: 'pending',
		createdOn: {
			$date: '2021-12-31T11:54:54.849Z',
		},
	},
	{
		_id: {
			$oid: '61d2cedba1c66a00095cc85c',
		},
		user: {
			$oid: '61d2921df28ea900097c605b',
		},
		userType: 'school',
		query: 'Testing dev',
		status: 'pending',
		createdOn: {
			$date: '2022-01-03T10:24:27.949Z',
		},
	},
	{
		_id: {
			$oid: '61dc162a9899370009c5b99b',
		},
		user: {
			$oid: '61c2fe8f7b2e40000800fb44',
		},
		userType: 'school',
		query: 'test',
		status: 'pending',
		createdOn: {
			$date: '2022-01-10T11:19:06.387Z',
		},
	},
	{
		_id: {
			$oid: '61dc16699899370009c5b99c',
		},
		user: {
			$oid: '61c2fe8f7b2e40224821fb28',
		},
		userType: 'school',
		query: 'testing the firefox',
		status: 'pending',
		createdOn: {
			$date: '2022-01-10T11:20:09.052Z',
		},
	},
	{
		_id: {
			$oid: '61dc16d49899370009c5b99d',
		},
		user: {
			$oid: '61c2fe8f7b2e40000800fb44',
		},
		userType: 'school',
		query: 'testing is not done ',
		status: 'pending',
		createdOn: {
			$date: '2022-01-10T11:21:56.244Z',
		},
	},
	{
		_id: {
			$oid: '61dc17b29899370009c5b99e',
		},
		user: {
			$oid: '61c2fe8f7b2e40000800fb44',
		},
		userType: 'school',
		query: 'Testing on Microsoft Edge for a query submit email',
		status: 'pending',
		createdOn: {
			$date: '2022-01-10T11:25:38.752Z',
		},
	},
	{
		_id: {
			$oid: '61e906a60d942700088bcc84',
		},
		user: {
			$oid: '61b6e0539348190008b7ccfb',
		},
		userType: 'school',
		query: 'test',
		status: 'pending',
		createdOn: {
			$date: '2022-01-20T06:52:22.618Z',
		},
	},
	{
		_id: {
			$oid: '61e907590d942700088bcc85',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: 'tyrty',
		status: 'pending',
		createdOn: {
			$date: '2022-01-20T06:55:21.170Z',
		},
	},
	{
		_id: {
			$oid: '61e907ad0d942700088bcc86',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: 'ouioui',
		status: 'pending',
		createdOn: {
			$date: '2022-01-20T06:56:45.875Z',
		},
	},
	{
		_id: {
			$oid: '61f7a8d01ec2c400087d9281',
		},
		user: {
			$oid: '61f79eca0cc23e000867adef',
		},
		userType: 'brand',
		query: 'How trial campaigns works?',
		status: 'pending',
		createdOn: {
			$date: '2022-01-31T09:16:00.813Z',
		},
	},
	{
		_id: {
			$oid: '61f7ba0d1ec2c400087d92a9',
		},
		user: {
			$oid: '61f7b0451ec2c400087d928c',
		},
		userType: 'brand',
		query: 'How trial campaign works?',
		status: 'pending',
		createdOn: {
			$date: '2022-01-31T10:29:33.339Z',
		},
	},
	{
		_id: {
			$oid: '61fa5d7d98f2b3000829f659',
		},
		user: {
			$oid: '61a84bc4ad4a050009acbbee',
		},
		userType: 'school',
		query: 'Testing',
		status: 'pending',
		createdOn: {
			$date: '2022-02-02T10:31:25.224Z',
		},
	},
	{
		_id: {
			$oid: '6200b69c69f6fe0008a5cf4a',
		},
		user: {
			$oid: '61fd1cbc69f6fe0008a5cf05',
		},
		userType: 'school',
		query: 'Testing the queries',
		status: 'pending',
		createdOn: {
			$date: '2022-02-07T06:05:16.816Z',
		},
	},
	{
		_id: {
			$oid: '6205e7340da968000873eab3',
		},
		user: {
			$oid: '61fba0bf98f2b3000829f685',
		},
		userType: 'brand',
		query: 'Testing',
		status: 'pending',
		createdOn: {
			$date: '2022-02-11T04:33:56.881Z',
		},
	},
];
export default data;
