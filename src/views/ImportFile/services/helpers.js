import * as XLSX from 'xlsx';


export function excelToJSON(fileContent) {
    const workbook = XLSX.read(fileContent, {type: 'binary'});
    var result = {};
    workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        if(roa.length > 0){
        result[sheetName] = roa;
        }
    });
    return JSON.stringify(result);
}