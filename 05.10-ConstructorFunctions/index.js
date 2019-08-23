let myPost = new Post('Title', 'Body', 'me');

console.log(myPost);



function Post (title, body, author,){
    this.title = title;
    this.author = author;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}