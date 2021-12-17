
//перемещение костяшек стрелками
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const app = (randomize = _.shuffle) => {
    const renderValue = randomize(values).reduce((prev, item, index) => {
        if (prev[prev.length - 1].length === 4) {
            prev.push([]);
        }
        prev[prev.length - 1].push(item)
        return prev
    }, [[]])
    const lodashValue = _.zip.apply(_, renderValue)
    const myHTML = lodashValue.map((item) => {
        const newItems = item.map((i) => {
            return `<td class="p-3">${i}</td>`
        });
        return [`<tr>${newItems}</tr>`]
    }).flat().join('').split(',').join('')

    const resultHTML = myHTML.substring(0, myHTML.length - 35) + `<td class="p-3 table-active"></td></tr>`;
    /* код выше расположил цифры в таблице сверху вниз. То есть, если бы они стояли по порядку 
     (они стоят сейчас хаотично из-за shuffle from lodash) это выглядело бы вот так: 1 5 9  13 вместо  1  2  3  4
                                                                                     2 6 10 14         5  6  7  8
                                                                                     3 7 11 15         9  10 11 12
                                                                                     4 8 12            13 14 15
      плюс код сразу обернут в теги
    */
    const tableEl = document.createElement('table');
    tableEl.classList.add('table-bordered')
    tableEl.innerHTML = resultHTML;
    const root = document.querySelector('.gem-puzzle');
    root.append(tableEl);
    /* 
    добавил таблицу в html. Дальше идет код который можно сильно упростить сделав навигацию через 
    table.rows и tr.cells, но вспомнил я об этом только на следующий день
    */
    const handlePress = (e) => {
        const isActive = document.querySelector('.table-active');
        const key = e.key;
        let indexChange = 0;
        const childrenString = Array.from(isActive.parentNode.children);
        const amountString = isActive.parentNode.parentNode
        if (key === 'ArrowRight') {
            childrenString.forEach((kid, index) => {
                indexChange = kid.classList.contains('table-active') ? index - 1 : indexChange;
                indexChange = indexChange < 0 ? 0 : indexChange;
                kid.textContent = kid.classList.contains('table-active') ? childrenString[indexChange].textContent : kid.textContent;
                kid.classList.remove('table-active');
            });
            const valueReverse = childrenString[0].textContent;
            childrenString[indexChange].classList.add('table-active');
            childrenString[indexChange].textContent = '';
        }
        if (key === 'ArrowLeft') {
            childrenString.forEach((kid, index) => {
                indexChange = kid.classList.contains('table-active') ? index + 1 : indexChange;
                indexChange = indexChange > childrenString.length - 1 ? childrenString.length - 1 : indexChange;
                kid.textContent = kid.classList.contains('table-active') ? childrenString[indexChange].textContent : kid.textContent;
                kid.classList.remove('table-active');
            });
            const valueReverse = childrenString[0].textContent;
            childrenString[indexChange].classList.add('table-active');
            childrenString[indexChange].textContent = '';
        }
        if (key === 'ArrowDown') {
            childrenString.forEach((kid, index) => {
                indexChange = kid.classList.contains('table-active') ? index : indexChange;
                kid.classList.remove('table-active');
            });

            const prevEl = isActive.parentNode === amountString.firstElementChild ? isActive.parentNode : isActive.parentNode.previousElementSibling
            const prevValue = prevEl.children[indexChange].textContent;
            childrenString[indexChange].textContent = prevValue;
            Array.from(prevEl.children).forEach((kid, index) => {
                if (index === indexChange) {
                    kid.classList.add('table-active');
                    kid.textContent = '';
                };
            })
        }
        if (key === 'ArrowUp') {
            childrenString.forEach((kid, index) => {
                indexChange = kid.classList.contains('table-active') ? index : indexChange;
                kid.classList.remove('table-active');
            });

            const nextEl = isActive.parentNode === amountString.lastElementChild ? isActive.parentNode : isActive.parentNode.nextElementSibling
            const nextValue = nextEl.children[indexChange].textContent;
            childrenString[indexChange].textContent = nextValue;
            Array.from(nextEl.children).forEach((kid, index) => {
                if (index === indexChange) {
                    kid.classList.add('table-active');
                    kid.textContent = '';
                };
            })
        }
    }
    document.addEventListener('keyup', handlePress);
};
app()