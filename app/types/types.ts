export interface IPost {
        id: number
        title: string
        body: string
        tags: string[]
        reactions: {
            likes: number
            dislikes: number
        },
        views: number
        userId: number
}

export interface IUser {
    id: number, 
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string,
    refreshToken: string
}
