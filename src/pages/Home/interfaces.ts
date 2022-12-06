export interface ICardProps {
  announcement: IAnnouncement;
  isAdmin: boolean
}

export interface IAnnouncement {
  id: string;
  announceType: string;
  announceCover: string;
  category: string;
  description: string;
  is_active: boolean;
  km: number;
  price: number;
  title: string;
  fabricationYear: number;
}
