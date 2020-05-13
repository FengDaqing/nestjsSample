import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as _ from 'lodash'

export class UsidPipe implements PipeTransform {
    transform(value: any, __: ArgumentMetadata): any {
        if (_.isNil(value)) {
            throw new BadRequestException('Missing userid header');
        }
        return value;
    }
}
