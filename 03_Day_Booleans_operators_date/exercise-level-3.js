const now = new Date();
const day = now.getDate().toString().padStart(2, '0');
const month = now.getMonth().toString().padStart(2, '0');
const year = now.getFullYear();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);