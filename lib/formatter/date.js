import { format } from "date-fns";

export function formatDate(date) {
    const dateFormat = 'yyyy/MM/dd hh:mm:ss aa'

    if (date instanceof Date){
        return format(date, dateFormat)
    }
    
    return format(new Date(date), dateFormat)
}