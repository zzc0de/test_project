const user = 'Bob';
const num = 23;
const text = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';
const text2 = `Hello ${user} you have ${num} letters in your inbox`; //new and true version

console.log(text);
console.log(text2);



const items = ['tea', 'coffee'];

const templateHtml = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>
`;
console.log(templateHtml);