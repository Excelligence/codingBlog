---
layout: post
lang: 'lang-js'
---

#### Connecting to Database


```
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/<db-name>',{useNewUrlParser: true})
    .then(()=>console.log('Mongodb connected'))
    .catch((err)=>console.log(err))
```

#### Creating Schema

```
 const <schema-name> = new mongoose.Schema({
      title: String,
      content: String,
      author: String,
      categories:[String],
      postedDate: {type:Date,default:Date.now},
      isPublished: Boolean
  })
```

#### Creating Model
```
const <model-name> = mongoose.model('<model-name>', <schema-name>);
```
#### Creating a document


```
async function <function-name>(){
    const <document-instance-name> = new <model-name>({
        title: 'Semicolons in Javascript',
        content: 'Semicolon in Javascript is used to separate statements.',
        author: 'Excelligence',
        categories:['js'],
        isPublished: false
    })
    const result = await <document-instance-name>.save();
    console.log(result);
    
}
<function-name>();
```