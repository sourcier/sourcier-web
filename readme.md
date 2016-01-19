# ☄ {#top} WWW.SOURCIER.UK

__Author__:  Roger Rajaratnam <roger@ragusource.com>
__Website__: http://www.sourcier.uk
__Version__: 0.1.1

## Dependencies

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
$ npm install -g gulp bower
```

## Usage

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

You can recomple the site CSS by running the gulp watch command:

```bash
$ cd sourcier-web
$ gulp
```

## That was it.

Return to the [Top](#top "Top").
