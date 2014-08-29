var expect = chai.expect;
var should = chai.should();



describe('Globals', function() {
  it('Libraries exists.', function () {
    $.should.be.a('function');
    $.fn.mobileMenu.should.be.a('function');
  });

  it('It should add class to the html', function () {
    $('button').trigger('click.menu');
    $('html').hasClass('menu-open').should.be.equal(true);
  });

  it('It should remove class from the html', function () {
    $('button').trigger('click.menu');
    $('html').hasClass('menu-open').should.be.equal(false);
  });
});

