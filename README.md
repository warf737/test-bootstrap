# test-bootstrap

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Тестовое задание.
###1.	Цель:
      Разработка прототипа маленького фронтального приложения.
###2.	Платформа:
      vue.js
###3.	Ограничения:
      Разрабатывается только фронтальная часть. Серверная эмулируется.
      Необходимо использовать vuex, vue-router и bootstrap.
###4.	Модель данных. Модель представлена 4 объектами:
+ Счет - Acct.
  + AcctNum – номер счета.
 + Остаток по счету на дату – AcctPos.
   +	AcctNum – номер счета. Связь с объектом счет.
   +	OpDate – дата
   +	Balance – остаток. Остаток может быть положительный(активный) и отрицательный(пассивный)
 + Проводка – OpEntry.
   +	OpDate – дата
   +	AcctNumDb – счет дебета. Связь с объектом счет.
   +	AcctNumCr – счет кредита. Связь с объектом счет.
   +	Amount – сумма проводки
+	Опердень – OpDate.
   + OpDate – дата.
###5.	Требование к фронтальной части.
+ ~~Экран приложения состоит из двух частей – Меню и Рабочей области.~~
+ ~~Меню состоит из следующих пунктов.~~
  +	~~Счета.~~
  +	~~Операционные дни.~~
  +	~~Операции.~~
+ При выборе пункта меню «Счета» в рабочей области должны отразиться.
  +	Табличная форма «Счета с остатками на дату». Отображает все счета с остатком на выбранную пользователем дату. По умолчанию это дата последнего опердня.
  +	Табличная форма «Проводки по счету».
  + Табличная форма проводок по счету связана со строками по табличной формы счетов. При выборе строки в форме «Счета», в форме «Проводки по счету» должны отражаться проводки, соответствующие счету.
+ При выборе пункта меню «Операционные дни» в рабочей области должны отразиться.
  +	Табличная форма «Операционные дни». Отображает все опердни.
  +	Табличная форма «Проводки операционного дня».
  + По аналогии с пунктом «счета» записи формы «Проводки операционного дня» зависят от выбранной записи в форме «Операционных дней».
+ При выборе пункта меню «Операции» в рабочая область должны отразиться.
  +	Табличная форма «Проводки». Отображает все проводки.
  +	Табличная форма «Счета проводок». Должны быть отображены счет дебета и счет кредита с остатком на дату проводки.
  + По аналогии с пунктом «счета» записи формы «Счета» зависят от выбранной записи в форме «Проводки».
+ Данные  в формате JSON приведены в разделе «Приложение. Данные в формате JSON» .
###6.	Общие требования ко всем табличным формам.
Необходимо реализовать функции, позволяющие выполнить операции CRUD.
+	Отражать детальную информацию по записи (просмотр).
+	Редактирование строки.
+	Удаление строки.
+	Создание новой записи.

###7.	Детальное описание табличных форм.
+ Форма «Счета».
  +	Поле выбора опердня
  +	Колонка «номер счета».
  +	Колонка «остаток».
+ Форма «Проводки по счету».
  +	Колонка «Дата операционного дня».
  +	Колонка «Счет дебета».
  +	Колонка «Счет кредита».
  +	Колонка «Сумма».
+ Форма «Операционные дни».
  +	Колонка «Дата операционного дня».
+ Форма «Проводки операционного дня».
  + Колонка «Счет дебета».
  +	Колонка «Счет кредита».
  +	Колонка «Сумма».
+ Форма «Проводки».
  +	Колонка «Дата операционного дня».
  +	Колонка «Счет дебета».
  +	Колонка «Счет кредита».
  +	Колонка «Сумма».
+ «Счета проводок».
  +	Колонка «номер счета».
  +	Колонка «остаток».
  +	В этой табличной форме всегда 2 записи – счет дебета проводки и счет кредита.

