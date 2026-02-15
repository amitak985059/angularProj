export interface Order {
  _id?: string;
  userId: string;
  vendorId: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  status: 'PLACED' | 'ACCEPTED' | 'REJECTED' | 'PICKED' | 'DELIVERED';
  createdAt?: Date;
}
