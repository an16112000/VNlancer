interface UserApi {
    getUserProfile: Function
}

export interface UserProfile {
    address: string
    phoneNumber: string
    email: string
    username: string
    imageUrl: string
}

const useUserApi = (): UserApi => {
    function getUserProfile() {
        
    }

    return {
        getUserProfile
    }
}