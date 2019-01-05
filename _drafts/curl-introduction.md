---
layout: post
lang: 'lang-bash'
---
### What is cURL
Client for URLs (or cURL) is a software project comprised of two development efforts - cURL and libcurl. cURL is named so because it uses URL syntax and it is a client side programme.

difference between wget and curl
how do I run curl on Windows
curl in php
is curl thread safe
curl https

Steps
url
Contains the host name
Hostname is used by DNS to get IP address
Once we have IP address we will establish a link to a port of the host. This is a tcp connection.


Domain name resolving

host is the name used describe computers in a network. A server is a host, a client is a host


URLs start with the "scheme", which is the official name for the http:// part.


The scheme identifier is separated from the rest of the URL by the :// sequence

After that you have an option to enter user name and password like this. This is optional
curl ftp://user:password@example.com/

You can pass user name and password using command line options as we will see later

You can specify the port number like this

curl http://example.com:8080/

For identifying directories you give a trailing slash at the end


url fragments
term used for different sections in a html documents followed by a hash

curl supports url fragments but does not contribute to the output.

It is important to know that the address bar of browsers use supersets of url or Uris .

So what you can see in address bar and what you can pass in curl is different

you can use --next option to divide between different URL and their options