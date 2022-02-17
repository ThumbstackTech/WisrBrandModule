"use strict";
exports.__esModule = true;
var data = [
    {
        _id: {
            $oid: '611902f343e0980009967fd5'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611902f343e0980009967fd3'
        },
        createdOn: {
            $date: '2021-08-15T12:05:07.473Z'
        }
    },
    {
        _id: {
            $oid: '611902f343e0980009967fda'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: 'asd',
        images: [
            '1629028974213-Screenshot 2021-08-13 at 11.02.09.png',
            '1629028988278-Screenshot 2021-08-02 at 12.30.25.png',
            '1629028988283-Screenshot 2021-07-29 at 17.32.48.png',
            '1629028988270-Screenshot 2021-08-03 at 08.18.14.png',
        ],
        school: {
            $oid: '611902f343e0980009967fd3'
        },
        createdOn: {
            $date: '2021-08-15T12:05:07.475Z'
        }
    },
    {
        _id: {
            $oid: '611902f343e0980009967fdb'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: 'asd',
        images: ['1629029035584-Screenshot 2021-08-03 at 11.42.25.png'],
        school: {
            $oid: '611902f343e0980009967fd3'
        },
        createdOn: {
            $date: '2021-08-15T12:05:07.476Z'
        }
    },
    {
        _id: {
            $oid: '611902f343e0980009967fd6'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611902f343e0980009967fd3'
        },
        createdOn: {
            $date: '2021-08-15T12:05:07.474Z'
        }
    },
    {
        _id: {
            $oid: '611938a31c7c0b000871802f'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611938a31c7c0b000871802d'
        },
        createdOn: {
            $date: '2021-08-15T15:54:11.320Z'
        }
    },
    {
        _id: {
            $oid: '611938a31c7c0b0008718033'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'asd',
        images: [
            '1629042305483-Simulator Screen Shot - iPad Pro (12.9-inch) (4th generation) - 2021-03-04 at 00.28.12.png',
        ],
        school: {
            $oid: '611938a31c7c0b000871802d'
        },
        createdOn: {
            $date: '2021-08-15T15:54:11.323Z'
        }
    },
    {
        _id: {
            $oid: '611938a31c7c0b0008718034'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: 'fff',
        images: ['1629042336585-Screenshot 2021-02-26 at 18.08.49.png'],
        school: {
            $oid: '611938a31c7c0b000871802d'
        },
        createdOn: {
            $date: '2021-08-15T15:54:11.323Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcbe'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.294Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcbf'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.294Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcc0'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.294Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcc1'
        },
        type: 'student',
        _custom: true,
        name: 'test',
        customName: 'test',
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.295Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcc7'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 1',
        customName: 'tank',
        images: [],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.296Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcc8'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 2',
        customName: null,
        images: [],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.296Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcc9'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: 'Staff',
        images: ['1629122749895-school-water-tank.jpg'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.297Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcca'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 2',
        customName: 'Student',
        images: [
            '1629122785938-school.png',
            '1629122785943-Tank-gallery.jpg',
            '1629122794489-school gate 2.jpg',
            '1629122794499-school.png',
        ],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.297Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdccb'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: 'gate 1',
        images: [
            '1629122651291-gate 3.jpg',
            '1629122656403-school-water-tank.jpg',
            '1629122656400-school.png',
        ],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.297Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdccc'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 2',
        customName: 'gate 2',
        images: ['1629122698373-gate 3.jpg', '1629122698376-school-water-tank.jpg'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.298Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdccd'
        },
        type: 'classroom',
        _custom: false,
        name: 'Cabinets 1',
        customName: 'inside',
        images: ['1629122887554-cabinate 2.jpg', '1629122887551-cabinate 1.jpg'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.298Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcce'
        },
        type: 'classroom',
        _custom: false,
        name: 'Cabinets 2',
        customName: null,
        images: ['1629122946271-cabinate 2.jpg'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.298Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdccf'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: 'bench',
        images: ['1629122995419-gallery01.jpg'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.298Z'
        }
    },
    {
        _id: {
            $oid: '611a723f7a200a00084cdcd0'
        },
        type: 'classroom',
        _custom: false,
        name: 'Laboratory 1',
        customName: null,
        images: ['1629123086645-school.png'],
        school: {
            $oid: '611a723f7a200a00084cdcbc'
        },
        createdOn: {
            $date: '2021-08-16T14:12:15.298Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdcfd'
        },
        type: 'student',
        _custom: true,
        name: 'Compass',
        customName: 'Compass',
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.250Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd03'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 3',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.251Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd04'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 4',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.252Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd05'
        },
        type: 'school',
        _custom: false,
        name: 'Assembly Hall 1',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.252Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd06'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.252Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd07'
        },
        type: 'school',
        _custom: true,
        name: 'Test Inventory  1',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.252Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd08'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.252Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd09'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'Test',
        images: ['1629124261423-Airbnb_Peru_Skylodge.Jpg'],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.253Z'
        }
    },
    {
        _id: {
            $oid: '611a7a447a200a00084cdd0a'
        },
        type: 'classroom',
        _custom: false,
        name: 'Cabinets 1',
        customName: 'Test',
        images: ['1629124752562-Airbnb_Peru_Skylodge.Jpg'],
        school: {
            $oid: '611a7a447a200a00084cdcfb'
        },
        createdOn: {
            $date: '2021-08-16T14:46:28.253Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd29'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.090Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd2a'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.090Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd2b'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.090Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd3b'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'AUDITORIUM',
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.094Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd3c'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: 'CANTEEN',
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.094Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd3d'
        },
        type: 'school',
        _custom: false,
        name: 'Assembly Hall 1',
        customName: 'Hall',
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.094Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd3e'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.094Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd3f'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.094Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd40'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.095Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd41'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.095Z'
        }
    },
    {
        _id: {
            $oid: '611b7d5f7a200a00084cdd42'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b7d5e7a200a00084cdd27'
        },
        createdOn: {
            $date: '2021-08-17T09:11:59.095Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd62'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.517Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd63'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.517Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd64'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.517Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd73'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.520Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd74'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.520Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd75'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.520Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd76'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.521Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd77'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.521Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd78'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.522Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd79'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.522Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd7a'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.522Z'
        }
    },
    {
        _id: {
            $oid: '611b80e87a200a00084cdd7b'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdd60'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.522Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdda3'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.997Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdda4'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.997Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdda2'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:04.996Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb3'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb4'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb5'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb6'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb7'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb9'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.001Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddb8'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddba'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.001Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddbb'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e87a200a00084cdda0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.001Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdde3'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.364Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdde4'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.364Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cdde5'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.364Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf4'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.367Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf5'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.368Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf6'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.368Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf7'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.368Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf8'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.368Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddf9'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.368Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddfa'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.369Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddfb'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.369Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cddfc'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde0'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.369Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde24'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.503Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde25'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.503Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde26'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.504Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde35'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.507Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde36'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.507Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde37'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.507Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde38'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.507Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde39'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.507Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde3a'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.508Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde3b'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.508Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde3c'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.508Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde3d'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cdde2'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.508Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde68'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.768Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde69'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.768Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde6a'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.768Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde79'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.771Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7a'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.771Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7b'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.771Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7c'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.771Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7d'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.772Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7e'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.772Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde7f'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.772Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde80'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.772Z'
        }
    },
    {
        _id: {
            $oid: '611b80e97a200a00084cde81'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde04'
        },
        createdOn: {
            $date: '2021-08-17T09:27:05.772Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde86'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.193Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde87'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.194Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde88'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.194Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde97'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde98'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde99'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9a'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9b'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9c'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.197Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9d'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.198Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9e'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.198Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cde9f'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde03'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.198Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdec1'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.230Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdec2'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.230Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdec3'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.230Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded2'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.233Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded3'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded4'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded5'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded6'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded7'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded8'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cded9'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.235Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdeda'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde40'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.236Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdedb'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.238Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdedc'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.238Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdedd'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.238Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdeec'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.241Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdeed'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.241Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdeee'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.241Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdeef'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.241Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef0'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.241Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef1'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.242Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef2'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.242Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef3'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.242Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef4'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde41'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.242Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef5'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.244Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef6'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.244Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdef7'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.244Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf06'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.247Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf07'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf08'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf09'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0a'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0b'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0c'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0d'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.248Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0e'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde42'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.249Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf0f'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.251Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf10'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.251Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf11'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.251Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf20'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.256Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf21'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.256Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf22'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.256Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf23'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.256Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf24'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.257Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf25'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.257Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf26'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.257Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf27'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.257Z'
        }
    },
    {
        _id: {
            $oid: '611b80ea7a200a00084cdf28'
        },
        type: 'classroom',
        _custom: false,
        name: 'Bench 1',
        customName: null,
        images: [],
        school: {
            $oid: '611b80e97a200a00084cde43'
        },
        createdOn: {
            $date: '2021-08-17T09:27:06.257Z'
        }
    },
    {
        _id: {
            $oid: '611ba0d57a200a00084cdff7'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: 'notice board ',
        images: [],
        school: {
            $oid: '611ba0d57a200a00084cdfe6'
        },
        createdOn: {
            $date: '2021-08-17T11:43:17.871Z'
        }
    },
    {
        _id: {
            $oid: '611ba0d57a200a00084cdff8'
        },
        type: 'school',
        _custom: true,
        name: 'washrooms 1',
        customName: null,
        images: [],
        school: {
            $oid: '611ba0d57a200a00084cdfe6'
        },
        createdOn: {
            $date: '2021-08-17T11:43:17.871Z'
        }
    },
    {
        _id: {
            $oid: '611ba0d57a200a00084cdff9'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: 'Hall 1',
        images: ['1629198636654-adorable adorable.JPG'],
        school: {
            $oid: '611ba0d57a200a00084cdfe6'
        },
        createdOn: {
            $date: '2021-08-17T11:43:17.872Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce007'
        },
        type: 'student',
        _custom: false,
        name: 'Bags',
        customName: 'Bags',
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.389Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce006'
        },
        type: 'student',
        _custom: false,
        name: 'Stationary',
        customName: 'Stationary',
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.389Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce01f'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'Audi',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.393Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce020'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: 'Tables',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.393Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce021'
        },
        type: 'school',
        _custom: false,
        name: 'Assembly Hall 1',
        customName: 'Assembly',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.393Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce022'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: 'Staff',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce023'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: 'Notice Board',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce024'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce025'
        },
        type: 'school',
        _custom: false,
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce026'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce027'
        },
        type: 'classroom',
        _custom: false,
        name: 'Board 1',
        customName: 'Blackboard',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce028'
        },
        type: 'classroom',
        _custom: false,
        name: 'Laboratory 1',
        customName: 'Lab',
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611ba1e37a200a00084ce029'
        },
        type: 'classroom',
        _custom: true,
        name: 'Chart Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '611ba1e37a200a00084ce004'
        },
        createdOn: {
            $date: '2021-08-17T11:47:47.394Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79675'
        },
        type: 'student',
        _custom: false,
        name: 'Uniform',
        customName: 'Uniform',
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.511Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79683'
        },
        type: 'school',
        _custom: true,
        name: 'Trial Amenity 1',
        customName: null,
        images: [],
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.515Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79684'
        },
        type: 'school',
        _custom: false,
        name: 'Assembly Hall 1',
        customName: 'AH1',
        images: ['1629342000387-1607659697439.jpeg'],
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.516Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79685'
        },
        type: 'school',
        _custom: false,
        name: 'Assembly Hall 2',
        customName: 'AH2',
        images: ['1629342195598-Dear Self, Stay Strong.jpeg'],
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.516Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79686'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: 'SR1',
        images: ['1629342440607-Dear Self, Stay Strong.jpeg'],
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.516Z'
        }
    },
    {
        _id: {
            $oid: '611dcc88233ed20008e79687'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: 'NB1',
        images: ['1629342402589-gp4.png'],
        school: {
            $oid: '611dcc88233ed20008e79673'
        },
        createdOn: {
            $date: '2021-08-19T03:14:16.517Z'
        }
    },
    {
        _id: {
            $oid: '611e00d7233ed20008e7969f'
        },
        type: 'school',
        _custom: false,
        name: 'Washrooms 1',
        customName: 'mirror',
        images: [],
        school: {
            $oid: '611e00d6233ed20008e79697'
        },
        createdOn: {
            $date: '2021-08-19T06:57:27.028Z'
        }
    },
    {
        _id: {
            $oid: '611e00d7233ed20008e796a1'
        },
        type: 'classroom',
        _custom: false,
        name: 'Cabinets 1',
        customName: 'ded',
        images: [],
        school: {
            $oid: '611e00d6233ed20008e79697'
        },
        createdOn: {
            $date: '2021-08-19T06:57:27.029Z'
        }
    },
    {
        _id: {
            $oid: '611e00d7233ed20008e796a0'
        },
        type: 'school',
        _custom: true,
        name: 'YOGA CLASS 1',
        customName: 'mats',
        images: [],
        school: {
            $oid: '611e00d6233ed20008e79697'
        },
        createdOn: {
            $date: '2021-08-19T06:57:27.028Z'
        }
    },
    {
        _id: {
            $oid: '611f8bed54125b00087e11e9'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'stage',
        images: ['1629457256938-Screenshot 2021-06-21 at 18.34.40.png'],
        school: {
            $oid: '611f8bec54125b00087e11e0'
        },
        createdOn: {
            $date: '2021-08-20T11:03:09.054Z'
        }
    },
    {
        _id: {
            $oid: '612a23dbf99b4d0008828e43'
        },
        type: 'school',
        _custom: false,
        name: 'Auditorium 1',
        customName: 'audi 1',
        images: [],
        school: {
            $oid: '612a23dbf99b4d0008828e3e'
        },
        createdOn: {
            $date: '2021-08-28T11:54:03.652Z'
        }
    },
    {
        _id: {
            $oid: '612b59f8f99b4d0008828e4a'
        },
        type: 'school',
        _custom: false,
        name: 'Staff Room 1',
        customName: 'staff room',
        images: [],
        school: {
            $oid: '612b59f8f99b4d0008828e46'
        },
        createdOn: {
            $date: '2021-08-29T09:57:12.828Z'
        }
    },
    {
        _id: {
            $oid: '612df7a4f99b4d0008828e5f'
        },
        type: 'school',
        _custom: false,
        name: 'Notice Board 1',
        customName: 'Classroom',
        images: [],
        school: {
            $oid: '612df7a4f99b4d0008828e4e'
        },
        createdOn: {
            $date: '2021-08-31T09:34:28.749Z'
        }
    },
    {
        _id: {
            $oid: '612df7a4f99b4d0008828e60'
        },
        type: 'school',
        _custom: false,
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '612df7a4f99b4d0008828e4e'
        },
        createdOn: {
            $date: '2021-08-31T09:34:28.750Z'
        }
    },
    {
        _id: {
            $oid: '6130c14611ac8900088aba7f'
        },
        type: 'school',
        _custom: false,
        name: 'Canteen 1',
        customName: 'Ground Floor',
        images: [],
        school: {
            $oid: '6130c14611ac8900088aba76'
        },
        createdOn: {
            $date: '2021-09-02T12:19:18.743Z'
        }
    },
    {
        _id: {
            $oid: '6130c14611ac8900088aba80'
        },
        type: 'classroom',
        _custom: false,
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '6130c14611ac8900088aba76'
        },
        createdOn: {
            $date: '2021-09-02T12:19:18.743Z'
        }
    },
    {
        _id: {
            $oid: '6130c14611ac8900088aba81'
        },
        type: 'classroom',
        _custom: true,
        name: 'Water bottle 1',
        customName: null,
        images: [],
        school: {
            $oid: '6130c14611ac8900088aba76'
        },
        createdOn: {
            $date: '2021-09-02T12:19:18.743Z'
        }
    },
    {
        _id: {
            $oid: '6130c14611ac8900088aba82'
        },
        type: 'school',
        _custom: false,
        name: 'Computer Lab 1',
        customName: 'First Floor Lab',
        images: ['1630583430345-gallery01.jpg', '1630583430379-gate 3.jpg'],
        school: {
            $oid: '6130c14611ac8900088aba76'
        },
        createdOn: {
            $date: '2021-09-02T12:19:18.744Z'
        }
    },
    {
        _id: {
            $oid: '6130c14611ac8900088aba83'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 1',
        customName: null,
        images: [
            '1630583499764-Tank-gallery.jpg',
            '1630583499760-school-water-tank.jpg',
        ],
        school: {
            $oid: '6130c14611ac8900088aba76'
        },
        createdOn: {
            $date: '2021-09-02T12:19:18.744Z'
        }
    },
    {
        _id: {
            $oid: '613ae846ed036e00082d3f01'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'uniform1',
        images: [],
        school: {
            $oid: '613ae846ed036e00082d3efb'
        },
        createdOn: {
            $date: '2021-09-10T05:08:22.901Z'
        }
    },
    {
        _id: {
            $oid: '613ae846ed036e00082d3f02'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: 'Bus-no-MH1023',
        images: ['1631250447948-assembly_hall_4.jpg'],
        school: {
            $oid: '613ae846ed036e00082d3efb'
        },
        createdOn: {
            $date: '2021-09-10T05:08:22.903Z'
        }
    },
    {
        _id: {
            $oid: '613aea21ed036e00082d3f11'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: 'Main gate',
        images: ['1631256656623-Moana_002.jpg'],
        school: {
            $oid: '613aea21ed036e00082d3f09'
        },
        createdOn: {
            $date: '2021-09-10T05:16:17.831Z'
        }
    },
    {
        _id: {
            $oid: '613aea21ed036e00082d3f12'
        },
        type: 'school',
        name: 'School Gate 2',
        customName: 'Back gate',
        images: [],
        school: {
            $oid: '613aea21ed036e00082d3f09'
        },
        createdOn: {
            $date: '2021-09-10T05:16:17.831Z'
        }
    },
    {
        _id: {
            $oid: '613aea21ed036e00082d3f13'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'Yoga Class Bag',
        images: ['1631266388518-tulip.jpg'],
        school: {
            $oid: '613aea21ed036e00082d3f09'
        },
        createdOn: {
            $date: '2021-09-10T05:16:17.832Z'
        }
    },
    {
        _id: {
            $oid: '613afbaced036e00082d3f2a'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: 'corridor',
        images: [],
        school: {
            $oid: '613afbabed036e00082d3f25'
        },
        createdOn: {
            $date: '2021-09-10T06:31:08.088Z'
        }
    },
    {
        _id: {
            $oid: '613afbaced036e00082d3f2b'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: 'girls',
        images: [],
        school: {
            $oid: '613afbabed036e00082d3f25'
        },
        createdOn: {
            $date: '2021-09-10T06:31:08.088Z'
        }
    },
    {
        _id: {
            $oid: '613b2982ef861d00094c23f0'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: 'b1',
        images: [],
        school: {
            $oid: '613b2982ef861d00094c23e9'
        },
        createdOn: {
            $date: '2021-09-10T09:46:42.188Z'
        }
    },
    {
        _id: {
            $oid: '613b2982ef861d00094c23f1'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: 'sb1',
        images: ['1631267118116-eduardo-bergen-a1V5iA9UTDc-unsplash.jpg'],
        school: {
            $oid: '613b2982ef861d00094c23e9'
        },
        createdOn: {
            $date: '2021-09-10T09:46:42.191Z'
        }
    },
    {
        _id: {
            $oid: '613b29dbef861d00094c2401'
        },
        type: 'classroom',
        _custom: true,
        name: 'Cupboard  1',
        customName: null,
        images: [],
        school: {
            $oid: '613b29daef861d00094c23fd'
        },
        createdOn: {
            $date: '2021-09-10T09:48:10.985Z'
        }
    },
    {
        _id: {
            $oid: '613b29dbef861d00094c2402'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: 'Rockstars',
        images: ['1631267118481-Airbnb_Peru_Skylodge.Jpg'],
        school: {
            $oid: '613b29daef861d00094c23fd'
        },
        createdOn: {
            $date: '2021-09-10T09:48:11.007Z'
        }
    },
    {
        _id: {
            $oid: '613b3751ef861d00094c2412'
        },
        type: 'school',
        name: 'Science Lab 2',
        customName: null,
        images: ['1631276041808-gallery01.jpg'],
        school: {
            $oid: '613b3751ef861d00094c240b'
        },
        createdOn: {
            $date: '2021-09-10T10:45:37.720Z'
        }
    },
    {
        _id: {
            $oid: '613b3751ef861d00094c2413'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'Boys',
        images: [
            '1631271082475-Tank-gallery.jpg',
            '1631276085374-gate 3.jpg',
            '1631271339107-gate 3.jpg',
        ],
        school: {
            $oid: '613b3751ef861d00094c240b'
        },
        createdOn: {
            $date: '2021-09-10T10:45:37.720Z'
        }
    },
    {
        _id: {
            $oid: '613b3751ef861d00094c2414'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: 'Ground Floor',
        images: ['1631270377444-cabinate 2.jpg'],
        school: {
            $oid: '613b3751ef861d00094c240b'
        },
        createdOn: {
            $date: '2021-09-10T10:45:37.724Z'
        }
    },
    {
        _id: {
            $oid: '613b3751ef861d00094c2415'
        },
        type: 'school',
        _custom: true,
        name: 'School Compound 1',
        customName: 'Ground Floor',
        images: ['1631270428933-hall 2.jpg'],
        school: {
            $oid: '613b3751ef861d00094c240b'
        },
        createdOn: {
            $date: '2021-09-10T10:45:37.727Z'
        }
    },
    {
        _id: {
            $oid: '613e193b30ec520007114539'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: 'Audi 1',
        images: [],
        school: {
            $oid: '613e193b30ec52000711452a'
        },
        createdOn: {
            $date: '2021-09-12T15:14:03.143Z'
        }
    },
    {
        _id: {
            $oid: '613e193b30ec52000711453a'
        },
        type: 'school',
        name: 'Auditorium 2',
        customName: 'Audi 2',
        images: [],
        school: {
            $oid: '613e193b30ec52000711452a'
        },
        createdOn: {
            $date: '2021-09-12T15:14:03.143Z'
        }
    },
    {
        _id: {
            $oid: '613e193b30ec52000711453b'
        },
        type: 'school',
        name: 'Sports Ground 1',
        customName: 'Ground',
        images: [],
        school: {
            $oid: '613e193b30ec52000711452a'
        },
        createdOn: {
            $date: '2021-09-12T15:14:03.144Z'
        }
    },
    {
        _id: {
            $oid: '613e193b30ec52000711453c'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '613e193b30ec52000711452a'
        },
        createdOn: {
            $date: '2021-09-12T15:14:03.149Z'
        }
    },
    {
        _id: {
            $oid: '613e193b30ec52000711453d'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: null,
        images: [],
        school: {
            $oid: '613e193b30ec52000711452a'
        },
        createdOn: {
            $date: '2021-09-12T15:14:03.149Z'
        }
    },
    {
        _id: {
            $oid: '613ecb2030ec52000711454c'
        },
        type: 'school',
        name: 'Hallway 1',
        customName: 'SDFZ',
        images: [],
        school: {
            $oid: '613ecb2030ec520007114547'
        },
        createdOn: {
            $date: '2021-09-13T03:53:04.305Z'
        }
    },
    {
        _id: {
            $oid: '613ecb2030ec52000711454d'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '613ecb2030ec520007114547'
        },
        createdOn: {
            $date: '2021-09-13T03:53:04.305Z'
        }
    },
    {
        _id: {
            $oid: '613ecb2030ec52000711454e'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '613ecb2030ec520007114547'
        },
        createdOn: {
            $date: '2021-09-13T03:53:04.305Z'
        }
    },
    {
        _id: {
            $oid: '613ecb2030ec52000711454f'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '613ecb2030ec520007114547'
        },
        createdOn: {
            $date: '2021-09-13T03:53:04.306Z'
        }
    },
    {
        _id: {
            $oid: '613f1f21eec99a0009899824'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: 'x',
        images: [],
        school: {
            $oid: '613f1f21eec99a000989981f'
        },
        createdOn: {
            $date: '2021-09-13T09:51:29.676Z'
        }
    },
    {
        _id: {
            $oid: '613f1f21eec99a0009899825'
        },
        type: 'classroom',
        name: 'Board 1',
        customName: 's',
        images: [],
        school: {
            $oid: '613f1f21eec99a000989981f'
        },
        createdOn: {
            $date: '2021-09-13T09:51:29.676Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb497'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.823Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb498'
        },
        type: 'school',
        name: 'Auditorium 2',
        customName: 'Test',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.824Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb499'
        },
        type: 'school',
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.824Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49a'
        },
        type: 'school',
        name: 'Assembly Hall 1',
        customName: 'Main ',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.824Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49b'
        },
        type: 'school',
        name: 'Staff Room 1',
        customName: 'Teacher',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.824Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49c'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.825Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49d'
        },
        type: 'school',
        name: 'Sports Ground 1',
        customName: 'Boys',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.825Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49e'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: 'Girls bus',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.825Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb49f'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: 'Main gate',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.825Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a0'
        },
        type: 'school',
        name: 'School Gate 2',
        customName: 'Back gate',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.826Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a1'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.826Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a2'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: 'Girl ',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.826Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a3'
        },
        type: 'school',
        name: 'Washrooms 2',
        customName: 'Boys',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.826Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a4'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.826Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a5'
        },
        type: 'school',
        name: 'Music Class 1',
        customName: null,
        images: ['1631885853033-Moana_002.jpg'],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.827Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a6'
        },
        type: 'school',
        name: 'Hallway 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.827Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a7'
        },
        type: 'school',
        name: 'Computer Lab 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.827Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a8'
        },
        type: 'classroom',
        name: 'Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.827Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4a9'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.828Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4aa'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: null,
        images: ['1631885892032-Airbnb_Peru_Skylodge.Jpg'],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.828Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4ab'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.828Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4ac'
        },
        type: 'classroom',
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.828Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4ad'
        },
        type: 'classroom',
        name: 'Sport Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.829Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4ae'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.829Z'
        }
    },
    {
        _id: {
            $oid: '6143a0c1090e67000baeb4af'
        },
        type: 'classroom',
        _custom: true,
        name: 'Projector 1',
        customName: 'Front one',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-16T19:53:37.829Z'
        }
    },
    {
        _id: {
            $oid: '614439f2090e67000baeb50a'
        },
        type: 'classroom',
        name: 'Board 1',
        customName: 'board2',
        images: [],
        school: {
            $oid: '614439f2090e67000baeb505'
        },
        createdOn: {
            $date: '2021-09-17T06:47:14.691Z'
        }
    },
    {
        _id: {
            $oid: '614439f2090e67000baeb50b'
        },
        type: 'school',
        name: 'Auditorium 4',
        customName: 'Auditorium',
        images: [
            '1631861007874-invoice.png',
            '1631861014642-write.png',
            '1631861035343-amazon3.jpg',
            '1631861060513-donald-giannatti-Wj1D-qiOseE-unsplash.jpg',
        ],
        school: {
            $oid: '614439f2090e67000baeb505'
        },
        createdOn: {
            $date: '2021-09-17T06:47:14.694Z'
        }
    },
    {
        _id: {
            $oid: '61444175090e67000baeb51a'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: 'Ground Floor',
        images: ['1631863361539-school gate 2.jpg'],
        school: {
            $oid: '61444174090e67000baeb511'
        },
        createdOn: {
            $date: '2021-09-17T07:19:17.094Z'
        }
    },
    {
        _id: {
            $oid: '61444175090e67000baeb51b'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 1',
        customName: 'First Floor Lab',
        images: ['1631862190652-Tank-gallery.jpg'],
        school: {
            $oid: '61444174090e67000baeb511'
        },
        createdOn: {
            $date: '2021-09-17T07:19:17.094Z'
        }
    },
    {
        _id: {
            $oid: '61444175090e67000baeb519'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'Boys',
        images: ['1631863391950-school.png'],
        school: {
            $oid: '61444174090e67000baeb511'
        },
        createdOn: {
            $date: '2021-09-17T07:19:17.093Z'
        }
    },
    {
        _id: {
            $oid: '61444175090e67000baeb51c'
        },
        type: 'classroom',
        _custom: true,
        name: 'Water Bottle 1',
        customName: 'red',
        images: ['1631862221791-cabinate 2.jpg'],
        school: {
            $oid: '61444174090e67000baeb511'
        },
        createdOn: {
            $date: '2021-09-17T07:19:17.094Z'
        }
    },
    {
        _id: {
            $oid: '61444175090e67000baeb518'
        },
        type: 'school',
        name: 'School Gate 2',
        customName: null,
        images: [],
        school: {
            $oid: '61444174090e67000baeb511'
        },
        createdOn: {
            $date: '2021-09-17T07:19:17.092Z'
        }
    },
    {
        _id: {
            $oid: '614482066523e300091f7209'
        },
        type: 'school',
        _custom: true,
        name: 'Windows  1',
        images: [],
        school: {
            $oid: '6143a0c1090e67000baeb478'
        },
        createdOn: {
            $date: '2021-09-17T11:54:46.979Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c43'
        },
        type: 'school',
        name: 'School Gate 2',
        customName: 'First Floor Lab',
        images: [],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.896Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c44'
        },
        type: 'classroom',
        _custom: true,
        name: 'Water bottle 1',
        customName: 'First Floor Lab',
        images: [],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.896Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c45'
        },
        type: 'classroom',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.897Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c46'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: 'Ground Floor',
        images: ['1632134337789-gate 3.jpg'],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.898Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c47'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 1',
        customName: 'Ground Floor',
        images: ['1632134367368-gallery01.jpg'],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.898Z'
        }
    },
    {
        _id: {
            $oid: '614865a532e4ba0008098c48'
        },
        type: 'classroom',
        name: 'Staff Uniforms 1',
        customName: 'Boys',
        images: ['1632134398049-cabinate 2.jpg'],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:42:45.899Z'
        }
    },
    {
        _id: {
            $oid: '6148680432e4ba0008098c61'
        },
        type: 'school',
        name: 'Hallway 1',
        images: ['1632135106774-cabinate 1.jpg'],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:52:52.673Z'
        }
    },
    {
        _id: {
            $oid: '6148680732e4ba0008098c64'
        },
        type: 'classroom',
        _custom: true,
        name: 'Test 1',
        images: [],
        school: {
            $oid: '614865a532e4ba0008098c3c'
        },
        createdOn: {
            $date: '2021-09-20T10:52:55.020Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5df'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: 'primary',
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.418Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e0'
        },
        type: 'school',
        name: 'Auditorium 2',
        customName: 'secondary',
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.418Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e1'
        },
        type: 'school',
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.418Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e2'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.418Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e3'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.419Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e4'
        },
        type: 'classroom',
        name: 'Cabinets 2',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.419Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e5'
        },
        type: 'classroom',
        name: 'Cabinets 3',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.419Z'
        }
    },
    {
        _id: {
            $oid: '614ac292858405000a58d5e6'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '614ac292858405000a58d5d4'
        },
        createdOn: {
            $date: '2021-09-22T05:43:46.419Z'
        }
    },
    {
        _id: {
            $oid: '614c353f858405000a58d602'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: 'Ground Floor',
        images: [],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-09-23T08:05:19.081Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '614c353f858405000a58d603'
        },
        type: 'school',
        _custom: true,
        name: 'Test school 1',
        customName: 'Quantity:- Stage-13, Wall-16, Floor-15',
        images: [],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-09-23T08:05:19.081Z'
        }
    },
    {
        _id: {
            $oid: '614c353f858405000a58d604'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'Girls',
        images: [],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-09-23T08:05:19.082Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d61f'
        },
        type: 'school',
        name: 'Staff Room 1',
        customName: 'Female staff room ',
        images: [
            '1632306667449-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632306679080-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632306737466-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
            '1632307006173-f1f597bd-d01d-49d3-ad1f-db6e8a6f2ff4.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.619Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d620'
        },
        type: 'school',
        name: 'Staff Room 2',
        customName: 'Male staffroom ',
        images: [
            '1632383212814-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632383381679-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632383381683-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.619Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d621'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: ['1632306753207-361d965f-f096-457b-9073-24e978ff3de8.jpg'],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.619Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d622'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: null,
        images: [
            '1632306931750-1da64117-1e79-4064-bd87-c7da7b47b325.jpg',
            '1632306978066-51517ecc-3c91-4c04-bd60-945383d31fda.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.620Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d623'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: 'Lab',
        images: [
            '1632306599891-512dab11-2bc4-482b-aa1b-35bc463602e1.jpg',
            '1632306651373-934be079-8c60-488f-b14f-2fe25a4279aa.jpg',
            '1632306651369-aa88cc65-8809-4ab3-86f2-daa37d97dd0a.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.620Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d624'
        },
        type: 'classroom',
        name: 'Boards 1',
        customName: null,
        images: [
            '1632307081629-a7d92351-2cee-40f0-9f3b-fe00f9efe637.jpg',
            '1632307166482-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307166479-1f2c1462-d993-4b63-b64a-c2790facd02b.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.620Z'
        }
    },
    {
        _id: {
            $oid: '614c356f858405000a58d625'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: null,
        images: [
            '1632307152614-ff0ff572-7a63-45cc-9291-c0321bbdb570.jpg',
            '1632307152617-4863d4b1-af84-49ec-8a3b-0cf7fcb82fb6.jpg',
            '1632307152622-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307152620-93a98ae5-6561-4766-a5a2-68f741cf249e.jpg',
        ],
        school: {
            $oid: '614c356f858405000a58d60e'
        },
        createdOn: {
            $date: '2021-09-23T08:06:07.620Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d653'
        },
        type: 'school',
        name: 'Staff Room 1',
        customName: 'Female staff room ',
        images: [
            '1632306667449-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632306679080-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632306737466-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
            '1632307006173-f1f597bd-d01d-49d3-ad1f-db6e8a6f2ff4.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.189Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d654'
        },
        type: 'school',
        name: 'Staff Room 2',
        customName: 'Male staffroom ',
        images: [
            '1632383212814-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632383381679-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632383381683-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.189Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d655'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: ['1632306753207-361d965f-f096-457b-9073-24e978ff3de8.jpg'],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.190Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d656'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: null,
        images: [
            '1632306931750-1da64117-1e79-4064-bd87-c7da7b47b325.jpg',
            '1632306978066-51517ecc-3c91-4c04-bd60-945383d31fda.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.190Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d657'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: 'Lab',
        images: [
            '1632306599891-512dab11-2bc4-482b-aa1b-35bc463602e1.jpg',
            '1632306651373-934be079-8c60-488f-b14f-2fe25a4279aa.jpg',
            '1632306651369-aa88cc65-8809-4ab3-86f2-daa37d97dd0a.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.190Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d658'
        },
        type: 'classroom',
        name: 'Boards 1',
        customName: null,
        images: [
            '1632307081629-a7d92351-2cee-40f0-9f3b-fe00f9efe637.jpg',
            '1632307166482-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307166479-1f2c1462-d993-4b63-b64a-c2790facd02b.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.190Z'
        }
    },
    {
        _id: {
            $oid: '614c3572858405000a58d659'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: null,
        images: [
            '1632307152614-ff0ff572-7a63-45cc-9291-c0321bbdb570.jpg',
            '1632307152617-4863d4b1-af84-49ec-8a3b-0cf7fcb82fb6.jpg',
            '1632307152622-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307152620-93a98ae5-6561-4766-a5a2-68f741cf249e.jpg',
        ],
        school: {
            $oid: '614c3572858405000a58d642'
        },
        createdOn: {
            $date: '2021-09-23T08:06:10.190Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d687'
        },
        type: 'school',
        name: 'Staff Room 1',
        customName: 'Female staff room ',
        images: [
            '1632306667449-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632306679080-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632306737466-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
            '1632307006173-f1f597bd-d01d-49d3-ad1f-db6e8a6f2ff4.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d688'
        },
        type: 'school',
        name: 'Staff Room 2',
        customName: 'Male staffroom ',
        images: [
            '1632383212814-68ccbfe8-93c2-45e6-ba68-a02c5f9a6bc5.jpg',
            '1632383381679-dd95b083-be76-49e7-be83-07e5e6911b1e.jpg',
            '1632383381683-a4239eb3-0dfd-4a39-9715-26d163dc11ad.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d689'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: ['1632306753207-361d965f-f096-457b-9073-24e978ff3de8.jpg'],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d68a'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: null,
        images: [
            '1632306931750-1da64117-1e79-4064-bd87-c7da7b47b325.jpg',
            '1632306978066-51517ecc-3c91-4c04-bd60-945383d31fda.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d68b'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: 'Lab',
        images: [
            '1632306599891-512dab11-2bc4-482b-aa1b-35bc463602e1.jpg',
            '1632306651373-934be079-8c60-488f-b14f-2fe25a4279aa.jpg',
            '1632306651369-aa88cc65-8809-4ab3-86f2-daa37d97dd0a.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d68c'
        },
        type: 'classroom',
        name: 'Boards 1',
        customName: null,
        images: [
            '1632307081629-a7d92351-2cee-40f0-9f3b-fe00f9efe637.jpg',
            '1632307166482-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307166479-1f2c1462-d993-4b63-b64a-c2790facd02b.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.946Z'
        }
    },
    {
        _id: {
            $oid: '614c3574858405000a58d68d'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: null,
        images: [
            '1632307152614-ff0ff572-7a63-45cc-9291-c0321bbdb570.jpg',
            '1632307152617-4863d4b1-af84-49ec-8a3b-0cf7fcb82fb6.jpg',
            '1632307152622-904081ac-4296-426e-bd41-538719cfcd7a.jpg',
            '1632307152620-93a98ae5-6561-4766-a5a2-68f741cf249e.jpg',
        ],
        school: {
            $oid: '614c3574858405000a58d676'
        },
        createdOn: {
            $date: '2021-09-23T08:06:12.947Z'
        }
    },
    {
        _id: {
            $oid: '614c45b0858405000a58d6b6'
        },
        type: 'school',
        _custom: false,
        name: 'School Gate 2',
        images: [],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-09-23T09:15:28.253Z'
        }
    },
    {
        _id: {
            $oid: '614efa7e142d520008ac75a6'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '614efa7d142d520008ac75a1'
        },
        createdOn: {
            $date: '2021-09-25T10:31:26.146Z'
        }
    },
    {
        _id: {
            $oid: '614efa7e142d520008ac75a7'
        },
        type: 'school',
        name: 'Canteen 1',
        customName: null,
        images: [],
        school: {
            $oid: '614efa7d142d520008ac75a1'
        },
        createdOn: {
            $date: '2021-09-25T10:31:26.146Z'
        }
    },
    {
        _id: {
            $oid: '614efa7e142d520008ac75a8'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '614efa7d142d520008ac75a1'
        },
        createdOn: {
            $date: '2021-09-25T10:31:26.146Z'
        }
    },
    {
        _id: {
            $oid: '614efa7e142d520008ac75a9'
        },
        type: 'school',
        _custom: true,
        name: 'lobby 1',
        customName: null,
        images: [],
        school: {
            $oid: '614efa7d142d520008ac75a1'
        },
        createdOn: {
            $date: '2021-09-25T10:31:26.147Z'
        }
    },
    {
        _id: {
            $oid: '614efa7e142d520008ac75aa'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '614efa7d142d520008ac75a1'
        },
        createdOn: {
            $date: '2021-09-25T10:31:26.147Z'
        }
    },
    {
        _id: {
            $oid: '61534b65142d520008ac75c5'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61534b65142d520008ac75bf'
        },
        createdOn: {
            $date: '2021-09-28T17:05:41.674Z'
        }
    },
    {
        _id: {
            $oid: '61534b65142d520008ac75c6'
        },
        type: 'classroom',
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61534b65142d520008ac75bf'
        },
        createdOn: {
            $date: '2021-09-28T17:05:41.674Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75db'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.473Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75dc'
        },
        type: 'school',
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.473Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75dd'
        },
        type: 'school',
        name: 'School Bus 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75de'
        },
        type: 'school',
        name: 'Washrooms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75df'
        },
        type: 'school',
        name: 'Music Class 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e0'
        },
        type: 'school',
        _custom: true,
        name: 'Water Tank 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e1'
        },
        type: 'classroom',
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e2'
        },
        type: 'classroom',
        name: 'Sport Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.474Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e3'
        },
        type: 'school',
        name: 'Staff Room 1',
        customName: null,
        images: ['1632909431640-gate 3.jpg'],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.476Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e4'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: ['1632909486316-cabinate 2.jpg'],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.476Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e5'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: null,
        images: ['1632909492989-gallery01.jpg'],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.477Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e6'
        },
        type: 'school',
        name: 'Science Lab 1',
        customName: 'First Floor Lab',
        images: ['1632909513121-school gate 2.jpg'],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.477Z'
        }
    },
    {
        _id: {
            $oid: '61544a30142d520008ac75e7'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: ['1632910348368-gallery01.jpg'],
        school: {
            $oid: '61544a30142d520008ac75cd'
        },
        createdOn: {
            $date: '2021-09-29T11:12:48.477Z'
        }
    },
    {
        _id: {
            $oid: '61555be1142d520008ac761d'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61555be1142d520008ac760b'
        },
        createdOn: {
            $date: '2021-09-30T06:40:33.934Z'
        }
    },
    {
        _id: {
            $oid: '615d6667142d520008ac7626'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '615d6667142d520008ac7621'
        },
        createdOn: {
            $date: '2021-10-06T09:03:35.227Z'
        }
    },
    {
        _id: {
            $oid: '615d8133e7af8600080e0e6f'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '615d8133e7af8600080e0e68'
        },
        createdOn: {
            $date: '2021-10-06T10:57:55.317Z'
        }
    },
    {
        _id: {
            $oid: '615d8133e7af8600080e0e70'
        },
        type: 'classroom',
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '615d8133e7af8600080e0e68'
        },
        createdOn: {
            $date: '2021-10-06T10:57:55.317Z'
        }
    },
    {
        _id: {
            $oid: '615d8133e7af8600080e0e71'
        },
        type: 'classroom',
        _custom: true,
        name: 'Water Bottle 1',
        customName: null,
        images: [],
        school: {
            $oid: '615d8133e7af8600080e0e68'
        },
        createdOn: {
            $date: '2021-10-06T10:57:55.317Z'
        }
    },
    {
        _id: {
            $oid: '615e7ca7e7af8600080e0e86'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '615e7ca7e7af8600080e0e7f'
        },
        createdOn: {
            $date: '2021-10-07T04:50:47.503Z'
        }
    },
    {
        _id: {
            $oid: '615e7ca7e7af8600080e0e88'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '615e7ca7e7af8600080e0e7f'
        },
        createdOn: {
            $date: '2021-10-07T04:50:47.504Z'
        }
    },
    {
        _id: {
            $oid: '615e7ca7e7af8600080e0e87'
        },
        type: 'school',
        _custom: true,
        name: 'uniform 1',
        customName: null,
        images: [],
        school: {
            $oid: '615e7ca7e7af8600080e0e7f'
        },
        createdOn: {
            $date: '2021-10-07T04:50:47.503Z'
        }
    },
    {
        _id: {
            $oid: '61657128e7af8600080e0e95'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: 'Corridor',
        images: [],
        school: {
            $oid: '61657128e7af8600080e0e90'
        },
        createdOn: {
            $date: '2021-10-12T11:27:36.754Z'
        }
    },
    {
        _id: {
            $oid: '61657128e7af8600080e0e96'
        },
        type: 'school',
        _custom: true,
        name: 'Y 1',
        customName: 'Swimming pool',
        images: [],
        school: {
            $oid: '61657128e7af8600080e0e90'
        },
        createdOn: {
            $date: '2021-10-12T11:27:36.755Z'
        }
    },
    {
        _id: {
            $oid: '61657128e7af8600080e0e97'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'Girls',
        images: [],
        school: {
            $oid: '61657128e7af8600080e0e90'
        },
        createdOn: {
            $date: '2021-10-12T11:27:36.755Z'
        }
    },
    {
        _id: {
            $oid: '6166d55c85e0dc0008049500'
        },
        type: 'school',
        name: 'Notice Board 2',
        customName: 'corridor',
        images: [],
        school: {
            $oid: '6166d55b85e0dc00080494fa'
        },
        createdOn: {
            $date: '2021-10-13T12:47:24.132Z'
        }
    },
    {
        _id: {
            $oid: '6166d55c85e0dc0008049501'
        },
        type: 'school',
        _custom: true,
        name: 'swimming pool 1',
        customName: null,
        images: [],
        school: {
            $oid: '6166d55b85e0dc00080494fa'
        },
        createdOn: {
            $date: '2021-10-13T12:47:24.132Z'
        }
    },
    {
        _id: {
            $oid: '6166d55c85e0dc0008049502'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '6166d55b85e0dc00080494fa'
        },
        createdOn: {
            $date: '2021-10-13T12:47:24.134Z'
        }
    },
    {
        _id: {
            $oid: '6166d55c85e0dc0008049503'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: 'corridor/ outside PR',
        images: ['1634128968601-adorable adorable.JPG'],
        school: {
            $oid: '6166d55b85e0dc00080494fa'
        },
        createdOn: {
            $date: '2021-10-13T12:47:24.136Z'
        }
    },
    {
        _id: {
            $oid: '616e772d2d11a30008f9d500'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '616e772d2d11a30008f9d4fc'
        },
        createdOn: {
            $date: '2021-10-19T07:43:41.802Z'
        }
    },
    {
        _id: {
            $oid: '616e772d2d11a30008f9d501'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: 'corridor',
        images: ['1634629273775-adorable adorable.JPG'],
        school: {
            $oid: '616e772d2d11a30008f9d4fc'
        },
        createdOn: {
            $date: '2021-10-19T07:43:41.804Z'
        }
    },
    {
        _id: {
            $oid: '616f2960f4c3ea0008aa6415'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '616f2960f4c3ea0008aa6411'
        },
        createdOn: {
            $date: '2021-10-19T20:24:00.537Z'
        }
    },
    {
        _id: {
            $oid: '616f2960f4c3ea0008aa6416'
        },
        type: 'classroom',
        _custom: true,
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '616f2960f4c3ea0008aa6411'
        },
        createdOn: {
            $date: '2021-10-19T20:24:00.537Z'
        }
    },
    {
        _id: {
            $oid: '616fce20f4c3ea0008aa6424'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: 'corridor 1',
        images: [],
        school: {
            $oid: '616fce20f4c3ea0008aa6420'
        },
        createdOn: {
            $date: '2021-10-20T08:06:56.629Z'
        }
    },
    {
        _id: {
            $oid: '616fce20f4c3ea0008aa6425'
        },
        type: 'school',
        name: 'Water Coolers 2',
        customName: 'corridor 2',
        images: [],
        school: {
            $oid: '616fce20f4c3ea0008aa6420'
        },
        createdOn: {
            $date: '2021-10-20T08:06:56.629Z'
        }
    },
    {
        _id: {
            $oid: '616fce20f4c3ea0008aa6426'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: '200',
        images: [],
        school: {
            $oid: '616fce20f4c3ea0008aa6420'
        },
        createdOn: {
            $date: '2021-10-20T08:06:56.629Z'
        }
    },
    {
        _id: {
            $oid: '616fce20f4c3ea0008aa6427'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: '1',
        images: ['1634717064761-adorable adorable.JPG'],
        school: {
            $oid: '616fce20f4c3ea0008aa6420'
        },
        createdOn: {
            $date: '2021-10-20T08:06:56.631Z'
        }
    },
    {
        _id: {
            $oid: '61725a8bf4c3ea0008aa6435'
        },
        type: 'school',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61725a8bf4c3ea0008aa6431'
        },
        createdOn: {
            $date: '2021-10-22T06:30:35.362Z'
        }
    },
    {
        _id: {
            $oid: '61725a8bf4c3ea0008aa6436'
        },
        type: 'school',
        _custom: true,
        name: 'lawn 1',
        customName: null,
        images: [],
        school: {
            $oid: '61725a8bf4c3ea0008aa6431'
        },
        createdOn: {
            $date: '2021-10-22T06:30:35.362Z'
        }
    },
    {
        _id: {
            $oid: '61725a8bf4c3ea0008aa6437'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '61725a8bf4c3ea0008aa6431'
        },
        createdOn: {
            $date: '2021-10-22T06:30:35.362Z'
        }
    },
    {
        _id: {
            $oid: '6172a88ff4c3ea0008aa6448'
        },
        type: 'school',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '6172a88ff4c3ea0008aa6444'
        },
        createdOn: {
            $date: '2021-10-22T12:03:27.489Z'
        }
    },
    {
        _id: {
            $oid: '6172a88ff4c3ea0008aa6449'
        },
        type: 'school',
        _custom: true,
        name: 'lawn 1',
        customName: null,
        images: [],
        school: {
            $oid: '6172a88ff4c3ea0008aa6444'
        },
        createdOn: {
            $date: '2021-10-22T12:03:27.489Z'
        }
    },
    {
        _id: {
            $oid: '6172a88ff4c3ea0008aa644a'
        },
        type: 'classroom',
        name: 'Benches 1',
        customName: null,
        images: [],
        school: {
            $oid: '6172a88ff4c3ea0008aa6444'
        },
        createdOn: {
            $date: '2021-10-22T12:03:27.490Z'
        }
    },
    {
        _id: {
            $oid: '6172cb26f4c3ea0008aa6458'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '6172cb26f4c3ea0008aa6453'
        },
        createdOn: {
            $date: '2021-10-22T14:31:02.327Z'
        }
    },
    {
        _id: {
            $oid: '6172cb26f4c3ea0008aa6459'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: ['1634913417513-Moana_002.jpg'],
        school: {
            $oid: '6172cb26f4c3ea0008aa6453'
        },
        createdOn: {
            $date: '2021-10-22T14:31:02.328Z'
        }
    },
    {
        _id: {
            $oid: '6172cb26f4c3ea0008aa645a'
        },
        type: 'school',
        _custom: true,
        name: 'Parking lot 1',
        customName: null,
        images: [],
        school: {
            $oid: '6172cb26f4c3ea0008aa6453'
        },
        createdOn: {
            $date: '2021-10-22T14:31:02.328Z'
        }
    },
    {
        _id: {
            $oid: '61739dbaf4c3ea0008aa646c'
        },
        type: 'classroom',
        name: 'Cabinets 1',
        customName: null,
        images: [],
        school: {
            $oid: '61739dbaf4c3ea0008aa6467'
        },
        createdOn: {
            $date: '2021-10-23T05:29:30.243Z'
        }
    },
    {
        _id: {
            $oid: '61739dbaf4c3ea0008aa646b'
        },
        type: 'school',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61739dbaf4c3ea0008aa6467'
        },
        createdOn: {
            $date: '2021-10-23T05:29:30.243Z'
        }
    },
    {
        _id: {
            $oid: '61765106f4c3ea0008aa6476'
        },
        type: 'school',
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '61765106f4c3ea0008aa6473'
        },
        createdOn: {
            $date: '2021-10-25T06:39:02.132Z'
        }
    },
    {
        _id: {
            $oid: '61765106f4c3ea0008aa6477'
        },
        type: 'school',
        name: 'Assembly Hall 1',
        customName: null,
        images: [],
        school: {
            $oid: '61765106f4c3ea0008aa6473'
        },
        createdOn: {
            $date: '2021-10-25T06:39:02.133Z'
        }
    },
    {
        _id: {
            $oid: '6176f18e4261f900093eae06'
        },
        type: 'school',
        name: 'Music Class 1',
        customName: null,
        images: [
            '1635184933629-hall 2.jpg',
            '1635184933624-gallery01.jpg',
            '1635184933626-gate 3.jpg',
            '1635184933616-cabinate 2.jpg',
        ],
        school: {
            $oid: '6176f18d4261f900093eae02'
        },
        createdOn: {
            $date: '2021-10-25T18:03:58.099Z'
        }
    },
    {
        _id: {
            $oid: '61a79686388ffb000751b625'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a79686388ffb000751b61f'
        },
        createdOn: {
            $date: '2021-12-01T15:36:38.367Z'
        }
    },
    {
        _id: {
            $oid: '61a79686388ffb000751b626'
        },
        type: 'commonArea',
        name: 'Hallway 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a79686388ffb000751b61f'
        },
        createdOn: {
            $date: '2021-12-01T15:36:38.368Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61a84ee8ad4a050009acbbf2'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'testnamefgdfgdf',
        images: ['1639480197646-class1.jfif'],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-02T04:43:20.722Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61a84ee8ad4a050009acbbf3'
        },
        type: 'classroom',
        name: 'Uniforms 2',
        customName: 'uniform',
        images: ['1643965575368-ozuna3.jpg'],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-02T04:43:20.722Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61a865b4ad4a050009acbbfc'
        },
        type: 'otherRooms&Staff',
        _custom: false,
        name: 'Staff Uniforms',
        customName: null,
        images: [],
        school: {
            $oid: '61a79686388ffb000751b61f'
        },
        createdOn: {
            $date: '2021-12-02T06:20:36.605Z'
        }
    },
    {
        _id: {
            $oid: '61a9c8dca064240009692f4d'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a9c8dba064240009692f3f'
        },
        createdOn: {
            $date: '2021-12-03T07:35:56.793Z'
        }
    },
    {
        _id: {
            $oid: '61a9c8dca064240009692f4e'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a9c8dba064240009692f3f'
        },
        createdOn: {
            $date: '2021-12-03T07:35:56.794Z'
        }
    },
    {
        _id: {
            $oid: '61a9c8dca064240009692f4f'
        },
        type: 'commonArea',
        name: 'Notice Board 2',
        customName: null,
        images: ['1638516263516-adorable adorable.JPG'],
        school: {
            $oid: '61a9c8dba064240009692f3f'
        },
        createdOn: {
            $date: '2021-12-03T07:35:56.794Z'
        }
    },
    {
        _id: {
            $oid: '61ade2679348190008b7cb7a'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'SG1',
        images: [],
        school: {
            $oid: '61ade2679348190008b7cb6c'
        },
        createdOn: {
            $date: '2021-12-06T10:13:59.663Z'
        }
    },
    {
        _id: {
            $oid: '61ade2679348190008b7cb7b'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'NB1',
        images: ['1638785376410-mortalkombat.jpg'],
        school: {
            $oid: '61ade2679348190008b7cb6c'
        },
        createdOn: {
            $date: '2021-12-06T10:13:59.667Z'
        }
    },
    {
        _id: {
            $oid: '61ade2679348190008b7cb7c'
        },
        type: 'commonArea',
        name: 'Notice Board 2',
        customName: 'NB2',
        images: ['1638785427390-mortalkombat.jpg'],
        school: {
            $oid: '61ade2679348190008b7cb6c'
        },
        createdOn: {
            $date: '2021-12-06T10:13:59.667Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb95'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'Boards',
        images: ['1638786998647-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.185Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb96'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: 'WC1',
        images: ['1638787123549-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.186Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb97'
        },
        type: 'commonArea',
        name: 'Water Coolers 2',
        customName: 'WC2',
        images: ['1638787147148-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.186Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb98'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: 'wr1',
        images: ['1638787212191-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.186Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb99'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: 'wr2',
        images: ['1638787224629-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.186Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb9a'
        },
        type: 'commonArea',
        name: 'Washrooms 3',
        customName: 'wc3',
        images: ['1638787272168-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.186Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb9b'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'NB1',
        images: ['1638787365868-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.187Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb9c'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'Digital Room  1',
        customName: 'DR1',
        images: ['1638787555999-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.188Z'
        }
    },
    {
        _id: {
            $oid: '61adead39348190008b7cb9d'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'sg1',
        images: ['1638787597033-mortalkombat.jpg'],
        school: {
            $oid: '61adead29348190008b7cb87'
        },
        createdOn: {
            $date: '2021-12-06T10:49:55.188Z'
        }
    },
    {
        _id: {
            $oid: '61adf0db9348190008b7cbb1'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Canteen 1',
        customName: 'testing',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-06T11:15:39.560Z'
        }
    },
    {
        _id: {
            $oid: '61adf2929348190008b7cbc8'
        },
        type: 'commonArea',
        name: 'Assembly Hall 1',
        customName: 'AH1',
        images: ['1638789525858-adorable adorable.JPG'],
        school: {
            $oid: '61adf2929348190008b7cbbc'
        },
        createdOn: {
            $date: '2021-12-06T11:22:58.318Z'
        }
    },
    {
        _id: {
            $oid: '61adf2929348190008b7cbc9'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'nb 1',
        images: ['1638789560043-adorable adorable.JPG'],
        school: {
            $oid: '61adf2929348190008b7cbbc'
        },
        createdOn: {
            $date: '2021-12-06T11:22:58.319Z'
        }
    },
    {
        _id: {
            $oid: '61adf2929348190008b7cbca'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'sg 1',
        images: ['1638789608006-adorable adorable.JPG'],
        school: {
            $oid: '61adf2929348190008b7cbbc'
        },
        createdOn: {
            $date: '2021-12-06T11:22:58.319Z'
        }
    },
    {
        _id: {
            $oid: '61adf2929348190008b7cbcb'
        },
        type: 'outdoor',
        _custom: true,
        name: 'Sports Area 1',
        customName: 'SA1',
        images: ['1638789639548-adorable adorable.JPG'],
        school: {
            $oid: '61adf2929348190008b7cbbc'
        },
        createdOn: {
            $date: '2021-12-06T11:22:58.319Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbea'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.487Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbeb'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.488Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbec'
        },
        type: 'commonArea',
        name: 'Washrooms 3',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.489Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbed'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.489Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbee'
        },
        type: 'commonArea',
        name: 'Assembly Hall',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.489Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbef'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.490Z'
        }
    },
    {
        _id: {
            $oid: '61ae14599348190008b7cbf0'
        },
        type: 'outdoor',
        _custom: true,
        name: 'Wall 1',
        customName: null,
        images: [],
        school: {
            $oid: '61ae14599348190008b7cbdc'
        },
        createdOn: {
            $date: '2021-12-06T13:47:05.490Z'
        }
    },
    {
        _id: {
            $oid: '61ae1bea9348190008b7cc04'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'nb1',
        images: [],
        school: {
            $oid: '61ae1bea9348190008b7cbfe'
        },
        createdOn: {
            $date: '2021-12-06T14:19:22.604Z'
        }
    },
    {
        _id: {
            $oid: '61ae1bea9348190008b7cc05'
        },
        type: 'commonArea',
        name: 'Notice Board 2',
        customName: 'nb2',
        images: [],
        school: {
            $oid: '61ae1bea9348190008b7cbfe'
        },
        createdOn: {
            $date: '2021-12-06T14:19:22.604Z'
        }
    },
    {
        _id: {
            $oid: '61ae1bea9348190008b7cc06'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'U1',
        images: ['1638799891976-mortalkombat.jpg'],
        school: {
            $oid: '61ae1bea9348190008b7cbfe'
        },
        createdOn: {
            $date: '2021-12-06T14:19:22.607Z'
        }
    },
    {
        _id: {
            $oid: '61af08399348190008b7cc24'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'NB1',
        images: ['1638860694078-adorable adorable.JPG'],
        school: {
            $oid: '61af08399348190008b7cc16'
        },
        createdOn: {
            $date: '2021-12-07T07:07:37.363Z'
        }
    },
    {
        _id: {
            $oid: '61af08399348190008b7cc25'
        },
        type: 'commonArea',
        name: 'Notice Board 2',
        customName: 'nb 2',
        images: ['1638860721281-adorable adorable.JPG'],
        school: {
            $oid: '61af08399348190008b7cc16'
        },
        createdOn: {
            $date: '2021-12-07T07:07:37.363Z'
        }
    },
    {
        _id: {
            $oid: '61af08399348190008b7cc26'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'SG1',
        images: ['1638860750833-adorable adorable.JPG'],
        school: {
            $oid: '61af08399348190008b7cc16'
        },
        createdOn: {
            $date: '2021-12-07T07:07:37.363Z'
        }
    },
    {
        _id: {
            $oid: '61af0c4e9348190008b7cc3d'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'Nb1',
        images: ['1638861824276-adorable adorable.JPG'],
        school: {
            $oid: '61af0c4e9348190008b7cc31'
        },
        createdOn: {
            $date: '2021-12-07T07:25:02.421Z'
        }
    },
    {
        _id: {
            $oid: '61af0c4e9348190008b7cc3e'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'SG1',
        images: ['1638861854749-adorable adorable.JPG'],
        school: {
            $oid: '61af0c4e9348190008b7cc31'
        },
        createdOn: {
            $date: '2021-12-07T07:25:02.421Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc51'
        },
        type: 'commonArea',
        name: 'Water Coolers 2',
        customName: 'wc2',
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.253Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc52'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: 'w1',
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.253Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc53'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: null,
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc54'
        },
        type: 'commonArea',
        name: 'Washrooms 3',
        customName: null,
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc55'
        },
        type: 'commonArea',
        name: 'Washrooms 4',
        customName: null,
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc56'
        },
        type: 'commonArea',
        name: 'Washrooms 5',
        customName: null,
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc57'
        },
        type: 'commonArea',
        name: 'Washrooms 6',
        customName: 'w6',
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc58'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'sg1',
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.254Z'
        }
    },
    {
        _id: {
            $oid: '61af12f49348190008b7cc59'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: 'wc1',
        images: ['1638863276786-adorable adorable.JPG'],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T07:53:24.257Z'
        }
    },
    {
        _id: {
            $oid: '61af2b769348190008b7cc73'
        },
        type: 'events&Occasions',
        _custom: false,
        name: 'Sports Day',
        customName: 'SD',
        images: [],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T09:37:58.053Z'
        }
    },
    {
        _id: {
            $oid: '61af34a49348190008b7cc7a'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms',
        customName: 'Girls uniform',
        images: ['1638872161085-SBM SR Background.jpg'],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T10:17:08.379Z'
        }
    },
    {
        _id: {
            $oid: '61af352a9348190008b7cc7c'
        },
        type: 'otherRooms&Staff',
        _custom: false,
        name: 'Staff Uniforms',
        customName: 'Cleaners',
        images: ['1638872344769-SBM SR Background.jpg'],
        school: {
            $oid: '61af12f49348190008b7cc43'
        },
        createdOn: {
            $date: '2021-12-07T10:19:22.888Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc8c'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: 'Girls ',
        images: ['1638873643098-SBM SR Background.jpg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.440Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc8d'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: 'Boys',
        images: ['1638873678820-SBM SR Background.jpg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.442Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc8e'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'Hallway',
        images: [
            '1638873737574-Screenshot (4).png',
            '1638873794047-WhatsApp Image 2021-11-30 at 3.20.44 PM.jpeg',
        ],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.442Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc8f'
        },
        type: 'outdoor',
        name: 'Sports Ground 1',
        customName: null,
        images: ['1638873883376-Top lighting.jpeg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.442Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc90'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'Main entrance',
        images: ['1638873901909-pre new 2.jpg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.443Z'
        }
    },
    {
        _id: {
            $oid: '61af3b809348190008b7cc91'
        },
        type: 'outdoor',
        _custom: true,
        name: 'Lift 1',
        customName: 'Student lift',
        images: ['1638873957844-registration.jpg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T10:46:24.443Z'
        }
    },
    {
        _id: {
            $oid: '61af440c9348190008b7cc9e'
        },
        type: 'outdoor',
        _custom: false,
        name: 'Sports Uniforms',
        customName: 'GIRLS',
        images: ['1638876144972-Top lighting.jpeg'],
        school: {
            $oid: '61af3b809348190008b7cc80'
        },
        createdOn: {
            $date: '2021-12-07T11:22:52.138Z'
        }
    },
    {
        _id: {
            $oid: '61b0ad1c9348190008b7ccb3'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b0ad1c9348190008b7ccaf'
        },
        createdOn: {
            $date: '2021-12-08T13:03:24.369Z'
        }
    },
    {
        _id: {
            $oid: '61b0ad1c9348190008b7ccb6'
        },
        type: 'outdoor',
        name: 'School Bus 1',
        customName: null,
        images: [
            '1638959406299-class1.jfif',
            '1638959406516-class2.jfif',
            '1638959406698-class4.png',
            '1638959406905-classs3.jfif',
        ],
        school: {
            $oid: '61b0ad1c9348190008b7ccaf'
        },
        createdOn: {
            $date: '2021-12-08T13:03:24.373Z'
        }
    },
    {
        _id: {
            $oid: '61b0ad1c9348190008b7ccb4'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [
            '1638959324986-class1.jfif',
            '1638959325153-class2.jfif',
            '1638959325315-class4.png',
            '1638959325486-classs3.jfif',
        ],
        school: {
            $oid: '61b0ad1c9348190008b7ccaf'
        },
        createdOn: {
            $date: '2021-12-08T13:03:24.373Z'
        }
    },
    {
        _id: {
            $oid: '61b0ad1c9348190008b7ccb5'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Room 1',
        customName: null,
        images: [
            '1638959384692-class1.jfif',
            '1638959384897-class2.jfif',
            '1638959385087-class4.png',
            '1638959385275-classs3.jfif',
        ],
        school: {
            $oid: '61b0ad1c9348190008b7ccaf'
        },
        createdOn: {
            $date: '2021-12-08T13:03:24.373Z'
        }
    },
    {
        _id: {
            $oid: '61b18cbe9348190008b7cccb'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'C1',
        images: ['1639025680878-mortalkombat.jpg'],
        school: {
            $oid: '61b18cbe9348190008b7ccc8'
        },
        createdOn: {
            $date: '2021-12-09T04:57:34.169Z'
        }
    },
    {
        _id: {
            $oid: '61b33cfd9348190008b7cce9'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b33cfd9348190008b7cce6'
        },
        createdOn: {
            $date: '2021-12-10T11:41:49.287Z'
        }
    },
    {
        _id: {
            $oid: '61b33cfd9348190008b7ccea'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b33cfd9348190008b7cce6'
        },
        createdOn: {
            $date: '2021-12-10T11:41:49.287Z'
        }
    },
    {
        _id: {
            $oid: '61b33cfd9348190008b7cceb'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b33cfd9348190008b7cce6'
        },
        createdOn: {
            $date: '2021-12-10T11:41:49.287Z'
        }
    },
    {
        _id: {
            $oid: '61b33cfd9348190008b7ccec'
        },
        type: 'outdoor',
        name: 'Sports Ground 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b33cfd9348190008b7cce6'
        },
        createdOn: {
            $date: '2021-12-10T11:41:49.288Z'
        }
    },
    {
        _id: {
            $oid: '61b84ca09348190008b7cd0f'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: '1',
        images: [],
        school: {
            $oid: '61b84c9f9348190008b7cd09'
        },
        createdOn: {
            $date: '2021-12-14T07:49:51.999Z'
        }
    },
    {
        _id: {
            $oid: '61b84ca09348190008b7cd10'
        },
        type: 'classroom',
        _custom: true,
        name: 'bench 1',
        customName: 'grd floor',
        images: ['1639468038837-adorable adorable.JPG'],
        school: {
            $oid: '61b84c9f9348190008b7cd09'
        },
        createdOn: {
            $date: '2021-12-14T07:49:52.004Z'
        }
    },
    {
        _id: {
            $oid: '61b84ca09348190008b7cd11'
        },
        type: 'otherRooms&Staff',
        name: 'Computer Lab 1',
        customName: '1',
        images: ['1639468108790-adorable adorable.JPG'],
        school: {
            $oid: '61b84c9f9348190008b7cd09'
        },
        createdOn: {
            $date: '2021-12-14T07:49:52.004Z'
        }
    },
    {
        _id: {
            $oid: '61b867289348190008b7cd21'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 3',
        customName: 'Uniform656456457457547457547',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-14T09:43:04.886Z'
        }
    },
    {
        _id: {
            $oid: '61b893399348190008b7cd31'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 4',
        customName: 'Uniform',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-14T12:51:05.333Z'
        }
    },
    {
        _id: {
            $oid: '61b971d49348190008b7cd3b'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Water Coolers 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-15T04:40:52.612Z'
        }
    },
    {
        _id: {
            $oid: '61b982999348190008b7cd54'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Notice Board 1',
        customName: null,
        images: ['1641298826781-image2.jpg'],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-15T05:52:25.700Z'
        }
    },
    {
        _id: {
            $oid: '61b9e5ff9348190008b7cd6b'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Water Coolers 1',
        customName: 'board 3',
        images: [
            '1639573009688-lecture-hall.jpg',
            '1639573009696-photo-1574285013029-29296a71930e.jfif',
        ],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-12-15T12:56:31.603Z'
        }
    },
    {
        _id: {
            $oid: '61b9e5ff9348190008b7cd6c'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Washrooms',
        customName: null,
        images: [],
        school: {
            $oid: '614c353e858405000a58d5fb'
        },
        createdOn: {
            $date: '2021-12-15T12:56:31.603Z'
        }
    },
    {
        _id: {
            $oid: '61bdcbd6696d7b00086218a0'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'girls ',
        images: ['1639828224826-adorable adorable.JPG'],
        school: {
            $oid: '61bdcbd6696d7b000862189a'
        },
        createdOn: {
            $date: '2021-12-18T11:53:58.293Z'
        }
    },
    {
        _id: {
            $oid: '61bdcbd6696d7b00086218a1'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'ground floor',
        images: ['1639828279108-adorable adorable.JPG'],
        school: {
            $oid: '61bdcbd6696d7b000862189a'
        },
        createdOn: {
            $date: '2021-12-18T11:53:58.293Z'
        }
    },
    {
        _id: {
            $oid: '61bdcbd6696d7b00086218a2'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'Lodhi Road entry',
        images: ['1639828329637-adorable adorable.JPG'],
        school: {
            $oid: '61bdcbd6696d7b000862189a'
        },
        createdOn: {
            $date: '2021-12-18T11:53:58.293Z'
        }
    },
    {
        _id: {
            $oid: '61c031cfdc06bd00082d9a75'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'girls ',
        images: [],
        school: {
            $oid: '61c031cfdc06bd00082d9a6e'
        },
        createdOn: {
            $date: '2021-12-20T07:33:35.932Z'
        }
    },
    {
        _id: {
            $oid: '61c031cfdc06bd00082d9a76'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: 'ground floor',
        images: [],
        school: {
            $oid: '61c031cfdc06bd00082d9a6e'
        },
        createdOn: {
            $date: '2021-12-20T07:33:35.932Z'
        }
    },
    {
        _id: {
            $oid: '61c031cfdc06bd00082d9a78'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: 'second floor',
        images: [],
        school: {
            $oid: '61c031cfdc06bd00082d9a6e'
        },
        createdOn: {
            $date: '2021-12-20T07:33:35.932Z'
        }
    },
    {
        _id: {
            $oid: '61c031cfdc06bd00082d9a77'
        },
        type: 'commonArea',
        name: 'Water Coolers 2',
        customName: 'first floor',
        images: [],
        school: {
            $oid: '61c031cfdc06bd00082d9a6e'
        },
        createdOn: {
            $date: '2021-12-20T07:33:35.932Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aa5'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'school bag',
        images: ['1640065167172-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.905Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aa6'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: 'girls washroom',
        images: ['1640065234369-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.905Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aa7'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: 'girls washroom',
        images: ['1640065295655-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.905Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aa8'
        },
        type: 'otherRooms&Staff',
        name: 'Computer Lab 1',
        customName: 'computer wall',
        images: ['1640065487434-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.906Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aa9'
        },
        type: 'outdoor',
        name: 'Sports Ground 1',
        customName: 'Back drop wings',
        images: ['1640065630265-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.906Z'
        }
    },
    {
        _id: {
            $oid: '61c16c6edc06bd00082d9aaa'
        },
        type: 'outdoor',
        _custom: true,
        name: 'stage backdrop wings 1',
        customName: 'Stage back drop wings',
        images: ['1640065810147-download.jpg'],
        school: {
            $oid: '61c16c6edc06bd00082d9a96'
        },
        createdOn: {
            $date: '2021-12-21T05:55:58.906Z'
        }
    },
    {
        _id: {
            $oid: '61c2b3bb0481c40008d47cac'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c2b3bb0481c40008d47ca8'
        },
        createdOn: {
            $date: '2021-12-22T05:12:27.259Z'
        }
    },
    {
        _id: {
            $oid: '61c2b3bb0481c40008d47cab'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c2b3bb0481c40008d47ca8'
        },
        createdOn: {
            $date: '2021-12-22T05:12:27.259Z'
        }
    },
    {
        _id: {
            $oid: '61c2b9f90481c40008d47cb8'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 5',
        customName: 'testname',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2021-12-22T05:39:05.182Z'
        }
    },
    {
        _id: {
            $oid: '61c2c7d50481c40008d47ccd'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'physical training ',
        images: ['1640154358874-adorable adorable.JPG'],
        school: {
            $oid: '61c2c7d50481c40008d47cca'
        },
        createdOn: {
            $date: '2021-12-22T06:38:13.499Z'
        }
    },
    {
        _id: {
            $oid: '61c300ff7b2e40000800fb52'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: null,
        images: [
            '1641460656940-image2.jpg',
            '1641468560058-AddButtonMargin_Admin.png',
            '1641468560066-AddButtonPosition.png',
            '1641468560070-Admin_Title_MyProfile.png',
            '1641468560072-AvgRvenue.png',
            '1641468560074-CloseOverWriteSavedButton.png',
            '1641468560076-DescriptionMissingDetailInventoryScreen.png',
            '1641468560079-Duplicate_Button.png',
            '1641468560083-GeneralImage1.png',
        ],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2021-12-22T10:42:07.879Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61c300ff7b2e40000800fb53'
        },
        type: 'commonArea',
        name: 'Assembly Hall 2',
        customName: null,
        images: [
            '1643966255687-nike.jfif',
            '1643966255701-OldPasswordOverwriteButtons.png',
            '1643966255707-Setting_BackArrow.png',
            '1643966325605-ozuna3.jpg',
        ],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2021-12-22T10:42:07.880Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61c300ff7b2e40000800fb54'
        },
        type: 'outdoor',
        name: 'School Bus 2',
        customName: 'School Bus Inventory',
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2021-12-22T10:42:07.880Z'
        }
    },
    {
        _id: {
            $oid: '61c300ff7b2e40000800fb55'
        },
        type: 'commonArea',
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
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2021-12-22T10:42:07.884Z'
        }
    },
    {
        _id: {
            $oid: '61c468149a97b900085caaa5'
        },
        type: 'commonArea',
        name: 'Auditorium 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c468149a97b900085caaa1'
        },
        createdOn: {
            $date: '2021-12-23T12:14:12.666Z'
        }
    },
    {
        _id: {
            $oid: '61c468149a97b900085caaa4'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c468149a97b900085caaa1'
        },
        createdOn: {
            $date: '2021-12-23T12:14:12.666Z'
        }
    },
    {
        _id: {
            $oid: '61c468149a97b900085caaa8'
        },
        type: 'outdoor',
        _custom: true,
        name: '5J 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c468149a97b900085caaa1'
        },
        createdOn: {
            $date: '2021-12-23T12:14:12.667Z'
        }
    },
    {
        _id: {
            $oid: '61c468149a97b900085caaa7'
        },
        type: 'outdoor',
        _custom: true,
        name: '5J 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c468149a97b900085caaa1'
        },
        createdOn: {
            $date: '2021-12-23T12:14:12.667Z'
        }
    },
    {
        _id: {
            $oid: '61c468149a97b900085caaa6'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c468149a97b900085caaa1'
        },
        createdOn: {
            $date: '2021-12-23T12:14:12.666Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caab9'
        },
        type: 'classroom',
        name: 'School Bags 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.260Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caab8'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.259Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caaba'
        },
        type: 'classroom',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.260Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caabb'
        },
        type: 'classroom',
        _custom: true,
        name: 'test 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.260Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caabc'
        },
        type: 'commonArea',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.260Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caabd'
        },
        type: 'commonArea',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.261Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caabe'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'test 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.261Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caabf'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.261Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caac0'
        },
        type: 'classroom',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [
            '1640238442348-class4.png',
            '1640238447066-class4.png',
            '1640238460076-class1.jfif',
            '1640238460223-classs3.jfif',
        ],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.264Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caac1'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [
            '1640243288081-class1.jfif',
            '1640243288283-class2.jfif',
            '1640243288447-class4.png',
            '1640243288605-classs3.jfif',
        ],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.264Z'
        }
    },
    {
        _id: {
            $oid: '61c4686b9a97b900085caac2'
        },
        type: 'outdoor',
        _custom: true,
        name: 'test 1',
        customName: null,
        images: [
            '1640250506201-class4.png',
            '1640250513018-class1.jfif',
            '1640250513528-class4.png',
            '1640250513990-classs3.jfif',
        ],
        school: {
            $oid: '61c4686b9a97b900085caab4'
        },
        createdOn: {
            $date: '2021-12-23T12:15:39.265Z'
        }
    },
    {
        _id: {
            $oid: '61c9bce61f64a40009fb966d'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'ground floor ',
        images: ['1640610617727-adorable adorable.JPG'],
        school: {
            $oid: '61c9bce61f64a40009fb9669'
        },
        createdOn: {
            $date: '2021-12-27T13:17:26.929Z'
        }
    },
    {
        _id: {
            $oid: '61c9bce61f64a40009fb966e'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'first floor ',
        images: ['1640610724732-adorable adorable.JPG'],
        school: {
            $oid: '61c9bce61f64a40009fb9669'
        },
        createdOn: {
            $date: '2021-12-27T13:17:26.929Z'
        }
    },
    {
        _id: {
            $oid: '61c9bce61f64a40009fb966f'
        },
        type: 'commonArea',
        name: 'Notice Board 2',
        customName: 'first floor ',
        images: ['1640610776436-adorable adorable.JPG'],
        school: {
            $oid: '61c9bce61f64a40009fb9669'
        },
        createdOn: {
            $date: '2021-12-27T13:17:26.929Z'
        }
    },
    {
        _id: {
            $oid: '61cbf3641f64a40009fb9689'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: null,
        images: [],
        school: {
            $oid: '61cbf3641f64a40009fb9686'
        },
        createdOn: {
            $date: '2021-12-29T05:34:28.948Z'
        }
    },
    {
        _id: {
            $oid: '61cbf3641f64a40009fb968a'
        },
        type: 'outdoor',
        name: 'School Gate 2',
        customName: null,
        images: [],
        school: {
            $oid: '61cbf3641f64a40009fb9686'
        },
        createdOn: {
            $date: '2021-12-29T05:34:28.948Z'
        }
    },
    {
        _id: {
            $oid: '61cbf3641f64a40009fb968b'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Room 1',
        customName: null,
        images: [
            '1640752579980-NumberOfTeachers1.png',
            '1640752590838-ValidationMessageBoardName.png',
        ],
        school: {
            $oid: '61cbf3641f64a40009fb9686'
        },
        createdOn: {
            $date: '2021-12-29T05:34:28.960Z'
        }
    },
    {
        _id: {
            $oid: '61cbf3641f64a40009fb968c'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: null,
        images: ['1640753801103-PlaceholderNameIssueInStateCity.png'],
        school: {
            $oid: '61cbf3641f64a40009fb9686'
        },
        createdOn: {
            $date: '2021-12-29T05:34:28.960Z'
        }
    },
    {
        _id: {
            $oid: '61d293f9f28ea900097c6072'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Playground 1',
        customName: null,
        images: [],
        school: {
            $oid: '61d293f9f28ea900097c606d'
        },
        createdOn: {
            $date: '2022-01-03T06:13:13.747Z'
        }
    },
    {
        _id: {
            $oid: '61d293f9f28ea900097c6073'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: null,
        images: [
            '1641190129775-Screenshot_1.png',
            '1641190129989-Screenshot_2.png',
            '1641190130173-Screenshot_3.png',
            '1641190130360-Screenshot_39.png',
        ],
        school: {
            $oid: '61d293f9f28ea900097c606d'
        },
        createdOn: {
            $date: '2022-01-03T06:13:13.750Z'
        }
    },
    {
        _id: {
            $oid: '61d2a1fef28ea900097c6098'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 6',
        customName: 'testname',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-01-03T07:13:02.218Z'
        }
    },
    {
        _id: {
            $oid: '61d2a28bf28ea900097c609e'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 7',
        customName: 'testname',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-01-03T07:15:23.899Z'
        }
    },
    {
        _id: {
            $oid: '61d2a2cff28ea900097c60a4'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Canteen 2',
        customName: 'testing',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-01-03T07:16:31.509Z'
        }
    },
    {
        _id: {
            $oid: '61d2a306f28ea900097c60aa'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Canteen 3',
        customName: 'testing',
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-01-03T07:17:26.386Z'
        }
    },
    {
        _id: {
            $oid: '61d2a3f0f28ea900097c60b0'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms',
        customName: null,
        images: ['1643108106224-GeneralImage1.png'],
        school: {
            $oid: '61b6e6bc9348190008b7ccfc'
        },
        createdOn: {
            $date: '2022-01-03T07:21:20.548Z'
        }
    },
    {
        _id: {
            $oid: '61d2ccaca1c66a00095cc843'
        },
        type: 'classroom',
        name: 'Classroom 2',
        customName: 'C2',
        images: [],
        school: {
            $oid: '61d2ccaca1c66a00095cc83d'
        },
        createdOn: {
            $date: '2022-01-03T10:15:08.159Z'
        }
    },
    {
        _id: {
            $oid: '61d2ccaca1c66a00095cc844'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'C1',
        images: ['1641203973098-mortalkombat.jpg'],
        school: {
            $oid: '61d2ccaca1c66a00095cc83d'
        },
        createdOn: {
            $date: '2022-01-03T10:15:08.167Z'
        }
    },
    {
        _id: {
            $oid: '61d2ccaca1c66a00095cc845'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'SG1',
        images: ['1641204329060-mortalkombat.jpg'],
        school: {
            $oid: '61d2ccaca1c66a00095cc83d'
        },
        createdOn: {
            $date: '2022-01-03T10:15:08.167Z'
        }
    },
    {
        _id: {
            $oid: '61d3df89a1c66a00095cc87d'
        },
        type: 'commonArea',
        _custom: false,
        name: 'Hallway 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-01-04T05:47:53.747Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc89f'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'Uf1',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.550Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc8a1'
        },
        type: 'commonArea',
        name: 'Washrooms 2',
        customName: 'washroom',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.550Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc89e'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'SB1',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.550Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc8a0'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: 'washroom boys',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.550Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc8a3'
        },
        type: 'commonArea',
        name: 'Water Coolers 3',
        customName: 'W coolers 3',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.551Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc8a2'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: 'Water coolers 1',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.551Z'
        }
    },
    {
        _id: {
            $oid: '61d3ee02a1c66a00095cc8a4'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'Front gate',
        images: [],
        school: {
            $oid: '61d3ee02a1c66a00095cc898'
        },
        createdOn: {
            $date: '2022-01-04T06:49:38.551Z'
        }
    },
    {
        _id: {
            $oid: '61d45e69a1c66a00095cc924'
        },
        type: 'commonArea',
        name: 'Auditorium 1',
        customName: 'ground floor',
        images: ['1641307467783-adorable adorable.JPG'],
        school: {
            $oid: '61d45e68a1c66a00095cc91c'
        },
        createdOn: {
            $date: '2022-01-04T14:49:13.112Z'
        }
    },
    {
        _id: {
            $oid: '61d45e69a1c66a00095cc925'
        },
        type: 'commonArea',
        name: 'Auditorium 2',
        customName: 'third floor',
        images: ['1641307561538-adorable adorable.JPG'],
        school: {
            $oid: '61d45e68a1c66a00095cc91c'
        },
        createdOn: {
            $date: '2022-01-04T14:49:13.112Z'
        }
    },
    {
        _id: {
            $oid: '61d45e69a1c66a00095cc923'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'Primary section',
        images: ['1641307380844-adorable adorable.JPG'],
        school: {
            $oid: '61d45e68a1c66a00095cc91c'
        },
        createdOn: {
            $date: '2022-01-04T14:49:13.112Z'
        }
    },
    {
        _id: {
            $oid: '61d67c1164216b0007f3f3a2'
        },
        type: 'classroom',
        _custom: false,
        name: 'Classroom 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T05:20:17.756Z'
        }
    },
    {
        _id: {
            $oid: '61d6d24464216b0007f3f3e8'
        },
        type: 'classroom',
        _custom: false,
        name: 'Classroom 3',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T11:28:04.843Z'
        }
    },
    {
        _id: {
            $oid: '61d6ddd964216b0007f3f3ed'
        },
        type: 'classroom',
        _custom: true,
        name: 'abc 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:17:29.833Z'
        }
    },
    {
        _id: {
            $oid: '61d6de1d64216b0007f3f3f3'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Paint 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:18:37.067Z'
        }
    },
    {
        _id: {
            $oid: '61d6dea364216b0007f3f3fd'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'Paint abc 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:20:51.572Z'
        }
    },
    {
        _id: {
            $oid: '61d6e0e764216b0007f3f409'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'Paint abc 4',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:30:31.352Z'
        }
    },
    {
        _id: {
            $oid: '61d6e0e764216b0007f3f408'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'Paint abc 3',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:30:31.351Z'
        }
    },
    {
        _id: {
            $oid: '61d6e0e764216b0007f3f407'
        },
        type: 'otherRooms&Staff',
        _custom: true,
        name: 'Paint abc 2',
        customName: null,
        images: [
            '1641472197877-AddButtonMargin_Admin.png',
            '1641472198585-AddButtonPosition.png',
            '1641472199014-AddIconUserFriendly.png',
            '1641472199447-Admin_Title_MyProfile.png',
            '1641472200125-AvgRvenue.png',
            '1641472200723-CloseOverWriteSavedButton.png',
            '1641472201224-DescriptionMissingDetailInventoryScreen.png',
            '1641472202060-Duplicate_Button.png',
            '1641472202711-GeneralImage1.png',
            '1641472203379-GeneralImage2.png',
        ],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:30:31.350Z'
        }
    },
    {
        _id: {
            $oid: '61d6e12164216b0007f3f412'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water Colors 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:31:29.360Z'
        }
    },
    {
        _id: {
            $oid: '61d6e16d64216b0007f3f41a'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water colors on 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:32:45.454Z'
        }
    },
    {
        _id: {
            $oid: '61d6e1af64216b0007f3f420'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water colors on 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:33:51.621Z'
        }
    },
    {
        _id: {
            $oid: '61d6e1af64216b0007f3f421'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water colors on 3',
        customName: null,
        images: [
            '1641472421705-AddButtonMargin_Admin.png',
            '1641472422275-AddButtonPosition.png',
            '1641472422587-AddIconUserFriendly.png',
            '1641472422975-Admin_Title_MyProfile.png',
            '1641472423526-AvgRvenue.png',
            '1641472423924-CloseOverWriteSavedButton.png',
            '1641472424288-DescriptionMissingDetailInventoryScreen.png',
            '1641472424801-Duplicate_Button.png',
            '1641472425268-GeneralImage1.png',
            '1641472425750-GeneralImage2.png',
        ],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:33:51.623Z'
        }
    },
    {
        _id: {
            $oid: '61d6e21d64216b0007f3f428'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water colors on 2',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:35:41.470Z'
        }
    },
    {
        _id: {
            $oid: '61d6e21d64216b0007f3f429'
        },
        type: 'commonArea',
        _custom: true,
        name: 'Water colors on 3',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T12:35:41.471Z'
        }
    },
    {
        _id: {
            $oid: '61d6e8e964216b0007f3f42e'
        },
        type: 'outdoor',
        _custom: false,
        name: 'Sports Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-06T13:04:41.171Z'
        }
    },
    {
        _id: {
            $oid: '61d8039b68d8730008a6eb9a'
        },
        type: 'outdoor',
        _custom: true,
        name: 'OutDoorSports 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-07T09:10:51.052Z'
        }
    },
    {
        _id: {
            $oid: '61dc0aea9899370009c5b994'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-10T10:31:06.968Z'
        }
    },
    {
        _id: {
            $oid: '61dcf6519899370009c5b9a7'
        },
        type: 'classroom',
        _custom: false,
        name: 'Classroom 4',
        customName: null,
        images: [],
        school: {
            $oid: '61c300ff7b2e40000800fb45'
        },
        createdOn: {
            $date: '2022-01-11T03:15:29.165Z'
        }
    },
    {
        _id: {
            $oid: '61dd61789899370009c5b9b6'
        },
        type: 'commonArea',
        name: 'Assembly Hall 1',
        customName: 'ground floor',
        images: [],
        school: {
            $oid: '61dd61789899370009c5b9b2'
        },
        createdOn: {
            $date: '2022-01-11T10:52:40.665Z'
        }
    },
    {
        _id: {
            $oid: '61dd61789899370009c5b9b7'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61dd61789899370009c5b9b2'
        },
        createdOn: {
            $date: '2022-01-11T10:52:40.665Z'
        }
    },
    {
        _id: {
            $oid: '61dd61789899370009c5b9b9'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'girls',
        images: ['1641898105882-adorable adorable.JPG'],
        school: {
            $oid: '61dd61789899370009c5b9b2'
        },
        createdOn: {
            $date: '2022-01-11T10:52:40.669Z'
        }
    },
    {
        _id: {
            $oid: '61dd61789899370009c5b9b8'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: 'main gate',
        images: [],
        school: {
            $oid: '61dd61789899370009c5b9b2'
        },
        createdOn: {
            $date: '2022-01-11T10:52:40.665Z'
        }
    },
    {
        _id: {
            $oid: '61dde4c09899370009c5b9cc'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'classroom 1',
        images: [],
        school: {
            $oid: '61dde4c09899370009c5b9c7'
        },
        createdOn: {
            $date: '2022-01-11T20:12:48.261Z'
        }
    },
    {
        _id: {
            $oid: '61dde4c09899370009c5b9cd'
        },
        type: 'classroom',
        name: 'Classroom 2',
        customName: 'class 10',
        images: [],
        school: {
            $oid: '61dde4c09899370009c5b9c7'
        },
        createdOn: {
            $date: '2022-01-11T20:12:48.262Z'
        }
    },
    {
        _id: {
            $oid: '61dde4c09899370009c5b9ce'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'full',
        images: [],
        school: {
            $oid: '61dde4c09899370009c5b9c7'
        },
        createdOn: {
            $date: '2022-01-11T20:12:48.262Z'
        }
    },
    {
        _id: {
            $oid: '61dde4c09899370009c5b9cf'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'nb',
        images: [],
        school: {
            $oid: '61dde4c09899370009c5b9c7'
        },
        createdOn: {
            $date: '2022-01-11T20:12:48.262Z'
        }
    },
    {
        _id: {
            $oid: '61de67749899370009c5b9eb'
        },
        type: 'commonArea',
        name: 'Canteen 1',
        customName: 'ground floor',
        images: [],
        school: {
            $oid: '61de67749899370009c5b9e7'
        },
        createdOn: {
            $date: '2022-01-12T05:30:28.964Z'
        }
    },
    {
        _id: {
            $oid: '61de67749899370009c5b9ec'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'boys bags',
        images: ['1641965230091-adorable adorable.JPG'],
        school: {
            $oid: '61de67749899370009c5b9e7'
        },
        createdOn: {
            $date: '2022-01-12T05:30:28.967Z'
        }
    },
    {
        _id: {
            $oid: '61de7adb9899370009c5ba01'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'school bag prim',
        images: [],
        school: {
            $oid: '61de7adb9899370009c5b9fc'
        },
        createdOn: {
            $date: '2022-01-12T06:53:15.570Z'
        }
    },
    {
        _id: {
            $oid: '61de7adb9899370009c5ba02'
        },
        type: 'classroom',
        name: 'School Bags 2',
        customName: 'school bag 2',
        images: [],
        school: {
            $oid: '61de7adb9899370009c5b9fc'
        },
        createdOn: {
            $date: '2022-01-12T06:53:15.570Z'
        }
    },
    {
        _id: {
            $oid: '61de7adb9899370009c5ba03'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'school gate not',
        images: ['1641969664750-Screenshot (2).png'],
        school: {
            $oid: '61de7adb9899370009c5b9fc'
        },
        createdOn: {
            $date: '2022-01-12T06:53:15.574Z'
        }
    },
    {
        _id: {
            $oid: '61dff0659899370009c5ba1c'
        },
        type: 'commonArea',
        name: 'Canteen 1',
        customName: 'canteen girls',
        images: ['1642065861661-adorable adorable.JPG'],
        school: {
            $oid: '61dff0659899370009c5ba18'
        },
        createdOn: {
            $date: '2022-01-13T09:27:01.288Z'
        }
    },
    {
        _id: {
            $oid: '61e1221c9899370009c5ba36'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'girls',
        images: [],
        school: {
            $oid: '61e1221c9899370009c5ba32'
        },
        createdOn: {
            $date: '2022-01-14T07:11:24.841Z'
        }
    },
    {
        _id: {
            $oid: '61e1221c9899370009c5ba37'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'ground floor',
        images: [],
        school: {
            $oid: '61e1221c9899370009c5ba32'
        },
        createdOn: {
            $date: '2022-01-14T07:11:24.841Z'
        }
    },
    {
        _id: {
            $oid: '61ea4bc10d942700088bccb7'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: 'ground floor',
        images: [],
        school: {
            $oid: '61ea4bc10d942700088bccb3'
        },
        createdOn: {
            $date: '2022-01-21T05:59:29.704Z'
        }
    },
    {
        _id: {
            $oid: '61ea4bc10d942700088bccb8'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'girls',
        images: ['1642744626845-Nissan Mood board-01.jpg'],
        school: {
            $oid: '61ea4bc10d942700088bccb3'
        },
        createdOn: {
            $date: '2022-01-21T05:59:29.708Z'
        }
    },
    {
        _id: {
            $oid: '61eeb0c20d942700088bccde'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'class 11',
        images: [],
        school: {
            $oid: '61eeb0c20d942700088bccdb'
        },
        createdOn: {
            $date: '2022-01-24T13:59:30.655Z'
        }
    },
    {
        _id: {
            $oid: '61eeb0c20d942700088bccdf'
        },
        type: 'classroom',
        name: 'Classroom 4',
        customName: 'class 12',
        images: [],
        school: {
            $oid: '61eeb0c20d942700088bccdb'
        },
        createdOn: {
            $date: '2022-01-24T13:59:30.656Z'
        }
    },
    {
        _id: {
            $oid: '61f22844ca22230008f778e3'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61b6e6bc9348190008b7ccfc'
        },
        createdOn: {
            $date: '2022-01-27T05:06:12.911Z'
        }
    },
    {
        _id: {
            $oid: '61f2284dca22230008f778e6'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 2',
        customName: null,
        images: [],
        school: {
            $oid: '61b6e6bc9348190008b7ccfc'
        },
        createdOn: {
            $date: '2022-01-27T05:06:21.375Z'
        }
    },
    {
        _id: {
            $oid: '61f2419dca22230008f778f1'
        },
        type: 'commonArea',
        name: 'Hallway 1',
        customName: null,
        images: [],
        school: {
            $oid: '61f2419dca22230008f778ea'
        },
        createdOn: {
            $date: '2022-01-27T06:54:21.583Z'
        }
    },
    {
        _id: {
            $oid: '61f2419dca22230008f778f2'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: null,
        images: [],
        school: {
            $oid: '61f2419dca22230008f778ea'
        },
        createdOn: {
            $date: '2022-01-27T06:54:21.583Z'
        }
    },
    {
        _id: {
            $oid: '61f2419dca22230008f778f3'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61f2419dca22230008f778ea'
        },
        createdOn: {
            $date: '2022-01-27T06:54:21.583Z'
        }
    },
    {
        _id: {
            $oid: '61f2419dca22230008f778f4'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [
            '1643266219716-SchoolFeaturesDetailsInventories.png',
            '1643266220345-StandaredisNotDisplayed.png',
            '1643266220933-ValidationmessageNotDsipalyed.png',
        ],
        school: {
            $oid: '61f2419dca22230008f778ea'
        },
        createdOn: {
            $date: '2022-01-27T06:54:21.587Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f7792c'
        },
        type: 'otherRooms&Staff',
        name: 'Science Lab 1',
        customName: null,
        images: [],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.672Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f7792e'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: 'red',
        images: ['1643445907334-Tank-gallery.jpg'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f77930'
        },
        type: 'commonArea',
        name: 'Notice Board 1',
        customName: null,
        images: ['1643445965370-gate 3.jpg'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f77931'
        },
        type: 'commonArea',
        name: 'Washrooms 1',
        customName: null,
        images: ['1643445959163-photo-1574285013029-29296a71930e.jfif'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f7792f'
        },
        type: 'commonArea',
        name: 'Hallway 1',
        customName: null,
        images: ['1643445926604-lecture-hall.jpg'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f77932'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: 'board 3',
        images: ['1643445988632-cabinate 1.jpg'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f7792d'
        },
        type: 'outdoor',
        name: 'School Gate 1',
        customName: null,
        images: [],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.672Z'
        }
    },
    {
        _id: {
            $oid: '61f4ffe0ca22230008f77933'
        },
        type: 'outdoor',
        name: 'School Bus 1',
        customName: null,
        images: ['1643446043460-gallery01.jpg'],
        school: {
            $oid: '61f4ffe0ca22230008f77927'
        },
        createdOn: {
            $date: '2022-01-29T08:50:40.676Z'
        }
    },
    {
        _id: {
            $oid: '61f8c7841ec2c400087d92f6'
        },
        type: 'classroom',
        _custom: false,
        name: 'Uniforms 3',
        customName: null,
        images: [],
        school: {
            $oid: '61b6e6bc9348190008b7ccfc'
        },
        createdOn: {
            $date: '2022-02-01T05:39:16.286Z'
        }
    },
    {
        _id: {
            $oid: '61fa2c9798f2b3000829f61d'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: 'SB1',
        images: ['1643779558381-mortalkombat.jpg'],
        school: {
            $oid: '61fa2c9698f2b3000829f61a'
        },
        createdOn: {
            $date: '2022-02-02T07:02:47.065Z'
        }
    },
    {
        _id: {
            $oid: '61fa2c9798f2b3000829f61e'
        },
        type: 'commonArea',
        name: 'Water Coolers 1',
        customName: 'WC1',
        images: ['1643781225350-mortalkombat.jpg'],
        school: {
            $oid: '61fa2c9698f2b3000829f61a'
        },
        createdOn: {
            $date: '2022-02-02T07:02:47.065Z'
        }
    },
    {
        _id: {
            $oid: '61fa2c9798f2b3000829f61f'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Room 1',
        customName: 'SR1',
        images: ['1643785268333-mortalkombat.jpg'],
        school: {
            $oid: '61fa2c9698f2b3000829f61a'
        },
        createdOn: {
            $date: '2022-02-02T07:02:47.065Z'
        }
    },
    {
        _id: {
            $oid: '61fa59e198f2b3000829f64d'
        },
        type: 'classroom',
        _custom: true,
        name: 'testing cus 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-02-02T10:16:01.319Z'
        }
    },
    {
        _id: {
            $oid: '61fb607998f2b3000829f675'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: 'C1',
        images: ['1643864102284-mortalkombat.jpg'],
        school: {
            $oid: '61fb607898f2b3000829f672'
        },
        createdOn: {
            $date: '2022-02-03T04:56:25.121Z'
        }
    },
    {
        _id: {
            $oid: '61fcecb669f6fe0008a5cee2'
        },
        type: 'commonArea',
        _custom: true,
        name: 'test common 1',
        customName: null,
        images: [],
        school: {
            $oid: '61a84ee7ad4a050009acbbef'
        },
        createdOn: {
            $date: '2022-02-04T09:07:02.081Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf19'
        },
        type: 'classroom',
        name: 'Classroom 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.708Z'
        },
        _custom: false
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1a'
        },
        type: 'classroom',
        name: 'School Bags 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1b'
        },
        type: 'classroom',
        name: 'School Bags 2',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1c'
        },
        type: 'classroom',
        _custom: true,
        name: 'Benches 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1d'
        },
        type: 'classroom',
        name: 'Uniforms 3',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1e'
        },
        type: 'otherRooms&Staff',
        name: 'Music Class 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf1f'
        },
        type: 'otherRooms&Staff',
        name: 'Staff Room 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.709Z'
        }
    },
    {
        _id: {
            $oid: '61fd1ef869f6fe0008a5cf20'
        },
        type: 'classroom',
        name: 'Uniforms 1',
        customName: null,
        images: [
            '1643978361966-ozuna1.jpg',
            '1643978362725-ozuna2.jpg',
            '1643978363263-ozuna3.jpg',
        ],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-04T12:41:28.712Z'
        }
    },
    {
        _id: {
            $oid: '6200c39169f6fe0008a5cf53'
        },
        type: 'otherRooms&Staff',
        _custom: false,
        name: 'Staff Uniforms 1',
        customName: null,
        images: [],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-07T07:00:33.531Z'
        }
    },
    {
        _id: {
            $oid: '6200c5a369f6fe0008a5cf57'
        },
        type: 'classroom',
        _custom: true,
        name: 'Custom Class 1',
        customName: 'CustomInventory',
        images: [
            '1644217844450-GeneralImage1.png',
            '1644217845020-GeneralImage2.png',
            '1644217845473-image (2).png',
        ],
        school: {
            $oid: '61fd1ef869f6fe0008a5cf06'
        },
        createdOn: {
            $date: '2022-02-07T07:09:23.876Z'
        }
    },
];
exports["default"] = data;
