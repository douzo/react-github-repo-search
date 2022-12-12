import dayjs from "dayjs"

export function formattedDate(ISO: string): string {
    const date = dayjs(ISO);
    const formattedDate = `${date.format("YYYY/MM/DD")}`

    return formattedDate;
}