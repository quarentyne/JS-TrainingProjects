Реализовать алгоритм, вычисления пополнения бонусного счета по номеру промокода. Промокод состоит из 8 цифр, другие различные символы отличные от цифр недопустимы. Промокод не может иметь другое количество цифр отличное от восьми. Таким образом промокод - восьмизначное число.

1)Если в промокоде есть минимум две пары рядом стоящих цифр, и две таких цифры нечетные, и есть вторая пара цифр промокода рядом стоящих цифр аналогичны эти цифры нечетные, и две эти пары разделены между собой одним или более четными цифрами, то такой промокод имеет бонус 1000 грн. Условия 3 и 4 игнорируются.
2)Условие аналогично пункту 1. Только абсолютно все найденные пары нечетных цифр, должны в рамках каждой отдельно взятой пары быть по возрастанию. Т.е. первая цифра в паре меньше следующей. Такой промокод имеет -> бонус 2000 грн. Если они равны например 77, считаем что они не по возрастанию. В этом промокоде игнорируются условия 1, 3 и 4 пунктов.  
3)Если сумма цифр промокода кратные двум больше чем сумма цифр промокода не кратных двум -> бонус 100 грн. Условие 4 игнорируется.
4)Любая другая последовательность значений говорит что промокод не корректен.

Требование к выполнению работы
1)Функция должна принимать по параметрам промокод типа number.
2)Функция должна возвращать 100, 1000, 2000 или 0 в случае если промокод не действителен.
3)Использовать преобразования числа или цифр в строку для любых целей - запрещено.
