# react-nested-select

![alt text](https://ucarecdn.com/d0e62320-bbde-4d99-b055-e698fbb37da7/Screenshot_2.png)

# Description

A react select list which has search input and nested options to make selection more light and user-friendly

I wondered if I could make a nested select using html, css and javascript and there was not any repo or packages relevant to my will. So I decided to make this react component and now It's first version is available to download on https://www.npmjs.com/package/nested-select;

This component is so easy to use.

# Repo

https://github.com/Delgerskhn/react-nested-select

# Installation:

<strong>npm i nested-select </strong>

# Simple startup guide:

![alt_text](https://ucarecdn.com/70acd2f7-f31e-4425-856c-49b0f8138102/Screenshot_3.png)

![alt_text](https://ucarecdn.com/752b0538-d4fd-475e-b98f-30aa835c8e7e/Screenshot_5.png)

# Props

1.  (string)defaultText: A default text which is says click here to choose your category
2.  (int) width: Specifies the width of nested-select
3.  (array) options /if you pass a promise it will asynchronously await the array result/: the nested options
4.  (function) onSelect: it should have a parameter <strong>selected</strong> to get the selected list
5.  (string)notFound: A text that appears when a search is not found
6.  (string)searchPlaceholder: A placeholder of search input in nested select

# Style handling

![alt_text](https://ucarecdn.com/7139d626-7cc7-4e90-bf42-7d1f7ad6855d/Screenshot_7.png)

This component has id of 'category-select' so you should make sure distinction of the id and easily handle the styles by overriding the css.

# Sample onSelect function(props)

![alt_text](https://ucarecdn.com/9e2c9b04-f6a0-49cd-a0cd-8f7112dedc5b/Screenshot_6.png)

# Sample options array

```json
[
  {
    "N": "List name",
    "P": 1, //"List PK"
    "H": [
      {
        "N": "List child 1",
        "P": "Child PK",
        "H": [
          //Grand childs
        ],
        "A": "Ancestors/..."
      }
    ],
    "A": "Ancestor1/Ancestor2/Ancestor3..." //All ancestor info of selected list
  },
  {
    "N": "List name",
    "P": 2, //"List PK"
    "H": [
      {
        "N": "List child 1",
        "P": "Child PK",
        "H": [
          //Grand childs
        ],
        "A": "Ancestor1/Ancestor2/Ancestor3..." //All ancestor info of selected list
      }
    ],
    "A": "Ancestors/..."
  }
]
```
