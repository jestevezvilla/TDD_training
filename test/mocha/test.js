    describe('Creo una lista nueva', function() {

        var todoList;

        beforeEach(function() {
            console.log('1');
            todoList = new TodoList();

        });

        it('Que debe estar vacía', function() {
            expect(todoList.isEmpty()).to.be.true;

        });

        describe('Añado una tarea', function() {

            beforeEach(function() {
                console.log('2');
                todoList.addItem('Mi primer test');
            });

            it('y ahora la lista tiene un elemento', function() {


                expect(todoList.size()).to.be.equal(1);
            });

            it('Recupero el primer elemento de la lista', function() {
                expect(todoList.getItem(0)).to.be.equal('Mi primer test');
            });


            it('Elimino el elemento y ahora la lista tiene que estar vacía de nuevo', function() {
                todoList.removeItem(0);
                expect(todoList.isEmpty()).to.be.true;

                assert(todoList.isEmpty());
                assert.strictEqual(todoList.isEmpty(), true);

                todoList.isEmpty().should.be.true;

            });

            it('Ahora añado 2 elementos', sinon.test(function() {

                todoList.removeItems();

                var addItem = this.spy(todoList, 'addItem');

                // var addItem = this.stub(todoList, 'addItem', function () {
                //     todoList.items.push('FAKE');
                // });


                todoList.alert = function(){
                    console.log('ALERT');
                }

                var alert = this.spy(todoList, 'alert');

                todoList.alert();



                todoList.addItems(['Mi primer test', 'Mi segundo test']);

                addItem.restore();

                expect(alert.calledOnce).to.be.true;
                assert(alert.calledOnce, 'La función no se llama una vez');
                sinon.assert.calledOnce(alert);

                expect(addItem.calledTwice).to.be.true;
                assert(addItem.calledTwice, 'La función no se llama dos veces');
                sinon.assert.calledTwice(addItem);

                expect(addItem.calledWith(sinon.match.string)).to.be.true;
                assert(addItem.calledWith(sinon.match.string), 'El parámetro es una cadena');
                sinon.assert.calledWith(addItem, sinon.match.string);


                console.log(todoList.getItem(1));

            }));

        });

    });
