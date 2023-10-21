import { Box } from '@mui/material'
import { useState } from 'react'
import Options from '../myApplications/options'
import PostForFreelancer from './postForFreeLancer'



const jobListt = [
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

const optionsPostForFreelancer = [
    {
        title: 'Công việc'
    },
    {
        title: 'Cuộc thi'
    }
]

interface PostListForFreelancerProps {
    jobList: any
}

export default function PostListForFreelancer() {
    const [option, setOption] = useState('Công việc')
    const [jobList, setJobList] = useState([])
    const callBackFunction = (item: string) => {
        setOption(item)
    }
    // useEffect(() => {
    //     fetch('http://localhost:9000/jobs')
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setJobList(data)
    //       })
    //   }, [])
    return (
        <Box sx={{ width: '100%' }}>
            <Options options={optionsPostForFreelancer} onClick={callBackFunction} />

            <PostForFreelancer list={jobList} />
        </Box>
    )
}


