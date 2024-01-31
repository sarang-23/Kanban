export interface Ticket extends Record<string, any> {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
}
