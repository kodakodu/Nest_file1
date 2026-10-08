import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import  csv from 'csv-parser';

@Injectable()
export class CsvService{
    private readonly csvDir = path.join(process.cwd(),'data');

    async readCsv(filename: string): Promise<any[]> {
        const filePath = path.join(this.csvDir, filename);

        if(!fs.existsSync(filePath)){
            throw new Error(`Le fichier n'existe pas`);
        }

        const results: any[] = [];

        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv({ separator: ','}))
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (err) => reject(err))
        });
    }
}
