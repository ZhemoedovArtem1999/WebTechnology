# Задача №1: проверить XML на Well formed:

```
<req>

    <surname>Иванов</surname>
    <name>Иван</name>
    <patronymic>Иванович</patronymic>
    <birthdate>01.01.1990</birthdate>
    <birthplace>Москва</birthplace>
    <phone>8 926 766 48 48</phone>
</req
```
well formed:
```
<req>

    <surname>Иванов</surname>
    <name>Иван</name>
    <patronymic>Иванович</patronymic>
    <birthdate>01.01.1990</birthdate>
    <birthplace>Москва</birthplace>
    <phone>8 926 766 48 48</phone>
</req>
```
- Не хватало в закрывающемся теге "Reg" ">"

# Задача №2: проверить JSON на Well formed:

```
{

    "surname": "Иванов"
    "name": "Иван"
    "patronymic": "Иванович"
    "birthdate": "01.01.1990"
    "birthplace": "Москва"
    "phone": "8 926 766 48 48"
}
```
well formed:

```
{

	"surname": "Иванов",
	"name": "Иван",
	"patronymic": "Иванович",
	"birthdate": "01.01.1990",
	"birthplace": "Москва",
	"phone": "8 926 766 48 48"
}
```
- не хватало запятой после каждого поля