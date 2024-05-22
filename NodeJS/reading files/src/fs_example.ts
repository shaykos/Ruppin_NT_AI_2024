//עבודה עם קבצים
import { readFile } from 'fs';
import { join } from 'path';

/*
readFile -->וקוראת את תוכן הקובץ callback פונקציה המקבלת את מיקום הקובץ ופונקציית 
תמיד יקבלו בפרמטר הראשון את השגיאה  nodejs של  callback הפונקציות
---
join() -> פונקציה המקבלת מחרוזות ומחזירה את טקסט הניתוב כפי שהוא נקרא במערכת ההפעלה
---
__dirname -> משתנה גלובלי שמכיל את מיקום הקובץ הנוכחי
__filename -> משתנה גלובלי שמכיל את שם הקובץ הנוכחי
*/

// let pathToFile = join(__dirname, 'files', 'kuku.txt');

// readFile(pathToFile, (error, data) => {
//   if (error) console.log('error', error);
//   else {
//     console.log('data --> ', data.toString());
//   }
// });

