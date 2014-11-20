AWDG Member Website
========

A simple website for AWDG members.


### Installing Locally
To get running you'll need to install [Jekyll](http://jekyllrb.com/), [Bower](http://bower.io/), and [Compass](http://compass-style.org/). This assumes you are running OS X and already have XCode and the [command line tools](http://stackoverflow.com/questions/9329243/xcode-4-4-and-later-install-command-line-tools) installed.

#### Setting up Jekyll

First, make sure you have the Jekyll gem.

    gem install jekyll

Then install the Compass gem.

    gem install compass

Then install Bower. It depends on [Node](http://nodejs.org/) and [npm](http://npmjs.org/). It's installed globally using npm:

    npm install -g bower

*Also make sure that [git](http://git-scm.com/) is installed as some bower packages require it to be fetched and installed.*

**Now that things are installed**

Move into your webafternoon.com directory and start the Jekyll server.

    cd webafternoon.com
    jekyll serve -w --baseurl ''

Now you can view your out-of-the-box website by going to [http://localhost:4000](http://localhost:4000).

Notes: We use [Sass](http://sass-lang.com/) installed via Bower.

---