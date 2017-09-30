(function() {
    'use strict';

    describe('Cre una lista nueva', function() {

        var todoList;

        beforeEach(function() {
            console.log('1');
            todoList = new TodoList();

        });

        it('Que debe estar vacía', function() {
            expect(todoList.isEmpty()).toBe(true);

        });

        describe('Añado una tarea', function() {

            beforeEach(function() {
                console.log('2');
                todoList.addItem('Mi primer test');
            });

            it('y ahora la lista tiene un elemento', function() {


                expect(todoList.size()).toBe(1);
            });

            it('Recupero el primer elemento de la lista', function() {
                expect(todoList.getItem(0)).toBe('Mi primer test');
            });


            it('Elimino el elemento y ahora la lista tiene que estar vacía de nuevo', function() {
                todoList.removeItem(0);
                expect(todoList.isEmpty()).toBe(true);
            });

            it('Ahora añado 2 elementos', function() {

                todoList.removeItems();

                spyOn(todoList, 'addItem').and.callFake(function(){
                    todoList.items.push('FAKE');
                });

                //FAKE FUNCTION
                todoList.alert = jasmine.createSpy('alert() spy').and.callFake(function(){
                    console.log('ALERT');
                });
                todoList.alert();

                todoList.addItems(['Mi primer test', 'Mi segundo test']);
                expect(todoList.addItem).toHaveBeenCalled();
                console.log(todoList.getItem(1));

            });

        });

    });
})();
