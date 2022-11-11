export interface ICardProps {
  data: IAnnouncement;
}

export interface IAnnouncement {
  id: string;
  announceType: string;
  announceCover: string;
  category: string;
  description: string;
  is_active: boolean;
  km: number;
  price: string;
  title: string;
  fabricationYear: number;
}
