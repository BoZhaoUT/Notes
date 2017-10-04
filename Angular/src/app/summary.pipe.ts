import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary'
})

// this is a costum pipe
// must implement PipeTransform interface
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value)
            return null;
        
        // if limit is not given, then use 50
        let actualLimit = (limit) ? limit : 50;
        return value.substring(0, limit) + '...';
    }
}