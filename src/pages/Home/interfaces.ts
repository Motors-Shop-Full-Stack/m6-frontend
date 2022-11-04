export interface ICardProps {
    data: IAnnouncement
}

export interface IAnnouncement {
    id: number
    announcement_type: string
    announcement_cover: string
    category: string
    description: string
    is_active: boolean
    km: number
    price: string
    title: string
    fabrication_year: number
}