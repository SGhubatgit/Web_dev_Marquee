# JavaScript DOM Notes

A quick-reference guide to DOM (Document Object Model) concepts: node types, element selection, and element manipulation methods.

## Table of Contents

- [What is a Node in the DOM](#what-is-a-node-in-the-dom)
- [Node Relationships](#node-relationships)
- [Selecting HTML Elements](#selecting-html-elements)
- [Manipulating HTML Elements](#manipulating-html-elements)
- [Attribute Methods](#attribute-methods)

---

## What is a Node in the DOM

The DOM represents an HTML document as a tree of **nodes**. The two most common node types are:

- **Element** — represents an HTML tag (e.g. `<div>`, `<p>`)
- **TextNode** — represents the text content inside an element

## Node Relationships

Nodes are connected to each other in a parent/child/sibling structure.

```html
<div>                    <!-- Parent Element -->
  <p>Javascript</p>      <!-- First Child Node -->
  <p>Javascript</p>      <!-- Next Sibling of first child -->
  <p>Javascript</p>      <!-- Next Sibling of second child -->
  <p>Javascript</p>      <!-- Last Child Node -->
</div>
```

Example: `<body>` is a **child node** of `<html>`.

---

## Selecting HTML Elements

| Method | Returns | Notes |
|---|---|---|
| `getElementById()` | A single element object, or `null` | If multiple elements share an `id`, only the first match is returned |
| `getElementsByClassName()` | Array-like `HTMLCollection` | Returns an empty `HTMLCollection` if no match |
| `querySelector()` | The **first** matching element | Supports class, id, and complex CSS selectors |
| `querySelectorAll()` | **All** matching elements | Supports class, id, and complex CSS selectors |

```js
document.getElementById('container');

let someParas = document.getElementsByClassName('paras');
```

> 💡 You can also select elements scoped to a particular parent element.

---

## Manipulating HTML Elements

| # | Method | Purpose |
|---|---|---|
| 1 | `createElement()` | Creates a new element node from a tag name |
| 2 | `appendChild()` | Appends a node to the end of a parent's children |
| 3 | `textContent` | Gets/sets text content, including hidden text |
| 4 | `innerHTML` | Gets/sets HTML content |
| 5 | `after()` | Inserts nodes after an element |
| 6 | `append()` | Appends child node(s) at the end of a parent |
| 7 | `prepend()` | Inserts child node(s) at the start of a parent |
| 8 | `insertAdjacentHTML()` | Inserts HTML at a specified position |
| 9 | `replaceChild()` | Replaces a child node with another |
| 10 | `cloneNode()` | Creates a copy of a node |
| 11 | `removeChild()` | Removes a child node from its parent |

### `createElement()` + `appendChild()`

Creates a new node and appends it to a parent element.

```js
let li = document.createElement('li');
li.innerHTML = 'New Content';
document.querySelector('ul').appendChild(li);
```

### `textContent`

Gets the text content of a node **and its descendants** — includes hidden text.

```js
console.log(document.querySelector('ul').textContent);
```

### `innerText`

Similar to `textContent`, but does **not** include hidden text.

### `after()`

Inserts one or more nodes immediately after the element.

```js
let h4 = document.createElement('h4');
h4.innerText = 'Heading 4';

let p = document.createElement('p');
p.innerText = 'Paragraph 4';

document.querySelector('ul').after(p, h4);
```

### `append()`

Appends a child element at the end of the parent.

```js
let listItem = document.createElement('li');
listItem.innerText = 'This is the append List Item';
document.querySelector('ul').append(listItem);
```

### `prepend()`

Adds a new element as the **first** child of the parent.

### `insertAdjacentHTML(position, text)`

Inserts HTML at one of four positions relative to the element:

- `beforebegin`
- `afterbegin`
- `beforeend`
- `afterend`

```js
document
  .querySelector('ul')
  .insertAdjacentHTML(
    'afterend',
    '<li>This is the append List Item</li>'
  );
```

### `cloneNode()`

Creates a copy of a node — useful for duplicating elements, text nodes, etc.

> By default, only the element itself is cloned — not its children.

```js
parentNode.cloneNode();      // shallow clone (no children)
parentNode.cloneNode(true);  // deep clone (with children)
```

### `removeChild()`

Removes a specified child from its parent element.

```js
parentNode.removeChild(parentNode.firstElementChild);
parentNode.removeChild(parentNode.lastElementChild);
```

---

## Attribute Methods

| Method | Returns | Notes |
|---|---|---|
| `getElementsByTagName()` | `HTMLCollection` of matching elements | Returns an empty `HTMLCollection` if no match |

---

*Notes compiled from personal DOM study notes.*