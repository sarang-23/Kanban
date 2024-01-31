export interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
}

enum status {
  TODO = "Todo",
  IN_PROGRESS = "In Progress",
  BACKLOG = "Backlog",
  DONE = "Done",
  CANCELED = "Canceled",
}
