casper.test.begin('todo() tests', 1, function(test) {

    casper.start('http://localhost:9000/', function() {

      test.assertEval(function() {

        var t = 1 + 1;

        return t == 3;

      }, "The box has been moved");

    });

    casper.run(function() {
      casper.echo('So the whole suite ended.');
      test.done();
    });


});
