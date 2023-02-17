export default function (day: "ПН" | "ВТ" | "СР" | "ЧТ" | "ПТ" | "СБ" | "ВС") {
  switch (day) {
    case "ПН":
      return "Понедельник";
    case "ВТ":
      return "Вторник";
    case "СР":
      return "Среда";
    case "ЧТ":
      return "Четверг";
    case "ПТ":
      return "Пятница";
    case "СБ":
      return "Суббота";
    case "ВС":
      return "Воскресенье";
  }
}
