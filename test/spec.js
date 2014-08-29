var expect = chai.expect;
var should = chai.should();

describe('jQuery mobile menu', function() {
  it('Libraries exists.', function () {
    $.should.be.a('function');
    $.fn.mobileMenu.should.be.a('function');
  });

  it('It should add class to the html', function () {
    $('button').mobileMenu();
    $('button').trigger('click.menu');
    $('html').hasClass('menu-open').should.be.equal(true);
  });

  it('It should remove class from the html', function () {
    $('button').trigger('click.menu');
    $('html').hasClass('menu-open').should.be.equal(false);
  });

  it('It should work with custom options', function (cb) {
    $('button').off('click.menu');
    $('button').mobileMenu({
      openClass : 'menu',
      callback: function () {
        $('html').hasClass('menu').should.be.equal(true);
        cb();
      }
    });
    $('button').trigger('click.menu');
  });
});

