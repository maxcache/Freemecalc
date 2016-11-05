import { Pipe, PipeTransform } from '@angular/core';
import { TimeFramesList } from '../profile/profile';


@Pipe({ name: 'dictionaryName' })
export class DictionaryPipe implements PipeTransform {
    transform(value: number, type: string): string {
        try {
            if (type == "TimeFrame") {
                return TimeFramesList.find(u => u.id == value).display;
            }
            return "";
        } catch (error) {
            console.log(error);
            return "";
        }
    }
}