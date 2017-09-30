casper.test.begin('Homepage', 5, function suite(test) {

  casper.start('http://axinstgeccwps1-oysho.central.inditex.grp/es/', function() {

    this.echo(this.getTitle());

    this.test.assertEval(function() {
      return inditex.iPage == "ItxHomePage";
    }, "Estoy en la home" );

  });

  casper.waitForSelector('#headerLoginButton', function(){

    this.echo(this.evaluate(function(){
      return inditex.iUserJSON.userType;
    }));


    this.test.assertEval(function() {
      return inditex.iUserJSON.userType == "G";
    }, "Soy un usuario invitado" );

    this.test.assertExists("#headerLoginButton");
    this.click('#headerLoginButton');

  });

  casper.waitForSelector('form#loginForm', function(){

    this.fillSelectors('form#loginForm', {
        'input[name=logonId]':         'jestevez.villa@gmail.com',
        'input[name=logonPassword]':   'Freeman71'
    }, true);

  });

  casper.waitFor(

    function check() {
      return this.evaluate(function() {
          return inditex.iUserJSON.userType == "R";
      });
    },

    function then() {
      this.test.assertEval(function() {
        return inditex.iUserJSON.userType == "R";
      }, "Soy un usuario registrado" );

    }

  );

  casper.wait(3000, function(){

    this.click('#headerLoginButton');

  });

  casper.waitForSelector('.logout', function(){

      this.click('.logout');

  });

  casper.waitFor(

    function check() {
      return this.evaluate(function() {
          return inditex.iUserJSON.userType == "G";
      });
    },

    function then() {
      this.test.assertEval(function() {
        return inditex.iUserJSON.userType == "G";
      }, "Soy un usuario invitado" );

  });

  casper.run(function() {
    test.done();
  });

});
