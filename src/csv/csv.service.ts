import { Injectable, NotFoundException } from '@nestjs/common';
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
    async readCsvById(id: string): Promise<any[]> {
        const filePath = path.join(this.csvDir, 'data.csv');
        if(!fs.existsSync(filePath)){
            throw new Error(`Le fichier n'existe pas`);
        }
        return new Promise((resolve, reject) => {
      let foundItem: any = null;

      fs.createReadStream(filePath)
        .pipe(csv({ separator: ',' }))
        .on('data', (row) => {
          // Remplace 'id' par le nom exact de ta colonne dans le CSV (ex: row.id, row.ID, etc.)
          if (row.id === id) {
            foundItem = row;
          }
        })
        .on('end', () => {
          if (foundItem) {
            resolve(foundItem);
          } else {
            reject(new NotFoundException(`Entrée avec l'ID ${id} introuvable`));
          }
        })
        .on('error', (err) => reject(err));
    });
    }
}
