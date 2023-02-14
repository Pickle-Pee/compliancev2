import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({name : "your_database_name"});

db.transaction((tx) => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS table_name (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL);');
});

// Добавление данных в бд

// db.transaction((tx) => {
//     tx.executeSql('INSERT INTO table_name (id, data) VALUES (?, ?)', [1, 'some data']);
//   });


// Получение данных из бд

// db.transaction((tx) => {
//     tx.executeSql('SELECT * FROM table_name', [], (tx, results) => {
//       // results.rows.item(i) - получить i-ый элемент из результатов запроса
//     });
//   });