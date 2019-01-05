---
layout: post
lang: 'lang-shell'
---

---

GET Request

```
curl <url>
```
---
POST request

```
curl -d "title=Hello&body=Hello World" <url>
```



PUT Request

```
curl -X PUT -d "title=Hello" <url>
```



Delete Request

```
curl -X DELETE <url>
```



For secure routes



```
curl -u <username>:<password> <url>
```



Follow redirection

```
curl -L <url>
```



FTP Protocol



Uploading a file using CURL



curl -u <test@traversymedia.com>:12345 -T <fileName> ftp://ftp.traversymedia.com



curl -u <username>:<password> -T <fileName> <ftp url>

Download files by ftp



curl -u <username>:<password> -O  <ftp url>/<filepath>




HTTP POST

curl -d 'name=admin&shoesize=12' http://example.com/

Read data from a file

curl -d @filename http://example.com

content-type

below example specifies the content type and data is sent as json

curl -d '{json}' -H 'Content-Type: application/json' https://example.com

Multipart formposts

I doubt that this is normally used when there is an input element for file upload. Otherwise to work with normal form and json data the -d option is enough.

curl -F person=anonymous -F secret=@file.txt http://example.com/submit.cgi



DELETE Request

to modify http requests you have to use the -X or --request option

Default is GET , here we are modifying it to delete.
To post data we normally use -d or -F

 curl -w "%{response_code}" -X DELETE "https://jsonplaceholder.typicode.com/posts/3"

-w "%{response_code}" section is used to write out the response code to terminal

PUT Request

To update a file in remote server
curl -T localfile http://example.com/new/resource/file

To do an http PUT request

 curl -w "%{response_code}" -d @data -X PUT "https://jsonplaceholder.typicode.com/posts/3"