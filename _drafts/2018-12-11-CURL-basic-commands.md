---
layout: post
lang: 'language-bash'
---

### cURL

Client for URLs (or cURL) is a software project comprised of two development efforts - cURL and libcurl. cURL is named so because it uses URL syntax and it is a client side programme.



+ cURL is a command-line tool for getting or sending files using URL syntax.  cURL uses libcurl.

+ libcurl is a free, client-side URL transfer library with support for a wide range of protocols.

+ cURL is a used to transfer data from or to a server, using one of the supported protocols.  

+ It supports protocols HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, LDAP, DAP, DICT, TELNET, FILE, IMAP, POP3, SMTP and RTSP.   

+ Curl will be by default available in Linux and Mac systems.


> It is commonly used for testing REST API  end points, downloading files etc


First we will cover some basics.

We will be using a Fake Online REST API called [jsonplaceholder](https://jsonplaceholder.typicode.com/) that is created for Testing and Prototyping. We can sent different HTTP requests to the URIs mentioned in their website.

Another service we will be using in this tutorial is  [unsplash](https://unsplash.com/) which is a stock photography sharing website. We will use curl to download pictures from [unsplash](https://unsplash.com/)

So we will get started with basics of curl.

---

```
$ curl <url>
```

This will fetch the data contained in the url according to the protocol specified.

---

If we look at  [jsonplaceholder](https://jsonplaceholder.typicode.com/) when we sent an HTTP GET to [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1) it will return details about one user as JSON. So we will try it with curl
```
//Senting a request to Fake REST API. This will give data of  10 users from the fake REST API.
$ curl  https://jsonplaceholder.typicode.com/users/


//Output

{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```
---

Output contents of the url to a file

```
curl -o <fileName> <url>
//Usage
curl -o users https://jsonplaceholder.typicode.com/users/1
```
---

We can use shell redirection for the same output

```
curl https://jsonplaceholder.typicode.com/users/ > users
```

---

One alternate way to download file with curl is to use the -O option . File is named using remote name.

```
curl -O <url>
```

---
Include http response header information


```
curl -i <url>
```
---

Return header Info only without http response body


```
//-I or --head can be used
curl -I <url>
```
---

We can specify ranges using [N-M] syntax, where N is the start index and M is the end index.

Get details of 100 photos one by one

```

curl https://jsonplaceholder.typicode.com/photos/[1-100]

```

for help

curl --help or curl -h

to get manual

curl --manual

verbose mode

curl -v "https://jsonplaceholder.typicode.com/users

curl gives you details of what is going on when sending the request

curl gives you details of what is going on when sending the request


> GET /users HTTP/1.1
> Host: jsonplaceholder.typicode.com
> User-Agent: curl/7.60.0
> Accept: */*




to shut progress meter

-s/--silent

simple progress meter

-# / --progress-bar


--trace and --trace-ascii

give more indepth details

--trace gives output in hexa
--trace-ascii is more readable

--write-out

-w

to write specific information to terminal like response code,content type,download speed to terminal






