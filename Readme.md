# jQuery mobile menu [![Build Status](https://travis-ci.org/danielhusar/jquery-mobile-menu.svg)](https://travis-ci.org/danielhusar/jquery-mobile-menu)

Toggle the mobile menu when you have fixed navbar.
See demo how it works. (use small page width)

### Challenge
If you have fixed navbar like yeoman.io, and in this navbar is button that trigger mobile menu to appear, regulary you want to have this menu to be fixed from top so no matter where the user have page scrolled, it always appear above the content.

This solution is not very good if the menu is lonnger than the page, as its very hard for user to scroll the menu. This plugin just remember the user position at the page so menu can have absolute position, and showing/hiding restore the page scrolling position.

### Installation
Download manually or with bower:

```ssh
$ bower install jquery-mobile-menu
```

### Sample usage

```javascript
$('button').mobileMenu();
```

## Options

#### openClass

Type: `String`  
Default: 'menu-open'

Class that is added to html when the menu is open

#### preventDefault

Type: `Boolean`  
Default: true

If the default action should be prevented. (like anchor redirect)

#### callback

Type: `Function`  
Default: noop

Function to be called each time user click the toggle button


## Demo

![Demo](demo.gif)

## License

MIT © Daniel Husar
