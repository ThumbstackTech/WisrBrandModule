"use strict";
exports.__esModule = true;
var data = [
    {
        _id: {
            $oid: '61efccdc6b644e000970291d'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'Nike',
        description: 'Men shoes',
        objective: 'Men',
        startDate: '2022-02-05',
        endDate: '2022-02-05',
        locations: ['palghar', 'jaipur', 'mumbai suburban'],
        targetGender: 'boys',
        targetAgeGroup: [10, 20],
        studyMedium: ['English', 'Gujarati', 'Hindi'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643105466361-image (2).png',
            '1643105469397-Wisr-School - 20-01-2022Localhost.png',
            '1643105472345-image (2).png',
        ],
        budget: 8000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
            ],
            schools: [
                '613b2982ef861d00094c23e9',
                '614439f2090e67000baeb505',
                '61544a30142d520008ac75cd',
            ],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-25T10:11:40.478Z'
        }
    },
    {
        _id: {
            $oid: '61efd0536b644e000970292a'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'women shoes',
        description: 'women shoes',
        objective: 'women shoes',
        startDate: '2022-02-05',
        endDate: '2022-02-05',
        locations: ['mumbai', 'thane'],
        targetGender: 'girls',
        targetAgeGroup: [10, 20],
        studyMedium: ['Dogri', 'English', 'Gujarati', 'Hindi'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643106365231-AddButtonMargin_Admin.png',
            '1643106367586-image (2).png',
            '1643106370801-image_2021_12_15T09_19_51_836Z.png',
        ],
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: ['613f1f21eec99a000989981f', '614efa7d142d520008ac75a1'],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-25T10:26:27.931Z'
        }
    },
    {
        _id: {
            $oid: '61efd6e56b644e000970293d'
        },
        brandId: {
            $oid: '61efd2196b644e0009702930'
        },
        name: 'white hat junior guitar class ',
        description: ' guitar class to be branded and demos to be conducted for enrolment of children on white hat junior ',
        objective: 'lead generation ',
        startDate: '2022-02-05',
        endDate: '2022-03-05',
        locations: ['mumbai suburban'],
        targetGender: 'boys',
        targetAgeGroup: [10, 14],
        studyMedium: ['English'],
        brandCategory: '619cc7e1bc9cb529b8dd0fdc',
        brandSubcategory: '61efd2196b644e0009702931',
        recommendEvents: false,
        campaignStatus: 'trial',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 7000000,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: ['615d8133e7af8600080e0e68'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-25T10:54:29.965Z'
        }
    },
    {
        _id: {
            $oid: '61efd7846b644e0009702941'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-25T10:57:08.415Z'
        }
    },
    {
        _id: {
            $oid: '61efd7856b644e00097029a6'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-25T10:57:09.808Z'
        }
    },
    {
        _id: {
            $oid: '61f299c5ca22230008f77915'
        },
        brandId: {
            $oid: '61f290b8ca22230008f7790f'
        },
        name: 'Aashirvaad - Back to School',
        description: 'Integrating  Aashirvaad Atta into the tiffin boxes of all students on their return to school post their  summer vacations.',
        objective: 'Awareness and sampling campaign for Aashirvaad Atta',
        startDate: '2022-06-01',
        endDate: '2022-07-01',
        locations: ['jaipur'],
        targetGender: 'co-ed',
        targetAgeGroup: [5, 14],
        studyMedium: ['English', 'Hindi', 'Marathi'],
        brandCategory: '619cc6bcbc9cb529b8dd0fd8',
        brandSubcategory: '61f290b8ca22230008f77910',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643288595416-mortalkombat.jpg',
            '1643288631857-mortalkombat.jpg',
            '1643288645561-mortalkombat.jpg',
        ],
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: ['615d8133e7af8600080e0e68', '614439f2090e67000baeb505'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-27T13:10:29.310Z'
        },
        updatedOn: {
            $date: '2022-01-27T13:11:20.323Z'
        }
    },
    {
        _id: {
            $oid: '61f5090fca22230008f77954'
        },
        brandId: {
            $oid: '61f506d9ca22230008f77950'
        },
        name: 'Pencil Colors Day',
        description: 'Camlin WhiteBoard Markers have brighter inks for better visibility. They are refillable, easily erasable and have a bullet tip. The ink is non-toxic and is available in four colours.',
        objective: 'Camlin WhiteBoard Markers have brighter inks for better visibility. They are refillable, easily erasable and have a bullet tip. The ink is non-toxic and is available in four colours.',
        startDate: '2022-02-26',
        endDate: '2022-04-14',
        locations: ['mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc92fbc9cb529b8dd0fe0',
        brandSubcategory: '61f506d9ca22230008f77951',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643448575276-stationary-memories-camlin-story.jpg',
            '1643448578890-download (2).jfif',
            '1643448583793-0015619_camel-artists-water-colours-set-5ml-x-12-shades_600.jpeg',
        ],
        budget: 11000000,
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: true,
                event: true,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'creative'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: ['613f1f21eec99a000989981f', '61f4ffe0ca22230008f77927'],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-29T09:29:51.286Z'
        },
        updatedOn: {
            $date: '2022-01-29T09:31:46.658Z'
        },
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        }
    },
    {
        _id: {
            $oid: '61f50aecca22230008f77959'
        },
        brandId: {
            $oid: '61f506d9ca22230008f77950'
        },
        name: 'trial campaign',
        description: 'Use ‘any-name-of-your-choice’@YOPmail.com to sign up anywhere. Email sent to the ‘address’@YOPmail.com is instantaneously created at YOPmail server. No registration required for checking your temporary inbox at YOPmail',
        objective: 'test,test',
        startDate: '2022-02-25',
        endDate: '2022-04-06',
        locations: ['mumbai suburban', 'mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc92fbc9cb529b8dd0fe0',
        brandSubcategory: '61f506d9ca22230008f77951',
        recommendEvents: false,
        campaignStatus: 'trial',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 11000000,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: ['615d8133e7af8600080e0e68', '61f4ffe0ca22230008f77927'],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b7'
                    },
                    name: 'Republic Day Celebration',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-29T09:37:48.533Z'
        }
    },
    {
        _id: {
            $oid: '61f696bbca22230008f77963'
        },
        brandId: {
            $oid: '61f68cf8ca22230008f77960'
        },
        name: 'Testing Campaign',
        description: 'test',
        objective: 'Reach',
        startDate: '2022-02-10',
        endDate: '2022-03-09',
        locations: ['mumbai', 'jaipur', 'rangareddy', 'mumbai suburban'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 6],
        studyMedium: ['English'],
        brandCategory: '619cc92fbc9cb529b8dd0fe0',
        brandSubcategory: '61f68cf8ca22230008f77961',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643550351374-Ilam_1 ER Diagram.jpg',
            '1643550353209-Ilam_1 ER Diagram.jpg',
            '1643550355674-Ilam_1 ER Diagram.jpg',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: true,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: [
                '61657128e7af8600080e0e90',
                '614439f2090e67000baeb505',
                '613e193b30ec52000711452a',
                '613b3751ef861d00094c240b',
                '61adead29348190008b7cb87',
                '615e7ca7e7af8600080e0e7f',
                '6172cb26f4c3ea0008aa6453',
                '615d8133e7af8600080e0e68',
                '61544a30142d520008ac75cd',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b3'
                    },
                    name: 'School Fest',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615e7ca7e7af8600080e0e85'
                    },
                    name: 'Sports Day',
                    attributes: ['615e7ca7e7af8600080e0e89']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-30T13:46:35.037Z'
        }
    },
    {
        _id: {
            $oid: '61f79044ca22230008f7797e'
        },
        brandId: {
            $oid: '61f68cf8ca22230008f77960'
        },
        name: 'Prototype UI Link',
        description: 'efffe',
        objective: 'Event',
        startDate: '2022-02-23',
        endDate: '2022-02-24',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [4, 6],
        studyMedium: ['English'],
        brandCategory: '619cc92fbc9cb529b8dd0fe0',
        brandSubcategory: '61f68cf8ca22230008f77961',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5552452,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: false,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'setUpCampaign'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05aa'
                    },
                    name: 'Computer Lab',
                    attributes: ['Walls', 'Doors', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a0'
                    },
                    name: 'Sports Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a6'
                    },
                    name: 'Assembly Hall',
                    attributes: ['Stage', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
            ],
            schools: ['615d6667142d520008ac7621'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T07:31:16.143Z'
        },
        updatedOn: {
            $date: '2022-01-31T07:34:49.475Z'
        }
    },
    {
        _id: {
            $oid: '61f79fc80cc23e000867adf2'
        },
        brandId: {
            $oid: '61f79eca0cc23e000867aded'
        },
        name: 'Water Color Campaign',
        description: 'test',
        objective: 'test',
        startDate: '2022-02-24',
        endDate: '2022-04-07',
        locations: ['mumbai', 'ahmedabad'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc92fbc9cb529b8dd0fe0',
        brandSubcategory: '61f79eca0cc23e000867adee',
        recommendEvents: false,
        campaignStatus: 'pending',
        isApproved: true,
        campaignCreatives: [
            '1643618225957-download (2).jfif',
            '1643618228949-download (2).jfif',
            '1643618231767-download (2).jfif',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: [
                '613f1f21eec99a000989981f',
                '61f4ffe0ca22230008f77927',
                '61b33cfd9348190008b7cce6',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T08:37:28.303Z'
        },
        updatedOn: {
            $date: '2022-01-31T08:40:20.955Z'
        }
    },
    {
        _id: {
            $oid: '61f7b3be1ec2c400087d9298'
        },
        brandId: {
            $oid: '61f7b0451ec2c400087d928a'
        },
        name: 'Trail Campign on Whisper',
        description: 'The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose',
        objective: 'test',
        startDate: '2022-02-20',
        endDate: '2022-03-03',
        locations: ['palghar', 'mumbai suburban', 'mumbai', 'ahmedabad'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61f7b0451ec2c400087d928b',
        recommendEvents: false,
        campaignStatus: 'trial',
        isApproved: false,
        budget: 11000000,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'inventory'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
            ],
            schools: [
                '613b2982ef861d00094c23e9',
                '6176f18d4261f900093eae02',
                '61f4ffe0ca22230008f77927',
                '61b0ad1c9348190008b7ccaf',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '6176f18e4261f900093eae05'
                    },
                    name: 'Christmas Party',
                    attributes: ['6176f18e4261f900093eae09']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T10:02:38.198Z'
        },
        campaignCreatives: [null, null, null],
        updatedOn: {
            $date: '2022-01-31T10:06:01.344Z'
        }
    },
    {
        _id: {
            $oid: '61f7b6531ec2c400087d929d'
        },
        brandId: {
            $oid: '61f7b0451ec2c400087d928a'
        },
        name: 'Normal Campaign Whispers',
        description: 'The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose',
        objective: 'test',
        startDate: '2022-02-19',
        endDate: '2022-03-25',
        locations: ['mumbai', 'ahmedabad'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61f7b0451ec2c400087d928b',
        recommendEvents: false,
        campaignStatus: 'pending',
        isApproved: true,
        campaignCreatives: [
            '1643623799015-51jG1oT8yrL._AC_SS450_.jpg',
            '1643623804334-71PmYHrryIL._SY450_.jpg',
            '1643623808359-8111GMZdUwL._SL1500_.jpg',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a8'
                    },
                    name: 'Sports Ground',
                    attributes: ['Walls']
                },
            ],
            schools: [
                '613f1f21eec99a000989981f',
                '61f4ffe0ca22230008f77927',
                '61a79686388ffb000751b61f',
                '61b33cfd9348190008b7cce6',
                '61b0ad1c9348190008b7ccaf',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '61a79686388ffb000751b621'
                    },
                    name: 'Sports Day',
                    attributes: ['61a79686388ffb000751b62f']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T10:13:39.750Z'
        },
        updatedOn: {
            $date: '2022-01-31T11:32:21.440Z'
        }
    },
    {
        _id: {
            $oid: '61f7c9921ec2c400087d92b5'
        },
        brandId: {
            $oid: '61f7b0451ec2c400087d928a'
        },
        name: 'Normal Camp rej',
        description: 'test',
        objective: 'test',
        startDate: '2022-02-19',
        endDate: '2022-03-25',
        locations: ['mumbai suburban', 'jaipur', 'mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61f7b0451ec2c400087d928b',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643629131177-71PmYHrryIL._SY450_.jpg',
            '1643629135597-cabinate 2.jpg',
            '1643629142328-81tZiYko6gL._SL1500_.jpg',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
            ],
            schools: [
                '615d8133e7af8600080e0e68',
                '614439f2090e67000baeb505',
                '61f4ffe0ca22230008f77927',
                '61a79686388ffb000751b61f',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T11:35:46.686Z'
        },
        updatedOn: {
            $date: '2022-01-31T11:39:11.520Z'
        },
        creativeReworkNeeded: false,
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: true,
                event: true,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'creative'
        }
    },
    {
        _id: {
            $oid: '61f7d0a01ec2c400087d92cb'
        },
        brandId: {
            $oid: '61f7b1ad1ec2c400087d9291'
        },
        name: 'Ariel mansoon Campaign',
        description: 'test',
        objective: 'test',
        startDate: '2022-02-12',
        endDate: '2022-04-07',
        locations: ['mumbai', 'ahmedabad'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61f7b1ad1ec2c400087d9292',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643630724891-52650874958bac54dba3c0d457053df7.jpg',
            '1643630729908-depositphotos_115204694-stock-photo-ariel-laundry-detergent-products-isolated.jpg',
            '1643630738934-Ariel-Detergent-Liquid-Pouch-2.1kg-2.3kg-x4.jpg',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: [
                '613f1f21eec99a000989981f',
                '61b0ad1c9348190008b7ccaf',
                '61f4ffe0ca22230008f77927',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b2'
                    },
                    name: 'Annual Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-01-31T12:05:52.969Z'
        }
    },
    {
        _id: {
            $oid: '61fa30e398f2b3000829f62c'
        },
        brandId: {
            $oid: '61fa2ec098f2b3000829f629'
        },
        name: 'Test - WISR platform',
        description: 'Testing platform ',
        objective: 'Reach',
        startDate: '2022-02-14',
        endDate: '2022-02-28',
        locations: ['mumbai suburban', 'jaipur'],
        targetGender: 'girls',
        targetAgeGroup: [10, 15],
        studyMedium: ['English'],
        brandCategory: '619cc87cbc9cb529b8dd0fdf',
        brandSubcategory: '61fa2ec098f2b3000829f62a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643786406117-Thumbnail.png',
            '1643786413366-Thumbnail.png',
            '1643786418035-Thumbnail.png',
        ],
        budget: 7430455,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: ['615d8133e7af8600080e0e68', '614439f2090e67000baeb505'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-02T07:21:07.402Z'
        }
    },
    {
        _id: {
            $oid: '61fa7fc398f2b3000829f66c'
        },
        brandId: {
            $oid: '61f78628ca22230008f77973'
        },
        name: 'Maggie Noodles campaign',
        description: 'Setting up maggie advertises on schools',
        objective: 'Reach',
        startDate: '2022-02-15',
        endDate: '2022-03-01',
        locations: ['palghar'],
        targetGender: 'co-ed',
        targetAgeGroup: [7, 20],
        studyMedium: ['English', 'Hindi', 'Marathi'],
        brandCategory: '619cc6bcbc9cb529b8dd0fd8',
        brandSubcategory: '61f78628ca22230008f77974',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'recommendedSchool'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a0'
                    },
                    name: 'Sports Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a6'
                    },
                    name: 'Assembly Hall',
                    attributes: ['Stage', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a8'
                    },
                    name: 'Sports Ground',
                    attributes: ['Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a2'
                    },
                    name: 'Canteen',
                    attributes: ['Walls', 'Menu', 'Trays', 'Tables', 'Chairs']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
            ],
            schools: ['613b2982ef861d00094c23e9'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-02T12:57:39.748Z'
        }
    },
    {
        _id: {
            $oid: '61fb6fda98f2b3000829f67c'
        },
        brandId: {
            $oid: '61f7ccf81ec2c400087d92c1'
        },
        name: 'Campaign',
        description: 'Campaign',
        objective: 'dfg',
        startDate: '2022-02-21',
        endDate: '2022-02-21',
        locations: ['ahmedabad', 'mumbai', 'mumbai suburban'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['Assamese'],
        brandCategory: '619cc7c0bc9cb529b8dd0fdb',
        brandSubcategory: '6202637069f6fe0008a5d11c',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'inventory'
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-03T06:02:02.216Z'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: [
                '61b33cfd9348190008b7cce6',
                '613f1f21eec99a000989981f',
                '61b0ad1c9348190008b7ccaf',
                '614c356f858405000a58d60e',
                '614c3574858405000a58d676',
                '613aea21ed036e00082d3f09',
                '61a79686388ffb000751b61f',
                '6143a0c1090e67000baeb478',
                '615e7ca7e7af8600080e0e7f',
                '6172cb26f4c3ea0008aa6453',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615e7ca7e7af8600080e0e85'
                    },
                    name: 'Sports Day',
                    attributes: ['615e7ca7e7af8600080e0e89']
                },
                {
                    _id: {
                        $oid: '6143a0c1090e67000baeb493'
                    },
                    name: 'Christmas Party',
                    attributes: ['6143a0c1090e67000baeb4ce']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        updatedOn: {
            $date: '2022-02-10T09:29:50.098Z'
        },
        campaignCreatives: [
            '1644484777374-RedborderNotDisplayed.jpg',
            '1644484834837-HeaderlooklikeNormalText.jpg',
            '1644484850408-DescriptionMissingDetailInventoryScreen.png',
        ]
    },
    {
        _id: {
            $oid: '61fcd6cf69f6fe0008a5ced4'
        },
        brandId: {
            $oid: '61fcc78a21224a0008997de2'
        },
        name: 'Test- Parle biscuits ',
        description: 'parle biscuits sampling ',
        objective: 'Sales of a new product launched ',
        startDate: '2022-02-15',
        endDate: '2022-02-28',
        locations: ['tiruvallur', 'mumbai suburban', 'jaipur'],
        targetGender: 'co-ed',
        targetAgeGroup: [5, 10],
        studyMedium: ['English', 'Hindi'],
        brandCategory: '619cc6bcbc9cb529b8dd0fd8',
        brandSubcategory: '61fcc78a21224a0008997de3',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1643959513917-mortalkombat.jpg',
            '1643959518136-mortalkombat.jpg',
            '1643959521779-mortalkombat.jpg',
        ],
        budget: 6508046,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
            ],
            schools: [
                '615d6667142d520008ac7621',
                '615d8133e7af8600080e0e68',
                '614439f2090e67000baeb505',
            ],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-04T07:33:35.985Z'
        }
    },
    {
        _id: {
            $oid: '6202236069f6fe0008a5cf7d'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'recommendedSchool'
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-08T08:01:36.753Z'
        }
    },
    {
        _id: {
            $oid: '6202236269f6fe0008a5cfe2'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'recommendedSchool'
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-08T08:01:38.241Z'
        }
    },
    {
        _id: {
            $oid: '6202236669f6fe0008a5d047'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'recommendedSchool'
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-08T08:01:42.215Z'
        }
    },
    {
        _id: {
            $oid: '6202236669f6fe0008a5d0ac'
        },
        name: '',
        description: '',
        objective: '',
        startDate: '',
        endDate: '',
        locations: [],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [],
        brandSubcategory: '',
        recommendEvents: false,
        campaignStatus: 'draft',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: false,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: true,
                school: true,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'recommendedSchool'
        },
        campaignData: {
            inventories: [],
            schools: [],
            activities: []
        },
        brandId: null,
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-08T08:01:42.787Z'
        }
    },
    {
        _id: {
            $oid: '6203b22869f6fe0008a5d138'
        },
        brandId: {
            $oid: '6201079069f6fe0008a5cf6f'
        },
        name: 'Developer Campaign',
        description: 'Developer Campaign',
        objective: 'Developer Campaign',
        startDate: '2022-02-23',
        endDate: '2022-02-24',
        locations: ['Mumbai Suburban', 'mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['English', 'Gujarati', 'Hindi'],
        brandCategory: '619cc7c0bc9cb529b8dd0fdb',
        brandSubcategory: '6201079069f6fe0008a5cf70',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        budget: 5902256,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'inventory'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
            ],
            schools: [
                '613ecb2030ec520007114547',
                '61534b65142d520008ac75bf',
                '613afbabed036e00082d3f25',
            ],
            activities: [
                {
                    _id: {
                        $oid: '613ecb2030ec52000711454b'
                    },
                    name: 'Summer Camp',
                    attributes: ['613ecb2030ec520007114551']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-09T12:23:04.401Z'
        },
        updatedOn: {
            $date: '2022-02-10T10:34:10.345Z'
        },
        campaignCreatives: [
            '1644489233256-ozuna3.jpg',
            '1644489236790-ozuna1.jpg',
            '1644489240529-ozuna2.jpg',
        ]
    },
    {
        _id: {
            $oid: '6204e8bd69f6fe0008a5d13d'
        },
        brandId: {
            $oid: '61f7ccf81ec2c400087d92c1'
        },
        name: 'Campaign NEw',
        description: 'Campaign NEw',
        objective: 'Campaign NEw',
        startDate: '2022-02-23',
        endDate: '2022-02-26',
        locations: [
            'gautam buddha nagar',
            'mumbai suburban',
            'palghar',
            'mumbai',
            'thane',
            'hyderabad',
            'jaipur',
        ],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 20],
        studyMedium: [
            'English',
            'Dogri',
            'Bodo',
            'Bengali (Bangla)',
            'Kannada',
            'Konkani',
            'Kashmiri',
        ],
        brandCategory: '619cc7c0bc9cb529b8dd0fdb',
        brandSubcategory: '6202637069f6fe0008a5d11c',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644488882835-nike.jfif',
            '1644488885778-nike.jfif',
            '1644488888695-nike.jfif',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: true,
            sampling: true,
            custom: true
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a2'
                    },
                    name: 'Canteen',
                    attributes: ['Walls', 'Menu', 'Trays', 'Tables', 'Chairs']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a6'
                    },
                    name: 'Assembly Hall',
                    attributes: ['Stage', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a8'
                    },
                    name: 'Sports Ground',
                    attributes: ['Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: [
                '616e772d2d11a30008f9d4fc',
                '6176f18d4261f900093eae02',
                '613b2982ef861d00094c23e9',
                '6166d55b85e0dc00080494fa',
                '614ac292858405000a58d5d4',
                '613e193b30ec52000711452a',
                '61657128e7af8600080e0e90',
                '614c353e858405000a58d5fb',
                '61a9c8dba064240009692f3f',
                '616fce20f4c3ea0008aa6420',
                '61739dbaf4c3ea0008aa6467',
                '613f1f21eec99a000989981f',
                '61adf2929348190008b7cbbc',
                '61ae14599348190008b7cbdc',
                '613b3751ef861d00094c240b',
                '616f2960f4c3ea0008aa6411',
                '614439f2090e67000baeb505',
                '614c3574858405000a58d676',
            ],
            activities: [
                {
                    _id: {
                        $oid: '6176f18e4261f900093eae05'
                    },
                    name: 'Christmas Party',
                    attributes: ['6176f18e4261f900093eae09']
                },
                {
                    _id: {
                        $oid: '6166d55c85e0dc00080494fe'
                    },
                    name: 'Sports Day',
                    attributes: ['6166d55c85e0dc0008049506']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-10T10:28:13.510Z'
        }
    },
    {
        _id: {
            $oid: '6204e96669f6fe0008a5d151'
        },
        brandId: {
            $oid: '61f7ccf81ec2c400087d92c1'
        },
        name: 'Test 1',
        description: 'Test 1',
        objective: 'Test',
        startDate: '2022-02-23',
        endDate: '2022-02-24',
        locations: ['mumbai', 'mumbai suburban', 'hyderabad', 'rangareddy'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Assamese',
            'Gujarati',
            'Maithili',
            'Manipuri (Meitei)',
            'Nepali',
        ],
        brandCategory: '619cc7c0bc9cb529b8dd0fdb',
        brandSubcategory: '6202637069f6fe0008a5d11c',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644489023502-image_2021_12_15T09_19_51_836Z.png',
            '1644489026243-SelectAllNotSelected.png',
            '1644489028855-UnitDropdownUINotGood.png',
        ],
        budget: 8685909,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ae'
                    },
                    name: 'Music Class',
                    attributes: ['Doors', 'Walls']
                },
            ],
            schools: [
                '6166d55b85e0dc00080494fa',
                '613b29daef861d00094c23fd',
                '614865a532e4ba0008098c3c',
                '61a9c8dba064240009692f3f',
                '615e7ca7e7af8600080e0e7f',
                '6172cb26f4c3ea0008aa6453',
                '61adead29348190008b7cb87',
                '61544a30142d520008ac75cd',
                '615d8133e7af8600080e0e68',
                '614c3572858405000a58d642',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-10T10:31:02.211Z'
        },
        updatedOn: {
            $date: '2022-02-10T10:31:08.480Z'
        }
    },
    {
        _id: {
            $oid: '6204f10969f6fe0008a5d161'
        },
        brandId: {
            $oid: '61f7ccf81ec2c400087d92c1'
        },
        name: 'Trial',
        description: 'Trial',
        objective: 'Trial',
        startDate: '2022-02-23',
        endDate: '2022-02-23',
        locations: ['mumbai suburban', 'jaipur', 'mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['Assamese', 'Bodo', 'Dogri', 'Gujarati', 'English'],
        brandCategory: '619cc7c0bc9cb529b8dd0fdb',
        brandSubcategory: '6202637069f6fe0008a5d11c',
        recommendEvents: false,
        campaignStatus: 'trial',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 6309427,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: [
                '615d8133e7af8600080e0e68',
                '614439f2090e67000baeb505',
                '613f1f21eec99a000989981f',
            ],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-10T11:03:37.792Z'
        }
    },
    {
        _id: {
            $oid: '6205e2830da968000873eaac'
        },
        brandId: {
            $oid: '61fba0be98f2b3000829f683'
        },
        name: 'Testing',
        description: 'Testing',
        objective: 'Testing',
        startDate: '2022-02-23',
        endDate: '2022-02-24',
        locations: ['jaipur', 'mumbai suburban'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Bengali (Bangla)',
            'English',
            'Dogri',
            'Gujarati',
            'Kannada',
            'Hindi',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61fba0be98f2b3000829f684',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644552818922-AddButtonPosition.png',
            '1644552823793-EventSameNameAllow.jpg',
            '1644552827272-RedBorderNotRemoved.jpg',
        ],
        budget: 5325815,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: ['614439f2090e67000baeb505', '615d8133e7af8600080e0e68'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T04:13:55.143Z'
        }
    },
    {
        _id: {
            $oid: '6205f9a10da968000873eab4'
        },
        brandId: {
            $oid: '61fba0be98f2b3000829f683'
        },
        name: 'NotificationEmail',
        description: 'NotificationEmail\nNotificationEmail\nNotificationEmail\nNotificationEmail\n',
        objective: 'NotificationEmail',
        startDate: '2022-02-23',
        endDate: '2022-02-23',
        locations: ['mumbai suburban', 'mumbai', 'thane', 'hyderabad', 'bengaluru'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Bengali (Bangla)',
            'Dogri',
            'Kannada',
            'Kashmiri',
            'Gujarati',
            'Bodo',
            'Hindi',
            'Konkani',
            'Maithili',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61fba0be98f2b3000829f684',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644558743937-EventSameNameAllow.jpg',
            '1644558746388-HeaderlooklikeNormalText.jpg',
            '1644558748523-Screenshot_20220208-154258_Chrome.jpg',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: true,
            sampling: true,
            custom: true
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a6'
                    },
                    name: 'Assembly Hall',
                    attributes: ['Stage', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059f'
                    },
                    name: 'Staff Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a9'
                    },
                    name: 'Science Lab',
                    attributes: ['Standees', 'Doors']
                },
            ],
            schools: [
                '61ae1bea9348190008b7cbfe',
                '614c356f858405000a58d60e',
                '614c3574858405000a58d676',
                '61725a8bf4c3ea0008aa6431',
                '61739dbaf4c3ea0008aa6467',
                '613f1f21eec99a000989981f',
                '61adf2929348190008b7cbbc',
                '61ae14599348190008b7cbdc',
                '61af12f49348190008b7cc43',
                '61555be1142d520008ac760b',
            ],
            activities: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b1'
                    },
                    name: 'Sports Day',
                    attributes: [
                        'Stage Backdrop',
                        'Stage Wings',
                        'Stage Front',
                        'Stalls',
                    ]
                },
                {
                    _id: {
                        $oid: '61ae1bea9348190008b7cc03'
                    },
                    name: 'Sports Day',
                    attributes: ['61ae1bea9348190008b7cc0b']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T05:52:33.500Z'
        }
    },
    {
        _id: {
            $oid: '6205fb0f0da968000873eac2'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'dfgfddfrg gfdg',
        description: 'dgdfg',
        objective: 'dfgdfg',
        startDate: '2022-02-23',
        endDate: '2022-02-24',
        locations: ['mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['Bodo', 'Dogri', 'Hindi'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'inventory'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: ['613f1f21eec99a000989981f'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T05:58:39.047Z'
        },
        campaignCreatives: [
            '1644559173189-nike.jfif',
            '1644559176787-nike.jfif',
            '1644559180208-nike.jfif',
        ],
        updatedOn: {
            $date: '2022-02-11T05:59:45.472Z'
        }
    },
    {
        _id: {
            $oid: '6205fcde0da968000873eac4'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'testing update',
        description: 'testing updatetesting updatetesting updatetesting update',
        objective: 'testing update',
        startDate: '2022-03-03',
        endDate: '2022-03-04',
        locations: ['mumbai suburban'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['Bodo', 'Dogri', 'English', 'Hindi'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        budget: 5317460,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignCreationProgress: {
            progress: {
                brandDetails: true,
                inventory: false,
                school: false,
                recommendedSchool: false,
                event: false,
                campaignCreative: false,
                preview: false
            },
            currentPage: 'inventory'
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: ['61534b65142d520008ac75bf', '613ecb2030ec520007114547'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T06:06:22.998Z'
        },
        campaignCreatives: [
            '1644559609492-AddButtonMargin_Admin.png',
            '1644559612402-AddIconUserFriendly.png',
            '1644559615681-Admin_Title_MyProfile.png',
        ],
        updatedOn: {
            $date: '2022-02-11T06:07:00.345Z'
        }
    },
    {
        _id: {
            $oid: '6205fdca0da968000873eac6'
        },
        brandId: {
            $oid: '62020c0b69f6fe0008a5cf78'
        },
        name: 'Notification Email Testing',
        description: 'Notification Email Testing',
        objective: 'Notification Email Testing',
        startDate: '2022-02-24',
        endDate: '2022-02-24',
        locations: ['jaipur', 'mumbai suburban'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Bengali (Bangla)',
            'Bodo',
            'Assamese',
            'English',
            'Gujarati',
            'Hindi',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '62020c0b69f6fe0008a5cf79',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644559807609-image (2).png',
            '1644559810357-image (2).png',
            '1644559815157-GeneralImage2.png',
        ],
        budget: 5000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: ['614439f2090e67000baeb505', '615d8133e7af8600080e0e68'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T06:10:18.911Z'
        }
    },
    {
        _id: {
            $oid: '6205fe970da968000873eaca'
        },
        brandId: {
            $oid: '62020c0b69f6fe0008a5cf78'
        },
        name: 'Email Webpush notification',
        description: 'Email Webpush notification\nEmail Webpush notification',
        objective: 'Email Webpush notification',
        startDate: '2022-02-23',
        endDate: '2022-02-23',
        locations: ['mumbai', 'thane', 'palghar', 'mumbai suburban', 'hyderabad'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Bengali (Bangla)',
            'Bodo',
            'Dogri',
            'Gujarati',
            'Hindi',
            'Kannada',
            'Kashmiri',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '62020c0b69f6fe0008a5cf79',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644560006000-AddButtonMargin_Admin.png',
            '1644560008846-GeneralImage2.png',
            '1644560011960-GeneralImage2.png',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: true,
            sampling: true,
            custom: true
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
            ],
            schools: [
                '613f1f21eec99a000989981f',
                '61739dbaf4c3ea0008aa6467',
                '613b2982ef861d00094c23e9',
                '614865a532e4ba0008098c3c',
                '61a9c8dba064240009692f3f',
            ],
            activities: [
                {
                    _id: {
                        $oid: '614865a532e4ba0008098c41'
                    },
                    name: 'Christmas Party',
                    attributes: ['614865a532e4ba0008098c4b']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T06:13:43.299Z'
        }
    },
    {
        _id: {
            $oid: '6205ff780da968000873ead1'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'Mute notification testing',
        description: 'Mute notification testing',
        objective: 'Mute notification testing',
        startDate: '2022-02-22',
        endDate: '2022-02-22',
        locations: ['mumbai', 'jaipur', 'mumbai suburban', 'rangareddy'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: ['Assamese', 'Bodo', 'English'],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644560236776-GeneralImage1.png',
            '1644560239398-Setting_BackArrow.png',
            '1644560243873-UnitDropdownUINotGood.png',
        ],
        budget: 11000000,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a0'
                    },
                    name: 'Sports Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
            ],
            schools: [
                '613e193b30ec52000711452a',
                '614439f2090e67000baeb505',
                '61657128e7af8600080e0e90',
                '613b3751ef861d00094c240b',
                '615d8133e7af8600080e0e68',
                '614c3572858405000a58d642',
                '61544a30142d520008ac75cd',
                '616f2960f4c3ea0008aa6411',
                '61af3b809348190008b7cc80',
                '61f4ffe0ca22230008f77927',
            ],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T06:17:28.064Z'
        }
    },
    {
        _id: {
            $oid: '6206262a0da968000873eaf0'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'Testing order',
        description: 'Testing order',
        objective: 'Testing order',
        startDate: '2022-02-23',
        endDate: '2022-02-23',
        locations: ['mumbai'],
        targetGender: 'co-ed',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Bengali (Bangla)',
            'Bodo',
            'Dogri',
            'English',
            'Gujarati',
            'Hindi',
            'Kannada',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'in-review',
        isApproved: false,
        campaignCreatives: [
            '1644570143803-AddButtonMargin_Admin.png',
            '1644570146247-image_2021_12_15T09_19_51_836Z.png',
            '1644570150105-image_2021_12_15T09_21_06_917Z.png',
        ],
        budget: 5183793,
        isTrial: false,
        wisrOffering: {
            inventory: true,
            eventAndOccations: false,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
            ],
            schools: ['613f1f21eec99a000989981f'],
            activities: []
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-11T09:02:34.553Z'
        }
    },
    {
        _id: {
            $oid: '6209f96a0da968000873eb17'
        },
        brandId: {
            $oid: '61efc9496b644e0009702919'
        },
        name: 'fgfd gfdg',
        description: 'dfgdfg',
        objective: 'dfgdfg',
        startDate: '2022-02-25',
        endDate: '2022-02-25',
        locations: [
            'mumbai',
            'mumbai suburban',
            'thane',
            'bengaluru',
            'hyderabad',
            'ahmedabad',
        ],
        targetGender: 'girls',
        targetAgeGroup: [3, 4],
        studyMedium: [
            'Assamese',
            'Bodo',
            'English',
            'Gujarati',
            'Kannada',
            'Kashmiri',
        ],
        brandCategory: '619cc735bc9cb529b8dd0fd9',
        brandSubcategory: '61efc9496b644e000970291a',
        recommendEvents: false,
        campaignStatus: 'trial',
        isApproved: false,
        campaignCreatives: [null, null, null],
        budget: 11000000,
        isTrial: true,
        wisrOffering: {
            inventory: true,
            eventAndOccations: true,
            csr: false,
            sampling: false,
            custom: false
        },
        campaignData: {
            inventories: [
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a4'
                    },
                    name: 'Washrooms',
                    attributes: ['Doors', 'Mirrors']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a7'
                    },
                    name: 'Auditorium',
                    attributes: ['Stage', 'Screens']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ac'
                    },
                    name: 'Hallway',
                    attributes: ['Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05af'
                    },
                    name: 'School Gate',
                    attributes: ['Gate']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a059e'
                    },
                    name: 'Uniforms',
                    attributes: ['Sleeve / Pocket']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a3'
                    },
                    name: 'Water Coolers',
                    attributes: ['Cover']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a6'
                    },
                    name: 'Assembly Hall',
                    attributes: ['Stage', 'Walls']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a2'
                    },
                    name: 'Canteen',
                    attributes: ['Walls', 'Menu', 'Trays', 'Tables', 'Chairs']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05b0'
                    },
                    name: 'Notice Board',
                    attributes: ['Board']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a5'
                    },
                    name: 'Staff Room',
                    attributes: ['Doors', 'Walls', 'Lockers']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05a1'
                    },
                    name: 'School Bags',
                    attributes: ['Bag Face']
                },
                {
                    _id: {
                        $oid: '615ae6c6954fe735a49a05ad'
                    },
                    name: 'School Bus',
                    attributes: ['Seat Covers']
                },
            ],
            schools: [
                '613aea21ed036e00082d3f09',
                '6143a0c1090e67000baeb478',
                '6172a88ff4c3ea0008aa6444',
                '61a79686388ffb000751b61f',
                '61555be1142d520008ac760b',
                '61af08399348190008b7cc16',
                '61af0c4e9348190008b7cc31',
                '61af12f49348190008b7cc43',
                '613f1f21eec99a000989981f',
                '61b33cfd9348190008b7cce6',
                '613b3751ef861d00094c240b',
                '616f2960f4c3ea0008aa6411',
            ],
            activities: [
                {
                    _id: {
                        $oid: '6143a0c1090e67000baeb493'
                    },
                    name: 'Christmas Party',
                    attributes: ['6143a0c1090e67000baeb4ce']
                },
            ]
        },
        paymentStatus: 'pending',
        createdOn: {
            $date: '2022-02-14T06:40:42.869Z'
        }
    },
];
exports["default"] = data;
