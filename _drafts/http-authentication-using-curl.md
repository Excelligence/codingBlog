---
layout: post
lang: 'lang-shell'
---
passwords

curl -u <user>:<password> <url>

Issues with passing password like this

commandline leakage

    others can read from your command line

options to secure password

1.getting username and password from .netrc file

.netrc file is stored in users home directory

you can add your credentials in the following format


machine example.com
login john-doe
password 12345

-n, --netrc tells curl to look for a .netrc file
You can specify the file path using
--netrc-file [file]

2.getting username and password from a .config file
pass command line options for user and password in the config file as discussed above.

3.enter -u option without entering password, password will be prompted for later on.

4.use https,ftps
5.there are some other methods like --digest,--negotiate.,--ntlm