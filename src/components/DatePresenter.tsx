interface DateProps {
  dateString: string;
}
const DatePresenter = ({ dateString }: DateProps) => {
  const date = new Date(dateString);
  const presentable = dateString
    ? `${date.getFullYear()}. ${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}. ${date.getDate().toString().padStart(2, "0")}.`
    : "Unknown release date";
  return <span>{presentable}</span>;
};
export default DatePresenter;
