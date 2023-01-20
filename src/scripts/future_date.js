export default function future_date(days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }