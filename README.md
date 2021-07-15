# Visual Diagram Editor

## React Styleguidist

Install Styleguidist:

```
npm install --save-dev react-styleguidist
```

Styleguidist will look for any Readme.md or ComponentName.md files in the component’s folder and display them. Any code block with a language tag of js, jsx, or javascript will be rendered as a React component with an interactive playground. So for the next step you should create a \*.md file in your component's folder and for example display that component:

````
// SimpleFlow.md
```js
<SimpleFlow />
```
````

Start your style guide:

- Run `npx styleguidist server` to start a style guide dev server.
- Run `npx styleguidist build` to build a production HTML version.

[Documentation](https://react-styleguidist.js.org/docs/documenting)


Идея для реализации проекта:
-----------------

```
##  При условии, что svg статичны и могут менять свое расположение только при помощи панели инструментов.

Предположим, что в объекте с данными о svg будет boolean поле, что означает есть у него связь или нет. Если есть, то
также будет и поле left/right/top/bottom (а может и всегда будет, но в случае с false значение будет null). Это поле
означает место, откуда будет выходить связь (в форме "гибкой" полосочки, предположительно кривая безье), соответственно
у принимающей svg тоже будет такое поле. А так как svg будут храниться в дивах, можно будет если это топ или боттом,
обращаться к свойству height и делить его на 2, таким образом получая место отправления для связи. Та же логика и с
шириной, и с пунктом назначения
````


## Homemade Editor
-----------------
```
Данный пример является теоритическим и описывает лишь идею построения,взаимодействия.
````


```
<div className='editor__block'>
    <ul className='coordinates__list'>
        <li className='coordinates__list-top'></li>
        <li className='coordinates__list-right'></li>
        <li className='coordinates__list-bottom'></li>
        <li className='coordinates__list-left'></li>
    </ul>
    <svg>  // *при наличии, иначе null
    <p> Text </p>
</div>
````

Родитель элементов диаграммы('editor__block') является flex.

svg: имеет 100% размеры своего родителя, занимает всю площадь.
Элемент диаграммы будет отображаться ровно так, как выглядит svg. 
Этим мы добиваемся масштабирования. Через панель инструментов будет устанавливаться высота и длина элемента диаграммы, соответственно svg просто унаследует эти значения у родителя. 

coordinates__list:
Содержит точки входа и выхода. Исходя из координат данных точек будут визуализироваться связи. 
