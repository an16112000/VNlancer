import {Box} from '@mui/material'
import Options from '../myApplications/options'
import PostForFreelancer from './postForFreeLancer'

const optionsPostForFreelancer = [
    {
        title: 'Công việc'
    },
    {
        title: 'Cuộc thi'
    }
]

const jobList = [
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot11 shot 1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot1 shot'
    },
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot'
    },
    {
        type: 'Kinh doanh',
        title: 'Pho',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg',
        nameUser: "Mic Doan",
        date: '20/09/2023 1:38',
        price: 1000000,
        details: '1 shot'
    },
]

export function PostListForFreelancer() {
    return(
        <Box sx={{width: '45%'}}>
            <Options options={optionsPostForFreelancer} />
            <PostForFreelancer list={jobList} />
        </Box>
    )
}
