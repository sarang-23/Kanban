export interface Ticket {
  id: string;
  title: string;
  tags: string[];
  userId: string;
  status: status;
}

enum status {
  TODO = "Todo",
  IN_PROGRESS = "In Progress",
  BACKLOG = "Backlog",
  DONE = "Done",
  CANCELED = "Canceled",
}
