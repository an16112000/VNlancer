import { Logo, TestImage, TestImage2 } from "./img"
import { Category, JobDetailData, ProfessionalInfo } from "./interface"


export const listDataJobExample: JobDetailData[] = [
    {
        id: 1,
        name: 'NHÂN VIÊN KINH DOANH',
        budget: 12000000,
        information: 'create FE web',
        categoryName: ['FE', 'BE'],
        typeOfEmployee: 'full time',
        jobLevel: 'fresher',
        postDate: '29/11/2023',
        dueDate: '20/12/2023',
        status: 'Open',
        imgUrl: 'https://www.mediaheroes.com.au/wp-content/uploads/2023/09/graphic-design-styles-media-heroes-banner.webp',
        client: {
            name: 'An Doan',
            avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
        }
    },
    {
        id: 1,
        name: 'web',
        budget: 21000,
        information: 'create FE web',
        categoryName: ['FE'],
        typeOfEmployee: 'full time',
        jobLevel: 'fresher',
        postDate: '17/11',
        dueDate: '20/11',
        status: 'Open',
        imgUrl: 'https://ideaspice.com/wp-content/uploads/2021/06/Design.png',
        client: {
            name: 'An Doan',
            avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
        }
    },
    {
        id: 1,
        name: 'web',
        budget: 21000,
        information: 'create FE web',
        categoryName: ['FE'],
        typeOfEmployee: 'full time',
        jobLevel: 'fresher',
        postDate: '17/11',
        dueDate: '20/11',
        status: 'Open',
        imgUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG&size=690:388',
        client: {
            name: 'An Doan',
            avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
        }
    }
]

export const dataJobExample: JobDetailData = {
    id: 1,
    name: 'web',
    budget: 21000,
    information: 'create FE web',
    categoryName: ['FE', 'BE'],
    typeOfEmployee: 'full time',
    jobLevel: 'fresher',
    postDate: '17/11',
    dueDate: '20/11',
    status: 'Open',
    imgUrl: '',
    client: {
        name: 'An Doan',
        avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    }
}

export const categoryDataExample1: Category = {
    id: 1,
    name: 'FE',
}

export const categoryDataExample2: Category = {
    id: 2,
    name: 'BE',
}

export const listCategoryExample: Category[] = [
    categoryDataExample1, categoryDataExample2
]

export const listProfile: ProfessionalInfo[] = [
    {
        id: 1,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'English, Project Management',
        workExperience: '4 years',
        category: {
            id: 1,
            name: 'Information Technology'
        },
        level: {
            id: 1,
            name: 'Fresher'
        },
        workingType: {
            id: 1,
            name: 'IT'
        },
    },
    {
        id: 2,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'Frech, System Management',
        workExperience: '5 years',
        category: {
            id: 1,
            name: 'Operation Systems'
        },
        level: {
            id: 2,
            name: 'Senior'
        },
        workingType: {
            id: 1,
            name: 'IT'
        },
    },
    {
        id: 3,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'English, Design',
        workExperience: '2 years',
        category: {
            id: 1,
            name: 'Designer'
        },
        level: {
            id: 1,
            name: 'Fresher'
        },
        workingType: {
            id: 1,
            name: 'Fashion'
        },
    },
]