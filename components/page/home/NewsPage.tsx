import { useState } from "react"

// const Navigators = [
//     {
//         icon: NewIcon,
//         title: 'News',
//     },
//     {
//         icon: ApplicationIcon,
//         title: 'My applications',
//     },
//     {
//         icon: PublicProfileIcon,
//         title: 'My public profile',
//     },
//     {
//         icon: DashboardIcon,
//         title: 'Dashboard',
//     },
//     {
//         icon: SettingIcon,
//         title: 'Settings',
//     },
// ]

function NewsPage() {
    const [data, setData] = useState('News')
    function callbackFunction(childData: string) {
        setData(childData)
    }
    return (
        // <Layout>
        //     {/* <Stack flexDirection={'row'} justifyContent={'space-between'}>
        //         <UserFrame parentFunction={callbackFunction} active={data} /> */}
        //     <Posts />
        //     {/* <FilterBar /> */}
        //     {/* </Stack> */}
        // </Layout>
        <></>
    )
}

export default NewsPage