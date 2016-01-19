# ☄ {#top} WWW.SOURCIER.UK

__Author__:  Roger Rajaratnam <roger@ragusource.com>
__Website__: http://www.sourcier.uk
__Version__: 0.1.1

## Dependencies

Install brew, node, gulp and bower:

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
$ npm install -g gulp bower
```

## Usage

Clone the repo, install dependencies, compile assets and run the web app:

```bash
$ git clone git@github.com:sourcier/sourcier-web.git
$ cd sourcier-web
$ npm install
$ bower install
$ gulp sass
$ DEBUG=sourcier-web:* npm start
```

In your browser go to: http://localhost:3000

## Development

You can recompile the assets by running the gulp watch command:

```bash
$ cd sourcier-web
$ gulp
```

View templates are written using [Swig](http://paularmstrong.github.io/swig/docs).

## That was it.

Return to the [Top](#top "Top").
