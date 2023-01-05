const todoList = {
    items: [{
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: true,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],
    printAll: function () {
        for (let i = 1; i <= this.items.length; i++) {
            this.print(i)
        }
    },
    add: function (text) {
        this.items.unshift({
            text: text,
            completed: false,
        })
    },
    remove: function (index) {
        if (typeof (index) !== 'number' || index < 1 || index === '') {
            console.log('Ошибка! Введите номер элемента')
        } else {
            if (this.items[index - 1].completed === true) {
                this.items.splice(index - 1, 1);
            }
        }
    },
    print: function (index) {
        if (typeof (index) !== 'number' || index < 1 || index === '') {
            console.log('Ошибка! Введите номер элемента')
        } else {
            if (this.items[index - 1].completed === false) {
                this.items[index - 1].text = `[ ] ${this.items[index - 1].text}`;
            } else {
                this.items[index - 1].text = `[x] ${this.items[index - 1].text}`;
            }
            console.log(this.items[index - 1].text);
        }
    },
    complete: function (index) {
        if (typeof (index) !== 'number' || index < 1 || index === '') {
            console.log('Ошибка! Введите номер элемента')
        } else {
            if (this.items[index - 1].completed === false) {
                this.items[index - 1].completed = true;
            }
        }
    },
};

todoList.add('Перейти к следующему релизу');
todoList.remove();
todoList.print();
todoList.complete();
todoList.printAll();