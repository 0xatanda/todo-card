export function getTimeRemainingText(dueDate: Date): string {
  const now = new Date();
  const diffMs = dueDate.getTime() - now.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);
  const absSeconds = Math.abs(diffSeconds);

  const minutes = Math.floor(absSeconds / 60);
  const hours = Math.floor(absSeconds / 3600);
  const days = Math.floor(absSeconds / 86400);

  if (Math.abs(diffSeconds) < 60) return "Due now!";

  if (diffMs > 0) {
    if (days > 1) return `Due in ${days} days`;
    if (days === 1) return "Due tomorrow";
    if (hours >= 1) return `Due in ${hours} hours`;
    return `Due in ${minutes} minutes`;
  } else {
    if (days >= 1) return `Overdue by ${days} days`;
    if (hours >= 1) return `Overdue by ${hours} hours`;
    return `Overdue by ${minutes} minutes`;
  }
}