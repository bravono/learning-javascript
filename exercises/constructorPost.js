
const post = new ConstructorPost('Love', 
'Do not get it twisted love is a beautiful thing',
'Bravono')

console.log(post);

function ConstructorPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;
}