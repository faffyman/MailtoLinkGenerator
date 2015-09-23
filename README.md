Mailto Link Generator
=======================

See it in action:  http://faffyman.github.io/MailtoLinkGenerator

This single page app is used for creating a mailto: link that will pre populate the subject and body fields of the resulting email.

How to Use it?
--------------

Simple,

1. Type in the email address of the intended recipient
2. Type what you want to appear in the email subject line
3. Type up the body of the email - keep it short
4. Click "generate"

**Results**

The resulting mailto link is shown and can be copied/pasted as required.
In addition to that a working example is displayed - you can click on it to see what your users will see when they click your link.



Installation / Setup
======================

Steps to get this repo up and running on your machine

1. git clone https://github.com/faffyman/MailtoLinkGenerator.git  YOUR_DIRECTORY
2. you will need to install the dependencies with bower [http://bower.io/]  These are set to install into ```public/components/vendor``` but you can change that in the ```.bowerrc``` file

```$ bower install```
3. If you change the scss you can build the CSS with compass.
From the /public directory type:

```$ compass watch```

