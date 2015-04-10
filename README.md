fb-instance
================

Local instance template for [Fritbot](https://github.com/Urthen/fritbot)

Congratulations! You've taken the first step into Fritbot's sweet, sweet embrace. By cloning this repository, you're welcoming Fritbot into your life. You will be happier for it.

This instance has the following modules pre-installed for your convenience:
* [fb-core-modules](https://github.com/Urthen/fb-core-modules)
* [fb-core-webui](https://github.com/Urthen/fb-core-webui)

Installation
----

1. You must have [node](https://nodejs.org/download/) installed
2. You must have [Mongo server](https://www.mongodb.org/downloads) running locally, or running remotely and the db_url configuration option appropriately set.
3. Fork this repository (If you want to commit your own changes) and clone it to your machine.
4. Run `npm install` in your local directory to install dependencies.
5. Test it out in the shell by running `node index`

Configuration
----

Simply add the connector and modules you want to the dependencies in `package.json` and run `npm install`.

* Install and configure a connection to a chat server, for example the [XMPP connector](https://github.com/Urthen/fb-xmpp-connector).
* Install and configure [additional modules](https://www.npmjs.com/browse/keyword/fritbot-module).
* After connector and modules are installed, restart the bot. The bot should connect to your chat server.

Deploying to Heroku
---

Ensure you have one of the several Mongo add-ons available from Heroku set up. Copy the URL environment variable (ex `MONGOLAB_URI`) into a `FB_DB_URL` variable so the bot knows where the database is located.

Add the [Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote) to your local repository and run `git push heroku master`. The default configuration provided in this instance will be sufficient.

If all goes well, your bot instance should push to Heroku and the dynos should restart within a few minutes. If not, running `heroku logs` will pull the logs from Heroku and hopefully help you diagnose any issues.
